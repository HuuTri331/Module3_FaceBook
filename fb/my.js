document.addEventListener("DOMContentLoaded", function() {
    let birthDaySelect = document.getElementById("birthDay");
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        birthDaySelect.appendChild(option);
    }
});