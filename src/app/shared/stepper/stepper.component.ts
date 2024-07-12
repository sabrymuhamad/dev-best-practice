import { CommonModule } from '@angular/common';
import { Component, TemplateRef, input, model } from '@angular/core';
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
  stepperHeader = input<TemplateRef<any>>();
  selectedIndex = model(0);

}
