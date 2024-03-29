import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
    @Input() totalItems = 1;
    @Input() pageSize = 25;
    @Input() currentPage = 1;
    @Input() step = 2;
    @Output() pageChange: EventEmitter<number> = new EventEmitter();

    public get totalPages() {
        return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
    }

    public getFirstPage(): boolean {
        return this.currentPage === 1;
    }

    public isLastPage(): boolean {
        return this.currentPage === this.totalPages;
    }

    public get pages(): number[] {
        const pages = [];

        if (this.currentPage > 1) {
            pages.push(this.currentPage - 1);
        }

        pages.push(this.currentPage);

        if (this.currentPage < this.totalPages) {
            pages.push(this.currentPage + 1);
        }

        if (this.currentPage + 1 < this.totalPages) {
            pages.push(this.currentPage + 2);
        }

        if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
            pages.push(this.currentPage + 3);
        }
        return pages;
    }

    public get isNextDisabled(): boolean {
        return this.currentPage + this.step > this.totalPages;
    }

    public get isPreviousDisabled(): boolean {
        return this.currentPage - this.step < 1;
    }
    public setPage(page: number): void {
        this.currentPage = page;
        this.pageChange.emit(page);
    }
}
