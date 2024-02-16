import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-top-of-page',
    templateUrl: './top-of-page.component.html',
    styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent {
    isShown = false;

    constructor(private viewportScroller: ViewportScroller) {}

    @HostListener('window:scroll') onWindowScroll() {
        const yCoordinate = this.viewportScroller.getScrollPosition()[1];
        this.isShown = yCoordinate > 200;
        console.log(yCoordinate);
    }

    goToTop(): void {
        this.viewportScroller.scrollToPosition([0, 0]);
    }
}
