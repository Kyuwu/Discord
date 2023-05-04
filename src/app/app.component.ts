import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discord';

   discord() {
    (async () => {
      const response = await fetch("https://discord.com/api/v10/users/@me/pomelo", {
        method: "POST",
    
        body: JSON.stringify({
          username: "Moshi"
        }),
    
        headers: {
          "Content-Type": "application/json",
          "Authorization": "MTg1NDAyOTAxMjM2MTU0MzY4.G7P2NL.30muqBi5gQeLnUXaxvLvzwoC4W5CseVs2J1uFY"
        }
      });
    
      const result = await response.json();
    
      console.log(result);
    })();
   }
}

