import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
    @Input() public tableData = [
        { first: 'Tom', last: 'Rosenzweig', dob: '02/08/92' },
        { first: 'Tom', last: 'Rosenzweig', dob: '02/08/92' },
        { first: 'Tom', last: 'Rosenzweig', dob: '02/08/92' }
    ];
}
