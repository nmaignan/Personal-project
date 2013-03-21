

$(document).ready(function() {  
      $('.carousel').carousel({
      interval: 2000
    })
      var spotlight = {  
         // the opacity of the "transparent" images  
        opacity : 0.2,  
  
        /*the variabless bellow are for width and height of the images so we can make 
        the list item same size */  
        imgWidth : $('.spotlightWrapper ul li').find('img').width(170),  
        imgHeight : $('.spotlightWrapper ul li').find('img').height(112)  
  
    };  
  
    //set the width and height of the list items same as the images  
    $('.spotlightWrapper ul li').css({ 'width' : spotlight.imgWidth, 'height' : spotlight.imgHeight });  
  
    //when mouse over the list item...  
    $('.spotlightWrapper ul li').hover(function(){  
  
        //...find the image inside of it and add active class to it and change opacity to 1 (no transparency)  
        $(this).find('img').addClass('active').css({ 'opacity' : 1});  
  
        //get the other list items and change the opacity of the images inside it to the one we have set in the spotlight array  
        $(this).siblings('li').find('img').css({'opacity' : spotlight.opacity}) ;  
  
        //when mouse leave...  
    }, function(){  
  
        //... find the image inside of the list item it just left and remove the active class  
        $(this).find('img').removeClass('active');  
  
    });  
  
    //when mouse leaves the unordered list...  
    $('.spotlightWrapper ul').bind('mouseleave',function(){  
        //find the images and change the opacity to 1 (fully visible)  
        $(this).find('img').css('opacity', 1);  
    });

    $("#datepicker").datepicker({
      beforeShowDay : $.datepicker.noWeekends
    });
    //when the page load hide the error message...  
    $('.error').hide();
    //when click the send button...    
    $(".button").click(function() {  
        
    // start form validation  
      $('.error').hide();  
        var apptDate = $("input#datepicker").val();  
        if (apptDate == "") {  
        $("label#date_error").show();    
         return false;  
      }

      $('.error').hide();  
        var Firstname = $("input#Fname").val();  
        if (Firstname == "") {  // if the field leave empty show the error message and focus on that field...
        $("label#first_name_error").show();  
        $("input#Fname").focus();  
         return false;  
      }  

      $('.error').hide();  
        var Lastname = $("input#Lname").val();  
        if (Lastname == "") {  
        $("label#last_name_error").show();  
        $("input#Lname").focus();  
         return false;  
      }  
        var email = $("input#email").val();  
        if (email == "") {  
        $("label#email_error").show();  
        $("input#email").focus();  
         return false;  
      }  
        var phone = $("input#phone").val();  
        if (phone == "") {  
        $("label#phone_error").show();  
        $("input#phone").focus();  
         return false;  
      }  
      
      // collect all the data from the field and store it in Ajax object and send them to the data base by Ajax post method
      //  var dataString = 'Appointment Date='+ apptDate + 'First name='+ Firstname +'Last name='+ Lastname + '&email=' + email + '&phone=' + phone;  
      //    alert (dataString);return false;  
      // $.ajax({  
      //   type: "POST",  
      //   url: "backlift/sample",  
      //   data: dataString,  
      //   success: function() {  
      //     $('#contact_form').html("<div id='message'></div>");  
      //     $('#message').html("<h2>Contact Form Submitted!</h2>")  
      //     .append("<p>We will be in touch soon.</p>")  
      //     .hide()  
      //     .fadeIn(1500, function() {  
      //       $('#message').append("<img id='checkmark' src='images/check.png' />");  
      //     });  
      //   } //close sucess 
      // }); //close ajax  
    
      return false;     
    });//close click event  
  }); //close document ready  