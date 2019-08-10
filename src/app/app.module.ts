import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module used for setting up the application level routing
import{RouterModule,Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { PostComponent } from './post/post.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    AboutComponent,
 
    PostComponent,
 
    BlogViewComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'post',component:PostComponent}  ,
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogViewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

