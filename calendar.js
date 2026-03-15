function initCalendar() {
    const target = new Date();
    const nowMonth = target.getMonth();
    target.setDate(1);
    document.getElementById("year").value = target.getFullYear();
    const table = document.querySelector(".calendar");
    const tbodyList = table.querySelectorAll("tbody");
    tbodyList.forEach(tbody => {
        const tdList = tbody.querySelectorAll("td");
        tdList.forEach((td, idx) => {
            if (target.getMonth() !== nowMonth) {
                return;
            }

            if (target.getDay() === idx) {
                td.textContent = target.getDate();
                target.setDate(target.getDate() + 1);
            }
        });   
    });
}

initCalendar();