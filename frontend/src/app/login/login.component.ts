import {FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  error: any;
  mensagem : string;
  username: string;
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['index']),
      error => {
        this.mensagem = 'Usuário ou senha inválidos'
        console.log(this.mensagem);
        this.submitted = true;
      }
    );
  }
}
