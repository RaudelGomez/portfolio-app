import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLanguage: string = "en";
  languageChange: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentLanguage);

  constructor(private translate:TranslateService) { 
    translate.setDefaultLang(this.currentLanguage);
  }

  public switchLanguage(language: string): void{
    this.translate.use(language);
    this.currentLanguage = language;
  }

  
}
