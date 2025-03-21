# 📚 Minha Biblioteca - Backend

Este é o backend do projeto **Minha Biblioteca**, desenvolvido com **Laravel** e utilizando **Laravel Sail** para gerenciar o ambiente de desenvolvimento com **Docker**.

## 🚀 Requisitos

Antes de começar, certifique-se de ter instalado:

- **Docker** e **Docker Compose**
- **Git** (opcional, mas recomendado)
- **PHP 8.3 ou superior**
- **Composer** instalado

## 📦 Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/Pett97/MinhaBliblioteca.git
cd MinhaBliblioteca
cd back-bliblioteca

```
## 📦 Instalação Dependencias composer 

```
 composer update
 composer install
 ```
### copiar arquivo de ENV e editar com seus dados e gerar chave 
```
 cp .env.example .env
./vendor/bin/sail artisan key:generate
```

### iniciar container
```
./vendor/bin/sail up -d
```

### rodar migration
```
./vendor/bin/sail artisan migrate

```

### rodar seeder
```
./vendor/bin/sail db:seed

```

### rodar testes
```
./vendor/bin/sail test

```

## Front End
O Front foi feito usando Angular 

### instalação do angular 
```
cd front-biblioteca
```
### instalar pacotes com npm ou yarn

### acessar 
```
http://localhost:4200/login
```

