## 💻 Sobre o projeto

🤖 Discord-bot - teste da API do Discord usando o Discord.js.

# :scroll: Sumário

- [Funcionalidades](#⚙️-Funcionalidades)
- [Tecnologias](#computer-tecnologias)
- [Como rodar o projeto](#construction_worker-como-rodar-o-projeto)
    - [Baixando o projeto](#computer-baixando-o-projeto)
    - [Configurando o projeto](#wrench-configurando-o-ambiente)
    - [Rodando o projeto](#computer-rodando-o-projeto)
        - [Projeto](#Projeto)

## ⚙️ Funcionalidades

- [x] Eventos:
    - [X] message
    - [X] ready
    - [ ] guildMemberAdd
    - [ ] guildMemberRemove    
- [X] Comandos:
    - [X] gif
    - [X] help

# :computer: Tecnologias

Este projeto foi realizado usando as seguintes tecnologias:

<ul>
  <li><a href="https://nodejs.org/en/docs/">NodeJs</a></li>
  <li><a href="https://www.javascript.com/">JavaScript</a></li>
  <li><a href="https://discord.js.org/">Discord.js</a></li>
</ul>

# :construction_worker: Como rodar o projeto

### :computer: Baixando o projeto

```bash
# Clone o repositório em sua máquina
$ git clone https://github.com/guilhermeivo/discord-bot.git
```

### :wrench: Configurando o ambiente

<ul>
    <li>Para este projeto é necessário ter instalado em sua maquina o <a href="https://nodejs.org/en/">NodeJs</a>.</li>
    <li>Crie uma conta no <a href="https://tenor.com/gifapi/documentation">Tenor</a>.</li>
    <ul>
        <li>Pegue o código da API;</li>
        <li>Renomeie o arquivo <code>.env_sample</code> para <code>.env</code>;</li>
        <li>Substitua o texto <code>YOUR_TONER_TOKEN</code> no arquivo .env pelo código da API.</li>
    </ul>
    <li>Para registrar um bot no Discord, use o <a hrfe="https://discord.com/developers/applications/">painel da aplicação Discord</a>.</li>
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