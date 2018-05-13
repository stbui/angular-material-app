import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  actionFrom: FormGroup;
  formErrors = {
    title: '',
    url: '',
    description: '',
    image_url: ''
  };
  validationMessages = {
    title: {
      required: ''
    },
    url: {
      required: '',
      url: '请输入正确的链接'
    },
    description: {
      required: ''
    },
    image_url: {
      required: ''
    }
  };

  constructor(
    @Inject('NavigationService') private service,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.actionFrom = this.fb.group({
      // id: this.data.id,
      title: [this.data.title, [Validators.maxLength(32)]],
      url: this.data.link,
      description: this.data.description,
      image_url: this.data.image_link || 'assets/logo.png'
    });

    this.actionFrom.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit() {
    console.log(this.actionFrom.value);
    this.service.update(this.data.id, this.actionFrom.value);
  }

  onValueChanged(data?: any) {
    if (!this.actionFrom) {
      return;
    }
    const form = this.actionFrom;
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
