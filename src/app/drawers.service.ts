import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrawersService {
  constructor() { }

  private DrawerSubject = new Subject<any>();
  DrawerSubject$ = this.DrawerSubject.asObservable();
  openDrawer() {
    this.DrawerSubject.next();
  }
}
