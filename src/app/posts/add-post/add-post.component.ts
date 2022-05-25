import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postData: any;
  postForm: FormGroup;

  constructor(private router: Router, private postsService: PostsService) {
    this.postData = this.router.getCurrentNavigation().extras.state?.data;
    this.postForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      id: new FormControl(''),
      userId: new FormControl('')
    });
    this.postForm.patchValue({...this.postData})
   }

  ngOnInit(): void {
  }

  submitPost() {
    this.postsService.updatePost(this.postData.id, {...this.postForm.value, status: "UPDATED"}).subscribe(res => {
      this.postsService.getPosts().subscribe(res => {
        this.router.navigate(['/posts']);
      })
    })
    
  }

}
