import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferenciaDTO, AgendamentoRetorno } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private readonly apiUrl = 'http://localhost:8080/v1/transferencia';

  constructor(private http: HttpClient) { }

  consultarAgendamento(): Observable<AgendamentoRetorno[]> {
    return this.http.get<AgendamentoRetorno[]>(this.apiUrl);
  }

  agendar(payload: TransferenciaDTO): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
