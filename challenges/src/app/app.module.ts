import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StartRatingsComponent } from './components/start-ratings/start-ratings.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { APP_ROUTES } from './app.routes';

import { PipesModule } from './pipes/pipes.module';
import { LoaderComponent } from './components/loader/loader.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        CardComponent,
        AccordionComponent,
        ProgressBarComponent,
        StartRatingsComponent,
        TopOfPageComponent,
        ComponentDocumentationComponent,
        LoaderComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), PipesModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
