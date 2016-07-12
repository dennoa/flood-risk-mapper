import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Config} from './config';

@Injectable()
export class Requestor {

  constructor(private http: Http, private config: Config) {}

  get(path): Observable<any> {
    return this.http.get(this.config.apiUrl + path)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  post(path, body): Observable<any> {
    let options = new RequestOptions({ headers: this.config.apiHeaders() });
    return this.http.post(this.config.apiUrl + path, body, options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

}
