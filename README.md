# AngularJS-jumpstart-udemy
Code as part of completion of Angular JS JumpStart Course on Udemy

# Module 2: Views, Directives and Filters
## Views:
These are placeholders used to render data on the screen

## Directives:
In simplest Terms, Directives teaches HTML to learn new tricks
Directives can be used for DOM manipulation, handling events, hide/show data, manipulating css, etc.

## Filters:
These are simply used to sort, filter or order data by properties assigned in variables or objects.

# Module 3: Controllers, Scopes and Modules:
## Controller:
Brain for a view
Responsible for:
 fetching data from apis,
 perform some business logic, 
 dom manipulations, 
 responding to view triggered events, 
 interacts with the view using scope object, etc.

## Scope:
it acts as a glue between a controller and a view
the controller stores the model data after some transformations/manipulations here.
This is injected into the view.
View interacts with this and not the controller for model
also known as View Model in MVVM pattern

#### "$scope" is a special parameter which is injected automatically by angularJS

## Modules:
Modules are containers that are used to isolate the developer's code from the global scope
They are containers for:
    Filters
    Controllers
    Directives
    Factories
    Services
    Routes

One module can reference or include other modules (called Module Injection)
To use a module in the view set ng-app directive equal to the name of the module.

# Module 4 : Routing
## Routing
Routing is the process of configuring an appropriate route with a controller and a view
To initialise routing,
    One needs a script based on angularjs version which can be downloaded from:
        ```https://code.angularjs.org/version_number```
    Copy the contents of angular-route.js in a file in your local working directory and import it in index.html, and then import 'ngRoute' while declaring a controller
