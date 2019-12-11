import { Component, OnInit } from '@angular/core';
import { ApiService } from '../users/api.service';
import { UsersItem } from '../users/users-item.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user: UsersItem[];
  user_id;
  logedID = '';
  error;

  constructor(
    private api: ApiService,
    private router: Router,
    private rout: ActivatedRoute,
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
}
