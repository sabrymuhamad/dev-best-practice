import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatStepperModule, CommonModule, MatButtonModule, StepperHeaderComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input() stepperHeader!: TemplateRef<any>;
}
