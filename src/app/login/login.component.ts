import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 's-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form: NgForm;
  constructor() { }

  ngOnInit() {
  }

}
