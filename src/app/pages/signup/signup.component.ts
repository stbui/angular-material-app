import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { ValidatePasswordConfirm } from './password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  formErrors = {
    email: '',
    password: '',
    passwordConfirm: '',
    signUpFailure: ''
  };
  validationMessages = {
    email: {
      required: '请输入您的邮箱',
      email: '请输入正确的邮箱'
    },
    password: {
      required: '请输入您的密码',
      pattern: '密码中必须包含数字和字母',
      minlength: '请输入大于4个字符',
      maxlength: '请输入小于25个字符'
    },
    passwordConfirm: {
      required: '请重复输入您的密码',
      passwordConfirm: '密码输入不一致'
    }
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ],
      passwordConfirm: null
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;

    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];

          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += `${
                (messages as { [key: string]: string })[key]
              } `;
            }
          }
        }
      }
    }
  }

  signUpWithEmail() {
    const message = {
      'auth/user-not-found': '该用户没有注册！',
      'auth/invalid-email': '请输入正确的邮箱',
      'auth/email-already-in-use': '该用户已注册！'
    };

    const email = this.userForm.value['email'];
    const password = this.userForm.value['password'];

    this.auth
      .emailSignUp(email, password)
      .then(() => this.afterSignIn())
      .catch(error => {
        console.log(error);
        this.formErrors.signUpFailure = message[error.code];
      });
  }

  signInWithGoogle() {
    this.auth.googleLogin().then(() => this.afterSignIn());
  }

  signInWithGithub() {
    this.auth.githubLogin().then(() => this.afterSignIn());
  }

  signInAnonymously() {
    this.auth.anonymousLogin().then(() => this.afterSignIn());
  }

  register() {
    this.signUpWithEmail();
  }

  private afterSignIn() {
    this.router.navigate(['/']);
  }
}
