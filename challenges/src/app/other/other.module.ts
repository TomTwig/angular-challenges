import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OTHER_ROUTES } from './other.routes';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [OtherDocumentationComponent],
    imports: [CommonModule, RouterModule.forChild(OTHER_ROUTES), SharedModule]
})
export class OtherModule {}
