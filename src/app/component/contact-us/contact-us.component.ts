import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ContactUsService } from '../../services/customer/contact-us.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentsModule } from '../../modules/components/components.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [AnimateOnScrollModule, ComponentsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent {

  // Current
  contactUs: FormGroup = new FormGroup({
    fullName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, Validators.required),
    contactNumber: new FormControl(null),
    message: new FormControl(null, Validators.required),
  })

  constructor(private contactApi: ContactUsService){}

  submit(event : Event){
    console.log(this.contactUs)
    event.preventDefault();
    
    this.contactApi.makePost(this.contactUs).subscribe({
      next: (response) => console.log('Success:', response),
      error: (error) => console.error('Error:', error),
    })

    // alert('Submitted');
  }

}