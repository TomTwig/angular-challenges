import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() public value = 50;
  @Input() public max = 100;

  updateProgressBar() {
    this.value += 10;
    if (this.value >= this.max) {
      this.value = this.max;
    }
  }
}
