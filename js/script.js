//cards

function card_constructor({nro, trabajo, btn, page}) { 
    return `<div class="col trb-${nro}">
    <div class="card">
      <img src="${page_media_url[page]}${trabajo.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${trabajo.title}</h5>
        <p class="card-text">${trabajo.text}</p>
        <p class="card-text">
            <small class="text-muted">
                IMPRESIÓN 3D ➤ Duración ${trabajo.impresion3d.duracion} - Material ${trabajo.impresion3d.material.cantidad} (${trabajo.impresion3d.material.tipo})
            </small>
        </p>
        <a href="${btn_url[btn]}" class="btn btn-outline-secondary w-100" role="button">${btn.toUpperCase()}</a>
      </div>
    </div>
    </div>`;
};

var btn_url = {
    "contactanos": "../contacto.html",
    "mas trabajos": "./pages/trabajos.html"
}
var page_media_url = {
    "otros": "../../media/cards/",
    "repuestos": "../../media/cards/",
    "trofeos": "../../media/cards/",
    "index": "./media/cards/"
}

function cards_constructor({lista_trabajo, btn, page}){
    var nro = 0, text_append = "";
    for (const trabajo in lista_trabajo) {
        nro++;
        if(nro>3){
            nro = 1;
            if(page == "index"){
                $("#cards").append(text_append);
                return;
            }
        }
        text_append = `${text_append} ${card_constructor({nro, trabajo: lista_trabajo[trabajo], btn, page})}`;
    }
    $("#cards").append(text_append);
}
