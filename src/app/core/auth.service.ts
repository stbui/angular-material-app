import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';

import { NotifyService } from './notify.service';

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private notify: NotifyService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
      // tap(user => localStorage.setItem('user', JSON.stringify(user))),
      // startWith(JSON.parse(localStorage.getItem('user')))
    );
  }

  githubLogin() {
    const provider = new auth.GithubAuthProvider();
    return this.oAuthLogin(provider);
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  /**
   * 匿名登陆
   */
  anonymousLogin() {
    return this.afAuth.auth
      .signInAnonymously()
      .then(credential => {
        this.notify.update('欢迎回来!', 'success');
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  /**
   * 邮箱登陆
   * @param email
   * @param password
   */
  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.notify.update('欢迎回来!', 'success');
        return this.updateUserData(credential.user);
      });
  }

  /**
   * 邮箱注册
   * @param email 邮箱
   * @param password 密码
   */
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.notify.update('注册成功!', 'success');
        return this.updateUserData(credential.user);
      });
  }

  /**
   * 重置密码
   * @param email 邮箱
   */
  resetPassword(email: string) {
    const fbAuth = auth();
    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => this.notify.update('密码已发到你的邮箱中!', 'info'))
      .catch(error => this.handleError(error));
  }

  /**
   * 退出登录
   */
  signOut() {
    return this.afAuth.auth.signOut();
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.notify.update('欢迎回来!', 'success');
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || '佚名',
      photoURL: user.photoURL
    };

    return userRef.set(data);
  }

  private handleError(error: Error) {
    console.log(error);
    this.notify.update(error.message, 'error');
  }
}
