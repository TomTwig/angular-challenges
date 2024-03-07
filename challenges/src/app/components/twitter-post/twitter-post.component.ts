import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-twitter-post',
    templateUrl: './twitter-post.component.html',
    styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
    @Input() public baseHref = 'https://www.info@tomrosenzweig.de';
    @Input() public hashTags: string[] = [
        'TomRosenzweig',
        'JavaScript',
        'TypeScript',
        'Angular',
        '100 Angular Challenge'
    ];
    constructor(public titleService: Title) {}

    public get twitterUrl(): string {
        const base = this.getBaseWithHashTagsandRoute();
        const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a pro coder`);
        return `${base}${message}`;
    }

    private getBaseWithHashTagsandRoute() {
        const route = encodeURI(this.baseHref);
        const hashTags = this.hashTags.join(',');

        return `https://twitter.com/intent/tweet?hastatags=${encodeURIComponent(hashTags)}&related=tomR&url=${route}`;
    }
}
