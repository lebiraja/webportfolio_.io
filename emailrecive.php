<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set your email address where you want to receive emails
    $to = "lebiraja2007@gmail.com"; // Replace with your email address

    // Subject and email content
    $subject = "Message from Portfolio Contact Form";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Message sent successfully.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send message.'));
    }
} else {
    http_response_code(403); // Forbidden if accessed directly
    echo "Access Forbidden";
}
?>
