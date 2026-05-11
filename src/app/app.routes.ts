import { Routes } from '@angular/router';
import { ShowMore } from './pages/show-more/show-more';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: ShowMore,
        data: {
            title: 'show-more',
            showInMenu: true,
        }
    },
    {
        path: '**',
        component: NotFound,
        data: {
            title: '404',
            showInMenu: false,
        }
    }
];
