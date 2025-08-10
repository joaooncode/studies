# Alura Studies

Uma aplicação de gerenciamento de estudos desenvolvida com React, TypeScript e Tailwind CSS, criada durante os estudos da Alura.

## 🚀 Sobre o Projeto

O **Alura Studies** é uma ferramenta completa para organizar e gerenciar suas sessões de estudo. Com uma interface moderna e intuitiva, você pode:

- ✏️ **Criar tarefas de estudo** com tempo personalizado
- ⏱️ **Controlar o tempo** com um cronômetro integrado
- 📋 **Organizar suas atividades** em uma lista clara
- 🎯 **Focar em uma tarefa por vez** com seleção intuitiva

## ✨ Funcionalidades

### 📝 Formulário de Tarefas

- Adicione novas tarefas de estudo
- Defina o tempo estimado para cada atividade
- Validação de campos obrigatórios
- Interface responsiva e acessível

### ⏰ Cronômetro Inteligente

- Timer visual com formato HH:MM:SS
- Controles de iniciar, pausar e resetar
- Notificação automática ao concluir
- Reset automático ao trocar de tarefa

### 📋 Lista de Estudos

- Visualização clara de todas as tarefas
- Seleção visual da tarefa ativa
- Layout responsivo para diferentes dispositivos
- Destaque da tarefa selecionada

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos
- **ESLint** - Linting de código
- **Husky** - Git hooks para qualidade de código

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn ou bun

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd studies

# Instale as dependências
npm install
# ou
yarn install
# ou
bun install
```

### Executando o Projeto

```bash
# Modo de desenvolvimento
npm run dev
# ou
yarn dev
# ou
bun dev

# Build para produção
npm run build
# ou
yarn build
# ou
bun run build

# Preview da build
npm run preview
# ou
yarn preview
# ou
bun run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── form/           # Formulário de criação de tarefas
│   ├── list/           # Lista de tarefas
│   ├── timer/          # Cronômetro e controles
│   └── ui/             # Componentes de interface reutilizáveis
├── types/               # Definições de tipos TypeScript
├── lib/                 # Utilitários e configurações
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada da aplicação
```

## 🎨 Interface

A aplicação possui um design moderno com:

- **Tema escuro** por padrão
- **Layout responsivo** para desktop e mobile
- **Componentes acessíveis** seguindo padrões WCAG
- **Animações suaves** para melhor experiência do usuário
- **Cards com sombras** para hierarquia visual

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Corrige automaticamente problemas de linting

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:

- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops
- 🖥️ Telas grandes

## 🤝 Contribuindo

Este é um projeto de estudos, mas se você quiser contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso educacional, desenvolvido durante os estudos da Alura.

## 🙏 Agradecimentos

- **Alura** - Plataforma de cursos online
- **React Team** - Biblioteca React
- **Tailwind CSS** - Framework CSS
- **Vite** - Build tool

---

Desenvolvido com ❤️ durante os estudos de React e TypeScript na Alura.
