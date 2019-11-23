import { Component } from '@angular/core';

@Component({
    selector : 'app-gmgegn',
    templateUrl : './gmgegn.component.html',
    styleUrls : ['./gmgegn.component.css']
})
export class GmgegnComponent{

    title1='Ashwini';
    todaydate=new Date();

    public title:string = 'About me';
    public constructor(private titleService: Title ) { }

    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }

    // getGreetingTime = (currentTime) => {
    //     if (!currentTime || !currentTime.isValid()) { return 'Hello'; }
      
    //     const splitAfternoon = 12; // 24hr time to split the afternoon
    //     const splitEvening = 17; // 24hr time to split the evening
    //     const currentHour = parseFloat(currentTime.format('HH'));
      
    //     if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    //       // Between 12 PM and 5PM
    //       return 'Good afternoon';
    //     } else if (currentHour >= splitEvening) {
    //       // Between 5PM and Midnight
    //       return 'Good evening';
    //     }
    //     // Between dawn and noon
    //     return 'Good morning';
    //   }
}