import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FirstapplicationSharedModule } from 'app/shared/shared.module';
import { FirstapplicationCoreModule } from 'app/core/core.module';
import { FirstapplicationAppRoutingModule } from './app-routing.module';
import { FirstapplicationHomeModule } from './home/home.module';
import { FirstapplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FirstapplicationSharedModule,
    FirstapplicationCoreModule,
    FirstapplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FirstapplicationEntityModule,
    FirstapplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class FirstapplicationAppModule {}
