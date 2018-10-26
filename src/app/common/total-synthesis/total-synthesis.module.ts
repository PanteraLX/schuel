import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TotalSynthesisPage} from './total-synthesis.page';

const routes: Routes = [
    {
        path: '',
        component: TotalSynthesisPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TotalSynthesisPage]
})
export class TotalSynthesisPageModule {
}
