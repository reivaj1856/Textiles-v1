import { Routes } from "@angular/router";

export default [ 
    {
        path: 'carrito',
        loadComponent: () => import('./carrito/carrito.component'),
    },
    {
        path: 'venta',
        loadComponent: () => import('./venta/venta.component').then(m => m.VentaComponent),
    },
    {
        path: 'comprobante',
        loadComponent: () => import('./proforma/proforma.component').then(m => m.ProformaComponent),
    },
    
]