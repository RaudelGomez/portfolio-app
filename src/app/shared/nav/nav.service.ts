import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  menu:boolean = true;
  icon:boolean = true;

  constructor() { }

  toggleMenu() {
    this.menu = !this.menu;
  }

  toggleIcon(){
    this.icon = !this.icon;
  }


}
