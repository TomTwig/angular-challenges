import { Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';

export const APP_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule) },
    {
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
    },
    { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule) },
    { path: 'services', loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule) },
    { path: 'other', loadChildren: () => import('./other/other.module').then((m) => m.OtherModule) }
];
