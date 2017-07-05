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
    echo 'Error: ', $connect->error;
  }
 ?>
