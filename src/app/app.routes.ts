import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        data: {
            title: 'Calton Datx',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'about-us',
        loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent),
        data: {
            title: 'Calton Datx | About Us',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        },
    },
    {
        path: 'product',
        loadComponent: () => import('./product/product.component').then(m => m.ProductComponent),
        data: {
            title: 'Calton Datx | Product',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        },
    },
    {
        path: 'test',
        loadComponent: () => import('./component/footer/footer.component').then(m => m.FooterComponent),
        data: {
            title: 'Test',
            description:'Tes Meta Tag Content',
            ogUrl: 'your og url'
        } 
    },
    {
        path: "**", loadComponent: () => import('./component/not-found/not-found.component').then(m => m.NotFoundComponent),
        data: {
            title: '404 | Page Not Found',
            description: "The page you are looking for might have been removed"
        }
    }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled' // optional but useful
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class Approutes {}