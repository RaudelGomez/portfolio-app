import { DOCUMENT } from '@angular/common';
import { HostListener, Inject, Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  menu:boolean = true;
  icon:boolean = true;
  activeSection: string = '';
  private sectionIds: string[] = ['home', 'aboutMe', 'skills', 'portfolio', 'contact'];

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.onScroll();
  }

  onScroll() {
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100)) // Evita llamadas excesivas
      .subscribe(() => {
        this.detectSection();
      });
  }

  detectSection() {
    const scrollPosition = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop;
    
    let activeSectionFound = false;

    for (let id of this.sectionIds) {
      const element = this.document.getElementById(id);
      if (element) {
        console.log(element);
        element.classList.remove('active');
        const offsetTop = element.offsetTop - 130; 
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = id;
          activeSectionFound = true;
          break;
        }
      }
    }

    if (!activeSectionFound) {
      this.activeSection = '';
    }
    console.log(this.activeSection);
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  toggleIcon(){
    this.icon = !this.icon;
  }

  activeLink($event: Event){
    const element = $event.target as HTMLElement;
    const targetSection = element.getAttribute('href')?.substring(1);
    if (targetSection) {
      this.activeSection = targetSection;  
      setTimeout(() => this.detectSection(), 300);  
    }
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
