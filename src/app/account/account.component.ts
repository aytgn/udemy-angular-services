import { Component, Input, } from '@angular/core';
import { AccountsService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService] //
})
export class AccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  @Input() account: { name: string, status: string };
  @Input() id: number;

  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.updateStatus(this.id, status)
    this.loggingService.logStatusChange(status)
  }
}
