const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth();
const hiddenYear = document.getElementById("year");
hiddenYear.value = nowYear;
const table = document.querySelector(".calendar");
const tbodyList = table.querySelectorAll("tbody");
tbodyList.forEach(tbody => {
    const tdList = tbody.querySelectorAll("td");
    tdList.forEach(td => {
    
    });   
});