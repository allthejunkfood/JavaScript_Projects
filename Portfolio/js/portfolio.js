// The following function adds a smooth scrolling to all links

$(document).ready(function(){   
  $("a").on('click', function(event) {
	  
    
    if (this.Link !== "") {
      event.preventDefault();
      var Link = this.Link;
      $('html, body').animate({
        scrollTop: $(Link).offset().top
      }, 2000, function(){
        window.location.Link = Link;
      });
    }
  });
});

// These functions open and close the contact form 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  this.Close();
}
