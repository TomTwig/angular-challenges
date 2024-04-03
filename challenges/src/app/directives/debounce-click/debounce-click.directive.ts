import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Directive({
    selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
    @Output() public debounceClick = new EventEmitter();
    public clicks = new Subject();
    public subscription: Subscription;

    constructor() {
        this.subscription = new Subscription();
    }

    public ngOnInit(): void {
        const debounceTimeInMs = 500;

        this.subscription = this.clicks
            .pipe(debounceTime(debounceTimeInMs))
            .subscribe((value: any) => this.debounceClick.emit(value));
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    @HostListener('click', ['$event'])
    public clickEvent(event: any): void {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next('');
    }
}
