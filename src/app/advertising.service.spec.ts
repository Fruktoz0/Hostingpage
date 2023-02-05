import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

import { AdvertisingService } from './advertising.service';
import { Advertising } from './advertising';

describe('AdvertisingService', () => {
  let service: AdvertisingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });
    service = TestBed.inject(AdvertisingService);
  });

    it('service is compiled', () => {
    expect(service).toBeTruthy();
  });

  it('average test', () =>{
    let a = new Advertising();
    a.adCity = "Kazincbarcika";
    a.adArea = 30;
    a.adPrice = 20;
    a.ownerName = "elizabath";
    a.ownerEmail = "elizabath@gmail.com";

    let b = new Advertising();
    b.adCity = "Kazincbarcika";
    b.adArea = 30;
    b.adPrice = 10;
    b.ownerName = "elizabath";
    b.ownerEmail = "elizabath@gmail.com";

    service.advertise.push(a);
    service.advertise.push(b);

    let avgprice = service.average();
    expect(avgprice).toBe(15);

  });
 
});
