import * as winston from 'winston';
import colors from '@colors/colors';
import { TransformableInfo } from 'logform';

//define the custom format 
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.timestamp(),
//     winston.format.printf(({ timestamp, level, message }) => {
//       return `${timestamp} [${level}]: ${message}`;
//     })
//   ),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'logs/app.log' })
//   ]
// });

// export default logger;

const myFormat = winston.format.printf((info: TransformableInfo) => {
    let colorizedMessage = info.message;
    switch (info.level) {
        case 'error':
            colorizedMessage = colors.red(info.message as string);
            break;
        case 'warn':
            colorizedMessage = colors.yellow(info.message as string);
            break;
        case 'info':
            colorizedMessage = colors.green(info.message as string);
            break;
    }
    return `${info.timestamp} ${info.level}: ${colorizedMessage}`
});

// Create logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(), // Required for timestamp to exist
    myFormat
  ),
  transports: [new winston.transports.Console()]
});