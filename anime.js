// @ts-nocheck


const cartopen = document.querySelector('.cart-text');
const cartclose = document.querySelector('.cross');
const cart = document.querySelector('.cart-container');


//cart opening button
cartopen.addEventListener('click',()=>{
     cart.classList.add('cart-container-active');
});
//cart clossing button
cartclose.addEventListener('click',()=>{
    cart.classList.remove('cart-container-active');
});
//adding items to cart
const addcart = document.querySelectorAll('.add-cart');
addcart.forEach((span)=>{
    span.addEventListener('click',addingcartitems)
})



document.addEventListener('DOMContentLoaded',contentload);

function contentload(){
    loadcontent();
}


function loadcontent(){
//removing cart items
const remove = document.querySelectorAll('.remove');
remove.forEach((div)=>{
    div.addEventListener('click',removie);
})
//quantity changing
const qtychange = document.querySelectorAll('.anime-quantity');
qtychange.forEach((input)=>{
   input.addEventListener('change',defaultqty)
});

updatetotal()
   
} 

 


function removie(){
    if(confirm('Are you sure you want to remove this item?')){
        let animeprice = this.parentElement.querySelector('.main-price').innerHTML;
        data = data.filter(data=> data.price != animeprice);
        this.parentElement.remove();
        loadcontent() 
        localStorage.setItem('data',JSON.stringify(data))
        
    }

      /*  if(confirm('are you sure to remove this item ?')){
            
            let price = this.parentElement.querySelector('.main-price').innerHTML;
            data = data.filter(an=> an.price != price);
            this.parentElement.remove();
            loadcontent()
            }*/
        
    }
function defaultqty(){
    if(this.isNaN || this.value < 1){
        this.value=1;
    }
    loadcontent()
}


let data =[];


//windows onload...
window.onload=()=>{
    data = JSON.parse(localStorage.getItem('data')) || []
    data.forEach((data)=>lsstyling_creating_elements_items(data)) 
    }



function addingcartitems(){
    
    const anime = this.parentElement;
    const tittle = anime.querySelector('.anime-tittle').innerHTML;
    const price = anime.querySelector('.anime-price').innerHTML;
    const img = anime.querySelector('.anime-poster').src;

    //if item is already exist
    let newproduct = {tittle,img,price}

    if(data.find(el=>el.tittle == newproduct.tittle)){
        alert('this item is already exit');
        
        return;
    }else{
        data.push(newproduct);
    }
    


    const cartcontainer = document.querySelector('.cart-child-container');
    const div = document.createElement('div');
    div.innerHTML=itemsofcart(tittle,img,price);
    cartcontainer.append(div)
    
    loadcontent()
    localStorage.setItem('data',JSON.stringify(data))

}
function itemsofcart(title,image,price){
    return` <div class="cart-anime">
    <img src="${image}" alt="">
    <div class="detailed-box">
        <div class="anime-cart-tittle">${title}
        </div>
        <div class="price-box">
            <div class="main-price">${price}</div>
            <div class="quantity-price">Rs.420</div>
        </div>
        <input type="number" value="1" class="anime-quantity">
    </div>
    <div class="remove">rem</div>`
}
function updatetotal(){
    const cartbox = document.querySelectorAll('.cart-anime');
    const totalprice = document.querySelector('.total-price');
    
    let total=0;
    cartbox.forEach((product)=>{
        const mainprice = product.querySelector('.main-price');
       const pricevalue = parseFloat(mainprice.innerHTML.replace("Rs.",""));
        const qty = product.querySelector('.anime-quantity').value;
        const amtprice = product.querySelector('.quantity-price');

        

        amtprice.innerHTML="Rs."+ qty*pricevalue;
         total += qty*pricevalue;
        

         
    })
    totalprice.innerHTML='Rs.'+total;


    const cartcount = document.querySelector('.cart-count');
    let count = data.length;
    cartcount.innerHTML=count;

    if(count < 1){
        cartcount.style.display='none';
    }else{
        cartcount.style.display='block';
    }
   

}

function lsstyling_creating_elements_items(data){
   
   const cart_container = document.querySelector('.cart-child-container');
   const innerdiv = document.createElement('div');
   const object_title = data.tittle;
   const object_price = data.price;
   const object_img = data.img;
  
   innerdiv.innerHTML=`<div class="cart-anime">
                       <img src=${object_img} alt="">
                       <div class="detailed-box">
                           <div class="anime-cart-tittle">${object_title}</div>
                       <div class="price-box">
                            <div class="main-price">${object_price}</div>
                            <div class="quantity-price">Rs.420</div>
                       </div>
                       <input type="number" value="1" class="anime-quantity"></div>
                      <div class="remove">rem</div>
                      </div>`;

   cart_container.append(innerdiv);
   loadcontent()
    


  
  
   
  
   
   
}























