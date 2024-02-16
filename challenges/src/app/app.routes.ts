import { Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectivesDocumentationComponent } from './components/directives-documentation/directives-documentation.component';
import { PipesDocumentationComponent } from './components/pipes-documentation/pipes-documentation.component';
import { ServicesDocumentationComponent } from './components/services-documentation/services-documentation.component';

export const APP_ROUTES: Routes = [
    { path: '', component: ComponentDocumentationComponent },
    {
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
    },
    { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule) },
    { path: 'services', loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule) }
];
