import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseType } from '../interface/response';


@Injectable()
export class GamesProvider {

  constructor(public http: HttpClient) {

  }

  GetGames(matchDate): Observable<ResponseType> {
    const params = new HttpParams().set("matchDate", String(matchDate));
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/game/get_by_userid`, { params })
      .pipe(map(resp => {
        return resp;
      }));
  }
  computeOldMatchDate(group) {
    if (group.day_num < 10) {
      group.day_num = '0' + group.day_num
    }
    if (group.month < 10) {
      group.month = '0' + group.month
    }
    var date = group.year + '-' + group.month + '-' + group.day_num;
    return date;
  }

  GetGameVotes(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/vote/get_game_votes/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
  createVote(vote): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/vote/create`, vote).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
  GetGameComments(id): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/comment/get_game_comments/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  createComment(comments): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/comment/create`, comments).pipe(
      map((resp: any) => {
        return resp;
      }));
  }

  GetCountries(pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/country/getall`, {params:params})
      .pipe(map(resp => {
        return resp;
      }));
  }
  GetLeagues(pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/getall`, {params:params})
      .pipe(map(resp => {
        return resp;
      }));
  }
  GetTeams(): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/team/getall`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  SearchCountries(searchValue, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/country/search`, {params:params})
      .pipe(map(resp => {
        return resp;
      }));
  }


  createCountry(country): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${environment.apiUrl}/games/country/create`, country).pipe(
      map((resp: any) => {
        return resp;
      }));
  }


  updateCountry(country): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/country/update`, country).pipe(
      map((resp: any) => {
        return resp;
      }));
  }


  deleteCountry(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/country/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  SearchLeagues(searchValue, pageNo, pageSize): Observable<ResponseType> {
    const params = new HttpParams()
      .set('searchValue', searchValue)
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<ResponseType>(`${environment.apiUrl}/games/league/search`, {params:params})
      .pipe(map(resp => {
        return resp;
      }));
  }


  deleteLeague(id): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${environment.apiUrl}/games/league/delete/${id}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  updateLeague(league): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${environment.apiUrl}/games/league/update`, league).pipe(
      map((resp: any) => {
        return resp;
      }));
  }
}
