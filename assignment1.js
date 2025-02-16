function createStudentInfo(firstName, middleName, lastName, birthdate, birthplace, address, courseYear, dreamJob) {
    return {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        birthdate: birthdate,
        birthplace: birthplace,
        address: address,
        courseYear: courseYear,
        dreamJob: dreamJob
    };
}

function printStudentInfo(studentInfo, role) {
    let fullname = ${studentInfo.firstName} ${studentInfo.middleName} ${studentInfo.lastName};
    console.log(${role}'s Information:\n);
    console.log(Full Name: ${fullname});
    console.log(Birthdate: ${studentInfo.birthdate});
    console.log(Birthplace: ${studentInfo.birthplace});
    console.log(Address: ${studentInfo.address});
    console.log(Course and Year: ${studentInfo.courseYear});
    console.log(Dream Job: ${studentInfo.dreamJob}\n);
}

function getUserInput(question) {
    const readline = require('readline-sync');
    return readline.question(question);
}


let studentInfo = createStudentInfo(
    getUserInput("Enter Student's First Name: "),
    getUserInput("Enter Student's Middle Name: "),
    getUserInput("Enter Student's Last Name: "),
    getUserInput("Enter Student's Birthdate: "),
    getUserInput("Enter Student's Birthplace: "),
    getUserInput("Enter Student's Address: "),
    getUserInput("Enter Student's Course and Year: "),
    getUserInput("Enter Student's Dream Job: ")
);

let classmateInfo = createStudentInfo(
    getUserInput("Enter Classmate's First Name: "),
    getUserInput("Enter Classmate's Middle Name: "),
    getUserInput("Enter Classmate's Last Name: "),
    getUserInput("Enter Classmate's Birthdate: "),
    getUserInput("Enter Classmate's Birthplace: "),
    getUserInput("Enter Classmate's Address: "),
    getUserInput("Enter Classmate's Course and Year: "),
    getUserInput("Enter Classmate's Dream Job: ")
);


printStudentInfo(studentInfo, "Student");
printStudentInfo(classmateInfo, "Classmate")