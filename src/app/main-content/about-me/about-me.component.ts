import { Component } from '@angular/core';
import { TranslationService } from '../../shared/nav/translation.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private translate:TranslationService){}
  
  
}
