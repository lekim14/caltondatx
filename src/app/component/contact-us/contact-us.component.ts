import { Component, OnInit, signal } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ContactUsService } from '../../services/customer/contact-us.service';

@Component({
  selector: 'app-contact-us',
  imports: [AnimateOnScrollModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  fullName = signal<string>("");
  email = signal<string>("");
  contactNumber = signal<string>("");
  message = signal<string>("");

  constructor(private contactApi: ContactUsService){}
  
  validateEmail(input: string){
    return input.includes('@');
  }

  onInput(type: string, event: Event){
    const input = event.target as HTMLInputElement;
    switch (type) {
      case 'fullName':
        this.fullName.set(input.value)
        break;
      case 'email':
        this.email.set(input.value)
        break;
      case 'contactNumber':
        this.contactNumber.set(input.value)
        break;
      case 'message':
        this.message.set(input.value)
        break;
      default:
        break;
    }
  }

  validateInput(el: HTMLElement){

  }

  submit(event : Event){
    event.preventDefault();
    const payload = {
      fullName : this.fullName(),
      email : this.email(),
      contactNumber : this.contactNumber(),
      message : this.message(),
    }

    // if(!this.validateEmail(this.email())){
    //   alert('Invalid email address.')
    //   return
    // }

    // if(!this.contactNumber()){
    //   alert('Contact number is required.')
    //   return
    // }
    
    this.contactApi.makePost(payload).subscribe({
      next: (response) => console.log('Success:', response),
      error: (error) => console.error('Error:', error),
    })

    // alert('Submitted');
  }

}
