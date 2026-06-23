// ========================================
// AIWA PLAYBOOK MATRIX V2
// Comparativos Dinâmicos
// ========================================


let compareCategory = "audio";

let compareMode = 2;


let selectedProducts = [

"boombox_aiwa",

"jbl_club120"

];



function changeCompareCategory(category){

compareCategory = category;

renderCompare();

}



function changeCompareMode(mode){

compareMode = mode;


while(selectedProducts.length > mode){

selectedProducts.pop();

}


while(selectedProducts.length < mode){

selectedProducts.push(null);

}


renderCompare();

}



function setCompareProduct(index,id){

selectedProducts[index]=id;

renderCompare();

}



function renderCompare(){


const container = document.getElementById(

"compareResult"

);


if(!container) return;


const products = selectedProducts

.filter(Boolean)

.map(

id=>PRODUCTS[id]

);


if(products.length===0){

container.innerHTML='';

return;

}



const features=[

"potencia",

"bluetooth",

"ip",

"tws",

"app",

"bass",

"usb",

"bateria",

"garantia"

];



const labels={

potencia:"Potência",

bluetooth:"Bluetooth",

ip:"Proteção",

tws:"TWS",

app:"Aplicativo",

bass:"Bass Boost",

usb:"USB",

bateria:"Bateria",

garantia:"Garantia"

};



let html='';


html+=`

<div class="compare-wrapper">

<table class="compare-table">

<tr>

<th>

Recurso

</th>

`;


products.forEach(

product=>{

html+=`

<th>

${product.nome}

</th>

`;

}

);


html+=`

</tr>

`;



features.forEach(

feature=>{


html+=`

<tr>

<td>

${labels[feature]}

</td>

`;


products.forEach(

product=>{


html+=`

<td>

${product[feature] ?? '-'}

</td>

`;

}


);


html+=`

</tr>

`;

}


);



html+=`

</table>

</div>

`;


container.innerHTML=html;

}



document.addEventListener(

'DOMContentLoaded',

()=>{

renderCompare();

}

);
