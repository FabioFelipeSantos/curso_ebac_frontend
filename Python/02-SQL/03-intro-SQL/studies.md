# Introdução ao SQL

## O que é um banco de dados?

Alguma forma de armazenamento de dados. Por exemplo, o pendrive. Porém, os dados ficam de forma ilegível no computador. Logo, usamos o **SQL**.

- ***SQL***: **É uma linguagem de programação** feita para interagir com os dados do banco de dados.
  
  - Legível e fácil
  
  - Próxima da língua humana

Iremos instalar:

- [PostgreSQL](https://www.postgresql.org/) como banco de dados;

- [DBeaver](https://dbeaver.io/) para visualização;

- [PgAdmin](https://www.pgadmin.org/) para controle dos bancos de dados

## O que é o PostgreSQL?

Serviço de banco de dados *open source* para armazenar dados localmente ou em serviços em nuvem. Utiliza e estende a linguagem SQL com ferramentas adicionais que gerenciam de forma segura e escalável banco de dados.

- Gratuito

- DB Relacional

- Suporte para SQL (relacional) e JSON (não relacional)

- Utilizado para WEB e Mobile

## Instalando o PostgreSQL e o PgAdmin4

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

```bash
sudo passwd postgres
```

```bash
sudo -u postgres psql
```

No prompt do `psql` defina a senha para acesso com o DBeaver

```bash
\password postgres
```

```bash
sudo systemctl status postgresql
```

```bash
curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add
sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'
```

```bash
sudo apt install pgadmin4-web
```

```bash
sudo /usr/pgadmin4/bin/setup-web.sh
```

Tive que configurar o Apache2 na porta 8080, então deve-se acessar o PgAdmin no browser (pode ser no Windows) no endereço

```bash
http://localhost:8080/pgadmin4
```

## Instalando o DBeaver

```bash
wget -O - https://dbeaver.io/debs/dbeaver.gpg.key | sudo apt-key add -
echo "deb https://dbeaver.io/debs/dbeaver-ce /" | sudo tee /etc/apt/sources.list.d/dbeaver.list
```

```bash
sudo apt update
```

```bash
sudo apt install dbeaver-ce
```

Para conectar o DBeaver, deve-se mudar o arquivo em `/etc/postgresql/16/main/pg_hba.conf` e procurar e editar a linha de autenticação para

```bash
local   all             postgres                                md5
```

```bash
sudo systemctl restart postgresql
```