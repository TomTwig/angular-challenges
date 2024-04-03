import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directives.routes';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [DebounceClickDirective],
    imports: [CommonModule, RouterModule.forChild(DIRECTIVES_ROUTES), SharedModule]
})
export class DirectivesModule {}
