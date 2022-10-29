# Directives

Directives are classes that add additional behavior to elements in your Angular applications

The different types of Angular directives are as follows:

| DIRECTIVE TYPES | DETAILS |
| --- | --- |
| [Components](https://angular.io/guide/component-overview) | Used with a template. This type of directive is the most common directive type. |
| [Attribute directives](https://angular.io/guide/built-in-directives#built-in-attribute-directives) | Change the appearance or behavior of an element, component, or another directive. |
| [Structural directives](https://angular.io/guide/built-in-directives#built-in-structural-directives) | Change the DOM layout by adding and removing DOM elements. |

##

##

### Built-in attribute directives

Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties, and components.

##

### Adding and removing classes with NgClass

##

Add or remove multiple CSS classes simultaneously with [ngClass](https://angular.io/api/common/NgClass).

| [NgClass](https://angular.io/guide/built-in-directives#ngClass) | Adds and removes a set of CSS classes. |
| --- | --- |

```
<div [ngClass]="'first second'"></div>  

<div [ngClass]="['first', 'second']"></div>  

<div [ngClass]="{first: true, second: true, third: true}"></div>  

<div [ngClass]="{'first second': true}"></div>  
```

```
.center {
text-align: center;
color: red;
}

.large {
font-size: 300%;
}
```

```
<h1>Demo of the selector</h1>

<h1 class="center">This heading will not be affected</h1>

<p class="center">This paragraph will be red and center-aligned.</p>

<p class="center large">This paragraph will be red, center-aligned, and in a large font-size.</p>
```

### Binding to a single CSS class

To create a single class binding, type the following:

```
[class.sale]="onSale"
```

### Binding to a single style

```
<nav [style.background-color]="expression"></nav>
```

### Displaying and updating properties with ngModel

```
[(ngModel)]

(ngModelChange)
```

##

### Adding or removing an element with NgIf

```
<h3 id="ngIf">NgIf Binding</h3>

<div>

<p>If isActive is true, app-item-detail will render: </p>

<app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>

<button type="button" (click)="isActiveToggle()">Toggle app-item-detail</button>

</div>
```

By default, `NgIf` prevents display of an element bound to a null value.

### Listing items with NgFor

`<div *ngFor="let item of items">{{item.name}}</div>
`

### Getting the index of

`<div *ngFor="let item of items; let i=index">{{i + 1}} - {{item.name}}</div>
`

##

### Repeating elements when a condition is true

To repeat a block of HTML when a particular condition is true, put the `*ngIf` on a container element that wraps
an` *ngFor` element.

[one structural directive per element](https://angular.io/guide/structural-directives#one-per-element).

### Switching cases with NgSwitch

```
 <div [ngSwitch]="currentItem.feature">

 <div *ngSwitchCase="'stout'" ></div>

 <div *ngSwitchCase="'slim'" ></div>

 <div *ngSwitchCase="'vintage'" ></app-lost-item>

 <div *ngSwitchCase="'bright'" ></app-best-item>

 <div *ngSwitchCase="'bright'"> Are you as bright as {{currentItem.name}}?</div>

 <div *ngSwitchDefault ></div>

 </div>
```

##

# Component interaction

Pass data from parent to child with input binding

```
@Input() hero!:Hero;

@Input('master') masterName ='';

typically adorned with [@Input() decorator](https://angular.io/guide/inputs-outputs#input).

The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.

Parent listens for child event

@Output() voted =new[EventEmitter](https://angular.io/api/core/EventEmitter)<boolean>();

vote(agreed: boolean) {

this.voted.emit(agreed);

}
````

````
<app-voter (voted)="onVoted($event)"></app-voter>

onVoted(agreed:boolean){

  if(agreed){
  
    this.agreed++;
  
  }else{
  
    this.disagreed++;
  
  }

}
````

#
### ViewChild

There may be situations where you want to access a directive, child component, or a DOM element from a parent component
class. The ViewChild decorator returns the first element that matches a given directive, component, or template
reference selector.

````
@ViewChild(CountdownTimerComponent)

private timerComponent!: CountdownTimerComponent;
````

Parent and children can also communicate using a service

# Content projection

Content projection (also known as transclusion) is a way to import HTML content from outside a component and insert that
content into the component's template in a designated spot.


<h2>Single-slot content projection</h2>

<ng-content></ng-content>

With the `<ng-content> `element in place, users of this component can now project their own message into the component.
For example:

The `<ng-content>` element is a placeholder that does not create a real DOM element. Custom attributes applied
to `<ng-content>` are ignored.

### Multi-slot content projection

```
<ng-content select='header'></ng-content>

<ng-content select='#card-sub-header'></ng-content>

<ng-content select='.card-body'></ng-content>

<ng-content select='[title]'></ng-content>
```

```
<app-my-cards>

<header>Card Header</header>

<span id='card-sub-header'>Card Sub Header</span>

<div class="card-body">

This is a card Body!!!

</div>

<footer title="card-footer">

Card Footer.

</footer>

</app-my-cards>

```

# Lifecycle hooks

A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component
view along with its child views.

The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates
both the view and the component instance as needed.

The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM.

Your application can use lifecycle hook methods to tap into key events in the lifecycle of a component

Responding to lifecycle events

implementing one or more of the lifecycle hook interfaces

hooks give you the opportunity to act on a component instance at the appropriate moment, as Angular creates, updates, or
destroys that instance.

name is the interface name prefixed with ng

constructor -> hook methods

`ngOnChanges()`

when Angular sets or resets data-bound input properties.

Called before ngOnInit()

`ngOnInit()`

After Angular first displays the data-bound properties and sets the directive or component's input properties.

`ngAfterViewInit()`

Respond after Angular initializes the component's views and child views

`ngOnDestroy()`

Cleanup just before Angular destroys the directive or component

# Angular Routing

needs to have at least two components

### Adding components for routing

`ng generate component first
`
####
`ng generate component second
`
## Defining a basic route

In routing.moudle.ts

```
const routes:[Routes](https://angular.io/api/router/Routes)=[

{ path:'first-component', component:FirstComponent},

{ path:'second-component', component:SecondComponent},

];
```

#

In app.component.html

#

```
<div class="container">

<!-- sidebar-->

<div class="sidebar">

<h3 class="">Menu</h3>

<a [routerLink]="['/new-comp-url']" >Link 1</a>

<a [routerLink]="['/new-comp-url']" >Link 2</a>

<a [routerLink]="['/new-comp-url']" >Link 3</a>

</div>

<!-- Page Content -->

<div class="content">

<h1>Routed Components</h1>

<router-outlet></router-outlet>

</div>

</div>
```

In component css 

```
.container{
  display: flex;
  width: 100vw;
  height: 100vh;
}

.sidebar{
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
}

.sidebar a{
  padding: 10px;
}

.sidebar a:hover{
  background: whitesmoke;
}

.content{
  margin-left: 50px;
}
```

#

`<router-outlet>`

This element informs Angular to update the application view with the component for the selected route.

### Getting route information

```
[queryParams]="{part: 'navbar',search: 'about', year: 2021 }"

constructor(

  private route:[ActivatedRoute](https://angular.io/api/router/ActivatedRoute),private router:[Route](https://angular.io/api/router/ActivatedRoute)r,

){}

ngOnInit() {

  this.route.queryParams.subscribe(params => {
  
  this.name = params['name'];

});

}
```

### What is an activated route?

A service that is provided to each route component that contains route specific information such as route parameters,
static data, resolve data, global query params and the global fragment.

`@angular/router`

Implements the Angular Router service , which enables navigation from one view to the next as users perform application
tasks.

### Using the Component

```
<p>about works!</p>

<button (click)="movetoContact()">Go to Contact Page</button>
```

```
movetoContact(){

this.router.navigate(['/contact'],{queryParams: {part: 'navbar',search: 'contact', year: 2021 },

fragment: 'buttonClick'})

}
```

### Setting up wildcard routes

A well-functioning application should gracefully handle when users attempt to navigate to a part of your application
that does not exist. To add this functionality to your application, you set up a wildcard route. The Angular router
selects this route any time the requested URL doesn't match any router paths.

`{ path:'', component:<component-name>}
`

### Displaying a 404 page

To display a 404 page, set up a `wildcard` route with the component property set to the component you'd like to use for
your 404 page as follows:

```
const routes:Routes=[

{ path:'first-component', component:FirstComponent},

{ path:'second-component', component:SecondComponent},

{ path:'', component:PageNotFoundComponent},// Wildcard route for a 404 page

];
```

The last route with the path of is a wildcard route. The router selects this route if the requested URL doesn't match
any of the paths earlier in the list and sends the user to the PageNotFoundComponent.

##

### Setting up redirects

To set up a redirect, configure a route with the path you want to redirect from, the component you want to redirect to,
and a pathMatch value that tells the router how to match the URL

```
const routes:Routes=[

{ path:'first-component', component:FirstComponent},

{ path:'second-component', component:SecondComponent},

{ path:'', redirectTo:'/first-component', pathMatch:'full'},// redirect to `first-component`

{ path:'', component:PageNotFoundComponent},// Wildcard route for a 404 page

];
```

Technically, pathMatch = 'full' results in a route hit when the remaining, unmatched segments of the URL match ''. In
this example, the redirect is in a top level route so the remaining URL and the entire URL are the same thing.

The other possible pathMatch value is 'prefix' which tells the router to match the redirect route when the remaining URL
begins with the redirect route's prefix path. This doesn't apply to this sample application because if the pathMatch
value were 'prefix', every URL would match ''.

##

### Nesting routes

```
const routes:Routes=[
{
  path:'first-component',
  component:FirstComponent,// this is the component with the <[router-outlet](https://angular.io/api/router/RouterOutlet)> in the template
    children:[
    {
    path:'child-a',// child route path
    component:ChildAComponent,// child route component that the router renders
    },
    {
    path:'child-b',
    component:ChildBComponent,// another child route component that the router renders
    },
  ],
 }
,];
```

##

### Setting the page title

Each page in your application should have a unique title so that they can be identified in the browser history.

```
const routes:Routes=[
  {
  path:'first-component',
  title:'First component',
  component:FirstComponent,// this is the component with the <router-outlet> in the template
  },
];
```

### Route order

The order of routes is important because the Router uses a first-match wins strategy when matching routes


## Preventing unauthorized access

Use route guards to prevent users from navigating to parts of an application without authorization. The following route
guards are available in Angular:

- [CanActivate](https://angular.io/api/router/CanActivate)
- [CanActivateChild](https://angular.io/api/router/CanActivateChild)
- [CanDeactivate](https://angular.io/api/router/CanDeactivate)
- [CanMatch](https://angular.io/api/router/CanMatch)
- [Resolve](https://angular.io/api/router/Resolve)
- [CanLoad](https://angular.io/api/router/CanLoad)

`ng generate guard your-guard
`

In YourGuard.ts
```
export class YourGuard implements CanActivate{

canActivate(

  next:[ActivatedRouteSnapshot],
  
  state:RouterStateSnapshot):boolean{

    let isLoggedIn = this.authService.isAuthenticated();
    
    if(isLoggedIn){
    
      return true
    
    }else{
    
      this.router.navigate(['/contact']);
      
    }
  }
}
```

In routing.module.ts

```
{

path: '/your-path',

component: YourComponent,

canActivate: [YourGuard],

}
```

### Link parameters array

A link parameters array holds the following ingredients for router navigation:

- The path of the route to the destination component
- Required and optional route parameters that go into the route URL

Bind the [RouterLink](https://angular.io/api/router/RouterLink) directive to such an array like this:

`<a [routerLink]="['/heroes']">Heroes</a>
`

The following is a two-element array when specifying a route parameter:

`<a [routerLink]="['/hero', hero.id]">
`

`<span class="badge">{{ hero.id }}</span>{{ hero.name }}</a>
`
###
Provide optional route parameters in an object, as in { foo: 'foo' }:


`<a [routerLink]="['/crisis-center', { foo: 'foo' }]">Crisis Center</a>
`

# Managing data

The basic concept of OOP is this: Class >> Object >> Instance. The class = the blue print. The An instance is a virtual
copy (but not a real copy) of the object.

### Understanding dependency injection

Dependency injection, or DI, is one of the fundamental concepts in Angular. DI is wired into the Angular framework and
allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure
dependencies that they need.

### Create service

`classHeroService{}`

The first step is to add the @Injectable decorator to show that the class can be injected.

```
@Injectable
classHeroService {}
```

The next step is to make it available in the DI by providing it. A dependency can be provided in multiple places:

### Providing dependency

- At the Component level, using the providers field of the @[Component](https://angular.io/api/core/Component)
  decorator. In this case the HeroService becomes available to all instances of this component and other components and
  directives used in the template. For example:

```
@Component({

selector:'hero-list',

template:'...',

providers:[HeroService]

})

classHeroListComponent{}
```

When you register a provider at the component level, you get a new instance of the service with each new instance of
that component.

- At the NgModule level, using the providers field of the @[NgModule](https://angular.io/api/core/NgModule) decorator.
  In this scenario, the HeroService is available to all components, directives, and pipes declared in this NgModule. For
  example:

```
@NgModule({

declarations:[HeroListComponent]

providers:[HeroService]

})

classHeroListModule{}
```

When you register a provider with a specific NgModule, the same instance of a service is available to all components in
that NgModule.

- At the application root level, which allows injecting it into other classes in the application. This can be done by
  adding the providedIn: 'root' field to the @[Injectable](https://angular.io/api/core/Injectable) decorator:

```
@Injectable({

providedIn:'root'

})

classHeroService{}
```

When you provide the service at the root level, Angular creates a single, shared instance of the HeroService and injects
it into any class that asks for it.

## Injecting a dependency

The most common way to inject a dependency is to declare it in a class constructor. When Angular creates a new instance
of a component, directive, or pipe class, it determines which services or other dependencies that class needs by looking
at the constructor parameter types. For example, if the HeroListComponent needs the HeroService, the constructor can
look like this:
```
@Component({…})

classHeroListComponent{

constructor(private service:HeroService){}

}
```
Two main roles exist in the DI system: dependency consumer and dependency provider.

Angular facilitates the interaction between dependency consumers and dependency providers using an abstraction
called [Injector](https://angular.io/guide/glossary#injector).

Registry

`Consumer(Class User) ⇐==>Injector⇐==> Provider(Class)
`
When a dependency is requested, the injector checks its registry to see if there is an instance already available there.
If not, a new instance is created and stored in the registry.

# Communicating with backend services using HTTP

Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and
access other back-end services. Angular provides a client HTTP API for Angular applications,
the [HttpClient](https://angular.io/api/common/http/HttpClient) service class

You can then inject the [HttpClient](https://angular.io/api/common/http/HttpClient) service as a dependency of an
application class

```
import{Injectable}from'@angular/core';

import{HttpClient}from'@angular/common/http';

@Injectable()

export class ConfigService{

constructor(private http:HttpClient){}

}
```

## Requesting data from a server

Create a model class

```
export class Book{

  public String bibkey;
  
  public String infourl;
  
  public String preview;
  
  public String previewurl;
  
  public String thumbnailurl;

}
```

GET Request


```
getConfig(){
  returnthis.http.get<Book>(this.configUrl);
}
```

Because the service method returns an Observable of configuration data, the component subscribes to the method's return
value. The subscription callback performs minimal post-processing. It copies the data fields into the component's config
object, which is data-bound in the component template for display.

```
showConfig(){

this.configService.getConfig()

  .subscribe((data:Config)=>{

    heroesUrl: data.heroesUrl,
    
    textfile: data.textfile,
    
    date: data.date,

});

}
```

POST Request

add a new hero to the database

```
addHero(hero: Hero): Observable<Hero> {
 returnt his.http.post<Hero>(this.heroesUrl, hero, httpOptions)
}
```

DELETE Request

```
deleteHero(id: number): Observable<unknown> {

const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42

returnthis.http.delete(url, httpOptions)

.pipe(

catchError(this.handleError('deleteHero'))

);

}
```

###

# Directives

Angular templates are dynamic. When Angular renders them, it transforms the DOM according to the instructions given by
directives.

A component is technically a directive.

#### Structural directives

structural directives alter layout by adding, removing, and replacing elements in the DOM. The example template uses two
built-in structural directives to add application logic to how the view is rendered.

#### Attribute directives

Attribute directives alter the appearance or behavior of an existing element. In templates they look like regular HTML
attributes, hence the name.

`<inputtype="text"id="hero-name" [(ngModel)]="hero.name">
`

```
<div class="container mt-5">


  <table class="table table-striped">

    <thead>

      <tr>

        <th>Id</th>
        
        <th>Name</th>
        
        <th>Username</th>
        
        <th>Email</th>

      </tr>

    </thead>

    <tbody>

      <tr *ngFor="let user of Users">
      
        <td>{{ user.id }}</td>
        
        <td>{{ user.name }}</td>
        
        <td>{{ user.username }}</td>
        
        <td>{{ user.email }}</td>
      
      </tr>

    </tbody>

  </table>

</div>
```

# Auth Guards

AuthGuard is used to protect the routes from unauthorized access in angular.

How AuthGuard Works?

Auth guard provides a lifecycle event called canActivate. The canActivate is like a constructor. It will be called
before accessing the routes. The canActivate has to return true to access the page. If it returns false, we can not
access the page. We can write our user authorization and authentication logic inside the canActivate function.

5 types of guards are there

- canActivate: Implements a canActivate function that checks whether the current user has permission to activate the
  requested route.
- canDeactivateChild: The canActivatechild guard is very similar to canActivateGuard. We apply this guard to the parent
  route. The angular
- invokes this guard whenever the user tris to navigate to any of its child routes.
- canDeactive: canDeactive is an interface that is implemented by a class to create a guard which decides if a route can
  be deactivated.
- canLoad:Canload is a route guards to decide if a module can be loaded configured with a loadChild.
- Resolve: Resolve guards is used in the scenario where before navigating to any route we want to ensure whether there
  is data available or not before navigating to any route.

##

# how to implement it?

`ng g guard auth
`

```
var isAuthenticated = this.authService.getAuthStatus();

if (!isAuthenticated) {

this.router.navigate(['/login']);

}

return isAuthenticated;
```

In routing.module.ts

```
{ path: 'create', component: PostCreateComponent, canActivate: [AuthGuard]},

{ path: 'edit', component: PostCreateComponent, canActivate: [AuthGuard] },

```

Make sure to import AuthGuard in this routing file and also add it inside @NgModule providers.

```
@NgModule({

imports: [RouterModule.forRoot(routes)],

exports: [RouterModule],

providers: [AuthGuard]

})

```

# Interceptors

Interceptors allow us to intercept incoming or outgoing HTTP requests using the HttpClient . They can handle both
HttpRequest as well as HttpResponse.

### Operations of HTTP Interceptor

- Modify HTTP headers
- Modifying the request body
- Set authentication/authorization token
- Modify the HTTP response
- Error handling

` ng generate interceptor headers
`

In module.ts

```
{

provide: HTTPINTERCEPTORS,

useClass: HeadersInterceptor,

multi: true

}
```

In interceptor class

```

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

return next.handle(this.addAuthToken(request));

}

addAuthToken (request: HttpRequest<any>) {

const token = this.authService.getAuthToken();

return request.clone({

setHeaders: {

Authorization: `Basic ${token}`

}

})

}

```

### Response Intercept

```
return next.handle(req)
.pipe(map((event: HttpEvent<any>) => { 
  if (event instanceofHttpResponse) { 
  event = event.clone({body: this.modifyBody(event.body)}); 
  } 
    return event; 
}));
```

### Building an attribute directive

`ng generate directive highlight`

import ElementRef from @angular/core. ElementRef grants direct access to the host DOM element through its nativeElement
property.

```
export class HighlightDirective{

constructor(private el:[ElementRef](https://angular.io/api/core/ElementRef)){

    this.el.nativeElement.style.backgroundColor ='yellow';

  }
}

```

### Add parameter

```
@Input() ttClass: string;

this.el.nativeElement.classList.add(this.ttClass);
```

Style.css

```
.blue {
  background-color: lightblue;
}

<button [ttClass]="'blue'">Click Me</button>

```


