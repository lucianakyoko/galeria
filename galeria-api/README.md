# 🖼️ Galeria API

API simples para upload de imagens utilizando **NestJS**, **MongoDB** e **Cloudinary**.

Este projeto permite que usuários enviem imagens para a nuvem (Cloudinary) e armazena os metadados no MongoDB. É ideal como base para projetos que precisam de uma galeria de fotos ou funcionalidades semelhantes.

## 📚 Tutorial completo
Você pode conferir o passo a passo da construção desta API lá no meu post DEV.to:

👉 [Criando uma API de galeria de imagens com NestJS, MongoDB e Cloudinary](https://dev.to/luciana_kyoko/criando-uma-api-de-galeria-de-imagens-com-nestjs-mongodb-e-cloudinary-2ope)

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/) — Framework Node.js para back-end escalável
- [MongoDB + Mongoose](https://mongoosejs.com/) — Banco de dados NoSQL
- [Cloudinary](https://cloudinary.com/) — Armazenamento e otimização de imagens
- [streamifier](https://www.npmjs.com/package/streamifier) — Utilitário para transformar `Buffer` em `Stream`

## 🔧 Instalação

```bash
# clone o repositório
git clone https://github.com/seu-usuario/galeria-api.git
cd galeria-api

# instale as dependências
npm install

# configure o .env
cp .env.example .env
# edite o .env com suas credenciais do Cloudinary e MongoDB

# rode o projeto
npm run start:dev
```