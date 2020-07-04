import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
//import 'rxjs/add/operator/map';
import { FileService } from 'src/app/Services/File.service';



@Component({
  selector: 'app-Image',
  templateUrl: './Image.component.html',
  styleUrls: ['./Image.component.css']
})
export class ImageComponent implements OnInit {
  public progress: number;
  public message: string;
  @ViewChild('fileInput') fileInput: any;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private fileService : FileService) { }

  ngOnInit() {
  }


  // public uploadFile = (files) => {
  //   if (files.length === 0) {
  //     return;
  //   }

  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);

  //   this.http.post('http://localhost:60139/api/upload', formData, { reportProgress: true, observe: 'events' })
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress)
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       else if (event.type === HttpEventType.Response) {
  //         this.message = 'Upload success.';
  //         this.onUploadFinished.emit(event.body);
  //       }
  //     });
  // }


  uploadPhoto()
  {
    console.log("Function from ts");
    let nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    this.fileService.upload(nativeElement.files);
  }

}
