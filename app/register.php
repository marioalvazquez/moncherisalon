<?php
  include("connection.php");

  $name = $_POST['name'];
  $mail = $_POST['mail'];
  $phone = $_POST['phone'];
  $date = $_POST['date'];
  $time = $_POST['time'];
  $services = $_POST['services'];

  $query = "INSERT INTO Appointment(Name, Mail, Phone, Dates, Times, Services) VALUES('$name', '$mail', '$phone', '$date', '$time', '$services')";

  $resultado = $connect->query($query);

  if ($resultado) {
    echo "1";
  }
  else{
    echo "0";
  }

$header = "From: MonCheri <contacto@moncheribeautysalon.com>\r\n";

  mail("marioal.vazquez@gmail.com",
   "Nueva agenda para Mon Cheri",
   "Nombre: $name.\n Día: $date a las $time\n Servicios: $services\n Teléfono: $phone\n Correo: $mail", $header);

$message = '<DOCTYPE html><html><head><style>';
$message .= '.container{margin:2rem;padding:2rem;text-align:center;';
$message .= 'border-radius:10px; border: 1px solid #e1bee7}';
$message .= '</style></head>';
$message .= '<body><div class="container"><h2>Agendamos exitosamente tu cita</h2>';
$message .= "<p>Fecha: $date, Hora: $time</p>";
$message .= "<p>Servicios: $services</p>";
$message .= "<p>No olvides presentarte 10 minutos antes de tu cita.</p>";
$message .= "<p>¡Saludos!</p>";
$message .= '</div></body></html>';

   mail($mail, "Registro de cita exitoso", $message, $header);


 ?>
