import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Calton Datx',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        } 
    },
    {
        path: 'test',
        component: FooterComponent,
        data: {
            title: 'Test',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        } 
    }
];
