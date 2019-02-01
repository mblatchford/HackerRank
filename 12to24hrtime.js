function timeConversion(s) {
    // from 12am -12 pm
    if (s[8] === 'P') {
        // remove 'PM'
        let str = s.slice(0, 8);
        console.log(str);

        // do nothing at noon
        if (str[0] === '1' && str[1] === '2') {
            return str;  
        } else {
            let newTimeInt = parseInt(str[0].concat(str[1])) + 12;
            let newTime = str.slice(2);
            let convertedTime = newTimeInt + newTime;
            return convertedTime;  
        }

    } else if (s[8] === 'A') { // AM time

        // remove 'AM'
        let str = s.slice(0, 8);
        // 12AM
        if (str[0] === '1' && str[1] === '2') {
            let newTime = '00' + str.slice(2);
            return newTime;  
        }
        return str;
    }   

}