<?php
$name = $_POST["name"];
$phonenumber  = $_POST["phonenumber"];
$check_in_date = $_POST["check-in-date"];
$check_out_date = $_POST["check-out-date"];
$roomtype = $_POST["roomtype"];


$conn  = mysqli_connect("localhost","root","");
if($conn){
    echo"Connected";

// $q1 = "create database booking";
$q2 = "use booking";

// $q3 = "create table bookingtable(Name varchar(20), PhoneNumber int, CheckinDate date, CheckoutDate date, Roomtype varchar(10))";

$q4 = "insert into bookingtable values('$name', $phonenumber, '$check_in_date' , '$check_out_date', '$roomtype')";

// mysqli_query($conn,$q1);
mysqli_query($conn,$q2);
// mysqli_query($conn,$q3);
mysqli_query($conn,$q4);




}

else{
    echo"Error";
}


?>