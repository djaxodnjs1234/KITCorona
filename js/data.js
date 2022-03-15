const corona_kumoh_latest = document.getElementsByClassName('corona_kumoh_latest')[0];
const seven_days_corona_in_school = document.getElementsByClassName('seven_days_corona_in_school')[0];
const corona_data_table = document.getElementsByClassName('corona_data_table')[0];

let corona_students = 0;

// 최근 교내 확진자 수
for (let data of json_data) {
    if (data.school_corona !== "-") {
        corona_kumoh_latest.innerText = data.school_corona
    }
}

// 7일간 교내 확진자 수
for (let num = 0; num < 7; num++) {
    if (json_data[num].school_corona !== "-") {
        corona_students += Number(json_data[num].school_corona)
    }
}
seven_days_corona_in_school.innerText = corona_students

// 셀 채우기
cell_data = ""
for (let data of json_data) {
    cell_data += "<tr><td>" + data.date +"</td><td>" + data.school_corona + "명</td>"
}
corona_data_table.innerHTML = cell_data