import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  constructor(public navService:NavService){
    console.log(navService.menu);
  }
}
