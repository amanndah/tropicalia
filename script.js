document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

})
<header class="p-5">
      <nav class="container d-flex justify-content-between align-items-center" >
      <!-- código fonte ocultado→

      <div id="acessibilidade" class="menu-acessibilidade">
         <button id="aumentar-fonte" class="btn btn-primary fw-bold">A +</button>       
         <button id="diminuir-fonte" class="btn btn-primary fw-bold">A -</button>
      </div>            
   </nav>       
</header>
aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
})
document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})
