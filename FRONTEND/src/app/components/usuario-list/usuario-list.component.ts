import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.sass']
})
export class UsuarioListComponent implements OnInit {

  @Input()
  usuarios: User[];

  constructor(private userProvider: UserProviderService) { }

  ngOnInit(): void {
  }

  public async deleteUser(_id: string, nick: string) {
    if(confirm("¿Estas seguro de eliminar el usuario?\n" + nick)) {
      try {
        await this.userProvider.deleteUsuarioById(_id).toPromise();
        alert("El usuario ha sido eliminado");
        window.location.reload();
      } catch (error) {
        alert("Error al eliminar el usuario");
      }
    }
  }

  public async updateUser(_id: string, nick: string) {
    let user: Partial<User> = {
      permiso: 2
    }
    if(confirm("¿Quieres darle permisos de Periodista a este usuario?\n" + nick)) {
      try {
        await this.userProvider.updateUsuarioById(_id, user).toPromise();
        alert("Usuario ahora es Periodista");
        window.location.reload();
      } catch (error) {
        alert("Error al actualizar el usuario");
      }
    }
  }
}
