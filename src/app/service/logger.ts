import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

  


export class LoggerService {

  private logs: { action: string; timestamp: string }[] = [];

  constructor() {}

  log(action: string) {
    const entry = {
      action,
      timestamp: new Date().toLocaleString()
    };

    this.logs.push(entry);
    console.log('LOG:', entry);
  }

  getLogs() {
    return this.logs;
  }
}
