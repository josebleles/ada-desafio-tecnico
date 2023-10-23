const { format, addMinutes } = require('date-fns');

function defaultFormat(date:any){
    date = typeof(date) == 'string'? new Date(date) : date;
    if(!isNaN(date) && date instanceof Date){
        const pattern = 'yyyy-MM-dd HH:mm'; // Specify your desired date pattern
        return format(date, pattern);
    }
    return null;
}

export { defaultFormat}