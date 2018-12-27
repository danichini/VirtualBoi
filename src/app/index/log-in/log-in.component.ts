import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = ''

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(name: string, password: string) {
    console.log(`Nombre: ${name} Clave: ${password}`);
    const json = {
      name,
      password,
    }
    console.log(json);
    
  }
}
