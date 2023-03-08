function relojFecha(miFecha){
    var year = miFecha.getFullYear();
    var month = miFecha.getMonth();
    var dayn = miFecha.getDate();
    var day = miFecha.getDay();
    var hour = miFecha.getHours() >= 10? miFecha.getHours() : "0" + miFecha.getHours();
    var minute = miFecha.getMinutes() >= 10? miFecha.getMinutes() : "0" + miFecha.getMinutes();
    var second = miFecha.getSeconds() >= 10? miFecha.getSeconds() : "0" + miFecha.getSeconds();
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","Juny","July","August","September","October","November","December"];

    var fecha = days[day]+" "+dayn+" of "
    +months[month]+" of "+year+" "+hour+":"+minute+":"+second;
    console.log(fecha);
}
/*
var id  = setInterval(function(){
    var miFecha = new Date();
    relojFecha(miFecha);
    clearInterval(id);
},1000);
*/

class Clock{
    constructor(){
        this.date = new Date();
    }
    getDay(){
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        return days[this.date.getDay()];
    }
    getDayNumber(){
        return this.date.getDate() >= 10? this.date.getDate() : "0" + this.date.getDate();
    }
    getMonth(){
        const months = ["January","February","March","April","May","Juny","July","August","September","October","November","December"];
        return months[this.date.getMonth()];
    }
    getYear(){
        return this.date.getFullYear();
    }
    getHour(){
        return this.date.getHours() >= 10? this.date.getHours() : "0" + this.date.getHours();
    }
    getMinutes(){
        return this.date.getMinutes() >= 10? this.date.getMinutes() : "0" + this.date.getMinutes();
    }
    getSeconds(){
        return this.date.getSeconds() >= 10? this.date.getSeconds() : "0" + this.date.getSeconds();
    }
    getDate(){
        return `${this.getDay()} ${this.getDayNumber()} of ${this.getMonth()} of ${this.
            getYear()} ${this.getHour()}:${this.getMinutes()}:${this.getSeconds()}`
    }
}

setInterval(() => {
    const clock = new Clock();
    console.log(clock.getDate());
},1000);
