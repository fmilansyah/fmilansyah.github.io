(function($) { 
    "use strict";
    
    
    /*================================================================= 
        Isotope initialization 
    ==================================================================*/
    var $grid = $('.grid').isotope({
      // options
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    }); 
    
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    
    /* checking active filter */
    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll('.button-group');
    for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
    }
    
    function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    });
    }
    
    
    /*================================================================= 
        Contact form 
    ==================================================================*/
    $(function() {
        // Here is the form
        var form = $('#fungi-contact');
    
        // Getting the messages div
        var formMessages = $('.form-message p');
    
    
        // Setting up an event listener for the contact form
      $(form).submit(function(event) {
          // Stopping the browser to submit the form
          event.preventDefault();
          
          // Serializing the form data
        var formData = $(form).serialize();
    
        // Submitting the form using AJAX
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
          
            // Making the formMessages div to have the 'success' class
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
    
            // Setting the message text
            $(formMessages).text(response);
    
            // Clearing the form after successful submission 
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#inputPhone').val('');
            $('#inputMessage').val('');
        }).fail(function(data) {
          
            // Making the formMessages div to have the 'error' class
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
    
            // Setting the message text
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    
      });
    
    });
    
    /*================================================================= 
        Animate on scroll initialization
    ==================================================================*/
    AOS.init({
      once: true,
    });
    
    })(jQuery);
    
    