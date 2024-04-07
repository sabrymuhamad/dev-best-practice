import { Component } from '@angular/core';
import { StepperComponent } from '../../shared/stepper/stepper.component';

export interface IStepperHeader {
  stepTitle: string,
  isActive?: boolean
}

@Component({
  selector: 'app-embedded-views',
  standalone: true,
  imports: [StepperComponent],
  templateUrl: './embedded-views.component.html',
  styleUrl: './embedded-views.component.scss'
})
export class EmbeddedViewsComponent {
  steps = [
    {stepTitle:'Step 1 title', isActive:false},
    {stepTitle:'Step 2 title', isActive:true}
  ]
}
