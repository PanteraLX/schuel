import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-melody',
    templateUrl: './melody.page.html',
    styleUrls: ['./melody.page.scss'],
})
export class MelodyPage implements OnInit {

    public courses: Array<{ name: string; id: string }> = [
        {
            name: 'Gesamtsynthese',
            id: 'melody/totalSynthesis'
        },
        {
            name: 'Noten lesen',
            id: 'melody/scales/read/notes'
        },
        {
            name: 'Teilsynthese',
            id: 'melody/partialSynthesis'
        },
        {
            name: 'do re mi fa',
            id: 'melody/scales/do'
        },
        {
            name: 'bam bam',
            id: 'melody/scales/bam'
        }

    ];

    constructor() {
    }

    ngOnInit() {
    }

}
