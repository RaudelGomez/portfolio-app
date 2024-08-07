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

  activeLink($event: Event){
    const element = $event.target as HTMLElement;
    let parentElement = element.parentElement;
    let aElements: NodeListOf<HTMLAnchorElement> = parentElement!.querySelectorAll('a');
    const aElementsArray = Array.from(aElements);
    for (const a of aElementsArray) {
      a.classList.remove('active');
    }
    element.classList.add('active');
  }

  activelanguage($event: Event){
    const element = $event.target as HTMLElement;
    let parentElement = element.parentElement;
    let aElements: NodeListOf<HTMLAnchorElement> = parentElement!.querySelectorAll('a');
    const pElementsArray = Array.from(aElements);
    for (const a of pElementsArray) {
      a.classList.remove('activeLanguage');
    }
    element.classList.add('activeLanguage');
  }


}
