import { Component, computed, inject, signal, Signal } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { NavComponent } from '../../nav/nav.component';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { HomelistComponent } from '../homelist/homelist.component';
import { Product } from '../../../interface/product';
import { realService } from '../../../services/reals.service';
import { AuthService } from '../../../services/auth.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,HomelistComponent,FooterComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  _auth = inject(AuthService);
  auth = inject(Auth);
  logueado: boolean=true;

  ngOnInit(): void {
    this.getLogin();
  }
  
  getLogin(){
    if(this.auth.currentUser?.email == null){
      this.logueado= false;
    }else{
      this.logueado= true;
    } 
    console.log(this.logueado) ;
  }    
  logout(){
    this._auth.cerrarSesion();
    window.location.reload();
  }
  mandarlogin(){
    this.router.navigateByUrl('/auth/login');
  }
    allProducts: Signal<Product[]>;
  private category = signal<'all' | 'hombre' | 'mujer' | 'ninos' | 'ofertas'>('all');

  filteredProducts = computed(() => {
    const cat = this.category();
    const products = this.allProducts();

    if (cat === 'all') return products;
    return products.filter(p => p[cat]);
  });

 constructor(private productService: realService,private router: Router) {
    this.allProducts = this.productService.getProduct;
  }
  // Función para cambiar el filtro
   filterByCategory(category: 'hombre' | 'mujer' | 'ninos' | 'ofertas') {
    console.log('Filtro aplicado:', category);
    this.category.set(category);
  }

  showAll() {
    console.log('Mostrar todos');
    this.category.set('all');
  }

}
