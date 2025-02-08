# 05 - Manipulação de Dados

Para o SQL existem várias "Línguas" (languages) diferentes. Uma delas, o _DDL - Data Definition Language_, responsável por criar, deletar e alterar tabelas.

Outro núcleo do SQL é definido pelo _DML - Data Manipulation Language_, que será responsável por CRIAR, SELECIONAR e FILTRAR dados.

## Inserção de Dados em Tabelas

Inserimos com o comando:

```sql
INSERT INTO 'table_name'(col1, col2, col3, ...) VALUES (val1, val2, val3, ...);
```

Por exemplo:

```sql
INSERT INTO
    customer(firstName, lastName, email, cpf)
VALUES
    ('Fábio', 'Santos', 'fabio@gmail.com', '33311122299');
```

## Seleção de Dados

### Sem Filtro (todos)

```sql
SELECT * FROM 'table_name';
```

### Selecionar Colunas Específicas Sem Filtro

```sql
SELECT col1, col2 ... FROM 'table_name';
```

### Selecionar Com Filtro

```sql
-- Todas Colunas
SELECT * FROM 'table_name' WHERE col1=val1;

-- Colunas específicas
SELECT col1, col2, ... FROM 'table_name' WHERE col1=val1;
```

## Atualizar dados

Para atualizar dados usamos

```sql
UPDATE 'table_name' SET column_name=new_value WHERE some_column=the_column_value;
```

## Deletar Dados

Para deletar uma linha específica, deve-se usar o atributo `WHERE`. Caso contrário, todos os dados da tabela serão apagados.

```sql
DELETE FROM 'table_name' WHERE some_column=the_column_value;
```

### Selects Complexos

#### Selecionar uma lista de resultados

Podemos usar o `WHERE <campo> IN` passando uma lista de valores para filtrar apenas aqueles valores.

```sql
SELECT col1, col2, ... FROM table_name WHERE colName IN  ('val1', 'val2', 'val3', ...);
```

##### Selecionar dados de uma tabela, a partir da coluna de outra tabela (relações por exemplo)

Suponha que uma tabela `orders` possua um campo `customerId` que referencia a coluna `id` na tabela `customer`. Para selecionarmos todas as ordens que possuem um respectivo `id` podemos fazer

```sql
SELECT * FROM orders
WHERE customerId IN (
    SELECT id FROM customer
);
```
