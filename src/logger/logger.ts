import * as winston from 'winston';
import colors from '@colors/colors';

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

const myformat = winston.format.printf(({ level, message, timestamp }) => {
    let colorizedMessage = message;
    switch (level) {
        case 'error':
            colorizedMessage = colors.red(message);
            break;
        case 'warn':
            colorizedMessage = colors.yellow(message);
            break;
        case 'info':
            colorizedMessage = colors.blue(message);
            break;
    }
    return `${timestamp} [${level}]: ${colorizedMessage}`;
});
