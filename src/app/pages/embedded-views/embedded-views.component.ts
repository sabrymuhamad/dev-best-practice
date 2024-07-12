import { Component } from '@angular/core';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

export interface IStepperHeader {
  stepTitle: string,
  isActive?: boolean
}

@Component({
  selector: 'app-embedded-views',
  standalone: true,
  imports: [StepperComponent, CommonModule, MatIcon],
  templateUrl: './embedded-views.component.html',
  styleUrl: './embedded-views.component.scss'
})
export class EmbeddedViewsComponent {
  steps = [
    {stepTitle:'Step title 1', isActive:false},
    {stepTitle:'Step title 2', isActive:true}
  ];
  activeIndex = 0;
}
