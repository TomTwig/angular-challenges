import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import {} from './components/credit-card-input/credit-card-input.component';

@NgModule({
    declarations: [AppComponent, ToolbarComponent, TopOfPageComponent],
    imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
