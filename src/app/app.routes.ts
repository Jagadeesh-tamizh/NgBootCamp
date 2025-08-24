import { Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './features/component-communication/component-communication/component-communication.component';
import { HomeComponent } from './features/home/home.component';
import { DirectivesComponent } from './features/directives/directives.component';
import { SignalsDemoComponent } from './features/signals/signals-demo/signals-demo.component';
import { PipesDemoComponent } from './features/pipes/components/pipes-demo/pipes-demo.component';
import { ServiceDemoComponent } from './features/service-demo/service-demo/service-demo.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'component-communication', component: ComponentCommunicationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signals', component: SignalsDemoComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesDemoComponent },
  { path: 'services', component: ServiceDemoComponent }
];
