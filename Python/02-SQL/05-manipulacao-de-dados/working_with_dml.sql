-- Criando o banco de dados
CREATE DATABASE new_project;

-- Conectando ao banco
\c new_project

-- Criando as tabelas
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE customer (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    fullname VARCHAR(200) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    value NUMERIC(12,2) NOT NULL CHECK (value >= 0)
);

CREATE TABLE stock (
    id SERIAL PRIMARY KEY,
    actualSize INT NOT NULL CHECK (actualSize >= 0),
    maxSize INT NOT NULL CHECK (maxSize >= 0),
    productId INT,
    FOREIGN KEY (productId) REFERENCES product(id)
);

-- Inserindo Customers
INSERT INTO customer(fullname,email,cpf) VALUES ('Fabio Santos','fabio@domain.com','000.000.000-00');
INSERT INTO customer(fullname,email,cpf) VALUES ('João Alves','jalves@domain.com','111.111.111-11');
INSERT INTO customer(fullname,email,cpf) VALUES ('Carlos Vieira','carlosv@domain.com','222.222.222-22');
INSERT INTO customer(fullname,email,cpf) VALUES ('Laura Campos','camposlaura@domain.com','333.333.333-33');

-- Selecionando todos os customers
SELECT * from customer;

-- Selecionando apenas o email e cpf de um único id
SELECT email, cpf FROM customer WHERE id = '92ff9fb0-079e-427b-9e6c-a99935565424';

-- Selecionando o email a partir de uma lista de cpfs
SELECT email FROM customer WHERE cpf IN ('000.000.000-00', '222.222.222-22');

-- Inserindo Produtos
INSERT INTO product(name,value) VALUES ('prod1', 10.5);
INSERT INTO product(name,value) VALUES ('prod2', 28.90);
INSERT INTO product(name,value) VALUES ('prod3', 56.25);
INSERT INTO product(name,value) VALUES ('prod4', 5.00);
INSERT INTO product(name,value) VALUES ('prod5', 74.68);
INSERT INTO product(name,value) VALUES ('prod6', 99.99);

-- Selecionando todos os produtos
SELECT * from product;

-- Selecionando o nome e o valor a partir de uma lista de ids de produtos
SELECT name,value FROM product WHERE id IN (1, 2, 4, 5);

-- Selecionando todos os produtos que possuem o valor maior que 30 e ordenando de acordo com valor na ordem decrescente
SELECT * from product WHERE value > 30 ORDER BY value DESC;

-- Inserindo Estoque de produtos específicos
INSERT INTO stock(actualSize,maxSize,productId) VALUES (20,100,2);
INSERT INTO stock(actualSize,maxSize,productId) VALUES (152,2450,5);
INSERT INTO stock(actualSize,maxSize,productId) VALUES (279,560,6);

-- Selecionando todos os estoques cadastrados
SELECT * FROM stock;

-- Selecionando todos os produtos que tem estoque cadastrado
SELECT * FROM product WHERE id IN (
    SELECT productId FROM stock
);

-- Selecionando somente produtos com estoque superior à 30%
SELECT * FROM product WHERE id IN (
    SELECT productId FROM stock WHERE actualSize > maxSize * 0.3
);

-- Verificando os estoques dos produtos com valor abaixo de $ 20
SELECT * from stock WHERE productId IN (
    SELECT id FROM product WHERE value < 20
);

-- Contabiliza o número de unidades com estoque definido em que o produto estocado tem valor superior a $ 50
SELECT COUNT(*) FROM (
    SELECT * from stock WHERE productId IN (
        SELECT id FROM product WHERE value > 50
    )
) ;
