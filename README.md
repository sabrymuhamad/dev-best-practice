# DevBestPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Customizable and re-usable embedded views using NgTemplateOutlet in Angular (Declarative way)


There are different ways to customize the view of angular component, one of the most famous ways is using content projection "ng-content" 
but actually I find "ng-content" won't be very flexible for the upcoming example and I really doubt if it would work at all.

##

Before we jump into a real life example I want to emphasis that we could use the "imperative" way to solve this example as well but I'm afraid that it would be more complicated
than using `NgTemplateOutlet` directive "declarative"...  

##

### and now to our first example:

* since NgTemplateOutlet is a directive and by the way it could be used as structural and attribute directive so I need to change the view of a child component based on 
    a condition or either some kind of data if exists, for this example I'm using Angular 18 and angular materials 18

    