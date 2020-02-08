// Modal //
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  // Local Storage //
  var saveButton = $(".loginBtn");
  console.log(saveButton);
  saveButton.on("click", function(event) {
    event.preventDefault();
    var studentName = $('#name').val(); 
    localStorage.setItem('student-name', studentName);
    console.log(studentName);
    var studentItem = $("<li>");
    studentItem.text(studentName);
    $("#student").append(studentItem);
  });
  // Append Name's to Student Name Div //
  
});
