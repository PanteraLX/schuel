import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-puls',
    templateUrl: './puls.page.html',
    styleUrls: ['./puls.page.scss'],
})
export class PulsPage implements OnInit {

    public pattern: string;
    public puls: Array<{ name: string; id: string }>;

    constructor(private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {

        const routeParams = this.activeRoute.snapshot.params;
        this.pattern = routeParams.pattern;
        this.puls = this.getPuls();
    }

    private getPuls() {
        return [
            {
                name: 'Puls und metrum',
                id: 'rhythm/puls/' + this.pattern + '/pulsmetrum'
            }, {
                name: 'Unterteilungen',
                id: 'rhythm/puls/' + this.pattern + '/subdivisions'
            }, {
                name: '...',
                id: 'rhythm/puls/' + this.pattern + '/rest'
            }
        ];
    }

}
