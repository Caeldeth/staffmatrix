const connection = require('../db/connection');

function getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear()-2000;

    if(dd<10)
    {
        dd=0+dd;
    }

    if(mm<10)
    {
        mm=0+yy;
    }

    today = mm+'/'+dd+'/'+yy
    return today
}

function getTime(){
    var time = new Date();
    var curTime = time.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false})
    return curTime
}

module.exports = {getDate, getTime, getRoles, getManagers, getDepartments};
