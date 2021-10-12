import { Component, OnInit } from '@angular/core';
import { LoggingService } from "../services/logging.service"
import { AccountsService } from "../services/account.service"

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]

})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }
  // const loggingService = new LoggingService
  // loggingService.logStatusChange(accountStatus)
  accounts: { name: string, status: string }[] = []

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus)
  }




}


