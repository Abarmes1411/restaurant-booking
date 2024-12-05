import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from '../../components/footer/footer.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProfileComponent} from '../../components/dashboard/profile/profile.component';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent, FooterComponent, RouterOutlet, RouterLink, ProfileComponent, AppComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
