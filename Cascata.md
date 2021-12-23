# A cascata (cascading)

A escolha do brose de qual regra a participar, caso ahaja regras 
para o mesmo elemento.

* Seu estilo é lido de cima para baixo

É levado em consideração 3 fatores:

1. Origem do estilo
2. Especifidade
3. Importancia

### Importancia do Estilo

inline > tag style > tag link

### Especifidade

é um calculo metamatico, onde, cada tipo de seletor e origem do estilo
possuem valores a serem considerados.

0. Universal selsctor, combinators e negation pseudo-class (not)
1. Element type selector e pseudo-elents(::before, ::after)
10. Classes e atribute selector (type="radio")
100. ID selector
1000. Inline

### A regra !important

* cuidado, evito o uso
* não é consoderado uma boa prática
* quebra o fluxo natural da cascata