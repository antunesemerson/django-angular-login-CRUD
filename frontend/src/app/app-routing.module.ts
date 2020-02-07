import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.service';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'index', component: IndexComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
      { path: 'users/user-edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
      { path: 'users/user-delete/:id', component: UserDeleteComponent, canActivate: [AuthGuard] },
      { path: 'users/user-new', component: UserNewComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
