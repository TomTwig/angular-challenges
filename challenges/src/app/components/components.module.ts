import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StartRatingsComponent } from './start-ratings/start-ratings.component';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './components.routes';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';

@NgModule({
    declarations: [
        ComponentDocumentationComponent,
        AccordionComponent,
        ProgressBarComponent,
        StartRatingsComponent,
        LoaderComponent,
        CreditCardInputComponent,
        TwitterPostComponent,
        LinkedinPostComponent
    ],
    imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(COMPONENTS_ROUTES)]
})
export class ComponentsModule {}
