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

* 
    