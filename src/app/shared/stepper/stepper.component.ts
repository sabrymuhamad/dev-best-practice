import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, input, output } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatStepperModule, CommonModule, MatButtonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  stepperHeader = input.required<TemplateRef<any>>();
  @Input() selectedIndex = 0;
  selectedIndexChange = output<number>();

}
