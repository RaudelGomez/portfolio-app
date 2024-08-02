import { Component} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ContactData } from '../../interfaces/contact-data';
import { CommonModule } from '@angular/common';
import { ErrorState } from '../../interfaces/error-state';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
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
    name: "name",
    email: "rau@gmail.com",
    message: "true true true true"
  }

  isTermsAccepted = false;

  firstTimeIcon ={
    name: false,
    email: false,
    message: false
  } 

  firstTimeMessage ={
    name: false,
    email: false,
    message: false
  }
  

  timePopUp:boolean = true;

  onSubmit(contactForm: NgForm){
    if(contactForm.valid && this.isTermsAccepted && contactForm.submitted){
      console.log(this.contactData);
      this.timePopUp = false;
      setTimeout(() => {
        this.timePopUp = true;
      }, 4000);
    this.resetValueInput();
    }
  }

  resetValueInput(){
    this.contactData.name = "";
    this.contactData.email = "";
    this.contactData.message = ""; 
    this.firstTimeIcon.name = false;
    this.firstTimeIcon.email = false;
    this.firstTimeIcon.message = false;
    this.firstTimeMessage.name = false;
    this.firstTimeMessage.email = false;
    this.firstTimeMessage.message = false;
  }

  onCheckboxChange(event: Event): void {
    this.isTermsAccepted = (event.target as HTMLInputElement).checked;
  }

  fieldClick(field: NgModel, fieldName: keyof typeof this.errorState, fieldInput: keyof typeof this.showInputStyle, fieldMessage: keyof typeof this.firstTimeMessage, firstTimeMessage:boolean){
    this.firstTimeMessage[fieldMessage] = true;
    if(firstTimeMessage){
      if(!field.value){
        this.errorState[fieldName] = true;
      }else{
        this.errorState[fieldName] = false;
       
      }
    }
    this.showInputStyle[fieldInput] = this.contactData[fieldInput];
    this.firstTimeIcon[fieldInput] = true;
  }

  updateColor(field: keyof typeof this.showInputStyle){
    this.showInputStyle[field] = this.contactData[field];
  }
  
}


