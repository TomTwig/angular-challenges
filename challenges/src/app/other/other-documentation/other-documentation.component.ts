import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animations';

@Component({
    selector: 'app-other-documentation',
    templateUrl: './other-documentation.component.html',
    styleUrls: ['./other-documentation.component.scss'],
    animations: [fadeInOutAnimation]
})
export class OtherDocumentationComponent {
    isInDom = true;
}
