import { Component, Input, } from '@angular/core';
import { AccountsService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  @Input() account: { name: string, status: string };
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status)
    this.accountsService.stattusUpdated.emit(status);
  }
}
