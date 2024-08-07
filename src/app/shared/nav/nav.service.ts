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
    // if(!this.icon){
    //   this.icon = true;
    //   console.log(this.icon);
    // }
  }

  toggleIcon(){
    this.icon = !this.icon;
  }


}
