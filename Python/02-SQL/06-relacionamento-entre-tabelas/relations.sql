-- Criando o banco de dados
CREATE DATABASE relations_project;

-- Conectando ao banco
\c new_project

CREATE TABLE product (
    id SERIAL,
    "name" VARCHAR(50) NOT NULL,
    value NUMERIC(12,2) NOT NULL CHECK (value >= 0),
    PRIMARY KEY (id)
);

CREATE TABLE stock (
    id SERIAL PRIMARY KEY,
    actualSize INT NOT NULL CHECK (actualSize >= 0),
    maxSize INT NOT NULL CHECK (maxSize >= 0),
    productId INT,
    FOREIGN KEY (productId) REFERENCES product(id)
);

-- Inserindo Produtos
INSERT INTO product(name,value) VALUES ('prod1', 10.5);
INSERT INTO product(name,value) VALUES ('prod2', 28.90);
INSERT INTO product(name,value) VALUES ('prod3', 56.25);
INSERT INTO product(name,value) VALUES ('prod4', 5.00);
INSERT INTO product(name,value) VALUES ('prod5', 74.68);
INSERT INTO product(name,value) VALUES ('prod6', 99.99);

-- Selecionando todos os produtos
SELECT * from product;

-- Inserindo Estoque de produtos específicos
INSERT INTO stock(actualSize,maxSize,productId) VALUES (20,100,2);
INSERT INTO stock(actualSize,maxSize,productId) VALUES (152,2450,5);
INSERT INTO stock(actualSize,maxSize,productId) VALUES (279,560,6);

-- Selecionando todos os estoques cadastrados
SELECT * FROM stock;

-- Selecionando os resultados dos produtos já com os seus estoques
SELECT product.name,actualSize,maxSize
FROM product
INNER JOIN stock
ON product.id = stock.productId;

-- Selecionando os produtos que possuem estoque máximo maior que 100 unidades e em ordem crescente de estoque máximo
SELECT product.name,maxSize
FROM product
INNER JOIN stock
ON product.id = stock.productId
WHERE maxSize > 100
ORDER BY maxSize ASC;

-- Selecionando o valor dos produtos que tem estoque
SELECT product.id,name,value,actualSize
FROM stock
INNER JOIN product
ON stock.productId = product.id;
