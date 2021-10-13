import { Component, OnInit } from '@angular/core';
import { LoggingService } from "../services/logging.service"
import { AccountsService } from "../services/account.service"

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],


})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.stattusUpdated.subscribe((status: string) => alert("New Status: " + status))

  }
  // const loggingService = new LoggingService
  // loggingService.logStatusChange(accountStatus)
  accounts: { name: string, status: string }[] = []

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus)
  }




}


