let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Tea',
        image: 'Tea.JPG',
        price: 10
    },
    {
        id: 2,
        name: 'Special Tea',
        image: 'Special.JPG',
        price: 15
    },
    {
        id: 3,
        name: 'Hot Coffee',
        image: 'Hot Coffee.JPG',
        price: 20
    },
    {
        id: 4,
        name: 'Hot Chocolate',
        image: 'Hot chocolate.JPG',
        price: 35
    },
    {
        id: 5,
        name: 'Bournvita milk',
        image: 'Bournvita.JPG',
        price: 35
    },
    {
        id: 6,
        name: 'Cold Coffee',
        image: 'coldcoffee.JPG',
        price: 49
    },
    {
        id: 7,
        name: 'Vanilla Shake',
        image: 'VanillaMilkshake.JPG',
        price: 49
    },
    {
        id: 8,
        name: 'Strawberry Shake',
        image: 'Strawberry.JPG',
        price: 49
    },
    {
        id: 9,
        name: 'Chocolate shake',
        image: 'Hot chocolate.JPG',
        price: 49
    },
    {
        id: 10,
        name: 'Oreo Shake',
        image: 'Oreoshake.JPG',
        price: 59
    },
    {
        id: 11,
        name: 'Kitkat Shake',
        image: 'Kitkatshake.JPG',
        price: 59
    },
    {
        id: 12,
        name: 'Sweet Lassi',
        image: 'sweetlassi.JPG',
        price: 20
    },
    {
        id: 13,
        name: 'Veg Roll',
        image: 'Veg Roll.JPG',
        price: 40
    },
    {
        id: 14,
        name: 'Paneer Roll',
        image: 'Paneer Roll.JPG',
        price: 50
    },
    {
        id: 15,
        name: 'Egg Roll',
        image: 'Egg Roll.JPG',
        price: 50
    },
    {
        id: 16,
        name: 'Chicken Roll',
        image: 'chicken Roll.JPG',
        price: 70
    },
    {
        id: 17,
        name: 'Spring Roll',
        image: 'Spring Roll.JPG',
        price: 70
    },
    {
        id: 18,
        name: 'Chilly Patato',
        image: 'Chilli patato.JPG',
        price: 70
    },
    {
        id: 19,
        name: 'Chilly Paneer',
        image: 'chillipaneer.JPG',
        price: 150
    },
    {
        id: 20,
        name: 'Chilly Mashroom',
        image: 'chillimushroom.JPG',
        price: 160
    },
    {
        id: 21,
        name: 'Chilly Corn',
        image: 'Chillicorn.JPG',
        price: 160
    },
    {
        id: 22,
        name: 'Chilly Chicken',
        image: 'chilli chicken.JPG',
        price: 190
    },
    {
        id: 23,
        name: 'Veg Momos',
        image: 'veg momos.JPG',
        price: 50
    },
    {
        id: 24,
        name: 'Paneer Momos',
        image: 'paneer momos.JPG',
        price: 70
    },
    {
        id: 25,
        name: 'Chicken Momos',
        image: 'chickenmomos.JPG',
        price: 80
    },
    {
        id: 26,
        name: 'Chilly Momos',
        image: 'chillymomos.JPG',
        price: 100
    },
    {
        id: 27,
        name: 'Tandoori Momos',
        image: 'tandoorimomos.JPG',
        price: 100
    },
    {
        id: 28,
        name: 'Hakka Noodles',
        image: 'Hakka noodles.JPG',
        price: 80
    },
    {
        id: 29,
        name: 'Chilly Garlic Noodles',
        image: 'chilligarlic.JPG',
        price: 90
    },
    {
        id: 30,
        name: 'Singapuri Noodles',
        image: 'singapurinoodle.JPG',
        price: 90
    },
    {
        id: 31,
        name: 'Desi Style Chicken',
        image: 'Desichicken.JPG',
        price: 500
    },
    {
        id: 32,
        name: 'Butter Chicken',
        image: 'butter chicken.JPG',
        price: 500
    },
    {
        id: 33,
        name: 'Chicken Lababdar',
        image: 'chickenlabadar.JPG',
        price: 500
    },
    {
        id: 34,
        name: 'Kadhai Chicken',
        image: 'kadhaichicken.JPG',
        price: 500
    },
    {
        id: 35,
        name: 'Chicken Tikka Masala',
        image: 'chickentikka.JPG',
        price: 380
    },
    {
        id: 36,
        name: 'Veg Diet',
        image: 'Veg Diet.JPG',
        price: 59
    },
    {
        id: 37,
        name: 'Paneer Diet',
        image: 'Paneerdiet.JPG',
        price: 79
    },
    {
        id: 38,
        name: 'Egg Diet',
        image: 'Egg Diet.JPG',
        price: 79
    },
    {
        id: 39,
        name: 'Chicken Diet',
        image: 'Chicken Diet.JPG',
        price: 99
    },{
        id:40,
        name:'Veg-Burger',
        image:'vegburger.JPG',
        price: 40
    },{
        id:41,
        name:'Paneer-Burger',
        image:'paneerburger.JPG',
        price:50
    },{
        id:42,
        name:'Chicken-Burger',
        image:'chickenburger.JPG',
        price:60
     },//{
    //     id:43,
    //     name:'Veg Fried Rice',
    //     image:'',
    //     price:56
    // }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

