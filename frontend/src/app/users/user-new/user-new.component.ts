import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(
    private rout: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private usersComponent: UsersComponent,
  ) { }

  user = {username: '', first_name: '', last_name: '', email: '', password: '', is_active: true};
  
  ngOnInit() {
    
  }

  save() {
    this.api.saveNewUser(this.user).subscribe(
      data => {
        this.router.navigate(['users']);
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  cancelClicked = (user) => {
    this.router.navigate(['users']);
  }
}
