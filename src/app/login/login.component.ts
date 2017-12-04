import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 's-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form: NgForm;
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  submit() {
    this.error = '';
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => console.log('good'))
      .catch(error => this.error = error.message);
  }

  ngOnInit() {
  }

}
