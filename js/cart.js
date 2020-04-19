class Cart{
    constructor(containerCart, catalogCounter, catalogProduct){
        this.containerCart = document.querySelector(containerCart);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createCart();
    }

    createCart(){
        this.catalogCounter.addEventListener('click', function(){
            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');
            for(let i = 0; i < productsCart.length; i++){
                let item = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'item'
                });
                let name = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'name',
                    nameText: productsCart[i].name
                });
                let price = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'price',
                    nameText: productsCart[i].price
                });

                let img = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'img',
                    bgImage: `url(${productsCart[i].img})`
                });

                
                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                wrapper.appendChild(item);

                contTwo.style.display = "none";
                akcia.style.display = "none";
                carus.style.display = "none";
                contCat.style.display = "none";
            };

            let close = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'close',
                nameText: 'Закрыть'
            });

            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = '';

                contTwo.style.display = "block";
                akcia.style.display = "block";
                carus.style.display = "block";
            });

            cart.containerCart.appendChild(close);
            cart.containerCart.appendChild(wrapper);
        })
    };

    getProductCart(){
        let products = store.getProducts();
        let productsCart = [];
        for(let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }
}

let cart = new Cart('.container_cart', '.catalog_counter', catalogProduct);