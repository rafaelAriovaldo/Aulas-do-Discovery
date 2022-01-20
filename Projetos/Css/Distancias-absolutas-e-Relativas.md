# Distancias Absolutas <length>

São fixas e não alteram seu valor

Unidade     Nome                Equivalencia
cm          Centimetros         1cm = 96px/2.54
im          Inches(polegadas)   1in = 2.54 = 96px
px          Pixels              1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px**
* não recomendo usar cm

* Distância relativas

São relativas a algum outro valor, pode ser elemento pai, ou root ou o
tamanho da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela.

Unidade     Relativo
em          Tamanho da fonte pai.
rem         Tamanho da fonte elemento raiz (root/html)
vw          1% da viewport width.
vh          1% da viewport height.