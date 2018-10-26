import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: Array<{ name: string; icon: string; id: string }> = [
      {
          name: 'Melodie',
          icon: 'musical-notes',
          id: 'melody'
      },
      {
          name: 'Rhythmik',
          icon: 'leaf',
          id: 'rhythm'
      }
  ];
}
