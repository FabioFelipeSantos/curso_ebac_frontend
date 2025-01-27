-- Cria um banco de dados novo para meu exemplo
CREATE DATABASE my_company_tables;

-- Cria uma extensão do PostgreSQL para a geração automática de UUIDs que é melhor que SERIAL para um customer
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Cria a tabela customer
CREATE TABLE customer (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(150) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  cpf CHAR(11) UNIQUE NOT NULL,
  avatar BYTEA,
  createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMPTZ
);

-- Cria a tabela de orders que um customer por fazer
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  totalAmount NUMERIC(12, 2) NOT NULL CHECK (totalAmount >= 0),
  numberItens INT NOT NULL CHECK (numberItens >= 0),
  isOnDelivering BOOLEAN DEFAULT FALSE,
  isDelivered BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMPTZ,
  customerId UUID NOT NULL UNIQUE,
  FOREIGN KEY (customerId) REFERENCES customer(id)
);

-- Tabela de produtos com relação com a ordem a que aquele produto pertence
CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(110) NOT NULL UNIQUE,
  type VARCHAR(30) NOT NULL UNIQUE,
  value NUMERIC(12, 2) NOT NULL CHECK (value >= 0),
  createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMPTZ,
  ordersId UUID,
  FOREIGN KEY (ordersId) REFERENCES orders(id)
);

-- Tabela de Estoque de cada produto
CREATE TABLE stock (
  id SERIAL PRIMARY KEY,
  maxSize INT NOT NULL CHECK (maxSize >= 0),
  actualSize INT NOT NULL CHECK (actualSize >= 0),
  isAvailable BOOLEAN DEFAULT TRUE,
  isRequested BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMPTZ,
  productId INT NOT NULL UNIQUE,
  FOREIGN KEY (productId) REFERENCES product(id)
);

-- Implementação de um TRIGGER do PostgreSQL para atualizar os campos "updatedAT" a cada atualização realizada
-- Cria a função que será o trigger para atualização
CREATE OR REPLACE FUNCTION updatedAT_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updatedAt = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Cria o evento que acionará o trigger para cada tabela
CREATE TRIGGER set_updateAt_customer
BEFORE UPDATE ON customer
FOR EACH ROW
EXECUTE FUNCTION updatedAT_timestamp();

CREATE TRIGGER set_updateAt_orders
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION updatedAT_timestamp();

CREATE TRIGGER set_updateAt_product
BEFORE UPDATE ON product
FOR EACH ROW
EXECUTE FUNCTION updatedAT_timestamp();

CREATE TRIGGER set_updateAt_stock
BEFORE UPDATE ON stock
FOR EACH ROW
EXECUTE FUNCTION updatedAT_timestamp();

INSERT INTO customer
(firstname, lastname, email, cpf)
VALUES('Fábio', 'Santos', 'fabio@santos.com', '99977722233');

