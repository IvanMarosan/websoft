<?php
require "databaseOperation/config.php";
require "databaseOperation/function.php";

$label = $_GET["label"] ?? null;
$type = $_GET["type"] ?? null;
$id = $_GET["id"] ?? null;
$queryResult = null;

if ($id != null && $label != null && $type != null) :
    $db = connectDatabase($dsn);
    $createStatement = 'UPDATE tech SET label = ?, type = ? WHERE id = ?';
    $preparedStatement = $db->prepare($createStatement);
    $preparedStatement->execute([$label, $type, $id]);
else :
    $db = connectDatabase($dsn);
    $selectStatement = 'SELECT * FROM tech';
    $preparedStatement = $db->prepare($selectStatement);
    $preparedStatement->execute();
    $queryResult = $preparedStatement->fetchAll();
endif;
require __DIR__ . "/view/updateView.php"
?>