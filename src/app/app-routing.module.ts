import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: LoginComponent },
  // {path:'table',component:DataTableComponent, canActivate: [AuthGuard]},
  { path: 'edit-user', component: EditUserComponent },
  { path: 'data-binding', component: DataBindingComponent },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./posts/posts.routing.module').then(m => m.PostsRoutingModule)
  },
  { path: 'users', canActivate: [AuthGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
