import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Booking} from '../../models/booking.model';
import {CommonModule} from '@angular/common';
import {BookingServiceService} from '../../services/booking-service.service';
import {BookingResumeComponent} from '../../components/booking/booking-resume/booking-resume.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [
    HeaderComponent, FooterComponent, CommonModule, BookingResumeComponent
  ],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})

export class BookingsComponent implements OnInit, OnChanges{

  bookings: Booking[] = [];

  constructor(private bookingService: BookingServiceService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookings'].currentValue) {
      this.bookings = this.bookingService.getBookings();
    }
  }

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }
}
