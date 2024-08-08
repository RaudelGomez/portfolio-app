import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLanguage: string = "en";
  placeholderName!: string;
  placeholderEmail!: string;
  placeholderMessage!: string;

  constructor(private translate:TranslateService) { 
    translate.setDefaultLang(this.currentLanguage);
    this.setPlaceholderName();
    this.setPlaceholderEmail();
    this.setPlaceholderMessage();
  }

  public switchLanguage(language: string): void{
    this.translate.use(language);
    this.currentLanguage = language;
    this.setPlaceholderName();
    this.setPlaceholderEmail();
    this.setPlaceholderMessage();
  }

  setPlaceholderName() {
    if (this.currentLanguage === 'en') {
      this.placeholderName = 'Your name';
    } else if (this.currentLanguage === 'de') {
      this.placeholderName = 'Ihr Name';
    } else {
      this.placeholderName = 'Tu nombre';  
    }
  }

  setPlaceholderEmail() {
    if (this.currentLanguage === 'en') {
      this.placeholderEmail = 'Your email';
    } else if (this.currentLanguage === 'de') {
      this.placeholderEmail = 'Ihre Email';
    } else {
      this.placeholderEmail = 'Tu correo';  
    }
  }

  setPlaceholderMessage() {
    if (this.currentLanguage === 'en') {
      this.placeholderMessage = 'Your message';
    } else if (this.currentLanguage === 'de') {
      this.placeholderMessage = 'Ihre Nachricht';
    } else {
      this.placeholderMessage = 'Tu mensaje';  
    }
  }
  
}
