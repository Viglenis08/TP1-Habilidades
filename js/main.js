document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('productModal');
    const productName = document.getElementById('product-name');
    const modelSelect = document.getElementById('modelsSelect');
    const sizeSelect = document.getElementById('sizeSelect');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const addToCartButton = document.getElementById('addToCart');
    const cartButton = document.getElementById('cartButton');
    const continueShopping = document.getElementById('continueShopping');
    const payButton = document.getElementById('payButton');
    const closeCart = document.getElementById('closeCart');
    const cartCountElement = document.getElementById('cartCount');
  
    let cartItems = [];
  
    // Verificamos que el modal y los elementos necesarios existan
    if (productModal && productName && modelSelect && sizeSelect && addToCartButton) {
      productModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget; // Botón que disparó el modal
        const product = button.getAttribute('data-product');
        const models = JSON.parse(button.getAttribute('data-models'));
        const sizes = JSON.parse(button.getAttribute('data-sizes'));
        const productPrice = button.closest('.card').querySelector('.card-text').textContent.replace('$', '').replace(',', '');
        const priceWithoutDecimals = Math.floor(parseFloat(productPrice));
  
        // Limpiamos las selecciones previas
        modelSelect.innerHTML = '';
        sizeSelect.innerHTML = '';
  
        // Configuramos el nombre y el precio del producto en el modal
        productName.textContent = product;
        addToCartButton.setAttribute('data-price', priceWithoutDecimals);
        addToCartButton.textContent = `Agregar al carrito - $${priceWithoutDecimals.toLocaleString()}`;
  
        // Rellenamos las opciones de modelos
        models.forEach((model) => {
          const option = document.createElement('option');
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
        });
  
        // Rellenamos las opciones de talles
        sizes.forEach((size) => {
          const option = document.createElement('option');
          option.value = size;
          option.textContent = size;
          sizeSelect.appendChild(option);
        });
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
  
        // Agregamos el producto al carrito
        cartItems.push({ name: productNameText, modelo: selectedModel, size: selectedSize, price: productPrice });
        updateCart();
  
        // Mostramos el overlay del carrito
        cartOverlay.classList.add('active');
  
        // Cerramos el modal del producto
        const modal = bootstrap.Modal.getInstance(productModal);
        modal.hide();
      });
    }
  
    // Función para actualizar el carrito
    function updateCart() {
      if (!cartItemsContainer || !cartCountElement || !totalPriceElement) return;
  
      cartItemsContainer.innerHTML = ''; // Limpiamos el contenedor del carrito
      let totalPrice = 0;
  
      cartCountElement.textContent = cartItems.length; // Actualizamos el contador del carrito
  
      cartItems.forEach((item) => {
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
  
    // Eventos adicionales
    if (cartButton) {
      cartButton.addEventListener('click', () => {
        cartOverlay.classList.toggle('active');
      });
    }
  
    if (continueShopping) {
      continueShopping.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
      });
    }
  
    if (payButton) {
      payButton.addEventListener('click', () => {
        window.location.href = 'pagina-de-pago.html';
      });
    }
  
    if (closeCart) {
      closeCart.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
      });
    }
  });
  