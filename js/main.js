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
  const showMoreBtn = document.querySelectorAll('.show-more-btn');
  const shortDescription = document.querySelectorAll('.short-description');
  const reviewModalButton = document.querySelector('.openReviewModal');
  const reviewModal = new bootstrap.Modal(document.getElementById('reviewModal'));

  let cartItems = [];
  let editingIndex = null; // Variable global para almacenar el índice del ítem en edición

  if (productModal && productName && modelSelect && sizeSelect && addToCartButton) {
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

      models.forEach((model) => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });

      sizes.forEach((size) => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
      });
    });

    addToCartButton.onclick = () => {
      // Solo agregamos al carrito si no estamos en modo edición
      if (editingIndex === null) {
        const selectedModel = modelSelect.value;
        const selectedSize = sizeSelect.value;
        const productNameText = productName.textContent;
        const productPrice = parseFloat(addToCartButton.getAttribute('data-price'));

        if (isNaN(productPrice)) {
          console.error('Error: No se encontró el precio del producto.');
          return;
        }

        if (!selectedModel || !selectedSize) {
          console.error('Error: Por favor selecciona un modelo y un tamaño.');
          return;
        }

        // Agregar un nuevo ítem al carrito
        cartItems.push({ name: productNameText, modelo: selectedModel, size: selectedSize, price: productPrice });
        updateCart();
        cartOverlay.classList.add('active'); // Muestra el carrito

        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(productModal);
        modal.hide(); // Cierra el modal después de agregar al carrito
    
        // Resto de acciones necesarias después de agregar al carrito
      }
    };
    
    
    function updateCart() {
      if (!cartItemsContainer || !cartCountElement || !totalPriceElement) return;
    
      cartItemsContainer.innerHTML = '';
      let totalPrice = 0;
    
      cartCountElement.textContent = cartItems.length;
    
      cartItems.forEach((item, index) => {
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
    
        // Crear ícono de editar
        const editButton = document.createElement('i');
        editButton.classList.add('fas', 'fa-edit', 'btn', 'btn-warning', 'btn-sm');
        editButton.addEventListener('click', () => editCartItem(index));  // Aseguramos que el índice correcto se pasa al evento
        
        // Crear ícono de eliminar
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('fas', 'fa-trash', 'btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => deleteCartItem(index));
        
        itemDiv.appendChild(productName);
        itemDiv.appendChild(productModel);
        itemDiv.appendChild(productSize);
        itemDiv.appendChild(productPrice);
        itemDiv.appendChild(editButton);
        itemDiv.appendChild(deleteButton);
    
        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price;
      });
    
      totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
    
    function editCartItem(index) {
        const item = cartItems[index];  // Obtener el item actual del carrito
        modelSelect.value = item.modelo;  // Establecer el valor del modelo en el select
        sizeSelect.value = item.size;    // Establecer el valor del tamaño en el select
    
        // Mostrar el modal de edición
        const modal = bootstrap.Modal.getInstance(productModal);  
        modal.show();  
    
        // Cambiar el texto del botón a 'Actualizar'
        addToCartButton.textContent = 'Actualizar';
    
        // Establecer el índice del ítem que se está editando
        editingIndex = index;
    
        // Función para actualizar el carrito al hacer clic en "Actualizar"
        addToCartButton.onclick = () => {
            cartItems[editingIndex] = {
                name: productName.textContent,  // Usar el nombre del producto del modal
                modelo: modelSelect.value,  // Nuevo modelo seleccionado
                size: sizeSelect.value,    // Nuevo tamaño seleccionado
                price: parseFloat(addToCartButton.getAttribute('data-price'))  // Precio actualizado
            };
    
            // Actualizar el carrito visualmente
            updateCart();
    
            // Cerrar el modal
            modal.hide();
    
            // Restaurar el texto y el comportamiento del botón
            addToCartButton.textContent = 'Agregar al carrito';
    
            // Restablecer el valor de la variable global
            editingIndex = null;
        };
    }
    

    function deleteCartItem(index) {
      cartItems.splice(index, 1);
      updateCart();
    }

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

    const clearCartButton = document.getElementById('clearCart');

    if (clearCartButton) {
      clearCartButton.addEventListener('click', () => {
        cartItems = [];
        updateCart();
      });
    }
  }
});
