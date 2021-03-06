# TypeScript

- **Conjunto de ferramentas, da linguagem JavaScript;**
- **Criador: Anders Hejlsberg (também criou as linguagens Delphi e C#);**
- **Pertence a Microsoft e é um projeto de código aberto (Open Source);**
- **Pode ser visto como um JavaScript com marcação de tipos, que possui algumas outras ferramentas de compilação;**



### Porque TypeScript?

- **JavaScript é uma linguagem de tipagem dinâmica (fracamente tipada) e, com o uso do TypeScript, a transformamos em uma linguagm fortemente tipada (o que ajuda a diminuit as chances de erros no código);**
- **Além disso, oferece recursos da Orientação a Objetos, com isso, o nosso código fica mais robusto e escalável;**
- **Ainda, ele converte o nosso código para versões anteriores do ECMAScript, fazendo com ele funcione em navegadores antigos;**



### Instalação

- **`npm install -g typescript`;**



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



### Tipos de dados

- **Um dos princípios do TypeScript, é a definição dos tipos que as variáveis irão possuir (isso nos dá mais controle sobre essas informações);**
- **O JavaScript é uma linguagem de tipagem dinâmica (podemos atribuir diferentes valores a uma variável, por exemplo, ela pode ser inicializada com um número, mas em seguida podemo trocar esse valor para um texto, string e com isso, através do valor atribuído a variável, ocorre a inferência de tipo). Já com o TypeScript, definimos um tipo (coisa não acontece com JavaScript) e essa variável será desse tipo (não poderemos alterar);**
- **Dedução de tipo -Type Inference;**
- **No TypeScript, o tipo da variável é definido através do valor pelo qual a inicializamos. Por exemplo, se declaramos uma variável e a iniializamos com um texto, ela será do tipo string, "até o final" (não poderemos atribuir, por exemplo, um número a ela - algo que poderia ser feito em JavaScript);**
- **No TypeScript, não precisamos definir, explicitamente, o tipo da variável;**



### Funções

- **Com o TypeScript, podemos definir a tipagem dos parâmetros e a tipagem do retorno, das funções;**
- **Além disso, podemos acessar recursos avançados das funções, como Arrow Functions e Rest Parameters;**
- **Para dizer que um parâmetro é opcional, colocamos o símbolo de interrogação `?`, após o nome do parâmetro (e antes dos dois-pontos);**



### Interfaces

- **Estruturas que nos permite definir a forma de objetos (regras que o objeto deve atender/seguir);**
- **Através delas podemos definir os tipos de dados das propriedades, os parâmetros esperados pelas funções e os tipos dos retornos dessas funções;**
- **Em relação as interfaces, precisamos seguir as regras definidas para que o código funcione (um padrão é criado e somos obrigados a seguir esse padrão);**



### POO - Programação Orientada a Objetos

- **Paradigma de programação que consiste em criar instâncias de nossos projetos, levando em conta o conceito dos objetos, no mundo real;**
- **Os objetos possuem características e ações em comum;**
- **Para construir um objeto, é necessário possuir um modelo, que nos ajudará a entender como o objeto será e o que ele fará;**
- **Para criar um objeto (na programação), precisamos , antes,criar uma classe;**
- **Uma classe define as características e as ações que o nosso objeto possuirá (ela é o nosso modelo);**
- **Na programação, as características são chamadas de atributos e ações são chamadas de métodos;**
- **Um objeto consiste em uma nova representação da classe, uma instância;**
- **Além disso, criar instâncias, a Orientação a objetos funciona com quatro conceitos principais:**
  - **Herança: quando uma classe herda algo (atributos ou métodos) de outra classe;**
  - **Encapsulamento: tipo de proteção, tanto para os atributos, como para os métodos;**
  - **Polimorfismo: ;**
  - **Abstração;**



### Herança

- **O conceito de herança permite que uma classe herde recursos de outra classe;**
- **A classe que compartilha as informações, é chamada de classe pai;**
- **A classe que herda informações, é chamada de classe filha (ela vai possuir os atributos e métodos da classe pai);**
- **Quando estamos em um construtor e chamamos o `super()`, automaticamente, o construtor da classe pai é chamado;**
- **O super deve ser a primeira coisa a ser chamada, dentro do construtor da classe filha;**



### Encapsulamento

- **Nos permite definir nǘeis de acesso, para os nossos atributos e métodos;**

- **Usando os modificadores de acesso, podemos determinar até que ponto um atributo/métodos, é visível para outras variáveis ou classes;**

- **Existem quatro modificadores de acesso, que podemos atribuir aos nossos atributos, e três que podemos atribuir aos métodos:**

  **1 - public: qualquer classe tem acesso aos atributos e métodos (e podem alterar os mesmos);**

  **2 - protected: somente a classe pai e as filhas, possuem acesso e podem altera, os atributos e métodos;**

  **3 - private: somente a classe onde os atributos e métodos foram criados, terá acesso aos mesmos (e poderá modificá-los);**

  **4 - readonly (apenas para atributos): podemos apenas fazer a leitura do atributo, mas não podemos alterá-lo (os atributos são vistos e lidos,  mas não podem ser alterados);**



### Polimorfismo

- **Definição: qualidade ou estado, de ser capaz de assumir diferentes formas;**
- **Conceito aplicado quando um classe filha, cria um mesmo atributo ou método, de sua classe pai, mas implementando um novo comportamente ou lógica (sobrescrevendo);**



### Abstração

- **Abstração é um conceito que nos permite criar classes abstratas, que representam atributos e métodos que podem ser utilizados em mais de um contexto;**
- **Essa prática nos ajuda a reaproveitar melhor o código e também a deixá-lo mais leve;**
- **Classes abstratas não podem ser instanciadas;**



### Módulos

- **Um módulo é basicamente um arquivo separado, que armazena uma parte do nosso código;**
- **Ao fazer a importação de um módulo, podemos reaproveitar seu código em vários arquivos;**
- **Ao utilizar módulos, temos acesso aos seguintes benefícios:**
  - **Melhor organização do código;**
  - **Melhor reutilização do código;**
  - **Evitar conflito nos identificadores das variáveis (cada módulo tem seu próprio escopo);**
- **Módulos são necessários pois conforme o projeto cresce, o número de arquivos também aumenta, o que pode deixar o nosso projeto desorganizado e confuso;**



### Namespaces

- **Recurso específico do TypeScript;**
- **Permite a melhora da organização dos arquivos, em nossos projetos;**
- **O objetivo dos namespaces, é muito similar ao objetivo dos módulos. Porém, os módulos são parte nativa da linguagem JavaScript (isso, a partir do ECMAScript). Logo, é recomendado usar módulos, ao invés de namespaces;**



### Generics

- **Nos permitem a criação de estruturas, que serão adaptáveis a vários tipos de dados;**
- **Esse conceito nos ajuda a reaproveitar melhor o nosso cósigo e a torná-lo flexível, para diversas situações;**
- **Para definir um Generic, basta informar um tipo genérico, usando os sinais de menor e maior que ( < > );**
- **Podemos criar tipos genéricos ao trabalhar como:**
  - **Funções;**
  - **Interfaces;**
  - **Classes;**



### OBS.:

- **Acusa erro, quando dois arquivos estão abertos (um .ts e outro .js, no mesmo diretório) e ambos os arquivos possuem declarações com o mesmo nome (fechando o arquivo .js, deixa de acusar o erro);**
- **Podemos definir como a compilação ocorre, mas o padrão do TypeScript é converter o código para o JavaScript na versão 3 (ECMAScript 3);**
- **O TypeScript oferece uma ferramenta, um arquivo de configuração, onde não se faz necessário executar o nosso código, passando flags (nome do arquivo: tsconfig.json);**
- **Quando definimos o arquivo tsconfig.json, não é mais necessário usar o comando tsc nome_do_arquivo.ts, para converter o código TypesScript em JavaScrit, basta apenar usar o comando tsc no terminal (ele vai encontrar todos os arquivos .ts, além do arquivo tsconfig.json e converter todos os arquivos .ts, em .js);**
- **tsc --watch: compila automaticamente os arquivos .ts (para sair: CTRL + C);**
- **Arquivos js.map (um arquivo JSON), ajudam o navegador a fazer a leitura e a apontar os erros diretamente no arquivo .ts e não no arquivo .js;**









