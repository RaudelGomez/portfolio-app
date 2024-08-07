import { Component } from '@angular/core';
import { NavService } from './nav.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './translation.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(public navService:NavService, public translate: TranslationService){}

}
