<?php
require "databaseOperation/config.php";
require "databaseOperation/function.php";
$label = $_GET["label"] ?? null;
$type = $_GET["type"] ?? null;

if ($label != null && $type != null) :
    $db = connectDatabase($dsn);
    $createStatement = 'INSERT INTO tech (label, type) VALUES (?, ?);';
    $preparedStatement = $db->prepare($createStatement);
    $preparedStatement->execute([$label, $type]);
endif;
require __DIR__ . "/view/createView.php"
?>