import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Advertising } from './advertising';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  advertise: Array<Advertising> = new Array<Advertising>();
  constructor(private db: AngularFireDatabase) {
    db.list<Advertising>('advertise').valueChanges().subscribe(t => {
      this.advertise = t;
    })
  }

  add(t: Advertising) {
    this.db.list<Advertising>('advertise').push(t);
  }

  isLoggedIn(): boolean {
    const email = localStorage.getItem('ownerEmail');
    const fullname = localStorage.getItem('ownerName');
    return email != null && fullname != null;
  }

  logout() {
    localStorage.clear();
  }

  getEmail(): string | null {
    return localStorage.getItem('ownerEmail');
  }

  getFullName(): string | null {
    return localStorage.getItem('ownerName');
  }

  average(): number {

    let sum : number = 0;
    this.advertise.forEach(c =>{
      sum += c.adPrice as number;
    });
    return sum / this.advertise.length
  }
}
