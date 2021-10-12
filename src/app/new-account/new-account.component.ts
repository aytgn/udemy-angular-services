import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../logging/logging.service"

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent {
  constructor() { }

  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus

    });
    const loggingService = new LoggingService
    loggingService.logStatusChange(accountStatus)
  }
}
