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

// Names change color based on Present, Tardy or Absent //

 function changeColor() {
   if (seconds <= 300 && seconds > 90) {
     document.body.style.background ="green";
   }
   else if (seconds <= 90 && seconds > 30) {
     document.body.style.background = "red";
   }
   else {
     document.body.style.background = "black";
   }
 }

 // Local Storage //

//  var saveButton = $(".saveButton");
//  console.log(saveButton);
//  saveButton.on("click", function() {
//    console.log("click");
//    var task = $(this)
//      .siblings("textarea")
//      .val();
//    var time = $(this).attr("id");
//    localStorage.setItem(time, task);
//  });
