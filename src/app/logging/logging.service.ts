export class LoggingService {
  logStatusChange(status: string) {
    console.log(`new status is: ${status.toUpperCase()}`)
  }
}
