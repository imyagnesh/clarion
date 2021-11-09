// string literal

const firstName = "Yagnesh";

const lastName = "Modh";

// const fullname = firstName + ' ' + lastName;

const fullname = `${firstName} ${lastName}`;

// Yagnesh's Car

// const pos = firstName + '\'s car';

const pos = `${firstName}'s car`;

console.log(pos);

console.log(fullname);

const tittle = "Portfolio";

// const newHtml = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>${tittle}</title>
// </head>
// <body>

// </body>
// </html>`

const oldHmt =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
  '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  "\n\t<title>" +
  tittle +
  "</title>" +
  "\n</head>" +
  "\n<body>" +
  "\n" +
  "\n</body>" +
  "\n</html>";

console.log(oldHmt);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>
