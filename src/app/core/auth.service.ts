import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  authState:any = null;

  get authenticated() {
    return this.authState !== null;
  }

  get currentUser() {
    return this.authenticated ? this.authState : null;
  }

  get currentUserObservable() {
    return this.afAuth.authState;
  }

  get currentUserId() {
    return this.authenticated ? this.authState.uid : '';
  }

  get currentUserName() {
    if (!this.authState) {
      return 'Stbui'
    } else {
      return this.authState['displayName'] || '佚名'
    }
  }

  constructor(private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  githubLogin() {
    const provide = new firebase.auth.GithubAuthProvider();
    return this.afAuth.auth.signInWithPopup(provide).then((credential)=> {
      this.authState = credential.user;
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then((credential)=> {
      console.log(credential.user);
      this.authState = credential.user;
    });
  }

  emailLogin(email:string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
  }

  emailSignUp(email:string, password:string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
  }

  signOut() {
    return this.afAuth.auth.signOut().then(()=> {
      this.authState = null;
    });
  }

}
