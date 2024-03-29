
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../../interfaces/User';
import { Token } from '../../interfaces/Token';
import { ResponseType } from '../../interfaces/response';
const helper = new JwtHelperService();
import { HTTP } from '@ionic-native/http';
import { from } from 'rxjs/observable/from';
const TOKEN_KEY = 'access_token';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;



@Injectable()
export class AuthenicationProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';

  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;

  private currentUserDataSubject: BehaviorSubject<User>;
  public currentUserData: Observable<User>;

  constructor(public http: HttpClient, private nativeHttp: HTTP,
    private platform: Platform,
    public toastCtrl: ToastController) {

    this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentUserDataSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('userData')));
    this.currentUserData = this.currentUserDataSubject.asObservable();
  }

  public get currentUserValue(): Token {
    return this.currentUserSubject.value;
  }

  public get currentUserDataValue(): User {
    return this.currentUserDataSubject.value;
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok!',
      duration: 4000,
      position: 'bottom',
      cssClass: '#3B7A57',

    });
    toast.present(toast);
  }

  CalculatePercentage(userAmt) {
    let addedPerc = (parseInt(userAmt) * 0.02);
    let newAmt = parseInt(userAmt) + addedPerc;
    if (parseInt(userAmt) >= 2500) {
      newAmt = parseInt(userAmt) + 100;
    }
    return newAmt;
  }

  onNativeApiCall(url, data) {
    this.nativeHttp.setDataSerializer('json');
    let nativeCall = this.nativeHttp.get(url, data, {
      "Content-Type": "application/json"
    });
    return from(nativeCall).pipe(
      map(result => {
        return JSON.parse(result.data);
      })
    )
  }

  login(email, password) {
    if (this.platform.is("android") || this.platform.is("ios")) {
      const params = {
        email: email,
        password: password,
      };
      return this.onNativeApiCall(`${environment.apiUrl}/users/member/authenticateuser`, params).pipe(map(res => {
        if (res.statusCode === 200) {
          sessionStorage.setItem('currentUser', JSON.stringify(res.data));
          this.currentUserSubject.next(res.data);
          const decoded = helper.decodeToken(res.data.token);
          sessionStorage.setItem('userData', JSON.stringify(decoded));
          this.currentUserDataSubject.next(decoded);
        }
        return res;
      }))
    } else {
      const params = new HttpParams()
        .set('email', email)
        .set('password', password);
      return this.http.get<ResponseType>(`${environment.apiUrl}/users/member/authenticateuser`, { params })
        .pipe(map(res => {
          if (res.statusCode === 200) {
            sessionStorage.setItem('currentUser', JSON.stringify(res.data));
            this.currentUserSubject.next(res.data);
            const decoded = helper.decodeToken(res.data.token);
            sessionStorage.setItem('userData', JSON.stringify(decoded));
            this.currentUserDataSubject.next(decoded);
          }
          return res;
        }))
    }

  }

  findUserDetails(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/users/user/find/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  GetUserDeta(): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/users/user/get`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  deleteMember(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/users/member/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  public logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userData');
    this.currentUserSubject.next(null);
    this.currentUserDataSubject.next(null);
    Storage.remove({ key: 'hasSeenLogin' });
    Storage.remove({ key: TOKEN_KEY });
  }


  GetUsersByType(usertypeId, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('usertypeId', usertypeId)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/users/user/type/get`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  SearchUsersByType(searchValue, usertypeId, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('usertypeId', usertypeId)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/users/user/type/search`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  updateUser(user): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/users/user/update`, user).pipe(
      map((resp: any) => {
        return resp;
      }));
  }


  //-----------------------SubAdmin-------Start-------------------------
  createSubAdmin(user): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/users/subadmin/create`, user)
      .pipe(map(resp => {
        return resp;
      }));
  }

  deleteSubAdmin(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/users/subadmin/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }


  GetMonthlyReport(selectedDate): Observable<ResponseType> {
    const params = new HttpParams()
      .set('selectedDate', selectedDate)
    return this.http.get<ResponseType>(`${environment.apiUrl}/users/report/monthly/get`, { params: params })
      .pipe(map(resp => {
        return resp;
      }));
  }

  GetAppReport(): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/users/report/general/get`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  createNewUser(user): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/users/member/add`, user)
      .pipe(map(resp => {
        return resp;
      }));
  }
}
