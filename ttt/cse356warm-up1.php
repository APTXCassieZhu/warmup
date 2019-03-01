<!DOCTYPE HTML>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

    <?php
     // define variables and set to empty values
    $nameErr = "";
    $name = "";
    $message = "";
    date_default_timezone_get();
    $date = date('Y/m/d');

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if (empty($_POST["name"])) {
        $nameErr = "Name is required";
        $message = "";
     } else {
        $name = test_input($_POST["name"]);
        $message = "Hello $name, $date";
       }
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
   ?>

    <h1>Tic-Tac-Toe</h1>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
       Name: <input type="text" name="name">
       <br><br>
       <input type="submit" name="submit" value="Submit">
    </form>

    <?php
      echo "<br><br>";
      echo $message;
    ?>

    </body>
</html>










