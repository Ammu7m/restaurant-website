<?php
// reservation.php - Handles the reservation form submissions

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $guests = (int) htmlspecialchars($_POST['guests']);
    $message = htmlspecialchars($_POST['message']);

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO reservations (name, email, phone, date, time, guests, message) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssis", $name, $email, $phone, $date, $time, $guests, $message);

    // Execute and check
    if ($stmt->execute()) {
        echo "<script>alert('Reservation successfully made!'); window.location.href='reservation.html';</script>";
    } else {
        echo "<script>alert('Error: Could not complete the reservation.'); window.location.href='reservation.html';</script>";
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
