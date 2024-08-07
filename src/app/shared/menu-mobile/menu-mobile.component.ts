import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavService } from '../nav/nav.service';
import { TranslationService } from '../nav/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  constructor(public navService:NavService, public translate: TranslationService){}
}
