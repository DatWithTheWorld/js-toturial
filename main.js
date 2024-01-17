
var courseAPI = 'http://localhost:3000/courses';

function start(){
    getcourse(renderCourse);
}
start();
function getcourse(callback){
    fetch(courseAPI)
    .then(function(response){
        return response.json();
    }) 
    .then(callback);
}

function renderCourse(courses){
    var listcourse = document.querySelector("#list-courses");
    var htmls = courses.map(function(course){
        return `<li>
        <h3>${course.name}</h3>
        <h2>${course.description}</h2>
        <h1>${course.id}</h1>
        </li>`;
    });
    listcourse.innerHTML = htmls.join(' ');
}