import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'apm-manage-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  addForm: FormGroup;
  formErrors = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    public dialogRef: MatDialogRef<NewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  createForm() {
    this.addForm = this.fb.group({
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
  }

  onSubmit() {
    console.log(this.addForm.value);
  }
}
