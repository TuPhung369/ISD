let courses = [
  {
    name: "Introduction to Software Development",
    code: "SOF001IT1AE",
    extent: 5,
    timing: "1.semester",
  },
  {
    name: "Programming 1",
    code: "SOF005AS2AE",
    extent: 5,
    timing: "2.semester",
  },
  {
    name: "Programming 2",
    code: "SOF001AS3AE",
    extent: 5,
    timing: "2.semester",
  },
  {
    name: "Data Management and Databases",
    code: "SOF001AS2AE",
    extent: 5,
    timing: "2.semester",
  },
  {
    name: "Front End Programming",
    code: "SOF004AS3AE",
    extent: 5,
    timing: "3.semester",
  },
];

function listCourses() {
  let answerDiv = document.getElementById("answer");
  answerDiv.innerHTML = ""; // Clear previous content

  courses.forEach((course) => {
    let courseInfo = document.createElement("p");
    courseInfo.innerHTML = `
            <strong>Code:</strong> ${course.code}<br>
            <strong>Name:</strong> ${course.name}<br>
            <strong>Extent:</strong> ${course.extent}<br>
            <strong>Timing:</strong> ${course.timing}
            <hr>
        `;
    answerDiv.appendChild(courseInfo);
  });
}
