import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class AppRepository {

 constructor(private http: Http) { }

 public getMessages(): Observable<any> {
   return this.http.get('http://localhost:5880/messages')
           .map((response) => response.json());
 }
 public sendMessage(message: string): Observable<any> {

   return this.http.post('http://localhost:5880/messages', message)
           .map((response) => response);
 }
}