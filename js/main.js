document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('productModal');
    const productName = document.getElementById('product-name');
    const modelSelect = document.getElementById('modelsSelect');
    const sizeSelect = document.getElementById('sizeSelect');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const addToCartButton = document.getElementById('addToCart');
    
    let cartItems = []; 

    productModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;  
    const product = button.getAttribute('data-product');  
    const models = JSON.parse(button.getAttribute('data-models'));  
    const sizes = JSON.parse(button.getAttribute('data-sizes'));  
    const productPrice = button.closest('.card').querySelector('.card-text').textContent.replace('$', '').replace(',', ''); 
    const priceWithoutDecimals = Math.floor(parseFloat(productPrice));

    modelSelect.innerHTML = '';
    sizeSelect.innerHTML = '';

 
    productName.textContent = product;
    addToCartButton.setAttribute('data-price', priceWithoutDecimals);  
    addToCartButton.textContent = `Agregar al carrito - $${priceWithoutDecimals.toLocaleString()}`; 
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });

        sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });
    });

    document.getElementById('cartButton').addEventListener('click', () => {
        cartOverlay.classList.toggle('active'); 
    });

    addToCartButton.addEventListener('click', () => {
        const selectedModel = modelSelect.value;
        const selectedSize = sizeSelect.value;
        const productNameText = productName.textContent;
        const productPrice = parseFloat(addToCartButton.getAttribute('data-price'));

        if (isNaN(productPrice)) {
            console.error('Error: No se encontró el precio del producto.');
            return; 
        }

        cartItems.push({ name: productNameText, modelo: selectedModel, size: selectedSize, price: productPrice });
        updateCart();
        cartOverlay.classList.add('active');

        const modal = bootstrap.Modal.getInstance(productModal);
        modal.hide(); 
    });

    function updateCart() {
        cartItemsContainer.innerHTML = ''; 
        let totalPrice = 0;

        const cartCountElement = document.getElementById('cartCount');
        cartCountElement.textContent = cartItems.length; 
        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item'); 

            const productName = document.createElement('span');
            productName.classList.add('cart-product');
            productName.textContent = item.name;

            const productModel = document.createElement('span');
            productModel.classList.add('cart-option');
            productModel.textContent = item.modelo;

            const productSize = document.createElement('span');
            productSize.classList.add('cart-option');
            productSize.textContent = item.size;

            const productPrice = document.createElement('span');
            productPrice.classList.add('cart-price');
            productPrice.textContent = `$${item.price.toFixed(2)}`;

            itemDiv.appendChild(productName);
            itemDiv.appendChild(productModel);
            itemDiv.appendChild(productSize);
            itemDiv.appendChild(productPrice);

            cartItemsContainer.appendChild(itemDiv);
            totalPrice += item.price; 
        });

        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    document.getElementById('continueShopping').addEventListener('click', () => {
        cartOverlay.classList.remove('active'); 
    });

    document.getElementById('payButton').addEventListener('click', () => {
        window.location.href = 'pagina-de-pago.html';
    });

    document.getElementById('closeCart').addEventListener('click', () => {
        cartOverlay.classList.remove('active'); 
    });
});


 document.querySelectorAll('.openReviewModal').forEach(button => {
  button.addEventListener('click', function() {
    const modal = new bootstrap.Modal(document.getElementById('reviewModal'));
    modal.show();
  });
});


  document.querySelectorAll('.card-img-top').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.src = img.getAttribute('data-animated');
    });
    img.addEventListener('mouseleave', () => {
        img.src = img.getAttribute('data-static');
    });
});
