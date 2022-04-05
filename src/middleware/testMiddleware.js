const logSomeToConsole = content => store => next => action => {
    console.log(`before dispatch: ${content}`);
    next(action);
    console.log(`after dispatch: ${content}`);
}

const logAToConsole = logSomeToConsole('A');
const logBToConsole = logSomeToConsole('B');
const logCToConsole = logSomeToConsole('C');
const logDToConsole = logSomeToConsole('D');

export { logAToConsole, logBToConsole, logCToConsole, logDToConsole }