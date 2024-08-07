import { Component } from '@angular/core';
import { TranslationService } from '../../shared/nav/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private translate:TranslationService){}
}
