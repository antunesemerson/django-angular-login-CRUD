import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UsersComponent } from '../users.component';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(
    private rout: ActivatedRoute,
    private api: ApiService,
    private apiauth: AuthService,
    private router: Router,
    private usersComponent: UsersComponent,
    private formBuilder: FormBuilder,
  ) { }
  registerForm: FormGroup;
  submitted = false;
  error;
  username: '';
  email: '';
  first_name: '';
  last_name: '';
  password1: '';
  password2: '';
  aux: string;
  mensagem: string;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', Validators.required],
    });
  }

  save() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      return;
    }
    this.apiauth.signup(this.username, this.email, this.password1, this.password2).subscribe(
      data => {
        this.router.navigate(['users']);
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  get f() { return this.registerForm.controls; }

  cancelClicked = () => {
    this.submitted = false;
    this.registerForm.reset();
    this.router.navigate(['users']);
  }

}
