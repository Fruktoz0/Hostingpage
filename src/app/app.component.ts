import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from './advertising.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService, public service: AdvertisingService) { }

  ngOnInit(): void {
  }
  title = 'hostingesteszteles';
}

