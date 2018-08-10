import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  createCollectionSubject: Subject<string>;
  
  constructor() {
    this.createCollectionSubject = new Subject<string>();
   }

   getCreateCollectionObservable(): Observable<string> {
     return this.createCollectionSubject.asObservable();
   }

   createCollection(name: string): void {
    this.createCollectionSubject.next(name);
   }
}
