import { Component, OnInit } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import{ NodeServiceService} from '../../node-service.service';
import {FileUploadModule} from 'primeng/fileupload';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  msgs: Message[];
    
  files1: TreeNode[];  
  files2: TreeNode[]; 
  files3: TreeNode[];  
  files4: TreeNode[];  
  files5: TreeNode[];  
  files6: TreeNode[];          
  lazyFiles: TreeNode[];
  selectedFile: TreeNode;
  selectedFile2: TreeNode;
  selectedFiles: TreeNode[];
  selectedFiles2: TreeNode[];
  items: MenuItem[];
  constructor(private nodeService: NodeServiceService) { }
  ngOnInit() {
     this.nodeService.getFilesystem();
      this.nodeService.getFilesystem();
      this.nodeService.getFilesystem();
      this.nodeService.getFilesystem();
      this.nodeService.getFilesystem();
      this.nodeService.getFilesystem();
    
      
      this.items = [
          {label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)},
          {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)}
      ];
  }
  
  nodeSelect(event) {
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
  }
  
  nodeUnselect(event) {
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
  }
  
  nodeExpand(event) {
      if(event.node) {
          //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
         this.nodeService.getFilesystem();
      }
  }
  viewNode(node: TreeNode) {
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Node Selected', detail: node.data.name});
  }
  deleteNode(node: TreeNode) {
      node.parent.children = node.parent.children.filter( n => n.data !== node.data);
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
  }
}

interface Message {
  severity : string ;
  summary : string ;
  detail: string;
}