class AllProducts{
    constructor(containerProducts, catalogProduct, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.createProducts();
    }

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;      
        for(let i =0; i < this.catalogProduct.length; i++){
            let index = products.indexOf(this.catalogProduct[i].id);
            let activeText;

            if(index === -1){
                activeText = 'Добавить в корзину';
            } else{
                activeText = 'Удалить из корзины';
            }

            let item = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item',
            });
            let name = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                nameText: this.catalogProduct[i].name
            });
            let img = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'img',
                bgImage: `url(${this.catalogProduct[i].img})`
            });
            let price = createOneProduct.getProductItem({
                nameTsg: 'div',
                nameClass: 'price',
                nameText: this.catalogProduct[i].price
            });
            let btn = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'btn',
                nameText: activeText,
                id: this.catalogProduct[i].id
            });

            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);
                
                allProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Удалить из корзины';
                } else{
                    this.innerHTML = 'Добавить в корзину';
                }
            });


            let description = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'description',
                nameText: this.catalogProduct[i].description
            });

            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(description);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        };
        this.containerProducts.appendChild(wrapper);
    };
}

let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');

