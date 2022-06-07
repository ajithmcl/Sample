import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  nextButton = {
    btnName: "Go to users",
    action: "navigate",
    url: "/users/users-list",
    className: "btn btn-primary"
  }
  postsList: any;
  columnList: any[] = [];
  constructor(private postsService: PostsService, private router: Router) {
    this.postsService.getPosts().subscribe(res => {
      this.postsList = res;
     this.postsList = this.postsList.map(post => {
        return { ...post, status: post.status || "NEW", age: +(Math.floor(100000 + Math.random() * 900000)) }
      })
       let columns = Object.keys(this.postsList[0]);
       for(let i=0; i < columns.length; i++){
         this.columnList.push({ columnName: columns[i], action: '' })
       };
       this.columnList.find(column => column.columnName == 'age').isSortable = true;
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
    } else if(event.action == "update") {
      delete event.action
      this.router.navigate(['/posts/add-post'], { state: { data: event } });
    }
  }

  sendPosts(event) {
    sessionStorage.setItem("posts", JSON.stringify({"list": this.postsList, columns: this.columnList}));
  }

}
