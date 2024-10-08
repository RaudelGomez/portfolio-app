import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/nav/translation.service';
import { MenuMobileComponent } from '../shared/menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [FooterComponent, TranslateModule, MenuMobileComponent],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {
  constructor(private translate:TranslationService){}
}
