import { Component,Input,Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from "./data.service";
@Component({
  selector: 'child-component',
  template: `<div>
    <h3>{{childMessage}}</h3>
    <button (click)="sendMessage()">Send Message To Parent</button>
    <button (click)="updateService()">Update Service Message</button>
  </div>`
})
export class ChildComponent implements OnChanges{
    @Input() childMessage;
    @Input() anotherEvent;
    message = "This is message from child component accessible to parent component";
    @Output() messageEvent = new EventEmitter<String>();
    constructor(private data : DataService){}
    ngAfterViewInit(){
        console.log('ngAfterViewInit called');
        setTimeout(() => {
            this.message = "This is updated message from child component accessible to parent component"
        },300);
    }
    ngOnChanges(changes: SimpleChanges){
        console.log("input property got changed",changes);
        this.anotherEvent();
    }
    sendMessage(){
        this.message = 'This is the updated child message';
        this.messageEvent.emit(this.message)
    }
    updateService(){
        this.data.setMessage('This is updated service message');
    }
    

}
