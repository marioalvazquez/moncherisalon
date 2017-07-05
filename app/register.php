<?php
  include("connection.php");

  $name = $_POST['name'];
  $mail = $POST['mail'];
  $phone = $POST['phone'];
  $date = $POST['date'];
  $time = $POST['time'];
  $services = $POST['services'];

  $query = "INSERT INTO Appointment(Name, Mail, Phone, Date, Time, Services) VALUES('$name', '$mail', '$phone', '$date', '$time', '$services')";

  $queryCustomer = "INSERT INTO Customer(Name, Mail, Phone) VALUES ('$name', '$mail', '$phone')";

  $resultado = $connect->query($query);
  $resultado2 = $connect->query($queryCustomer);
  if ($resultado) {
    echo 1;
  }
  else{
    echo 0;
  }
 ?>
