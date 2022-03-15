const corona_kumoh_latest = document.getElementsByClassName('corona_kumoh_latest')[0];
const seven_days_corona_in_school = document.getElementsByClassName('seven_days_corona_in_school')[0];
const corona_data_table = document.getElementsByClassName('corona_data_table')[0];

let corona_students = 0;

// 최근 교내 확진자 수
for (let data of json_data) {
    if (data.school_corona !== "-") {
          corona_kumoh_latest.innerText = data.school_corona;
          break;
    }
}

// 7일간 교내 확진자 수
for (let num = 0; num < 7; num++) {
    if (json_data[num].school_corona !== "-") {
        corona_students += Number(json_data[num].school_corona)
    }
}
seven_days_corona_in_school.innerText = corona_students;

// 셀 채우기
cell_data = ""
for (let data of json_data) {
    let date = data.date;
    if (data.school_corona === "-"){
        var school_corona = data.school_corona;
    } else {
        var school_corona = data.school_corona + "명";
    }
    cell_data += "<tr><td>" + date + "</td><td>" + school_corona + "</td>"
}
corona_data_table.innerHTML = cell_data;
