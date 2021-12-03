import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GeneratorComponent } from './generator/generator.component'
import { LeuksComponent } from './leuks/leuks.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: GeneratorComponent },
  { path: 'generator', component: GeneratorComponent },
  { path: 'leuks', component: LeuksComponent },
  
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
