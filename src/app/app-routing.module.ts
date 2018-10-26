import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'melody',
        loadChildren: './melody/melody/melody.module#MelodyPageModule'
    },
    {
        path: 'rhythm',
        loadChildren: './rhythm/rhythm/rhythm.module#RhythmPageModule'
    },
    {
        path: 'melody/scales/:pattern',
        loadChildren: './melody/scales/scales.module#ScalesPageModule'
    },
    {
        path: 'rhythm/puls/:pattern',
        loadChildren: './rhythm/puls/puls.module#PulsPageModule'
    },
    {
        path: 'melody/scales/:pattern/:scale',
        loadChildren: './common/player/player.module#PlayerPageModule'
    },
    {
        path: 'rhythm/puls/:pattern/:puls',
        loadChildren: './common/player/player.module#PlayerPageModule'
    },
    {
        path: 'melody/partialSynthesis',
        loadChildren: './common/partial-synthesis/partial-synthesis.module#PartialSynthesisPageModule'
    },
    {
        path: 'rhythm/partialSynthesis',
        loadChildren: './common/partial-synthesis/partial-synthesis.module#PartialSynthesisPageModule'
    },
    {
        path: 'melody/totalSynthesis',
        loadChildren: './common/total-synthesis/total-synthesis.module#TotalSynthesisPageModule'
    },
    {
        path: 'rhythm/totalSynthesis',
        loadChildren: './common/total-synthesis/total-synthesis.module#TotalSynthesisPageModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
