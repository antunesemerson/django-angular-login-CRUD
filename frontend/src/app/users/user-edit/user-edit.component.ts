import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private rout: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }

  selected_user = {id: 0, username: '', first_name: '', last_name: '', email: '', is_superuser: '', is_active: ''};
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

  update() {
    this.api.updateUser(this.selected_user).subscribe(
      data => {
        this.selected_user = data;
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
