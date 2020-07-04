import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  appOptions: any;

  constructor(private http: HttpClient) { }


  upload(file: any)
  {
    const input = new FormData();
    input.append("filesData", file);
    this.http.post(`${environment.API_URL}/api/Image/Upload`, input).subscribe(res =>
      {
        console.log(res);
      },
      error =>
      {
        console.log(error);
      });
  }




  postBlog(blogData: FormData): Observable<any> {
    const postBlogSubject = new Subject();
    this.appOptions.subscribe(
      (options) => {
        const url = `${environment.API_URL}/api/Image/Upload`;
        this.http
          .post(url, blogData)
          .subscribe(
            (blog) => {
              postBlogSubject.next(blog);
            }
          );
      }
    );
    return postBlogSubject.asObservable();
  }
}
