
export const formatDate = date => {
    const formattedDate = new Date(date);
    let year = formattedDate.getFullYear();
    let month = formattedDate.getMonth()+1;
    let dt = formattedDate.getDate();

    if (dt < 10) {
    dt = '0' + dt;
    }
    if (month < 10) {
    month = '0' + month;
    }

    return dt + '/' + month + '/'+ year
}

export const formatHour = date => {
    const formattedDate = new Date(date);
    let hours = formattedDate.getHours();
    let minutes = formattedDate.getMinutes();
    let seconds = formattedDate.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return hours + ':' + minutes + ':'+ seconds + "h"
}

export const formatId = idInput => {
    let id = idInput;
    if (id < 10) {
        id = "00" + id
    }else if (id < 100) {
        id = "0" + id
    }
    return id
}