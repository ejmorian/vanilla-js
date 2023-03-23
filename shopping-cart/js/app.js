class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    addDescription = (description) => {
        this.description = description
    }

}


const products = [
    {
        name: 'Macbook Air',
        price: 1500
    },
    {
        name: 'Macbook Pro',
        price: 2200
    },
    {
        name: 'Iphone 14',
        price: 1250
    },
    {
        name: 'Iphone Pro Max',
        price: 1850
    },
]

const userCart = []
let cartTotal = 0;

const displayCart = () => {
    const total = document.createElement('p')

    document.getElementById('show-cart').addEventListener('click', () => {
        document.getElementById('cart').classList.remove('hidden');

        total.innerText = `Total: ${cartTotal}$`;
        document.getElementById('cart').append(total);


    })

    document.getElementById('exit-cart').addEventListener('click', () => {
        document.getElementById('cart').classList.add('hidden');
    })
}



const displayProducts = () => {
    //create product card
    const displayArea = document.getElementById('products')

    products.forEach(item => {

        // create individual html elements
        const product = document.createElement('div');
        const image = document.createElement('div');
        const name = document.createElement('h3');
        const price = document.createElement('span');
        const addCart = document.createElement('button');

        // add individual attributes and context
        product.classList.add('product');
        image.classList.add('image');
        name.innerText = item.name;
        price.innerText = `${item.price}$`;
        addCart.innerText = 'Add to Cart';

        product.append(image, name, price, addCart)
        displayArea.append(product)

        addCart.addEventListener("click", () => {
            const cartItem = document.createElement('div');
            const cartItemName = document.createElement('p');
            const cartItemPrice = document.createElement('p');

            cartItem.classList.add('cartItem')
            cartItemName.innerText = `Product: ${item.name}`;
            cartItemPrice.innerText = `Cost: ${item.price}$`

            cartItem.append(cartItemName, cartItemPrice)

            document.getElementById('cart').append(cartItem)

            userCart.push(item)
            cartTotal += item.price;

        })

    })
}

const init = () => {

    displayCart();
    displayProducts();

}

window.onload = init