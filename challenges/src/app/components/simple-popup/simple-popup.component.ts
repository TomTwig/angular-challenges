import { Component, Input } from '@angular/core';
import { delay, of } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/other/animations/fade-in-out/fade-in-out.animations';

@Component({
    selector: 'app-simple-popup',
    templateUrl: './simple-popup.component.html',
    styleUrls: ['./simple-popup.component.scss'],
    animations: [fadeInOutAnimation]
})
export class SimplePopupComponent {
    @Input() message: string = '';
    isShown = false;

    show(): void {
        this.isShown = true;

        const subscription = of(null)
            .pipe(delay(4000))
            .subscribe({
                complete: () => {
                    this.isShown = false;
                    subscription.unsubscribe();
                }
            });
    }
}
