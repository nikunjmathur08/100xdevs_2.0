function updateTime() {
    const currDate = new Date();
    console.log(currDate.getHours(), ":", currDate.getMinutes(), ":", currDate.getSeconds());
}

function amPMTime() {
    const currDate = new Date();
    if (currDate.getHours() > 12) {
        console.log(currDate.getHours() - 12, ":", currDate.getMinutes(), ":", currDate.getSeconds(), "PM");
    } else {
        console.log(currDate.getHours(), ":", currDate.getMinutes(), ":", currDate.getSeconds(), "AM");
    }
}

setInterval(updateTime, 1000);