import { ToastService } from '../components/toast/toast.service';

/**
 * Uses Logger util to log errors, success and debug messages.
 *
 * @example
 * private toastService: ToastService;
 *
 * logger = new Logger(this.toastService);
 * this.logger.success('Success', 'Success message content');
 */
export class Logger {

  constructor(private toastService: ToastService) {
  }

  /**
   * Log a success message.
   * @param title
   * @param content
   *
   * @example
   * this.logger.success('Success', 'Success message content');
   *
   */
  public success(title, content) {
    return this.toastService.setToastMessage(title, content, 'success');
  }

  /**
   * Log an error message.
   * @param title
   * @param content
   *
   * @example
   * this.logger.error('Error', 'Error message content');

   */
  public error(title, content) {
    return this.toastService.setToastMessage(title, content, 'error');
  }

  /**
   * Log a warning message.
   * @param title
   * @param content
   *
   * @example
   * this.logger.warning('Warning', 'Warning message content');
   */
  public warning(title, content) {
    return this.toastService.setToastMessage(title, content, 'warning');
  }

  /**
   * Log an info message.
   * @param title
   * @param content
   *
   * @example
   * this.logger.info('Info', 'Info message content');
   */
  public info(title, content) {
    return this.toastService.setToastMessage(title, content);
  }
}
