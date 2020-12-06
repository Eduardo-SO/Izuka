---
title: 'Quando usar Geração Estática v.s. Server-side Rendering'
date: '2020-12-05'
---

É recomendado utilizar a **Geração Estática** (com e sem dados) sempre que possível porque sua página pode ser construída uma única vez e ser distribuída por uma CDN, o que deixa muito mais rápido do que ter um servidor renderizando a página a cada requisição.

Você pode utilizar a Geração Estática para muitos tipos de página, incluindo:

 - Páginas de marketing
 - Posts de blog
 - Listagem de produtos de um E-commerce
 - Ajuda e documentação

Você deve se perguntar: "Eu posso pré-renderizar esta página **antes** da requisição do usuário?" Se a resposta for sim, então você deve escolher a Geração Estática.

Por outro lado, a Geração Estática **não** é uma boa ideia se você não puder pré-renderizar a página antes da requisição do usuário. Talvez sua página exiba dados atualizados frequentemente, e o conteúdo da página mude a cada requisição.

Neste caso, você pode utilizar o **Server-side Rendering**. Ele vai mais lento, porém a página pré-renderizada estará com o conteúdo atualizado. Ou então você pode pular a pré-renderização e utilizar o JavaScript client-side para popular os dados. 
