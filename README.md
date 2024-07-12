# DevBestPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

since NgTemplateOutlet is a directive and by the way it could be used as structural and attribute directive so I need to change the view of a child component based on a condition or either some kind of data if exists, for this example I'm using Angular 18 / angular materials 18 and tailwind for better UX.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Customizable and re-usable embedded views using NgTemplateOutlet in Angular (Declarative way)


There are different ways to customize the view of angular component, one of the most famous ways is using content projection "ng-content" 
but actually I find "ng-content" won't be very flexible for the upcoming example and I really doubt if it would work at all.

##

Before we jump into a real life example I want to emphasis that we could use the "imperative" way to solve this example as well but I'm afraid that it would be more complicated
than using `NgTemplateOutlet` directive "declarative"...  

### and now to our first example:

*  Using Angular material stepper I need to make a customizable stepper header in some cases so I want to conditionally show and hide the default header and this an easy part using
    some CSS so I created a class called `hide-stepper-header` 
    ```javascript CSS
        .hide-stepper-header {
            .mat-horizontal-stepper-header-container {
                display: none;
            }
        }
    ```
    ```javascript HTML
        <div class="tw-mt-10 tw-w-1/2 tw-mx-auto" [ngClass]="{'hide-stepper-header': stepperHeader()}">
            <div class="tw-flex tw-mb-4" *ngIf="stepperHeader()">
                <ng-container [ngTemplateOutlet]="stepperHeader()!"></ng-container>
            </div>

            <mat-stepper #stepper [(selectedIndex)]="selectedIndex">
                <mat-step>
                    <ng-template matStepLabel>Fill out your name</ng-template>
                    <p>Step 1 body</p>
                    <div>
                        <button mat-button matStepperNext>Next</button>
                    </div>
                </mat-step>

                <mat-step>
                    <ng-template matStepLabel>Done</ng-template>
                    <p>You are now done.</p>
                    <div>
                        <button mat-button matStepperPrevious>Back</button>
                        <button mat-button (click)="stepper.reset()">Reset</button>
                    </div>
                </mat-step>
            </mat-stepper>
        </div>
    ```
    ```javascript TS
        stepperHeader = input<TemplateRef<any>>();
        selectedIndex = model(0);
    ```
    this class would be triggered dynamically depends on if there is a custom header provided to the stepper or not.

* in the above code snippet I created a stepper component which takes a model signal that works like an Input and Output to listen to the active step changes.

* and this is the parent component re-using the stepper component in customizable view 

```javascript TS
    export class EmbeddedViewsComponent {
        steps = [
            {stepTitle:'Step title 1', isActive:false},
            {stepTitle:'Step title 2', isActive:true}
        ];
        activeIndex = 0;
    }   
```
```javascript HTML
    <app-stepper [stepperHeader]="stepperHeaderRef" [(selectedIndex)]="activeIndex"></app-stepper>

    <ng-template #stepperHeaderRef>
        <ng-container *ngFor="let step of steps;let i = index;let last = last">
            <div class="step"
                [ngClass]="{'active':activeIndex === i, 'completed':activeIndex > i, 'pending':activeIndex < i}">
                <div class="bullet">
                    <mat-icon *ngIf="activeIndex > i">check</mat-icon>
                    <div [ngClass]="{'active':activeIndex === i}"></div>
                </div>
                <div class="number"><span class="tw-uppercase">{{step.stepTitle}}</span></div>
                <div class="tw-w-max" [ngClass]="{'active':activeIndex === i}">
                    {{activeIndex === i ? 'In Progress' :
                    activeIndex < i ? 'Pending' : 'Completed' }} </div>
                </div>
                <div *ngIf="!last" class="step-link"></div>
        </ng-container>
    </ng-template>
```
```javascript css
    .step-link {
        @apply tw-h-[1px] tw-bg-neutral-300 tw-w-full tw-mt-4;
    }

    .step {
        .bullet {
            @apply tw-mb-4 tw-flex tw-items-center tw-justify-center tw-bg-green-100 tw-w-[32px] tw-h-[32px] tw-rounded-full;

            mat-icon {
                @apply tw-text-white;
            }

            .active {
                @apply tw-bg-green-400 tw-w-[12px] tw-h-[12px] tw-rounded-full;
            }
        }

        .number {
            @apply tw-text-neutral-600 tw-tracking-widest tw-w-32;
        }

        &>.active {
            @apply tw-text-green-500;
        }

        &.pending {
            @apply tw-opacity-60;
        }

        &.completed {
            .bullet {
                @apply tw-bg-green-600;
            }
        }
    }
```
* here in the parent component I provide number of steps for the header to show and actually I could also provide the steps content to show in our re-usable component 