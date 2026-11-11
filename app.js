
const fs = require("fs");

// อ่านไฟล์ JSON
const data = JSON.parse(
    fs.readFileSync("graduation.json", "utf8")
);

// แสดงข้อมูลนักศึกษา
console.log("=== ระบบตรวจสอบจบ ===");

console.log("ชื่อ:", data.student.name);

console.log(
    "หน่วยกิตที่ผ่าน:",
    data.graduation_check.passed_credits
);

console.log(
    "GPAX:",
    data.graduation_check.gpax_current
);

console.log(
    "สถานะการจบ:",
    data.graduation_status
);
