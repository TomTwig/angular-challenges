import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { SharedModule } from '../shared/shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';



@NgModule({
  declarations: [PipesDocumentationComponent, TruncatePipe],
  imports: [
    CommonModule,
    SharedModule,
  RouterModule.forChild(PIPES_ROUTES),
  ]
})
export class PipesModule { }
