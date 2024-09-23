# Projeto de Listagem de Países

Este projeto consiste em uma plataforma web que utiliza a API [RestCountries](https://restcountries.com/) para listar e exibir informações sobre países ao redor do mundo. A aplicação permite aos usuários explorar uma lista de países, aplicar filtros e ordenações, e visualizar detalhes sobre um país específico.

## Funcionalidades

### Tela de Listagem de Países
- **Consumo da API**: Obtém a lista de países da API RestCountries.
- **Exibição de Informações**: Exibe o nome, bandeira, capital e região de cada país.
- **Paginação/Scroll Infinito**: Implementação de paginação ou scroll infinito para a lista de países.
- **Busca por Nome**: Campo de busca para procurar um país específico pelo nome.
- **Filtros**:
  - Filtro por sub-região.
  - Filtro por região.
  - Filtro por população (intervalos: <1M, 1M-10M, 10M-100M, >100M).
- **Ordenação**:
  - Ordenação por nome do país.
  - Ordenação por população.
  - Ordenação por área.
- **Navegação**: Redirecionamento para a Tela de Detalhes ao clicar em um país.
- **Voltar ao Topo**: Botão para retornar ao topo da lista após rolagem.

### Tela de Detalhes do País
- Exibição de informações detalhadas sobre um país selecionado, incluindo:
  - Nome oficial do país.
  - Bandeira.
  - Capital.
  - Região e sub-região.
  - População.
  - Área.
  - Idiomas falados.
  - Moedas.
  - Fuso horário.
  - Domínio de internet (código TLD).
  - Código de discagem internacional.
- **Navegação de Volta**: Botão ou link para retornar à Tela de Listagem de Países.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- [API RestCountries](https://restcountries.com/v3.1/all)

## Estrutura do Projeto

```
/projeto-countries
│
├── index.html            # Tela de Listagem de Países
├── detalhes.html         # Tela de Detalhes do País
├── css
│   └── styles.css        # Estilos personalizados
├── js
│   ├── script.js         # Lógica da Tela de Listagem
│   └── detalhes.js       # Lógica da Tela de Detalhes
└── img                   # Pasta para armazenar imagens (se necessário)
```

## Como Executar o Projeto

1. Clone este repositório para a sua máquina local:
   ```bash
   git clone https://github.com/seu_usuario/projeto-countries.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd projeto-countries
   ```

3. Abra o arquivo `index.html` em seu navegador.

## Contribuições

Sinta-se à vontade para contribuir com este projeto. Para isso:
1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3. Faça suas alterações e commit (`git commit -m 'Adiciona nova feature'`).
4. Envie suas alterações (`git push origin feature/nome-da-sua-feature`).
5. Crie um Pull Request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
