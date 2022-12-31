class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.operational = true;
    Error.captureStackTrace(this, this.message);
  }
}

module.exports = AppError;
