# 7 - Agregação de Dados

A agregação de dados tem por finalidade fazer uma junção e criação de novas informações para nossas pesquisas. Por exemplo, são utilizados para agrupamentos, criação de somas, verificações de características, entre outras. Fornece excelentes ferramentas para controle e regra de negócios sobre nossos dados.

## 7.1 - Agrupando com o GROUP BY e HAVING

O `GROUP BY` agrupa linhas baseado em semelhanças entre elas. Extremamente útil quando queremos agrupar e calcular informações dentro da nossa tabela.

Por padrão, a sintaxe básica do `GROUP BY` é:

```sql
SELECT col_name FROM table_name GROUP BY col_name;
```

Basicamente este comando retornará todos as entradas da coluna `col_name` da tabela `table_name` agrupadas pelo `col_name`, o que é o mesmo que retornar apenas uma entrada na tabela para cada valor diferente na coluna especificada. Ou seja:

```sql
SELECT customerId FROM "order" GROUP BY customerId;
```

irá agrupar somente os `customerId` que efetivamente fizeram compras e retornar apenas uma única entrada para eles

<img src="file:///home/fabio/snap/marktext/9/.config/marktext/images/2025-02-09-14-27-14-image.png" title="" alt="" data-align="center">

Observe que temos 4 clientes cadastrados, porém somente 3 deles fizeram ordens, que são essas três ordens. Isso não quer dizer que temos apenas três ordens de compra. Por exemplo, se fizermos

```sql
SELECT customerId,amount FROM "order" GROUP BY customerId,amount;
```

estaremos tentando agrupar ao mesmo tempo os compradores com valores de compra. Se caso houver valores repetidos (por exemplo um mesmo comprador comprou o mesmo valor) para ambas as informações, aparecerá somente uma delas.

<img title="" src="file:///home/fabio/snap/marktext/9/.config/marktext/images/2025-02-09-14-32-01-image.png" alt="" data-align="center" width="370">

No caso acima, observe que o id `4ddf6f86-4cbe-4e21-87ca-0ea51d8114ae` fez 5 compras, das quais 3 tem valores idênticos. Logo, se fizermos o comando acima, teremos:

<img title="" src="file:///home/fabio/snap/marktext/9/.config/marktext/images/2025-02-09-14-33-28-image.png" alt="" data-align="center" width="549">

que apresenta somente três compras distintas para o id `4ddf6f86-4cbe-4e21-87ca-0ea51d8114ae`, sendo o último somente uma única entrada com o `amount` de \$ 135.44.

Podemos ainda construir colunas novas aplicando funções SQL nas variáveis da tabela. Por exemplo, poderíamos retornar o valor total da tabela para cada `customerId` representando quanto aquele cliente já comprou. Isso é obtido com

```sql
SELECT customerId, SUM(amount) FROM "order" GROUP BY customerId;
```

<img src="file:///home/fabio/snap/marktext/9/.config/marktext/images/2025-02-09-14-57-07-image.png" title="" alt="" data-align="center">

Observe que as somas para cada `customerId` foram executadas.

Podemos ainda utilizar o filtro `HAVING` para podermos filtrar por alguma informação específica no `GROUP BY`. Por exemplo:

```sql
SELECT customerId, SUM(amount) FROM "order" GROUP BY customerId HAVING SUM(amount) > 200;
```

Nesse caso, o retorno do `GROUP BY` será filtrado pelas somas das quantidades compradas. Se essa quantidade for acima de 200, o dado será retornado. 

Podemos usar ainda com outros seletores como o `INNER JOiN`


