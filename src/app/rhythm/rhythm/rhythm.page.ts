import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-rhythm',
    templateUrl: './rhythm.page.html',
    styleUrls: ['./rhythm.page.scss'],
})
export class RhythmPage implements OnInit {

    public courses: Array<{ name: string; id: string }> = [
        {
            name: 'Gesamtsynthese',
            id: 'rhythm/totalSynthesis'
        },
        {
            name: 'Noten lesen',
            id: 'rhythm/puls/read/notes'
        },
        {
            name: 'Teilsynthese',
            id: 'rhythm/partialSynthesis'
        },
        {
            name: 'du du dej',
            id: 'rhythm/puls/du'
        },
        {
            name: 'bah bah',
            id: 'rhythm/puls/bah'
        }

    ];

    constructor() {
    }

    ngOnInit() {
    }

}
