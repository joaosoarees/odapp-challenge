# Iniciando Servidor
Selecione a pasta backend através do comando <code>cd</code> em seu terminal, com a pasta selecionada rode <code>code .</code> para abrir seu Visual Studio Code

Com a pasta selecionada Rode <code>yarn start</code> ou <code>npm start</code> no seu terminal, ou no terminal integrado do Visual Studio Code para iniciar o servidor local.

# Banco de dados (Mongo DB Compass) 
Acessando o banco de dados:

Primeiro instale o Mongo DB Compass em sua máquina pelo link:

Windows:
https://downloads.mongodb.com/compass/mongodb-compass-community-1.20.5-win32-x64.exe

MacOS:
https://downloads.mongodb.com/compass/mongodb-compass-community-1.20.5-darwin-x64.dmg

Linux:
https://downloads.mongodb.com/compass/mongodb-compass-community_1.20.5_amd64.deb

Siga o passo a passo do assistente de instalação.

Após ter terminado a instalação, dentro do campo New Connection cole: 

<code>mongodb+srv://joaovitor:joao12345@cluster0-tfnqu.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true</code>

clique em "connect", selecione a DataBase "odapp" e a Collection "pacientes"

Pronto você já tem acesso ao banco de dados.
