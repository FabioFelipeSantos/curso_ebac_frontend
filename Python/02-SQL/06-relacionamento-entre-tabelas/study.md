# 6 - Relacionamento entre tabelas

O relacionamento entre tabelas é o coração do armazenamento em SQL. Por meio do relacionamento, conseguimos relacionar os dados de duas ou mais tabelas, de modo a manter os dados estruturados, confiáveis e significativos.

O relacionamento em SQL se dá por meio da informação de um campo de uma tabela como campo padrão para outra tabela. Por exemplo: suponha que tenhamos as tabelas `product` e `stock`. É lógico que deve existir uma relação entre o produto que está disponível e seu estoque. Portanto, em SQL podemos atribuir como coluna em `stock` alguma informação que referencie diretamente à uma linha na tabela de `product`, dizendo que aquele estoque X é do produto Y.

## 6.1 Chaves primárias e Chaves Compostas

Basicamente o relacionamento é realizado através das chaves, ou chamadas **KEYS**. Podemos ter as seguintes relações

*PRODUCT*

| **id** | name      | price |
|:------:|:---------:|:-----:|
| 1      | produto 1 | 10    |
| 2      | produto 2 | 20    |
| 3      | produto 3 | 30    |
| 4      | produto 4 | 40    |

_STOCK_

| **id** | actualSize | maxSize |
|:------:|:----------:|:-------:|
| 1      | 15         | 20      |
| 2      | 0          | 50      |
| 3      | 20         | 40      |

Olhando apenas para as tabelas, não podemos afirmar a qual produto pertence cada coluna do estoque, já que estoque tem apenas 3 linhas e temos 4 produtos, além de não termos mais nenhuma informação relevante.

Portanto, podemos fazer a utilização das KEYS de relacionamento. Existem duas keys a _**PRIMARY KEY**_ e a _**FOREIGN KEY**_, também chamadas respectivamente de PK e FK.

Cada tabela pode definir uma coluna para ser a sua PRIMARY KEY (PK). Essa coluna precisa de ter algumas restrições, como, não ser NULA e ser ÚNICA, podendo ser de qualquer tipo. Os tipos mais usuais são INT e STRING.

Portanto, podemos reescrever as tabelas como:

_PRODUCT_

| **id** (PK) | name      | price |
|:-----------:|:---------:|:-----:|
| 1           | produto 1 | 10    |
| 2           | produto 2 | 20    |
| 3           | produto 3 | 30    |
| 4           | produto 4 | 40    |

_STOCK_

| **id** (PK) | actualSize | maxSize |
|:-----------:|:----------:|:-------:|
| 1           | 15         | 20      |
| 2           | 0          | 50      |
| 3           | 20         | 40      |

Ou seja, definimos a coluna `id` para ser nossa primary key em cada tabela.

Agora para completar a relação, podemos associar cada estoque à uma PK da tabela produto, já que sabemos que as PK sempre existem e são únicas, dessa forma, uma entrada na tabela `stock` só poderá corresponder à um produto em `product`. Assim, escrevemos que a tabela `stock` terá mais uma coluna:

_STOCK_

| **id** (PK) | actualSize | maxSize | product_id (FK) |
|:-----------:|:----------:|:-------:|:---------------:|
| 1           | 15         | 20      | 1               |
| 2           | 0          | 50      | 3               |
| 3           | 20         | 40      | 4               |

À essa nova coluna podemos dar qualquer nome, porém, ela é mais comumente conhecida como a **_FOREIGN KEY - FK_**, ou chave estrangeira. Ela é estrangeira, pois referencia uma tabela que não é aquela à qual pertence, e sim uma outra. Portanto, agora sabemos que o produto 1 tem 15 itens em estoque com 20 itens máximos no estoque, o produto 3 não tem em estoque e pode pedir no máximo 50 itens, enquanto que o produto 4 está na metade da sua capacidade máxima.

Se uma tabela já estiver criada, podemos adicionar a restrição de FK como

```sql
ALTER TABLE table_name ADD CONSTRAINT name_of_constraint FOREIGN KEY (col_name_changed) REFERENCES foreign_table_name(foreign_table_pk);
```

Nesse comando temos:

- `ALTER TABLE table_name`: altera a tabela representada por `table_name`;

- `ADD CONSTRAINT name_of_constraint`: dá um nome para restrição de relacionamento. Aqui, `name_of_constraint` foi escolhido;

- `FOREIGN KEY (col_name_changed) REFERENCES foreign_table_name(foreign_table_pk)`: aqui indicamos que a restrição será de chave estrangeira FK. Essa chave estará armazenada na coluna `con_name_changed` da tabela que está sendo alterada e recebendo a FK, e essa mesma coluna referencia a coluna `foreign_table_pk` na tabela de origem (estrangeira) `foreign_table_name`.

Portanto, no nosso exemplo de estoque e produto, teríamos

```sql
ALTER TABLE stock ADD CONSTRAINT fk_stock_product FOREIGN KEY (product_id) REFERENCES product(id);
```

## 6.2 - Tipos de Relacionamentos

### 6.2.1 - UM PARA UM - 1 : 1 (one to one)

Nos relacionamentos 1:1 estamos relacionando apenas um elemento de uma tabela à uma única entrada em outra tabela. Fica caracterizada quando a FK tem uma restrição de ser única, já que assim não teríamos como ter mais de uma mesa PK sendo atribuída à essa FK.

<img title="" src="file:///home/fabio/snap/marktext/9/.config/marktext/images/2025-02-08-16-09-07-image.png" alt="" data-align="center" width="752">

Nesse caso podemos criar as tabelas da seguinte forma

```sql
CREATE TABLE user (
    id UUID PRIMARY KEY DEFAULT some_uuid_generator(),
    name VARCHAR(200) NOT NULL
    enabled BOOLEAN DEFAULT TRUE
);

CREATE TABLE address (
    userId UUID NOT NULL UNIQUE,
    street VARCHAR(40) NOT NULL,
    city VARCHAR(40) NOT NULL,
    state VARCHAR(40) NOT NULL,
    PRIMARY KEY (userId),
    CONSTRAINT fk_user_id FOREIGN KEY (userId) REFERENCES user(id)
);
```

### 6.2.2 - UM PARA MUITOS - 1 : N (one to many)

No caso da relação 1:N temos que uma única entrada em uma tabela pode gerar várias entradas em outras tabelas. Por exemplo, suponha que em um sistema de reviews cada usuário pode fazer vários reviews de produtos diferentes.

<img title="" src="file:///home/fabio/snap/marktext/9/.config/marktext/images/2025-02-08-16-23-44-image.png" alt="" width="694" data-align="center">

Poderíamos criar as tabelas livros e reviews da seguinte forma

```sql
CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publishDate TIMESTAMP NOT NULL,
    isbn INT UNIQUE
);

CREATE TABLE reviews (
    id SERIAL,
    bookId INT NOT NULL,
    userId int NOT NULL,
    reviewContent TEXT,
    rating NUMERIC(2,2) NOT NULL CHECK (rating >= 0),
    publishDate TIMESTAMP DEFAULT CURRENT TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (bookId) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);
```

### 6.2.3 - MUITOS PARA MUITOS - N : N (Many to many)

Neste caso temos que várias entradas em uma tabela podem se relacionar com várias outras entradas de outra tabela. A exemplo, pense que temos vários usuários diferentes e que esses usuários podem ter vários livros diferentes. Por exemplo: como usuários temos Maria e João, e como livros, A, B, C e D. Maria pode ter A, B e D, enquanto João pode ter C e D. Observe que cada um tem mais de um livro, e o livro D tem duas entradas.

Nesse caso, podemos utilizar uma tabela auxiliar que guarda a informação de quem possui qual livro, chamada *Tabela de Indexação*. Cada tabela mostrará uma relação possível entre usuário e livro. Então no caso acima, teríamos 6 entradas na tabela de indexação que faz as seis relações possíveis

<img title="" src="file:///home/fabio/snap/marktext/9/.config/marktext/images/2025-02-08-17-47-10-image.png" alt="" data-align="center" width="605">

Uma forma de se definir essa tabela pode ser:

```sql
CREATE TABLE user_book (
    userId UUID NOT NULL,
    bookId INT NOT NULL,
    checkoutDate TIMESTAMP DEFAULT now(),
    returnDate VARCHAR(15),
    PRIMARY KEY (userId, bookId),
    FOREIGN KEY (userId) REFERENCES user(id) ON UPDATE CASCADE,
    FOREIGN KEY (bookId) REFERENCES book(id) ON UPDATE CASCADE
);
```

## 6.3 - Unindo Dados com o Join

Quando precisarmos unir duas tabelas que estão referenciadas por meio das KEYS, podemos utilizar o comando SQL `INNER JOIN`. Para este comando vamos fazer um `SELECT` a partir de alguma tabela e à essa tabela iremos referenciar outra tabela por meio do `INNER JOIN` utilizando a palavra reservada `ON` para designar a PK e a FK por meio de uma igualdade.

```sql
SELECT col1,col2,... FROM table_name_A INNER JOIN table_name_B ON pk_table_A = fk_pk_table_B;
```

Nesse caso, estamos especificando quais colunas da tabela A queremos e unindo à ela a tabela B pelos PK de A e PK ou FK de B.

Por exemplo:

```sql
SELECT fullname,email,value
FROM customer
INNER JOIN "order"
ON customer.id = "order".customerId;
```

Temos um mesmo comportamento utilizando o `LEFT JOIN`, bastando apenas trocar as ordens das tabelas, para que a referenciação faça sentido.

Para tabelas que possuam relações N : N há a necessidade de aninhar os valores dos inner joins

```sql
SELECT name,title,author,returnDate
FROM "user"
INNER JOIN (
    SELECT books.title,books.author,returnDate,userId
    FROM books
    INNER JOIN user_book
    ON books.id = bookId
)
ON "user".id = userId
ORDER BY (returnDate,name) ASC;
```

Nesse exemplo temos: o `SELECT` externo irá selecionar o `name`, `title`, `author` e `returnDate` da relação que existe entre livros emprestados e usuários. Porém, a relação de qual usuário pegou qual livro, está em outra tabela, `user_order`. Portanto, teríamos que ler esse comando da seguinte forma:

- Selecionaremos `name`, `title`, `author` e `returnDate`  da junção da tabela `user` com outra tabela que tenha um `userId` como FK;

- A tabela que tem um `userId` como FK é `user_book` e relaciona também, por meio de uma FK, o `bookId`;

- Assim, selecionamos o `title`, `author`, `returnDate` e `userId` da relação entre `books` e `user_books`, fazendo um `INNER JOIN` com `books.id = user_book.bookId`;

- Do resultado da junção acima, terminamos o `INNER JOIN` começado para o `user`, fazendo agora `ON user.id = userId`;

- No final, ordenamos de forma crescente pela data de retorno, seguido pela ordenação do título do livro.

## 6.4 - Filtrando com o `INNER JOIN`

Podemos incluir no fim do `INNER JOIN` ainda mais comandos com o `WHERE`, `AND`, `OR` e outros.

```sql
SELECT fullname,email,value
FROM customer
INNER JOIN "order"
ON customer.id = "order".customerId
WHERE value > 200;
```

Nesse caso, além de unirmos as duas tabelas, trazemos apenas os resultados em que o `value` for superior a \$ 200.00.
