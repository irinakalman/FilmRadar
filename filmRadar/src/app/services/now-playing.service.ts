import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  private endpoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=db2448e4b91c46a38ec5a69196743c2d';

  constructor(private http: HttpClient) { }

  getPlayingNowMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint)
  }
}
