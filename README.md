# 🚀 NLW Connect Server - Rocketseat

**Projeto construído em apenas 5 horas durante o NLW Connect!** ⏱️  
Um backend robusto e escalável, feito com as melhores tecnologias modernas. 💻✨

[![Fastify](https://img.shields.io/badge/Fastify-5.2.1-000000?style=flat&logo=fastify)](https://fastify.io)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-0.39.3-3498DB?style=flat)](https://orm.drizzle.team)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)

---

## ✨ Features

- ✅ **API rápida e eficiente** com Fastify
- ✅ **Banco de dados type-safe** usando Drizzle ORM
- ✅ **Validação de dados** com Zod
- ✅ **Documentação automática** da API com Swagger UI
- ✅ **Cache e sessões** com Redis
- ✅ **Migrações de banco de dados** com Drizzle Kit
- ✅ **Linting e formatação** com Biome (2x mais rápido que ESLint!)

---

## 🛠️ Tecnologias

### Core Stack
- **Fastify**: Framework rápido e eficiente para APIs
- **Drizzle ORM**: ORM moderno e type-safe
- **Zod**: Validação de dados com type-safety
- **Redis**: Cache e gerenciamento de sessões
- **Swagger UI**: Documentação automática da API

### Dev Tools
- **Biome**: Formatação e linting ultra-rápido ⚡
- **Drizzle Kit**: Ferramenta para migrações de banco de dados
- **TSX**: Execução de TypeScript em tempo real
- **Tsup**: Bundler para TypeScript

---

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- npm 9+
- Banco de dados PostgreSQL configurado
- Redis configurado (opcional para cache)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/jonatas-melo-silva/nlw-connect-server.git

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Executando
```bash
# Modo desenvolvimento
npm run dev

# Gerar migrações do banco de dados
npm run db:generate

# Aplicar migrações
npm run db:migrate

# Build de produção
npm run build

# Iniciar servidor em produção
npm run start
```

---

## 📄 Documentação da API

Acesse a documentação automática da API em:  
👉 `http://localhost:3000/docs` (após iniciar o servidor)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estas etapas:
1. Abra uma issue descrevendo a melhoria ou correção.
2. Faça um fork do repositório e crie um branch para sua feature.
3. Envie um pull request com suas alterações.

---

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Feito com 💜 por [Jônatas Melo](https://github.com/jonatas-melo-silva) durante o NLW Connect da Rocketseat.  

**Dica profissional:** ⭐️ Deixe sua estrela no repositório se gostou do projeto!
