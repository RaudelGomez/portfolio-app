import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { NavService } from './shared/nav/nav.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';

  constructor(private navService: NavService) {
    
  }

  ngOnInit() {
    AOS.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.closeMenu();
  }

  closeMenu() {
    if(this.navService.menu == false){
      this.navService.menu = true;
      this.navService.icon = true;
    }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

