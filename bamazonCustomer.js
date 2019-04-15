// takes in the product the customer wants to buy
//using inquirer!
//actually, use the inquirer list format to allow a choice of items to buy
//user chooses which item they'd like to buy
//oh maybe even a selection by category and then specific items under that

//requiring our npms
var mysql = require("mysql");
var inquirer = require("inquirer");

//creating connection with mysql
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

//connect mysql if no error
connection.connect(function (err) {
    if (err) throw err;
    else
        console.log("Connected with database")
});

//will either begin asking questions if no error, or console log that there's an error
connection.query('SELECT * from products', function (err, rows, fields) {
    if (!err) {
        console.log(rows)
        promptCustomer()
    }
    else {
        console.log('error')
    }
});

//using inquirer to ask the user questions about their purchase
var questions = [
    {
        type: 'input',
        name: 'whatId',
        message: 'What is the ID of the item you want to buy?',
        validate: function (value) {
            var pass = value.match(/[0-9]/)
            if (pass) {
                return true;
            }
            return 'Please enter a valid ID number, emphasis on number';

        }

    },

    {
        type: 'input',
        name: 'howMany',
        message: '...And how many of them?',
        validate: function (value) {
            var pass = value.match(/[0-9]/)
            if (pass) {
                return true;
            }
            return 'Please enter a quantity, (hint: a number)';

        }
    }];



function promptCustomer() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(JSON.stringify(answers, null, ' '));
    });

}

function checkStock() {
    console.log('Let me look in the back... 1 sec')
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [{
            stock_quantity:
},
        {
            item_id: 
}],

    )

}

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
