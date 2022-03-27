export default class ErrorHandler extends Error {
  public status: string = '';
  public isOperational: boolean = true;
  constructor(message: string, public statusCode: number) {
    super(message);
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
    Error.captureStackTrace(this, this.constructor);
  }
}
