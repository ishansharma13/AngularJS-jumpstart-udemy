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

# Module 5: Factories and Services:

All factories and Services boil down to singletons, i.e., is a single object in memory that kinda hangs around so that other objects like controllers can interact with them when needed.

For Eg: Ajax calls that use some reusable code, sharing data between controllers, etc. 
Built-in Angular services: $http, $timeout, $window, $location, $q (background processes), $rootScope, $interval, $filter, $log

## Factories

### Create a custom factory when one needs to:
    1. Define re-usable tasks
    2. Share code or state between controllers

#### Factories can be reliant or can be injected into another factories or services as well

### Defining a factory goes like this:
    You create a function that returns an object containing properties/functions that you want your factory to have.

    After the function is defined it is attached to angular as reference,i.e., without () sign. 

### To use a factory, define it as a parameter to the controller function you are trying to create
#### Same rules for $inject apply to factories also

### This is good, but when do we use factories?
    When one thinks, that some logic present in a controller may also need to be accessed in other container, then it makes sense to create afactory and share that among controllers.

## Services

Services are very similar to a factory in terms of functionality

Difference between a factory and a service:

In Factory, we create a function that return an object that contains all the properties one can use by initialising it.

While in service, the created function is the object itself.