import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ]
})
export class PostsModule { }
