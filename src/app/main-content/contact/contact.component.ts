import { Component} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ContactData } from '../../interfaces/contact-data';
import { CommonModule } from '@angular/common';
import { ErrorState } from '../../interfaces/error-state';

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

  errorState: {[key: string]: boolean} = {
    name: false,
    email: false,
    message: false
  };

  isTextShowed:boolean = true;

  onSubmit(contactForm: NgForm){
    if(contactForm.valid && contactForm.submitted){
      console.log(this.contactData);
    }
  }

  fieldClick(field: NgModel, fieldName: keyof typeof this.errorState){
    if(!field.value){
      this.errorState[fieldName] = true;
    }else{
      this.errorState[fieldName] = false;
    }
  }
  
}


