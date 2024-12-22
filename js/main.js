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

  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let editingIndex = null; 
  
  
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
      updateCart();

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
    updateCart();
    addToCartButton.onclick = () => {
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

        cartItems.push({ name: productNameText, modelo: selectedModel, size: selectedSize, price: productPrice });
 
        cartOverlay.classList.add('active'); 
        alert(`${productNameText} ha sido agregado al carrito.`);
        const modal = bootstrap.Modal.getInstance(productModal);
        modal.hide(); 
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
    
        const editButton = document.createElement('i');
        editButton.classList.add('fas', 'fa-edit', 'btn', 'btn-warning', 'btn-sm');
        editButton.addEventListener('click', () => editCartItem(index)); 
        
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
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
    function editCartItem(index) {
      const item = cartItems[index];
      editingIndex = index;

      productName.textContent = item.name;
      modelSelect.value = item.modelo;
      sizeSelect.value = item.size;
      addToCartButton.textContent = 'Actualizar';

      const modal = new bootstrap.Modal(productModal);
      modal.show();
  
      addToCartButton.onclick = () => {
        const updatedModel = modelSelect.value;
        const updatedSize = sizeSelect.value;
  
        if (!updatedModel || !updatedSize) {
          alert('Por favor selecciona un modelo y un tamaño.');
          return;
        }
  
        cartItems[editingIndex] = {
          ...item,
          modelo: updatedModel,
          size: updatedSize,
        };
  
        updateCart();
        modal.hide();

        addToCartButton.textContent = 'Agregar al carrito';
        alert(`${item.name} ha sido actualizado en el carrito.`);
        editingIndex = null;
      };
    }
  
    function deleteCartItem(index) {
      cartItems.splice(index, 1); // Elimina el producto del carrito
      updateCart(); // Actualiza el carrito
    
      // Muestra un mensaje de alerta al usuario
      alert('El producto ha sido eliminado del carrito.');
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
