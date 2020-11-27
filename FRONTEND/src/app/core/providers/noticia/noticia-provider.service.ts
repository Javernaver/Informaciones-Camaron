import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Noticia } from '../../models/noticia.model';
import { HttpService } from '../../services/http/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoticiaProviderService {

  constructor(private httpService: HttpService) { }

  public getNoticias(): Observable<Noticia[]> {
    return this.httpService.get<Noticia[]>('/noticia/all');
  }
  
  public addNoticia(noticia: Partial<Noticia>): Observable<Noticia> {
    return this.httpService.post<Noticia>('/noticia/add', noticia);
  }

  public getNoticiaById(_id: string): Observable<Noticia> {
    return this.httpService.get<Noticia>('/noticia/id/' + _id);
  }

  public deleteNoticiaById(_id: string): Observable<Noticia> {
    return this.httpService.delete<Noticia>('/noticia/delete/' + _id);
  }

  public putNoticiaById(_id: string, noticia: Partial<Noticia>): Observable<Noticia> {
    return this.httpService.put<Noticia>('/noticia/put/' + _id, noticia);
  }
}
