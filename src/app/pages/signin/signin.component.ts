import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  formErrors = {
    email: '',
    password: '',
    loginFailure: ''
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
      email: ['admin@stbui.com', [Validators.required, Validators.email]],
      password: [
        'abc123',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
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
      if (
        Object.prototype.hasOwnProperty.call(this.formErrors, field) &&
        (field === 'email' || field === 'password')
      ) {
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

  async signInWithGoogle() {
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  async signInWithGithub() {
    await this.auth.githubLogin();
    return await this.afterSignIn();
  }

  async signInWithFacebook() {
    await this.auth.facebookLogin();
    await this.afterSignIn();
  }

  async signInWithTwitter() {
    await this.auth.twitterLogin();
    return await this.afterSignIn();
  }

  async signInAnonymously() {
    await this.auth.anonymousLogin();
    return await this.afterSignIn();
  }

  signInWithEmail() {
    const message = {
      'auth/user-not-found': '该用户没有注册！',
      'auth/invalid-email': '请输入正确的邮箱'
    };

    const email = this.userForm.value['email'];
    const password = this.userForm.value['password'];

    this.auth
      .emailLogin(email, password)
      .then(() => this.afterSignIn())
      .catch(error => {
        console.log('邮箱登录出错：', error);
        this.formErrors.loginFailure = message[error.code];
      });
  }

  login() {
    if (this.userForm.invalid) {
      return;
    }

    this.signInWithEmail();
  }

  private afterSignIn() {
    this.router.navigate(['/']);
  }
}
