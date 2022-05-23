import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  postsList: any;
  columnsList: any[];
  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(res => {
      this.postsList = res;
      this.columnsList = Object.keys(res[0]);
    })

   }

  ngOnInit(): void {
  }

}
