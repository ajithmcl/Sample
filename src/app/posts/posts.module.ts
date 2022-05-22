import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';



@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
