const clear = require('clear');
const chalk = require('chalk');

clear();
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

console.log(
    chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                    P R O D U C T I O N  "C I C S"
=========================================================================================
Customer Assistance and Problem Reporting, call the Help desk at 612-555-1234.

  █████████  ███████████   █████████   ███████████ ███████████                     
  ███░░░░░███░█░░░███░░░█  ███░░░░░███ ░░███░░░░░░█░░███░░░░░░█                     
 ░███    ░░░ ░   ░███  ░  ░███    ░███  ░███   █ ░  ░███   █ ░                      
 ░░█████████     ░███     ░███████████  ░███████    ░███████                        
  ░░░░░░░░███    ░███     ░███░░░░░███  ░███░░░█    ░███░░░█                        
  ███    ░███    ░███     ░███    ░███  ░███  ░     ░███  ░                         
 ░░█████████     █████    █████   █████ █████       █████                           
  ░░░░░░░░░     ░░░░░    ░░░░░   ░░░░░ ░░░░░       ░░░░░                            
           ██████   ██████   █████████   ███████████ ███████████   █████ █████ █████
          ░░██████ ██████   ███░░░░░███ ░█░░░███░░░█░░███░░░░░███ ░░███ ░░███ ░░███ 
           ░███░█████░███  ░███    ░███ ░   ░███  ░  ░███    ░███  ░███  ░░███ ███  
           ░███░░███ ░███  ░███████████     ░███     ░██████████   ░███   ░░█████   
           ░███ ░░░  ░███  ░███░░░░░███     ░███     ░███░░░░░███  ░███    ███░███  
           ░███      ░███  ░███    ░███     ░███     ░███    ░███  ░███   ███ ░░███ 
           █████     █████ █████   █████    █████    █████   █████ █████ █████ █████
          ░░░░░     ░░░░░ ░░░░░   ░░░░░    ░░░░░    ░░░░░   ░░░░░ ░░░░░ ░░░░░ ░░░░░ 

Press enter to continue...`
    )
);                                                         
                                                                                    
                                                                                    