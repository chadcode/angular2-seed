import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  startTime=new Date('1-1-2016 3:00 pm');
  minDate=new Date('Dec 15 2016');
  
  /*
  languages = ["English", "Spanish", "Other"];
  model = new Employee('', '', false, '', 'default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(value) {

    if (value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;

  }
  */
}
