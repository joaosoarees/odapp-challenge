# Iniciando a Aplicação

Para vizualizar a aplicação mobile, terá que instalar em seu celular o aplicativo Expo, você pode encontrá-lo para:

Android: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR

IOS: https://apps.apple.com/br/app/expo-client/id982107779

Selecione a pasta mobile através do comando <code>cd</code> em seu terminal, com a pasta selecionada rode <code>code .</code> para abrir seu Visual Studio Code

Com a pasta selecionada Rode primeiro <code>npm install</code> ou <code>yarn install</code> para instalar as dependencias do projeto, aguarde a finalização e rode <code>yarn start</code> ou <code>npm start</code> no seu terminal, ou no terminal integrado do Visual Studio Code para se redirecionar a página de conexão do Expo.

Verifique em seu terminal se será necessário baixar uma dependencia "expo-cli" se sim, bastar digitar "y" no terminal, e pressionar enter.

# Expo

Com página de conexão aberta, teremos que realizar uma modificação dentro do código.

No seu Visual Studio Code, acesse a pasta "services" e selecione o arquivo "api.js", dentro do arquivo você terá que mudar o endereço de IP da "baseURL:", para o endereço que aparece na sua página de conexão do Expo:

<img src="https://imgur.com/HHid4bG.png" align="center" style="max-width:100%;">

Lembre-se de alterar somente o endereço de IP, ex: "http://seuIpAqui:3333", pois essa é a porta que faz conexão com o backend.

Com a modificação feita no Visual Studio Code, salve o arquivo com o comando "CTRL+S".

Voltando para a página de conexão do Expo, basta abrir o aplicativo do Expo em seu celular, selecionar "Scan QR Code", e escanear o QR Code na página do seu navegador.

Seu celular começará a baixar a aplicação, aguarde alguns instantes e o aplicativo já vai estar rodando.

Certfique-se de que o backend já esteja rodando para exibir o dados dentro do MongoDB.
