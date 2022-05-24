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
  columnList: any[] = [];
  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(res => {
      this.postsList = res;
       let columns = Object.keys(res[0]);
       for(let i=0; i < columns.length; i++){
         this.columnList.push({ columnName: columns[i], action: '' })
       };
       if(this.columnList.length){
        this.columnList.push({ columnName: "Delete", action: 'delete', type: 'button' });
        this.columnList.push({ columnName: "Update", action: 'update', type: 'button' });
       }
    })

   }

  ngOnInit(): void {
  }

  buttonAction(event) {
    if(event.action == "delete"){
      this.postsService.deletePost(event.id).subscribe(res => {
        this.postsService.getPosts().subscribe(res => {
          this.postsList = res;
        })
      });
    }
  }

}
