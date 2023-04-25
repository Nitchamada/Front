import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  goToDashboard() {
    this.router.navigate(['dashboard/main']);
  }
  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   cin: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
    //   password: ['', Validators.required]
    // });
  }

  onSubmit() {
    // Handle login here
  }

}
