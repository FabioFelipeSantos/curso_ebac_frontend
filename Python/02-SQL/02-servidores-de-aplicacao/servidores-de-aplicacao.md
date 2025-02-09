# 02 - Servidores de Aplicação

## Introdução

Um Application Service é como um garçom em um restaurante: quando vamos ao restaurante, nós não sabemos onde fica a cozinha, onde fica os ingredientes, os utensílios e nem quem irá fazer a comida. O garçom leva seu pedido até a cozinha, e a cozinha é responsável por procurar os ingredientes e montar seu prato.

O garçom faz o papel de um Application Service, enquanto a cozinha seria nosso servidor. Quando digitamos uma url no browser, não sabemos qual servidor irá enviar as informações do site, e nem de que forma essas informações devem chegar ao servidor. Será papel do Application Service preparar essas informações de uma maneira que o protocolo de comunicação HTTP entenda, e direcionar essa requisição de maneira correta ao seu destino.

### Opções

-   [Uvicorn](https://www.uvicorn.org)
-   [UWSGI](https://uwsgi-docs.readthedocs.io/en/latest/)
-   [WSGI](https://wsgi.readthedocs.io/en/latest/index.html)

## Gunicorn

Basicamente o Gunicorn controla quantos workers nosso sistema disponibiliza no servidor para atender todas as demandas que chegam até ele. Ele é um servidor WSGI HTTP para Unix. Compatível com vários frameworks web, de implementação simples, leve e rápido.
[GUNICORN](https://docs.gunicorn.org)

## NGINX

O NGINX trabalha na porta de entrada do nosso servidor, fazendo o papel de organizar e distribuir as chamadas à ele, sem o sobrecarregar, e dividindo o trabalho de envio das requisições em vários servidores, se for preciso. De uma certa forma, o cliente faz uma requisição ao servidor, esta chega ao Nginx que a processa e repassa para o Gunicorn. O Gunicorn fará o papel de então invocar as chamadas à API necessárias para responder essas requisições. Uma das possibilidades, é por exemplo, o Gunicorn passar as requisições para o Django.
