import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../interface/product';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { DataAccessService } from '../../../services/data-access.service';
import { Usuario } from '../../../interface/user';
import { toast } from 'ngx-sonner';
import { realService } from '../../../services/reals.service';

@Component({
  selector: 'app-homelist',
  imports: [RouterLink],
  templateUrl: './homelist.component.html'
})


export class HomelistComponent {
  usuario: Usuario | null = null;
  auth = inject(Auth);
  data = inject(DataAccessService);
  logueado: boolean=false;
  update = inject(realService);
  router = inject(Router);
  @Input() producto: Product[] = [];

  agregarCarrito(idproducto: string) {
    if(this.usuario){
      this.usuario?.carrito.push(idproducto);
      toast.info('producto agregado al carrito');
      console.log(this.usuario)
      this.data.actualizarUsuarioPorId(this.usuario.id,this.usuario);
    }else{
      toast.error('inicia sesion para agregar productos al carrito')
    }
  }

  async getcuenta(){
      const email = this.auth.currentUser?.email+'';
      this.usuario = await this.data.obtenerUsuarioPorCorreo(email);
    }
  
  async ngOnInit() {
    await this.getcuenta();
    console.log(this.usuario);
  }
}
