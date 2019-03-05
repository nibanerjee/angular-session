import { Component, ViewChild, AfterViewInit,OnInit,Output,EventEmitter } from '@angular/core';

import { ChildComponent } from "./child.component";
import { DataService } from "./data.service";

@Component({
  selector: 'nilanjan-component',
  template: `<div>
                <h1>Welcome to {{name}} component</h1>
                <h1>{{childMessage}}</h1>
                <h1>{{serviceMessage}}</h1>
                <child-component [childMessage]="parentMessage" 
                (messageEvent)="receiveMessage($event)"
                [anotherEvent]="newEventFromParent"
                >
                </child-component>
                <button routerLink="/sibling">go to sibling</button>
            </div>`
})
export class NilanjanAppComponent implements AfterViewInit,OnInit {
   name = 'Nilanjan';
   parentMessage = 'This is an updated message from parent component to child component';
   childMessage = '';
   serviceMessage = '';
   @ViewChild(ChildComponent) child;
   constructor(private data: DataService) {}
   ngOnInit(){
       console.log('ngOnInit called');
       this.data.getMessage().subscribe(message => {this.serviceMessage = message;});
   }
   ngAfterViewInit(){
    setTimeout(() => {
        this.childMessage = this.child.message;
        console.log('ngAfterViewInit called',this.childMessage);
    });
   }
   receiveMessage($event){
    this.childMessage = $event;
    this.parentMessage = 'This is parent after being updated by child';
   }
   newEventFromParent(){
        console.log("this is executed from parent",this);
   }
}