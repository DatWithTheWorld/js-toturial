
var courseAPI = 'http://localhost:3000/courses';

function start(){
    getcourse(renderCourse);
    handleCourse()
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
        return `<tr class = "course-item-${course.id}">
        <td>${course.name}</td>
        <td>${course.description}</td>
        <td> <button onclick="deleteCourse(${course.id})">Xóa</button></td>
        </tr>`;
    });
    listcourse.innerHTML = htmls.join(' ');
}
function handleCourse() {
 var createbtn = document.querySelector('#create');
 createbtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var formdata = {
        name: name,
        description: description
    }
    createCourse(formdata)
 }
}

function createCourse(data,callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
fetch(courseAPI,options)
.then(function(response){
response.json();
})
.then(callback);
}
function deleteCourse(id){
  var options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }

  }
  fetch(courseAPI + '/' + id,options)
  .then(function(response){
    response.json();
  })
  .then(function(){
   var courseItem = document.querySelector('.course-item-'+id);
   if(courseItem){
    courseItem.remove();
   }
  })
}