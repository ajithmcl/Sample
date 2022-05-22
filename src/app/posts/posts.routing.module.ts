import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'add-post', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
