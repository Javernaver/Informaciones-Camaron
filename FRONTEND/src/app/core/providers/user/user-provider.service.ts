import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  constructor(private httpService: HttpService) { }

  public getUsuarios(): Observable<User[]> {
    return this.httpService.get<User[]>('/user/all');
  }
  
  public addUsuario(usuario: Partial<User>): Observable<User> {
    return this.httpService.post<User>('/user/add', usuario);
  }

  public getUsuarioById(id: string): Observable<User> {
    return this.getUsuarios().pipe(map((usuarios: User[]) => {
      return usuarios.find((usuario: User) => usuario._id === id);
    }));
  }


}
