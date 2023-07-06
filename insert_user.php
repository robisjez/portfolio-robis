<?php
include 'db.php'; // Include the database connection file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Prepare the SQL statement
    $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

    if (mysqli_query($conn, $sql)) {
        echo "User inserted successfully!";
    } else {
        echo "Error inserting user: " . mysqli_error($conn);
    }
}