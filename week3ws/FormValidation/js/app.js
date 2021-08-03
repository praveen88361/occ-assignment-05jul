function validateForm() {
    let fname = firstname();
    let lname = lastname();
    let mail = email();
    let dropdown = gender();
    let stream = course();
    console.log({
        FirstName: fname, LastName: lname,
        Email: mail, gender: dropdown, course: stream
    });
    return false;
}

function firstname() {
    let fname = document.forms["myForm"]["firstName"].value;
    if (fname.length == 0) {
        document.getElementById("err").innerHTML = "Firstname required";
        return false;
    } else {
        document.getElementById("err").innerHTML = "";
        return fname;
    }
}
function lastname() {
    let lname = document.forms["myForm"]["lastName"].value;
    if (lname.length == 0) {
        document.getElementsByTagName("span")[1].innerHTML = "Lastname required";
        return false;
    } else {
        document.getElementsByTagName("span")[1].innerHTML = "";
        return lname;
    }
}
function email() {
    let email = document.forms["myForm"]["enterEmail"].value;
    if (email.length == 0) {
        document.getElementsByTagName("span")[2].innerHTML = "Email required";
        return false;
    } else {
        document.getElementsByTagName("span")[2].innerHTML = "";
        return email;
    }
}
function gender() {
    let gender = document.forms["myForm"]["gender"].value;
    if (gender == "select") {
        document.getElementsByTagName("span")[3].innerHTML = "Gender required";
        return false;
    }
    else {
        document.getElementsByTagName("span")[3].innerHTML = "";
        return gender;
    }
}
function course() {
    if (document.myForm.checkbox1.checked == true && document.myForm.checkbox2.checked == true) {
        document.getElementsByTagName("span")[4].innerHTML = "";
        let first = document.getElementById("one").value;
        let last = document.getElementById("two").value;
        return Object({ ch1: first, ch2: last });
    }
    else if (document.myForm.checkbox1.checked == true) {
        document.getElementsByTagName("span")[4].innerHTML = "";
        let first = document.getElementById("one").value;
        return first;
    } else if (document.myForm.checkbox2.checked == true) {
        document.getElementsByTagName("span")[4].innerHTML = "";
        let last = document.getElementById("two").value;
        return last;
    }
    else {
        document.getElementsByTagName("span")[4].innerHTML = "Course required";
        return false;
    }
}