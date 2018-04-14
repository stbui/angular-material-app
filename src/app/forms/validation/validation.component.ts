import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  hide = true;

  registerFrom: FormGroup;
  formErrors = {
    username: '',
    email: '',
    password: ''
  };
  validationMessages = {
    username: {
      required: '',
      minlength: '请输入大于4个字符',
      maxlength: '请输入小于32个字符'
    },
    email: {
      required: '',
      email: '请输入正确的邮箱'
    },
    password: {
      required: '',
      pattern: '密码中必须包含数字和字母',
      minlength: '请输入大于4个字符',
      maxlength: '请输入小于25个字符'
    }
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.registerFrom = this.fb.group({
      username: ['', [Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(16)
        ]
      ],
      password_confirm: '',
      phone: '',
      agree: ''
    });

    this.registerFrom.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  rebuildForm() {
    this.registerFrom.reset({
      username: 'stbui'
    });
  }

  onSubmit() {
    console.log(this.registerFrom.value);
  }

  onValueChanged(data?: any) {
    if (!this.registerFrom) {
      return;
    }
    const form = this.registerFrom;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
