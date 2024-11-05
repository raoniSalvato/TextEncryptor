# TextEncryptor

TextEncryptor é uma aplicação web simples desenvolvida com HTML, CSS e JavaScript que permite criptografar e descriptografar textos por meio de substituições específicas de letras. Ideal para quem deseja ocultar mensagens de maneira rápida e divertida.

## Funcionalidades

- **Criptografar texto**: Transforma um texto comum em uma versão criptografada substituindo letras por padrões específicos:
  - `e` é substituído por `enter`
  - `i` é substituído por `imes`
  - `a` é substituído por `ai`
  - `o` é substituído por `ober`
  - `u` é substituído por `ufat`

- **Descriptografar texto**: Reverte o processo de criptografia, restaurando o texto ao seu formato original.

- **Copiar texto**: Permite ao usuário copiar o texto criptografado ou descriptografado com um único clique para uso externo.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Usar

1. **Digite o texto**: Na área de texto principal, insira o texto que deseja criptografar ou descriptografar. Observação: utilize apenas letras minúsculas e sem acentos.
2. **Escolha uma ação**:
   - Clique em **Criptografar** para codificar o texto.
   - Clique em **Descriptografar** para decodificar um texto previamente criptografado.
3. **Copie o texto**: Clique em **Copiar** para transferir o texto resultante para a área de transferência.
4. **Limpar campo**: Após copiar, o campo será automaticamente limpo para uma nova conversão.

## Estrutura do Projeto

- `index.html`: Estrutura principal da interface do usuário.
- `style.css`: Estilos e layout da página.
- `javaScript.js`: Lógica de criptografia, descriptografia e funcionalidades de cópia e limpeza de campo.
