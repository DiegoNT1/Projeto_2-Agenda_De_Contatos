# Agenda de Contatos 📇
Segundo projeto do curso da EBAC, desenvolvido por DiegoNT1.

## Visão Geral
Esta é uma aplicação web simples e funcional de gerenciamento de contatos. O usuário pode adicionar, editar e remover contatos, com campos como nome, telefone e e-mail. O foco é praticar conceitos de HTML, CSS e JavaScript puro.

## Funcionalidades
✍️ Adicionar novos contatos com nome, telefone e e-mail.

🛠️ Editar contatos existentes.

❌ Excluir contatos de forma individual.

🧠 Validação básica de formulário: campos obrigatórios e formatos válidos (e-mail e telefone).

## Tecnologias Utilizadas
HTML5 – estrutura da página.

CSS3 (no arquivo main.css) – layout responsivo e estilo visual.

JavaScript (ES6+) (em main.js) – lógica para CRUD dos contatos.

Local Storage – armazenamento persistente dos dados no navegador.

Imagens e ícones – pasta images/ para suportar a interface.

## Demonstração
Você pode visualizar o projeto online neste link:
https://projeto-2-agenda-de-contatos-zeta.vercel.app

Instalação e Uso
```bash
# 1. Clone este repositório
git clone https://github.com/DiegoNT1/Projeto_2-Agenda_De_Contatos.git

# 2. Acesse a pasta do projeto
cd Projeto_2-Agenda_De_Contatos

# 3. Abra o arquivo index.html no seu navegador
# Você pode usar http-server, Live Server do VSCode, ou simplesmente dar duplo clique no arquivo.
```
## Estrutura de Pastas
```bash
/
├── images/       # ícones e imagens usados na aplicação
├── index.html    # ponto de entrada da aplicação
├── main.css      # estilos visuais
└── main.js       # lógica de interação e armazenamento
```
## Como Funciona
O usuário preenche o formulário com nome, telefone e e-mail.

Ao clicar em Salvar, o JavaScript adiciona o contato à lista exibida e o guarda no Local Storage.

O botão Editar permite atualizar os dados de um contato selecionado.

O botão Excluir remove o contato da lista e do armazenamento.

Os contatos são carregados automaticamente ao recarregar a página, graças ao Local Storage.

