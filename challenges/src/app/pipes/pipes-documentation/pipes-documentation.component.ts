import { Component } from '@angular/core';

@Component({
    selector: 'app-pipes-documentation',
    templateUrl: './pipes-documentation.component.html',
    styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent {
    flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

    modifyFlatten() {
        this.flattenData.push(3, 5);
    }

    reassignFlatten() {
        this.flattenData = [...this.flattenData];
    }
}
