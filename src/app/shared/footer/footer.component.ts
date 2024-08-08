import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../nav/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private translate:TranslationService){}
}
