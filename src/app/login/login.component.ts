import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../advertising.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public service: AdvertisingService) { }

  ngOnInit(): void {
  }

}
