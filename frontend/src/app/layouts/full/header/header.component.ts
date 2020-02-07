import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { ApiService } from '../../../users/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {
  user = {id: 0, first_name: '', last_name: ''};
  user_id;
  logedID = '';
  error;

  constructor(
    private api: ApiService,
    private router: Router,
    private rout: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.logedID = localStorage.getItem('payload');

    this.rout.paramMap.subscribe((param: ParamMap) => {
      let id = this.logedID;
      this.user_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id) {
    this.api.getUser(id).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
