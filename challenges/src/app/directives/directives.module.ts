import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directives.routes';

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(DIRECTIVES_ROUTES)]
})
export class DirectivesModule {}
