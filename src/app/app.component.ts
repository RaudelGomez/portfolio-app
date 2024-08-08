import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { NavService } from './shared/nav/nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';

  constructor(private navService: NavService){}

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
