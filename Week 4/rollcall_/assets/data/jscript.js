function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}
function getSemester() {
    let semesterList = document.querySelector("#semesterList");
    semesterList.innerHTML = "";
    let options = [];
    let option = document.createElement("option");
    option.value = 0;
    option.text = "select a semester";
    options.push(option);
    for (let i = 0; i < arySemesters.length; i++) {
        let item = arySemesters[i];

        let option = document.createElement("option");
        option.value = item[0];
        option.text = item[1];

        options.push(option);
    }
    for(let i = 0; i < options.length; i ++) {
        semesterList.appendChild(options[i]);
    }
}
function getClass() {
    let semesterList = document.querySelector("#semesterList");

    let value = semesterList.value;


    let classArray = eval("ary"+value);

    let classList = document.querySelector("#classList");
    classList.innerHTML = "";
    let options = [];
    let option = document.createElement("option");
    option.value = 0;
    option.text = "Select a Class";
    options.push(option);
    for(let i = 0; i < classArray.length; i++) {
        let item = classArray[i];
        let option = document.createElement("option");
        option.value = item[0];
        option.text = item[1];

        options.push(option)
    }
    for(let i = 0; i < options.length; i++) {
        classList.appendChild(options[i]);
    }
}
function deleteClass() {
    let semesterList = document.querySelector("#semesterList");
    let value = semesterList.value;
    
    let classList = document.querySelector("#classList");

    if(value == 0) {
        alert("Select a class to delete");
    } else {
        let classArray = eval("ary"+value);    
        console.log(classArray);
        console.log(classList.selectedIndex);
        classArray.splice(classList.selectedIndex, 1);
        
        getClass();
        getSemester();
    }
}
function addClass() {
    let semesterList = document.querySelector("#semesterList");
    let value = semesterList.value;

    let className = document.querySelector("#className").value;
    let sectionNumber = document.querySelector("#sectionNumber").value;

    if(className == "" || sectionNumber == "") {
        alert("Input a class name and section number");
    } else {
        let classArray = eval("ary"+value);    
        classArray.push([className, sectionNumber]);
        document.querySelector("#className").value = "";
        document.querySelector("#sectionNumber").value = "";

        getClass();
        getSemester();
    }
}

function getStudents() {
    let classList = document.querySelector("#classList");
    let value = classList.value;
    
    let studentList = document.querySelector("#studentList");
    studentList.innerHTML = "";

    let userArray = eval("ary"+value);

    let options = [];
    for (let i = 0; i < userArray.length; i++) {
        let item = userArray[i];

        let option = document.createElement("option");
        option.value = item[0];
        option.text = item[1];

        options.push(option);
    }

    for (let i = 0; i < options.length; i++) {
        studentList.appendChild(options[i]);
    }
}
function addStudent() {
    let classList = document.querySelector("#classList");
    let value = classList.value;

    let meid = document.querySelector("#meid").value;
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;

    if(meid == "" || firstName == "" || lastName == "") {
        alert("Input an MEID, first, and last name");
    } else {
        let classArray = eval("ary"+value);    
        classArray.push([meid, lastName+", "+firstName]);
        
        document.querySelector("#meid").value = "";
        document.querySelector("#firstName").value = "";
        document.querySelector("#lastName").value = "";

        getStudents();
    }
}

function deleteStudent() {
    let classList = document.querySelector("#classList");
    let studentList = document.querySelector("#studentList");
    let value1 = classList.value;
    let value2 = studentList.value;

    if(value2 == 0) {
        alert("Select a student to delete");
    } else {
        let studentArray = eval("ary"+value1);    
        studentArray.splice(studentList.selectedIndex, 1);
        
        getStudents();
    }
}
function deleteClass() {
    let semesterList = document.querySelector("#semesterList");
    let value = semesterList.value;
    
    let classList = document.querySelector("#classList");

    if(value == 0) {
        alert("Select a class to delete");
    } else {
        let classArray = eval("ary"+value);    
        console.log(classArray);
        console.log(classList.selectedIndex);
        classArray.splice(classList.selectedIndex, 1);
        
        getClass();
        getSemester();
    }
}