import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-credit-card-input',
    templateUrl: './credit-card-input.component.html',
    styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
    @Input() public creditCardNumber = '';
    public readOnly = false;
    public get isReadonly() {
        return this.readOnly;
    }
    @Input() public set isReadonly(value: boolean) {
        this.readOnly = value;
    }
}
