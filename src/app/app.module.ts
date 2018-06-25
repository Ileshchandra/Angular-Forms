import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WordsPipePipe } from './words.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes,provideRoutes } from '@angular/router';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';

const APP_ROUTES:Routes = [
  { path: 'orders', component: TemplateFormComponent },
    { path :'', component: OrderFormComponent },
        { path: 'model', component: ModelDrivenFormComponent },   
]

@NgModule({
  declarations: [
    AppComponent,
    WordsPipePipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    OrderFormComponent,
    ModelDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
