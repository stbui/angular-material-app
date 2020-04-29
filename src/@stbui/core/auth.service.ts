import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap, startWith, tap, filter } from "rxjs/operators";

import { NotifyService } from "./notify.service";

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User | null>;

  constructor(private notify: NotifyService) { }

  githubLogin() {
    return Promise.reject();
  }

  googleLogin() {
    return Promise.reject();
  }

  twitterLogin() {
    return Promise.reject();
  }

  facebookLogin() {
    return Promise.reject();
  }

  /**
   * 匿名登陆
   */
  anonymousLogin() {
    return Promise.reject();
  }

  /**
   * 邮箱登陆
   * @param email
   * @param password
   */
  emailLogin(email: string, password: string) {
    return Promise.reject();
  }

  /**
   * 邮箱注册
   * @param email 邮箱
   * @param password 密码
   */
  emailSignUp(email: string, password: string) {
    return Promise.reject();
  }

  /**
   * 重置密码
   * @param email 邮箱
   */
  resetPassword(email: string) {
    return Promise.reject();
  }

  /**
   * 退出登录
   */
  signOut() {
    return Promise.reject();
  }

  private oAuthLogin(provider: any) { }

  private updateUserData(user: User) { }

  private handleError(error: Error) { }
}
