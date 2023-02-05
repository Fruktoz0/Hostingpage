import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth
  ) { }


  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user?.email != null && result.user?.displayName != null) {
          localStorage.setItem('ownerEmail', result.user?.email);
          localStorage.setItem('ownerName', result.user?.displayName);
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }
}
