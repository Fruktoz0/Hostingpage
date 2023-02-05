import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advertising } from '../advertising';
import { AdvertisingService } from '../advertising.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  actualAdvertising: Advertising = new Advertising();
  
  constructor(public service: AdvertisingService, public router: Router) {
    if (service.isLoggedIn() == false){
      router.navigate(['create']);
    }
    this.actualAdvertising.ownerEmail = service.getEmail() as string;
    this.actualAdvertising.ownerName = service.getFullName() as string;
   }

  ngOnInit(): void {
  }

}
