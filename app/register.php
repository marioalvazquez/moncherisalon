<?php
  include("connection.php");

  $name = $_POST['name'];
  $mail = $POST['mail'];
  $phone = $POST['phone'];
  $date = $POST['date'];
  $time = $POST['time'];
  $services = $POST['services'];

  $query = "INSERT INTO Appointment(Name, Mail, Phone, Dates, Times, Services) VALUES('$name', '$mail', '$phone', '$date', '$time', '$services')";

  $resultado = $connect->query($query);

  if ($resultado) {
    echo 1;
  }
  else{
    echo 0;
  }
 ?>
