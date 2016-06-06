Feature: Adicionar livro
  Como usuario do sistema
  Eu quero adicionar um livro na lista
  Para que eu possa visualiza-lo mais tarde

  @watch
    Scenario: Adicionar um novo livro
      Given que eu tenha adicionado um livro
      Then eu consigo visualizar 'Testando automação com o CHIMP' na lista de livros