import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StartRatingsComponent } from './start-ratings/start-ratings.component';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ComponentDocumentationComponent,
        ToolbarComponent,
        AccordionComponent,
        ProgressBarComponent,
        StartRatingsComponent,
        LoaderComponent,
        CreditCardInputComponent
    ],
    imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule]
})
export class ComponentsModule {}
