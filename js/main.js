$(document).ready(function(){
  var confirmed=false;
$("#password").focus(function(){
  
  if (confirmed==false) {
  $("#check").after( "<label id="+"confirm" +">Confirm password:"+"<br>"+"<input type="+"text"+"required>"+"</label>"+"<br><br>");
    confirmed=true;
  }

  });
  

});