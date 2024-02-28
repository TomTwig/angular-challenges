import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './CreditCardFormatter/credit-card-formatter.pipe';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';

@NgModule({
    declarations: [PipesDocumentationComponent, TruncatePipe, CreditCardFormatterPipe],
    imports: [CommonModule, RouterModule.forChild(PIPES_ROUTES)]
})
export class PipesModule {}
