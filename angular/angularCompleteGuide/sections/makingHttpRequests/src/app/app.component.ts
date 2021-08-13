import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(
    private http: HttpClient,
    private servicePost: PostsService
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.servicePost.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post): void {
    this.servicePost.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts(): void {
    this.isFetching = true;
    this.servicePost.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts(): void {
    // Send Http request
  }


}
