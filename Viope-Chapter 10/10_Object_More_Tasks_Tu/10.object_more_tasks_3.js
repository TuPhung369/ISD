// 10.object_more_tasks_3.js JavasScript code
// Complete this program so that it allows the user to add new courses and list courses.

// INSERT YOUR CODE HERE
// (1) Define an object constructor function here
function Course(code, name) {
    this.code = code;
    this.name = name;
}

// Function to add a new course to the course array
function addCourse() {
    var courseCode = document.getElementById("txtCourseCode").value;
    var courseName = document.getElementById("txtCourseName").value;
    
    if (courseCode === "" || courseName === "") {
        return;
    }
    
   //(2) Create a new Course object and insert it into the course array
    var newCourse = new Course(courseCode, courseName);
    
    var courseExists = false;
    for (var i = 0; i < courseArray.length; i++) {
        if (courseArray[i].name === newCourse.name || courseArray[i].code === newCourse.code) {
            courseExists = true;
            break;
        }
    }
    
    if (!courseExists) {
        courseArray.push(newCourse);
    } else {
        alert("The course was already added.");
    }
    
    // Clear input fields and focus on the course code field
    document.getElementById("txtCourseCode").value = "";
    document.getElementById("txtCourseName").value = "";
    document.getElementById("txtCourseCode").focus();
    //show the new coures.
    document.getElementById("pOutput").innerHTML = "New - " + courseArray[i].name + " (" + courseArray[i].code + ")<br />";
}

// Function to list all courses
function listCourses() {
    var outputText = "";
    
    for (var i = 0; i < courseArray.length; i++) {
        outputText += courseArray[i].name + " (" + courseArray[i].code + ")<br />";
    }
    
    document.getElementById("pOutput").innerHTML = outputText;
}

// Function to sort the course array by course name
function sortCourseArray() {
    function compareTwoCourses(a, b) {
        // Convert names to uppercase for case-insensitive sorting
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        
        if (nameA > nameB) {
            return 1;
        } else {
            return -1;
        }
    }
    
    // Sort the courseArray using the compareTwoCourses function
    courseArray.sort(compareTwoCourses);
    //update the list of courses
    listCourses()
    // Log the sorted array for debugging
    console.log(courseArray);
}

// This array is created when the page is loaded
var courseArray = [];