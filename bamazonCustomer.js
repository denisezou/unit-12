// takes in the product the customer wants to buy
//using inquirer!
//actually, use the inquirer list format to allow a choice of items to buy
//user chooses which item they'd like to buy
//oh maybe even a selection by category and then specific items under that


var mysql = require("mysql");
//var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Nikolove!1",

    database: "stockDB"

});

connection.connect(function (err) {
    if (err) throw err;
    else 
    console.log("Connected with database")
});

connection.query ('SELECT * from products', function(err, rows, fields){
    if(!err)
    console.log(rows);
    else
    console.log('error')
});

connection.end();


/*
function amazonSearch() {
    inquirer
        .prompt({
            name: "prodType",
            type: "rawlist",
            message: "Select a type of product...we're family owned and our stock is limited",
            choices: [
                "Fitness",
                "Leisure",
                "School"
            ]
        })
*/

//the 10 products will be ankle weights, therapy ball, yoga mat,
// vape, fidget spinner, ipod,
// book, fountain pen, lunch box, apple
