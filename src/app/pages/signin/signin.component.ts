import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  username: any = '';
  password: any = '';
  email: any = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('/apps/navigation');
  }
}
