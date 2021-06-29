## 💻 Sobre o projeto

🤖 Discord-bot - teste da API do Discord usando o Discord.js.

## ⚙️ Funcionalidades

- [x] Eventos:
    - [X] message
    - [X] ready
    - [ ] guildMemberAdd
    - [ ] guildMemberRemove    
- [X] Comandos:
    - [X] attachments
    - [X] avatars
    - [X] botapplication
    - [X] embed
    - [X] help
    - [X] ping

## :computer: Tecnologias

Este projeto foi realizado usando as seguintes tecnologias:

<ul>
  <li><a href="https://nodejs.org/en/docs/">NodeJs</a></li>
  <li><a href="https://www.javascript.com/">JavaScript</a></li>
  <li><a href="https://discord.js.org/">Discord.js</a></li>
</ul>

## :construction_worker: Como rodar o projeto

### :computer: Baixando o projeto

```bash
# Clone o repositório em sua máquina
$ git clone https://github.com/guilhermeivo/discord-bot.git
```

### :wrench: Configurando o ambiente

<ul>
    <li>Para este projeto é necessário ter instalado em sua maquina o <a href="https://nodejs.org/en/">NodeJs</a>.</li>
    <ul>
        <li>Pegue o código da API;</li>
        <li>Renomeie o arquivo <code>.env_.ample</code> para <code>.env</code>;</li>
    </ul>
    <li>Para registrar um bot no Discord, use o <a href="https://discord.com/developers/applications/">painel da aplicação Discord</a>.</li>
</ul>

### :computer: Rodando o projeto

#### Projeto

```bash
# Vá para a pasta do projeto
$ cd discord-bot/

# Instalar dependências
$ npm install

# Executar aplicativo
$ npm start
```

## Arquitetura

- Arquitetura
  - `src/`
    - `commands/`
        - `command/`
            - `command.js`
    - `common/`
        - `common.js`
    - `events/`
        - `guildMemberAdd.js`
        - `guildMemberRemove.js`
        - `message.js`
        - `ready.js`
    - `index.js`
