import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {BookingServiceService} from '../../../services/booking-service.service';
import {Booking} from '../../../models/booking.model';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {

  formBooking: FormGroup;

  constructor(private routerService: Router, private bookingService: BookingServiceService, formBuilder: FormBuilder) {
    this.formBooking = formBuilder.group({
      'client': ['', [Validators.required, Validators.minLength(0), Validators.maxLength(50)]],
      'phone': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'persons': ['', [Validators.required, Validators.min(1), Validators.max(50)]],
      'notes': ['', [Validators.required, Validators.maxLength(240)]],
      'date': ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.formBooking.valid) {
      let bookingForm = this.formBooking.value;

      let booking: Booking = new Booking(
        Math.random() * 1000,
        bookingForm.client,
        bookingForm.phone,
        bookingForm.email,
        bookingForm.persons,
        bookingForm.notes,
        bookingForm.date,
        new Date(),
        0

      )

      this.bookingService.addBooking(booking)
      console.log(booking)
      this.routerService.navigate(['/bookings'])
    }


  }

}
