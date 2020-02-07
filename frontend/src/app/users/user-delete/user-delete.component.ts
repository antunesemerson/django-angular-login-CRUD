import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(
    private rout: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private usersComponent: UsersComponent
  ) { }

  selected_user = {id: 0, first_name: '', last_name: ''};
  selected_id;

  ngOnInit() {
    this.rout.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id) {
    this.api.getUser(id).subscribe(
      data => {
        this.selected_user = data;
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  delete() {
    this.api.deleteUser(this.selected_id).subscribe(
      data => {
        this.router.navigate(['users']);
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  cancelClicked = () => {
    this.router.navigate(['users']);
  }
}
