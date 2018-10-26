import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PlayerPage} from './player.page';
import {NotesComponent} from '../notes/notes.component';
import {AudioComponent} from '../audio/audio.component';
import {VideoComponent} from '../video/video.component';

const routes: Routes = [
    {
        path: '',
        component: PlayerPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PlayerPage, NotesComponent, AudioComponent, VideoComponent]
})
export class PlayerPageModule {
}
