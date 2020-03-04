<?php
$pageTitle = "Update";
require __DIR__ . "/header.php";
?>

<form action="update.php" method="get">
    ID: <input type="text" name="id" value="<?= $id ?>">
    New Label: <input type="text" name="label" value="<?= $label ?>">
    New Type: <input type="text" name="type" value="<?= $type ?>">
    <input type="submit">
</form>

<?php if ($id != null && $label != null && $type != null) : ?>
    <p>Value with id <?= $id ?> is now (<?= $label ?>, <?= $type ?>)</p>
<?php elseif ($queryResult != null): ?>
    <table>
        <tr>
            <th>Id</th>
            <th>Label</th>
            <th>Type</th>
        </tr>
        <?php foreach ($queryResult as $row) : ?>
            <tr>
                <td><?= $row["id"] ?></td>
                <td><?= $row["label"] ?></td>
                <td><?= $row["type"] ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
<?php endif; ?>

<?php require __DIR__ . "/footer.php"; ?>
</body>
</html>