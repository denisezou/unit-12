ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Nikolove!1';

DROP DATABASE IF EXISTS stockDB;
CREATE database stockDB;

USE stockDB;

CREATE TABLE products
(
    item_id INT not NULL,
    product_name VARCHAR
    (30) not NULL,
    department_name VARCHAR
    (30) not NULL,
    price DECIMAL
    (10, 2) not NULL,
    stock_quantity INT not NULL,
    PRIMARY KEY (item_id) 
);


INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES
(1, 'ankle weights', 'fitness', 22.99, 12),
(2, 'therapy ball', 'fitness', 34.01, 4),
(3, 'yoga mat', 'fitness', 9.99, 36),
(4, 'vape', 'leisure', 11.09, 2),
(5, 'fidget spinner', 'leisure', 2.99, 99),
(6, 'ipod', 'leisure', 99.01, 3),
(7, 'book', 'school', 10.12, 17),
(8, 'fountain pen', 'school', 4.99, 82),
(9, 'lunch box', 'school', 14.99, 9),
(10, 'apple', 'school', 0.99, 49);


select * from products;