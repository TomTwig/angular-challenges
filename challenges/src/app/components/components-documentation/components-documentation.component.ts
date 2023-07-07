import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss'],
})
export class ComponentsDocumentationComponent {
  accordionItems: AccordionItem[] = [
    { title: 'Example 1', content: 'Example Content 1', isExpanded: false },
    { title: 'Example 2', content: 'Example Content 2', isExpanded: false },
  ];

  progressBarValue = 25;
}
