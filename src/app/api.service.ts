import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiEndpoint = 'https://api.opendota.com/api/heroStats';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any>{
    return this.http.get(this.apiEndpoint)
  }

  getHeroById(id: number) {
    return this.http.get<any[]>(this.apiEndpoint).pipe(
      map((heroes: any[]) => heroes.find(hero => hero.id === id))
    );
  }

}
