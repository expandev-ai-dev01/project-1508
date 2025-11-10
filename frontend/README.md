# Catálogo de Bolos

Um catálogo digital para confeitaria com lista de produtos, filtros, detalhes dos bolos e funcionalidade de carrinho de compras.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── core/                  # Componentes e lógica compartilhada
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── utils/            # Funções utilitárias
│   └── types/            # Tipos TypeScript globais
├── domain/               # Domínios de negócio (a serem criados)
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`
2. Configure as variáveis de ambiente conforme necessário
3. Execute `npm install` para instalar as dependências
4. Execute `npm run dev` para iniciar o servidor de desenvolvimento

## Funcionalidades

- ✅ Estrutura base configurada
- ⏳ Catálogo de produtos (a implementar)
- ⏳ Filtros de produtos (a implementar)
- ⏳ Detalhes do produto (a implementar)
- ⏳ Sistema de avaliações (a implementar)
- ⏳ Carrinho de compras (a implementar)
- ⏳ Dados mockados (a implementar)

## Próximos Passos

1. Implementar domínio de produtos
2. Criar componentes de catálogo
3. Adicionar sistema de filtros
4. Implementar página de detalhes
5. Criar sistema de avaliações
6. Implementar carrinho de compras
7. Adicionar dados mockados