import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        data: {
            title: 'Calton Datx',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        },
        children: [

        ]
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
