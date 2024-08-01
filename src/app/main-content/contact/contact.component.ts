import { Component} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ContactData } from '../../interfaces/contact-data';
import { CommonModule } from '@angular/common';
import { ErrorState } from '../../interfaces/error-state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData: ContactData = {
    name: "",
    email: "",
    message: ""
  }

  errorState: ErrorState = {
    name: false,
    email: false,
    message: false
  };


  showInputStyle = {
    name: "true",
    email: "rau@gmail.com",
    message: "true true true true"
  }

  isTextShowed:boolean = true;

  onSubmit(contactForm: NgForm){
    if(contactForm.valid && contactForm.submitted){
      console.log(this.contactData);
    }
  }

  fieldClick(field: NgModel, fieldName: keyof typeof this.errorState, fieldInput: keyof typeof this.showInputStyle){
    if(!field.value){
      this.errorState[fieldName] = true;
    }else{
      this.errorState[fieldName] = false;
     
    }
    this.showInputStyle[fieldInput] = this.contactData[fieldInput];
  }

  updateColor(field: keyof typeof this.showInputStyle){
    this.showInputStyle[field] = this.contactData[field];
  }
  
}


