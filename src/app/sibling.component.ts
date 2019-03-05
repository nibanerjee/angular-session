import { Component,OnInit } from '@angular/core';
import { DataService } from "./data.service";
@Component({
  selector: 'sibling-component',
  template: `<div>
        <h1>Welcome to sibling component</h1>
        <h1>{{serviceMessage}}</h1>
  </div>`
})
export class SiblingComponent implements OnInit{
    serviceMessage = '';
    constructor(private data : DataService){}
    ngOnInit(){
        this.data.getMessage().subscribe(message => { this.serviceMessage = message; });
    }
}