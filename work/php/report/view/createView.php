<?php
$pageTitle = "Create";
require __DIR__ . "/header.php";
?>

<form action="create.php" method="get">
    Label: <input type="text" name="label" value="<?= $label ?>">
    Type: <input type="text" name="type" value="<?= $type ?>">
    <input type="submit">
</form>

<?php if ($label != null && $type != null) : ?>
    <p>Value (<?= $label ?>, <?= $type ?>) inserted</p>
<?php endif; ?>

<?php require __DIR__ . "/footer.php"; ?>
</body>
</html>