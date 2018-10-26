import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-player',
    templateUrl: './player.page.html',
    styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

    public scale: string;
    public pattern: string;
    public puls: string;
    public audioFile: string;
    public addVideo: boolean;
    public addNotes: boolean;
    public deviceWidth: number;

    constructor(private activeRoute: ActivatedRoute, public platform: Platform) {
    }

    ngOnInit() {
        const routeParams = this.activeRoute.snapshot.params;
        this.scale = routeParams.scale;
        this.pattern = routeParams.pattern;
        this.puls = routeParams.puls;

        this.audioFile = `${this.pattern}_${this.scale || this.puls}`;
        this.addVideo = this.pattern === 'do';
        this.addNotes = this.pattern === 'read';

        this.platform.ready().then(() => {
            this.deviceWidth = this.platform.width() - 30;
        });
    }

}
