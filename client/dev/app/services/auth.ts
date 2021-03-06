/**
 * Created by GiangDH on 5/19/16.
 */
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _regUrl = '/api/user/';
  private _loginUrl = '/api/login';
  private _logOutUrl = '/api/logout';
  private _checkLoginUrl = '/api/checkLogin';

  redirectUrl: string;
  constructor(private _http: Http) {

  }

  login(user: User):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let _user = JSON.stringify({
      username: user.username,
      password: user.password
    })
    return this._http.post(this._loginUrl,_user,options)
      .map(res => res.json());
  }

  register(user: User):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let _user = JSON.stringify({
      username: user.username,
      password: user.password,
      email:    user.email
    });
    return this._http.post(this._regUrl,_user,options)
      .map((res) =>  res.json())
      .catch(this.handleError);
  }

  isLoggedIn(): Observable<any> {
    return this._http.get(this._checkLoginUrl)
      .map((res)=>res.json())
      .catch(this.handleError);
  }

  logout():Observable<any> {
    return this._http.get(this._logOutUrl)
      .map((res) => res.json())
      .catch(this.handleError);
  }
  logoutClient() {
    localStorage.removeItem('username');
    localStorage.removeItem('userrole');
    localStorage.removeItem('linkImg');
  }


  private handleError(error: Response) {
    return Observable.throw(error.json());
  }
}
