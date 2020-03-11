<?php
require "databaseOperation/config.php";
require "databaseOperation/function.php";

$search = $_GET["search"] ?? null;
if ($search == null) :
    $like = "%";
else:
    $like = "%$search%";
endif;
$db = connectDatabase($dsn);
$selectStatement = "SELECT * FROM tech
    WHERE id = ? OR label LIKE ? OR type LIKE ?";
$preparedStatement = $db->prepare($selectStatement);
$preparedStatement->execute([$search, $like, $like]);
$queryResult = $preparedStatement->fetchAll();
require __DIR__ . "/view/searchView.php"
?>