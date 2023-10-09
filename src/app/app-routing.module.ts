import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { BrandsComponent } from './brands/brands.component';
import { HeroComponent } from './hero/hero.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent, children: [
  { path: 'header', component: HeaderComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  {path:'contact-us',component: FooterComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
