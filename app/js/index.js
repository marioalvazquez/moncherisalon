$(document).ready(() => {

  //Smooth scroll
  // Select all links with hashes
  $('a.scroll')
      .click(function (event) {
          // On-page links
          if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
              location.hostname == this.hostname
          ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                  // Only prevent default if animation is actually gonna happen
                  event.preventDefault();
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 500, function () {
                      // Callback after animation
                      // Must change focus!
                      var $target = $(target);
                      $target.focus();
                      if ($target.is(":focus")) { // Checking if the target was focused
                          return false;
                      } else {
                          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                          $target.focus(); // Set focus again
                      };
                  });
              }
          }
      });


  toggleServices();
  servicesHeight();
  $('.modal').modal();
  $('.tooltipped').tooltip({delay: 50});

  $('.timepicker').pickatime({
    default: 'now', // Set default time
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Limpiar', // text for clear-button
    canceltext: 'Cancelar', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});

function servicesHeight() {
  const heights = [];
  const cards = $('.services-card');

  for (var i = 0; i < cards.length; i++) {
    heights.push($(cards[i]).height());
  }
  $(cards).height(Math.max(...heights));
  $('.services-detail').hide();
  console.log(heights);
}

function toggleServices() {
  $('.services-card').hover(
    function () {
      $(this).find('.services-detail').fadeIn();
    },
    function () {
      $(this).find('.services-detail').fadeOut();
    }
  )
};


function validateForm() {
  const name = $('input[name="name"]').val();
  const mail = $('input[name="mail"]').val();
  const phone = $('input[name="phone"]').val();
  const date = $('input[name="date"]').val();
  const time = $('input[name="time"]').val();
  const services = $('textarea[name="services"]').val();
  const err = $('p.error-form');

  if (name == "" || name.length < 2) {
    $(err).text("Introduce un nombre válido");
    return false;
  }
  $(err).text("");

  const regExMail = /\S+@\S+\.\S+/;
  if (!regExMail.test(mail)) {
    $(err).text("Introduce un email válido");
    return false;
  }
  $(err).text("");

  if (phone.length != 10) {
    $(err).text("Introduce un teléfono de 10 dígitos");
    return false;
  }

  $(err).text("");

  const realphone = parseInt(phone);
  if (typeof(realphone) != "number" || isNaN(realphone)) {
    $(err).text("Introduce solo números");
    return false;
  }

  $(err).text("");

  const dateToSend = new Date(date);

  if (dateToSend < new Date()) {
    $(err).text("Introduce una fecha mayor a la actual");
    return false;
  }

  $(err).text("");

  if (dateToSend.getDay() < 2 || dateToSend.getDay() > 6) {
    $(err).text("Introduce una fecha entre Martes y Sábado");
    return fasle;
  }

  $(err).text("");

  if (dateToSend.getDay() == 6) {
    if (time < "11:00" || time > "17:00") {
      $(err).text("Horario de Sábado es de 11:00 a.m a 5:00 p.m");
      return false;
    }
  }
  else{
    if (time < "10:00" || time > "20:00") {
      $(err).text("Horario de Martes a Viernes es de 10:00 a.m a 8:00 p.m");
      return false;
    }
    if (time > "14:00" && time < "16:00") {
      $(err).text("Horario de Comida de 2:00 p.m a 4:00 p.m intente otra hora válida");
      return false;
    }
  }
  $(err).text("");

  if (services.length < 3) {
    $(err).text("Llena los servicios correctamente");
    return false;
  }

  $('#modalForm').modal('open');

  $.ajax({
    type: "POST",
    url: "register.php",
    data: ($('form').serialize()),
    success: data =>{
        $('.preloader-wrapper').hide();
      if (data == "1") {
        $('p.form-result-message').text("Registro exitoso, te esperamos en Mon Cheri el día de tu cita");
      }
      else{
        $('p.form-result-message').text("Algo salió mal, vuele a intentar más tarde");
      }
      $('.accept-button').show();
    },
    fail: data =>{
      $('p.form-result-message').text("Algo salió mal, vuele a intentar más tarde");
    }
  })
}
