
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
    password: "",

    database: "stockDB"

});

//connect mysql if no error
connection.connect(function (err) {
    if (err) throw err;
    else
        console.log("Connected with database")
        begin();
});

//arrays
var ids =[];
var prices =[];
var quantities= [];
var names= [];



//will either begin asking questions if no error, or console log that there's an error
function begin() {
    connection.query('SELECT * from products', function (err, res) {
        if (!err) {
                    for (i=0;i<res.length;i++){
                        ids.push(res[i].item_id);
                        prices.push(res[i].price);
                        quantities.push(res[i].stock_quantity);
                        names.push(res[i].product_name);
                        console.log("\n----------------");
                        console.log("\n" + names[i] + "\nID numbah: " + ids[i] + "\nIt'll cost ya: " + prices[i] + "\nThere's only: " + quantities[i]);
                    };

            promptCustomer()
        } else {
            console.log('error')
        }
    });
}

//using inquirer to ask the user questions about their purchase
var questions = [{
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
}
];



function promptCustomer() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(JSON.stringify(answers, null, ' '));
        let newquantity = quantities[i-1] - answers.howMany;
        connection.query("UPDATE products SET ? WHERE ?",
            [{
                stock_quantity: newquantity
            },
            {
                item_id: answers.whatId
            }
            ],

            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " update complete\n");
                readProducts();
            });
    });
}


function readProducts() {
    console.log("Pulling the stock...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();

    });
}



