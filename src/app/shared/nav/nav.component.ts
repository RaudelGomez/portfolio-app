import { Component } from '@angular/core';
import { NavService } from './nav.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(public navService:NavService){}

}
