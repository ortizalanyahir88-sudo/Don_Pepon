<?php

$servidor   = "localhost";
$usuario    = "root";
$password   = "";          
$basededatos = "don_pepon";

$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos);


if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}


$Nombre           = $_POST['Nombre'];
$Apellido_Paterno = $_POST['Apellido_Paterno'];
$Apellido_Materno = $_POST['Apellido_Materno'];
$Edad             = $_POST['Edad'];
$Correo           = $_POST['Correo'];
$Contrasena       = $_POST['Contrasena'];

$Nombre           = mysqli_real_escape_string($conexion, $Nombre);
$Apellido_Paterno = mysqli_real_escape_string($conexion, $Apellido_Paterno);
$Apellido_Materno = mysqli_real_escape_string($conexion, $Apellido_Materno);
$Edad             = mysqli_real_escape_string($conexion, $Edad);
$Correo           = mysqli_real_escape_string($conexion, $Correo);
$Contrasena       = mysqli_real_escape_string($conexion, $Contrasena);


$sql = "INSERT INTO registros 
        (Nombre, Apellido_Paterno, Apellido_Materno, Edad, Correo, Contrasena) 
        VALUES 
        ('$Nombre', '$Apellido_Paterno', '$Apellido_Materno', '$Edad', '$Correo', '$Contrasena')";


if (mysqli_query($conexion, $sql)) {
    echo "<h2 style='color:green; text-align:center; margin-top:50px;'>¡Datos guardados correctamente!</h2>";
    echo "<p style='text-align:center;'><a href='REGISTRO.html'>Volver al formulario</a></p>";
} else {
    echo "Error al guardar: " . mysqli_error($conexion);
}

mysqli_close($conexion);
?>