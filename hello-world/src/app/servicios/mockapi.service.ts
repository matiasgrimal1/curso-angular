import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { alumnosdesaprobados } from '../alumnosdesaprobados/alumnosdesaprobados';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAlumnos(): Observable<alumnosdesaprobados[]> {
    return this.httpClient.get(
      environment.baseURL + '/api/v1/alumnos'
    ).pipe(map(response => response as alumnosdesaprobados[]));
  }

}
