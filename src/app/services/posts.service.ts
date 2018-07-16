import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {
  private _getPostsUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get(this._getPostsUrl).map(this._extractPostsData);
  }

  addPost(title: string, body:string){
    this._http.post(this._getPostsUrl,{
      'title' : title,
      'body' : body
    });
  }

  private _extractPostsData(response){
    let body = response.json();
    return body || {};
  }
}
