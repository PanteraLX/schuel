import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-scales',
    templateUrl: './scales.page.html',
    styleUrls: ['./scales.page.scss'],
})
export class ScalesPage implements OnInit {

    public pattern: string;

    public scales: Array<{ name: string; items: Array<{ name: string; id: string }> }>;

    public greekScales: Array<{ name: string; id: string }>;

    constructor(private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const routeParams = this.activeRoute.snapshot.params;
        this.pattern = routeParams.pattern;
        this.greekScales = this.getGreekScales();
        this.scales = this.getScales();
    }

    private getGreekScales() {
        return [
            {
                name: 'mixolydisch',
                id: 'melody/scales/' + this.pattern + '/mixolydic'
            }, {
                name: 'dorisch',
                id: 'melody/scales/' + this.pattern + '/doric'
            }, {
                name: 'lydisch',
                id: 'melody/scales/' + this.pattern + '/lydic'
            }, {
                name: 'phrygisch',
                id: 'melody/scales/' + this.pattern + '/phrygic'
            }, {
                name: 'äolisch',
                id: 'melody/scales/' + this.pattern + '/äolic'
            }, {
                name: 'lokrisch',
                id: 'melody/scales/' + this.pattern + '/lokric'
            }
        ];
    }

    private getScales() {
        return [
            {
                name: 'I und V',
                items: [
                    {
                        name: 'Dur',
                        id: 'melody/scales/' + this.pattern + '/mixolydic'
                    },
                    {
                        name: 'Moll',
                        id: 'melody/scales/' + this.pattern + '/mixolydic'
                    }
                ],
            }, {
                name: 'I, IV und V',
                items: [
                    {
                        name: 'Dur',
                        id: 'melody/scales/' + this.pattern + '/mixolydic'
                    },
                    {
                        name: 'Moll',
                        id: 'melody/scales/' + this.pattern + '/mixolydic'
                    }
                ],
            }, {
                name: 'Alle Funktionen',
                items: [
                    {
                        name: 'Dur',
                        id: 'melody/scales/' + this.pattern + '/mixolydic'
                    },
                    {
                        name: 'Moll',
                        id: 'melody/scales/' + this.pattern + '/mixolydic'
                    }
                ],
            },
        ];
    }
}
