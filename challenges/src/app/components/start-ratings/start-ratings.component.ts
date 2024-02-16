import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-start-ratings',
    templateUrl: './start-ratings.component.html',
    styleUrls: ['./start-ratings.component.scss']
})
export class StartRatingsComponent {
    @Input() public rating: number = 0;
    @Input() public maxRating: number = 0;

    public getFullStarts(): number[] {
        const totalFullStars = Math.floor(this.rating);
        return Array(totalFullStars).fill(0);
    }

    public getHasHalfStar(): boolean {
        const hasHalfStart = this.rating - Math.floor(this.rating) >= 0.5 && this.rating !== this.maxRating;
        return hasHalfStart;
    }

    public getEmptyStarts() {
        const totalEmptyStars = Math.floor(this.maxRating - this.rating);

        console.log(this.maxRating - this.rating);
        return Array(totalEmptyStars).fill(0);
    }
}
