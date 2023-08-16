Lista de Usuários com Navegação

º criar uma pasta pages dentro da pasta src.
º criar 3 páginas dentro desta pasta pages.
º Home (página que irá conter a lista de usuários).
º Details (página que irá exibir os detalhes de cada usuário).
º Error (página que será exibida quando o endereço informado na url for inválido).
º implementar o componente Router, responsável pelo roteamento.
º implementar no componente Item um botão “Ver detalhes”, o qual, ao ser clicado, deve redirecionar o usuário para a página Details.

Ao acessar a aplicação:
º na página Home, deve-se exibir a lista de usuários.
º ao clicar no botão “Ver detalhes”, o usuário deve ser redirecionado para a página que contém os detalhes do usuário específico.
º a página Details deve exibir nome, descrição e uma imagem do usuário.
º deve ser possível retornar à página ”Home”.
º ao acessar uma url inexistente, deve ser exibida a página Error, com a mensagem “Página não encontrada” e uma opção para voltar à página Home.

Prática: Lista de Usuários Aprimorada

º adicionar à configuração do ESLint, que já vem com o Create React App, as seguintes regras:
 1 semi com o chave/valor “error” e “always”, para sempre utilizar “;” no projeto;
 2 quotes com o chave/valor “error” e “single”, para sempre utilizar aspas simples no projeto;

º adicionar o comando lint aos scripts do projeto eslint ./src/**/*.{js,jsx};

º criar o arquivo .editorconfig com uma configuração padrão, para padronizar a indentação do código;

º instalar o CommitLint com @commitlint/config-conventional para estender o padrão Conventional Commits;

º instalar o Husk;

º adicionar o hook pre-commit para executar o comando nom run lint;

º adicionar o hook commit-msg para validar as mensagens de commit.
