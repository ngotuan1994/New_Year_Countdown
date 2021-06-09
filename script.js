const nextYear = new Date().getFullYear()+1;
const newYear = "1 Jan "+nextYear;
const days_doc = document.getElementById("days")
const hours_doc = document.getElementById("hours")
const minutues_doc = document.getElementById("minutues")
const seconds_doc = document.getElementById("seconds")
const countTime = () =>{
    const nextYearDate = new Date(newYear);
    const currDate = new Date();
    const time = (nextYearDate - currDate)/1000;
    const days = Math.floor(time/3600/24);
    const hours = Math.floor(time/3600 %24);
    const mins = Math.floor(time/60%60);
    const seconds = Math.floor( time%60);

    console.log(days, hours, mins, seconds);
    days_doc.innerHTML = days;
    hours_doc.innerHTML = hours;
    minutues_doc.innerHTML = mins;
    seconds_doc.innerHTML = seconds;
}

setInterval(countTime,1000);