import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { RegisterParticipantComponent } from './register-participant/register-participant.component';


const routes: Routes = [
  { path: 'eventList', component: EventListComponent },
  { path: '', redirectTo: '/eventList', pathMatch: 'full' },
  { path: 'eventForm/:id', component: RegisterParticipantComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
