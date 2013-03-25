// ================== Document Ready Function ============= //
    $(document).ready(function() {  
          $('.carousel').carousel({
           interval: 2000
        });
          spotImage();       

//================== Datepicker plugins =================== //
    $("#datepicker").datepicker({
      beforeShowDay : $.datepicker.noWeekends
    });

//================== Form Validation ====================== //
    //when the page load hide the error message...  
    $('.error').hide();
    //when click the send button...      
      $("#submit").click(function() {     
    // when click the send button...    
    // start form validation  
      $('.error').hide();  
        var apptDate = $("input#datepicker").val();  
        if (apptDate == "") {  
        $("label#date_error").show();    
         return false;  
      }
    //...if the field leave empty show the error message and focus on that field.
      $('.error').hide();  
        var Firstname = $("input#Fname").val();  
        if (Firstname == "") {  
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
       
       $('.error').hide();  
        var Address = $("input#address").val();  
        if (Address == "") {  
        $("label#street_address_error").show();  
        $("input#address").focus();  
         return false;  
      }

      $('.error').hide();  
        var City = $("input#city").val();  
        if (City == "") {  
        $("label#city_name_error").show();  
        $("input#city").focus();  
         return false;  
      }

      $('.error').hide();  
        var Zip = $("input#zip").val();  
        if (Zip == "") {  
        $("label#zip_code_error").show();  
        $("input#zip").focus();  
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
      }   
      $("#application").hide();
        $('#message').html('<h3>Your request has been submitted.</h3><br/><h4>We will be in touch soon.</h4>');   
        addInformation();  
    }); //close click 
}); //close document ready

// ================== getLocation Function ========================== //     
// function getLocation() {

//     var mapOptions = {
//                 center   : new google.maps.LatLng(33.941024, -84.125417),
//                 zoom: 10,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             };
//             var map = new google.maps.Map(document.getElementById('map'), mapOptions);

//             var markerOptions = {
//                 position : new google.maps.LatLng(37.7831, -122.4039),
//                 map: map
//             };
//             var marker = new google.maps.Marker(markerOptions);
//                 marker.setMap(map);

//             var infoWindowOptions = {
//                 content  : 'Lawrenceville Family Dentistry!'
//             };

//             var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
//                 google.maps.event.addListener(marker,'click',function(e){
              
//                 infoWindow.open(map, marker); 
//         });
//     }; //end getLocation

// ================== spotImage Function ========================== //     
    
    function spotImage() { 
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
  };

// ================== Post Function (clloect all the field informaiton and post it to the database) ========================== //

    function addInformation() {
      var dataString =  {
          appDate   : $("#datepicker").val(),
          firstname : $("#Fname").val(),
          lastname  : $("#Lname").val(),
          street    : $("#address").val(),
          city      : $("#city").val(),
          zip       : $("#zip").val(),
          email     : $("#email").val(),
          phone     : $("#phone").val()     
        };  

    $.ajax({  
        url     : 'backliftapp/request', 
        type    : 'POST',   
        dataType: 'json',
        data    : dataString,
        success: function(data) {  
        console.log(data);
        clearForm(); 
        // $("#application").hide();
        // $('#message').html('<h3>Your request has been submitted.</h3><br/><h4>We will be in touch soon.</h4>');   
      } //close sucess 
    }); //close ajax  
  }; //close addInformation
           
// ================== Clear Form ========================== //
    function clearForm(){
      $(".patient_inputs").each(function(){
      $(this).val("");
      });
    }; //close clear


      //var dataString= 'Appointment Date:'+ apptDate + 'First name:'+ firstname +'Last name:'+ lastname + 'email:' + email + 'phone:' + phone;  
      //    alert (dataString);return false;  