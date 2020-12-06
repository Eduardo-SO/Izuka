---
title: 'Duas formas de Pré-renderização no Next.js'
date: '2020-12-05'
---

O Next.js possui duas formas de pré-renderização: **Geração Estática** e **Server-side Rendering**. A diferença está em **quando** ele gera o HTML para a página.

- **Geração Estática** é o metódo de pré-renderização que gera o HTML no **momento do build**. O HTML pré-renderizado é então _reutilizado_ a cada requisição.
- **Server-side Rendering** é o metódo de pré-renderização que gera o HTML a **cada requisição**.

É importante ressaltar que o Next.js deixa você **escolher** qual forma de pré-renderização usar em cada página. Você pode criar um app Next.js **híbrido** usando Geração Estática para a maioria das páginas e usar Server-side Rendering para as outras.