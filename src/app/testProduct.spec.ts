import { TestBed } from '@angular/core/testing';
import { realService } from './services/reals.service';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { Product } from './interface/product';

describe('realService', () => {
  let service: realService;
  let firestoreSpy: jasmine.SpyObj<Firestore>;

  beforeEach(() => {
    firestoreSpy = jasmine.createSpyObj('Firestore', ['dummy']);
    TestBed.configureTestingModule({
      providers: [
        realService,
        { provide: Firestore, useValue: firestoreSpy }
      ]
    });
    service = TestBed.inject(realService);
  });

  it('debería devolver el producto por id', (done) => {
    const mockProduct: Product = {
      id: 'abc123',
      nombre: 'Producto Test',
      enlace: '',
      enlace1: '',
      enlace2: '',
      enlace3: '',
      enlace4: '',
      detalles: '',
      precio: 100,
      talla: 'M',
      hombre: true,
      mujer: false,
      ninos: false,
      ofertas: false
    };

    // Espía el método getProduc y haz que devuelva un observable con el producto simulado
    spyOn(service, 'getProduc').and.returnValue(of(mockProduct));

    service.getProduc('1qUJaTdCZNR6ldcC4PBU').subscribe(producto => {
      expect(producto).toEqual(mockProduct);
      done();
    });
  });
});