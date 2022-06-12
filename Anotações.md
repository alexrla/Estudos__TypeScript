# TypeScript

- **Conjunto de ferramentas, da linguagem JavaScript;**
- **Criador: Anders Hejlsberg (também criou as linguagens Delphi e C#);**
- **Pertence a Microsoft e é um projeto de código aberto (Open Source);**
- **Pode ser visto como um JavaScript com marcação de tipos, que possui algumas outras ferramentas de compilação;**



### Porque TypeScript?

- **JavaScript é uma linguagem de tipagem dinâmica (fracamente tipada) e, com o uso do TypeScript, a transformamos em uma linguagm fortemente tipada (o que ajuda a diminuit as chances de erros no código);**
- **Além disso, oferece recursos da Orientação a Objetos, com isso, o nosso código fica mais robusto e escalável;**
- **Ainda, ele converte o nosso código para versões anteriores do ECMAScript, fazendo com ele funcione em navegadores antigos;**



### Compilador TypeScript (TSC - TypeScript Compiler)

- **Os navegadores só conseguem ler código JavaScript;**
- **O TSC converte o código TypeScript, para código JavaScript;**

- **tsc nome_do_arquivo.ts => nome_do_arquivo.js;**

- **Para definir a versão JavaScript, no qual o código será convertido:**

  - **tsc nome_do_arquivo.ts -t versão ou tsc nome_do_arquivo.ts --target versão;**

- **Formas de configurar o TSC:**

  **1 - Através da linha de comando (informando as configurações através de flags);**

  **2 - Através de um arquivo de nome tsconfig.json ou jsconfig.json;**

  **3 - Executando _tsc --init_ no terminal (os arquivos de configuração serão criados automaticamente);**

- **No arquivo tsconfig.json, podemos especificar o diretório contendo nossos arquivos .ts, através do _"rootDir"_ e também podemos especificar para onde vão os códigos convertidos, os arquivos .js, através do _"outDir"_;**

- **



### OBS.

- **Acusa erro, quando dois arquivos estão abertos (um .ts e outro .js) e ambos os arquivos possuem declarações com o mesmo nome (fechando o arquivo .js, deixa de acusar o erro);**
- **Podemo definir como a compilação ocorre, mas o padrão do TypeScript é converter o código para o JavaScript na versão 3 (ECMAScript 3);**
- **O TypeScript oferece uma ferramenta, um arquivo de configuração, onde não se faz necessário executar o nosso código, passando flags (nome do arquivo: tsconfig.json);**
- **Quando definimos o arquivo tsconfig.json, não é mais necessário usar o comando tsc nome_do_arquivo.ts, para converter o código TypesScript em JavaScrit, basta apenar usar o comando tsc no terminal (ele vai encontrar todos os arquivos .ts, além do arquivo tsconfig.json e converter todos os arquivos .ts, em .js);**
- 





