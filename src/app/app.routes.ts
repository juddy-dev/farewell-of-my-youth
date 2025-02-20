import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'book-list', component: ListComponent},
    {path: '**', redirectTo: '', component: HomeComponent},
];
