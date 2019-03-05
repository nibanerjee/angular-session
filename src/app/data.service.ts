import {Injectable} from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
@Injectable()
export class DataService {
  private _message:any = new BehaviorSubject<any>('This is the default message from service');

  setMessage(message:any) {
    this._message.next(message);
  }

  getMessage():Observable<any> {
    return this._message.asObservable();
  }
}