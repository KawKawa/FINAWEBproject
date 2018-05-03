import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  msgs: Message[];
    
  uploadedFiles: any[] = [];

  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
  
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
interface Message {
  severity : string ;
  summary : string ;
  detail: string;
}