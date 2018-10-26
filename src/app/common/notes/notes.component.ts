import {Component, Input, OnInit} from '@angular/core';

import {Flow} from 'vexflow';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    @Input() width: number;

    constructor() {
    }

    ngOnInit() {

        // Create an SVG renderer and attach it to the DIV element named "boo".
        let div = document.getElementById('boo');
        let renderer = new Flow.Renderer(div, Flow.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 500);
        let context = renderer.getContext();
        context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

        // Create a stave of width 400 at position 10, 40 on the canvas.
        let stave = new Flow.Stave(10, 10, 400);

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        let notes = [
            new Flow.StaveNote({
                keys: ['e##/5'],
                duration: '8d'
            }).addAccidental(0, new Flow.Accidental('##')).addDotToAll(),
            new Flow.StaveNote({
                keys: ['b/4'],
                duration: '16'
            }).addAccidental(0, new Flow.Accidental('b'))
        ];

        let beams = [
            new Flow.Beam(notes)
        ];

        let all_notes = notes;
        Flow.Formatter.FormatAndDraw(context, stave, all_notes);
        // beams.forEach(function (b) {
        //     b.setContext(context).draw();
        // });

    }

}
