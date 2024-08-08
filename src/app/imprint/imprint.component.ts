import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/nav/translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private translate:TranslationService){}
}
