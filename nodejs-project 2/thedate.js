const d = new Date();
let dayDate = d.getDate();
let month = d.getMonth();
if (month < 10) {
    month = `0${month}`
}
if (dayDate < 10) {
    dayDate = `0${dayDate}`
}
let currentDate = `${dayDate}-${month}-${d.getFullYear()}`
module.exports = currentDate