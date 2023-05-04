import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  add: FormGroup;
  constructor(public fb: FormBuilder) {
    this.add = this.fb.group({
      name: ['', Validators.required],
      token: ['', Validators.required],
    });
  }

   discord() {
    (async () => {
      const response = await fetch("https://discord.com/api/v10/users/@me/pomelo", {
        method: "POST",
    
        body: JSON.stringify({
          username: `${this.add.controls['name'].value}`
        }),
    
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${this.add.controls['token'].value}`
        }
      });
    
      const result = await response.json();
    
      console.log(result);
      if(result.errors) {
        this.title = result.errors.username._errors[0].message
      } else {
        this.title = "Not taken or not a valid token!"
      }
    })();
   }
}

