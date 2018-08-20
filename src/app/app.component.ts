import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'primerApp';
  users: string[] = ['Sergio', 'Camilo', 'Andres', 'Julian'];
  nombre: string;
  edad: number;
  direccion: {
    calle: string,
    ciudad: string,
  };
  hobbies: string[];

  posts = [];

  constructor(private  dataService: DataService) {

    this.nombre = 'Sergio Pinilla';
    this.edad = 25;
    this.direccion = { calle: 'kr 1 A # 2-25 INT 6', ciudad: 'Chia' };
    this.hobbies = ['cantar', 'nadar', 'gym'];

    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });

  }

  mostrarAlerta(nombre) {

    alert('Estas alertando ' + nombre);
  }

  eliminarUsuario(user) {

    for (let i = 0; i < this.users.length; i++) {

      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }

  }

  guardarUsuario(nuevoUsuario) {

    this.users.push(nuevoUsuario.value);

    nuevoUsuario.value = '';
    nuevoUsuario.focus();
    return false;
  }


}
