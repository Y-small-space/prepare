let str = "";
str += `
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    `;
for (let i = 0; i < 5; i++) {
  str += `<a>${i}</a>     `;
}
str += `</body></html>`;

