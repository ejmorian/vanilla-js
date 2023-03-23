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

const displayCart = () => {

    document.getElementById('show-cart').addEventListener('click', () => {
        document.getElementById('cart').classList.remove('hidden');

    })

    document.getElementById('exit-cart').addEventListener('click', () => {
        document.getElementById('cart').classList.add('hidden');
    })
}

const updateCart = () => {

    let cartTotal = 0;

    if (userCart.length !== 0) {
        userCart.forEach(item => {
            cartTotal += item.price
            document.getElementById('total').innerText = `Total: ${cartTotal}$`;
        })
    } else {
        document.getElementById('total').innerText = `Total: ${cartTotal}$`
        console.log('cart is empty')
    }
}


const addProducts = () => {
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


        // add functionality to cart
        addCart.addEventListener("click", () => {
            const cartItem = document.createElement('div');
            const cartItemName = document.createElement('p');
            const cartItemPrice = document.createElement('p');
            const cartItemRemove = document.createElement('button')

            //add attributes
            cartItem.classList.add('cartItem')
            cartItemName.innerText = `Product: ${item.name}`;
            cartItemPrice.innerText = `Cost: ${item.price}$`
            cartItemRemove.innerText = 'remove item';

            cartItem.append(cartItemName, cartItemPrice, cartItemRemove)
            document.getElementById('cart').append(cartItem)

            //update the current cart array
            userCart.push(item)
            updateCart();

            // add ability to remove the item from cart
            cartItemRemove.addEventListener('click', () => {
                //update the current cart array
                cartItem.remove()
                itemIndex = userCart.indexOf(item)
                userCart.splice(itemIndex, 1);
                updateCart();
            })
        })
    })
}

const init = () => {
    displayCart();
    addProducts();
}

window.onload = init