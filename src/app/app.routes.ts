import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './segurity/auth.guard';

export const routes: Routes = [
    {
        canActivateChild:[publicGuard()],
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes'),
    },
    {
        
        path: 'content',
        loadChildren: () => import('./component/public/public.routes'),
    },
    {
        canActivateChild:[privateGuard()],
        path: 'admin',
        loadChildren: () => import('./component/admin/admin.routes'),
    },
    {
        canActivateChild:[privateGuard()],
        path: 'private',
        loadChildren: () => import('./component/private/private.routes'),
    },
    { 
        path: '**',
        redirectTo: 'content',
    }, 
    
    
    
];
