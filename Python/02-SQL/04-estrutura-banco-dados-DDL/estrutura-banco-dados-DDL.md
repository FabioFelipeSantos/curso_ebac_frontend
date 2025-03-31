# Definindo a Estrutura de um Banco de Dados - DDL

O *Data Definition Language - DDL* é a linguagem que usamos para transformar um modelo em uma tabela no nosso banco de dados. Traz uma forma "humana" para a criação e gerenciamento de banco de dados

Para acessar o PostgreSQL no prompt, usa-se

```bash
sudo -u postgres psql
```

## Comandos Principais do Prompt PostgreSQL

- `\l`: lista os banco de dados

- `CREATE DATABASE <nome_banco_dados>;` - cria um banco de dados (observação do ponto e vírgula no fim)

- `\c <nome_banco>` - conecta a um banco de dados (deve mudar nome no prompt)

- `CREATE SCHEMA <nome da schema>;` - um *schema* é um ambiente que contém as tabelas, funções, índices, e outras informações das nossas tabelas

- ```sql
  CREATE TABLE "schema_name".table_name (
      column1 datatype,
      column2 datatype,
      column3 datatype,
      ....
      columnN datatype,
      PRIMARY KEY (uma ou mais colunas)
  );
  ```

        cria uma Tabela no nosso schema no banco de dados desejado, se o nome do schema for informado. Caso contrário, a tabela é criada no schema *public*.

- `DROP TABLE "schema".table_name;` - remove a tabela do schema declarado

## Tipos principais e Alterando os Tipos nas Tabelas

- `\dt schema.*` - mostra todas as tabelas no schema desejado

- `ALTER TABLE table_name ADD column_name column_type` - adiciona uma coluna na tabela informada que possui o nome e o tipo informados

- `\d table_name` - mostra todas as colunas de uma tabela

- `ALTER TABLE table_name DROP column_name` - remove uma coluna da tabela designada

- `ALTER TABLE table_name ALTER COLUMN column_name TYPE new_type` - altera o tipo da coluna na tabela especificada

- `ALTER TABLE table_name ALTER COLUMN column_name TYPE new_type USING column_name::type_cashing` - altera o tipo para uma variável cujo tipo anterior é distante do tipo que se quer como atual. Exemplo: de texto para inteiro. Precisamos criar como se fosse um cash para o postgres saber corretamente como armazenar esses valores.

### Tipos Principais

| **Tipo**         | **Descrição**                                                                                              | **Exemplo**                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| CHAR(n)          | cadeia de caracteres com exatamente `n` caracteres                                                         | `CHAR(5)`- `Fabio`, `matem`                                     |
| VARCHAR(n)       | cadeia de caracteres com no máximo n caracteres                                                            | `VARCHAR(8) -> ["boliche", "paralele",...]`                     |
| TEXT             | cadeia de caracteres com qualquer quantidade de caracteres                                                 | `TEXT -> "Era uma vez, três porquinhos ..."`                    |
| SMALLINT         | números inteiros entre -32 768 e 32 767                                                                    | `SMALLINT -> 987`                                               |
| INT              | números inteiros de 4 bytes, entre -2 147 483 648 e 2 147 483 647                                          | `INT -> 67 898 777`                                             |
| BIGINT           | inteiros de 8 bytes, entre $\pm 9\,223\,372\,036\,854\,775\,808$                                           | `BIGINT -> 3 646 820 967`                                       |
| NUMERIC(n, m)    | números decimais com `n` algarismos sendo `m` depois da ponto decimal                                      | `NUMERIC(6,3) -> 24.831`                                        |
| REAL             | ponto flutuante de 4 bytes (6 a 9 dígitos)                                                                 | `REAL -> pi() = 3.14159265`                                     |
| DOUBLE PRECISION | ponto flutuante de 8 bytes (15 a 17 dígitos)                                                               | `DOUBLE PRECISION -> pi() = 3.1415926535897932`                 |
| SERIAL           | sequência automática de inteiros para PK. Integer com incremento automático                                | `SERIAL -> {1, 2, 3, 4, ...}`                                   |
| DATA             | armazena uma data (AAAA-MM-DD)                                                                             | `DATE -> 2025-01-21`                                            |
| TIME             | somente hora, podendo ser `TIPE(n)` com n casas de milissegundos                                           | `TIME(4) -> 07:28:36.5439`                                      |
| TIMETZ           | hora com zona horária. armazena em UTC e converte para o fuso do cliente na exibição (raramente utilizado) | `TIMETZ(2) -> 07:30:28.44+03`                                   |
| TIMESTAMP(n)     | data e hora com `n` casas de milissegundos                                                                 | `TIMESTAMP(5) -> 2025-01-21 07:31:47.56633`                     |
| TIMESTAMP(n)     | data e hora com fuso horário, e apresentando `n` casas de milissegundos                                    | `TIMESTAMPTZ(3) -> 2025-01-21 07:32:58.121-03`                  |
| INTERVAL         | intervalo de tempo que pode incluir anos, meses, dias, horas, minutos e/ou segundos                        | `INTERVAL -> "1 year 2 months 3 days 02:45:55"`                 |
| BYTEA            | dados binários de comprimento variável (arquivo de imagens, documentos, etc.)                              | `BYTEA -> E"\\706F737467726573716C` (postgresql em hexadecimal) |

## Restrições (*Constraints*)

- Foram criados para **proteger** e **prevenir** dados incompletos de entrarem na nossa base além de dados **repetidos** mantendo dados únicos dentro da nossa Base de dados.

- `ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL` - altera/coloca uma restrição na coluna especificada na tabela informada. `NOT NULL` indica *Not Nullable*, ou *Não Vazio*, indicando que essa tabela não pode ter uma coluna vazia.

- As *constraints* de chave estrangeira são fundamentais para manter a integridade referencial entre tabelas relacionadas

- Elas ajudam a manter consistência dos dados ao logo do tempo, reduzindo a necessidade de validações manuais e correções de dados.

- `ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);` - adiciona uma *constraint* em uma coluna da tabela, especificados com o *_name*

- 

| **Constraints** | **Descrição**                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| PRIMARY KEY     | garante  que a coluna seja única e não nula, usada para identificar de forma exclusiva cada linha da tabela |
| FOREIGN KEY     | assegura que os valores em uma coluna correspondam aos valores em uma coluna de outra tabela                |
| UNIQUE          | garante que todos os valores em uma coluna (ou conjunto de colunas) sejam distintos entre si                |
| NOT NULL        | assegura que uma coluna não tenha valores nulos, obrigando a inserção de um valor em cada linha             |
| CHECK           | impõe uma condição que os valores em uma coluna devem satisfazer. Pode ser usada para validação de dados    |
| DEFAULT         | define um valor padrão para uma coluna quando nenhum valor é especificado durante a inserção de dados       |

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    orderCode CHAR(16) NOT NULL UNIQUE,
    value REAL CHECK (value >= 0),
    isDelivered boolean DEFAULT FALSE,
    customerId VARCHAR(30),
    FOREIGN KEY (customerId) REFERENCES customer(id)
)
```

## Definindo Colunas com Identificação Automática

- Algumas colunas podem ser de inserção automática pelo DB. Por exemplo, uma coluna de ID numérica, pode começar do 1 e ir aumentando 1 a cada nova inserção de linhas na tabela.

- Prática chamada de *Identificação Automática*

- Podemos usar o tipo `SERIAL` para criar um valor automático

## Opções extras do PostgreSQL

- Para criar uma PK que seja do tipo `uuid` podemos dispor da geração automáticas de UUID do PostgreSQL. A criamos com
  
  ```sql
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
  ```

    Agora, durante a criação da tabela, criamos uma coluna da seguinte forma

```sql
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
```

    Utilizamos do tipo especial `UUID` para gerar a chave (que será em formato `string` no código). A chave é gerada pela função especial `uuid_generate_v4()`. O valor `v4()` é o motor gerador da UUID.
