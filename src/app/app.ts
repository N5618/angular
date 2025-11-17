
import { Component } from '@angular/core';
import { LoggerService } from './service/logger';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',

})


export class AppComponent {

  constructor(private logger: LoggerService) {}

  doSomething() {
    this.logger.log('בוצעה פעולה כלשהי');
  }

  showLogs() {
    console.log(this.logger.getLogs());
  }

 
  text1 = 'Angular';
  text2 = 'Hello World';
  text3 = 'אבגדה';
}




