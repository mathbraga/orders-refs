# orders-refs

O projeto pode ser rodado tanto por meio dos scripts em TypeScript como por meio da api feita em NestJS.

## Requisitos

[NodeJS](https://nodejs.org/en) 18.18.2 ou superior.

### Como rodar

A partir do diretório raiz do projeto, na sua linha de comando:
```
npm install
```

#### Para rodar apenas os scripts em TypeScript:
A partir do diretório raiz:
```
npx ts-node assets/index.ts
```

Um arquivo `Pendentes.txt` com o resultado vai ser criado dentro do diretório `/data`

#### Se quiser executar como uma API Rest do NestJS:
A partir do diretório raiz:
```
npm run start
```

Acessando `http://localhost:3000/pendencies` vai ser retornado o resultado.

### Para rodar os testes

A partir do diretório raiz:
```
npm run test
```
