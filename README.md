# Projeto ACE – Plataforma de Eventos

## TL;DR

Plataforma web de eventos desportivos, moderna e responsiva, construída em React com CSS Modules e foco em UX, acessibilidade e performance.

---

## 📌 Visão Geral

Este projeto é uma plataforma de divulgação e exploração de eventos desportivos. O foco principal é:

- Design moderno (glass / night UI)
- Totalmente responsivo (mobile-first)
- Componentização clara
- Código limpo e escalável

---

## 🧱 Stack Tecnológica

- React (componentes funcionais)
- CSS Modules (estilos isolados)
- JavaScript (ES6+)
- Vite ou Next.js

---

## 📂 Estrutura do Projeto

```
/src
 ├─ components
 │   ├─ layout
 │   │   ├─ Header
 │   │   └─ Hero
 │   ├─ events
 │   │   ├─ EventsToolbar
 │   │   ├─ ToolbarChip
 │   │   └─ SportDropdown
 │   └─ partners
 │       └─ Partners
 │
 ├─ config
 │   └─ content
 │       └─ home.content.js
 │
 ├─ styles
 │   └─ variables.css
 │
 └─ pagess
```

---

## 🎨 Design & UI

- Sistema de cores centralizado em :root
- Glassmorphism com backdrop-filter
- Espaçamentos responsivos com clamp()
- Layouts feitos com Flexbox e Grid

---

## 📱 Responsividade

- Mobile-first
- Breakpoints fluidos
- Conteúdo centralizado em todas as larguras
- Componentes flex/grid safe

---

## ♿ Acessibilidade

- aria-label, role, tablist
- :focus-visible
- HTML semântico
- Navegação por teclado

---

## ⚙️ Componentes-Chave

### Hero

- Background dinâmico
- Overlay para contraste
- Títulos multi-linha

### EventsToolbar

- Filtros por mês e desporto
- Estado ativo controlado externamente
- Layout adaptável

### Partners

- Grid de logos
- Cards com fundo suave
- Overrides por parceiro

---

## 🗂 Conteúdo Dinâmico

Todo o conteúdo vem de:

```
/config/content/home.content.js
```

---

## 🚀 Como Correr o Projeto

```bash
npm install
npm run dev
```

Build produção:

```bash
npm run build
```

---

## 🧪 Boas Práticas

- Componentes reutilizáveis
- CSS previsível
- Sem estilos globais desnecessários
- Performance-first

---

## 🔧 Próximos Passos

- Dark / Light mode
- Framer Motion
- CMS
- i18n

---

## 📄 Licença

Projeto privado / em desenvolvimento.

---

## 👤 Autor

João Costa
