import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  categorySubject = new BehaviorSubject<string>('All');
  categorySubjectObs = this.categorySubject.asObservable;
  
  constructor() { }

  notifyCategoryChange(category:string) {
    this.categorySubject.next(category);
  }
  
}
