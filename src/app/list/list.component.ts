import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../advertising.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public service: AdvertisingService) { }

  ngOnInit(): void {
  }

  popalert(data: any){
    alert(data);
  }

}
