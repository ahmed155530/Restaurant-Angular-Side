import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileService } from 'src/app/Services/File.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Imagee',
  templateUrl: './Imagee.component.html',
  styleUrls: ['./Imagee.component.css']
})
export class ImageeComponent implements OnInit {
  selectedFile: File  = null;
  newBlogForm: FormGroup = null;
  constructor(private formBuilder: FormBuilder, private blogService :FileService , private http : HttpClient) { }

  ngOnInit() {
    this.newBlogForm = new FormGroup({
      Name: new FormControl(null),
      TileImage: new FormControl(null)
    });
  }

  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
  }


  onSubmit(data : any) {

    //for multiple images
    // const formData = new FormData();
    // let filesToUpload: File[] = files;
    // const formData = new FormData();

    // Array.from(filesToUpload).map((file, index) => {
    //   return formData.append('file' + index, file, file.name);
    // });
    const formData = new FormData();
    formData.append('Name', data.Name);
    formData.append('TileImage', this.selectedFile);
    this.http.post(`${environment.API_URL}/api/Image/Upload`, formData)
      .subscribe(res =>
      {
        console.log(res)
      },
      error =>
      {
        console.log(error);
      });
  }

}
