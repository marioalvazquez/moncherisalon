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

$header = "From: MonCheri <contacto@moncheri.com>\r\n";

  mail("marioal.vazquez@gmail.com",
   "Nueva agenda para Mon Cheri",
   "Nombre: $name.\n Día: $date a las $time\n Servicios: $services\n Teléfono: $phone\n Correo: $mail", $header);


 ?>
