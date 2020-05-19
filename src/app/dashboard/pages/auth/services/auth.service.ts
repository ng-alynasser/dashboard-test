import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../state/_models/user.model';
import { environment } from 'src/environments/environment';
import { pluck, catchError } from 'rxjs/operators';
import { loginGraphQL } from '../graphql/mutations/login';
import { currentUserGraphQL } from '../graphql/queries/current-user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string, favLang = 'EN'): Observable<User> {
    return this.http.post<User>(
      environment.GRAPHQL_URL,
      {
        query: loginGraphQL,
        variables: {
          email,
          password,
          favLang,
        }
      }
    ).pipe(
      pluck('data', 'response', 'user'),
    );
  }

  getUserByToken() {
    return this.http.post<User>(
      environment.GRAPHQL_URL,
      {
        query: currentUserGraphQL,
      }
    ).pipe(
      pluck('data', 'response', 'currentUser'),
      catchError(this.handleError('currentUser', []))
    );
  }

  // requestPassword(email: string) {

  // }
  
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.error(`${operation}: ${error}`);
      return of(result);
    };
  }
}