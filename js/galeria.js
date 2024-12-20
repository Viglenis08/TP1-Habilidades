
const products = [
    {
        "name": "Activewear",
        "price": 120000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static1.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif1.gif",
        "models": ["Celeste", "Verde", "Gris"],
        "sizes": ["S", "M", "L"],
        "description": "Hecha de materiales como spandex y poliéster, ofrece flexibilidad, transpirabilidad y comodidad, ideal tanto para hacer deporte como para un look casual",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Jeans Flare",
        "price": 150000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static2.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif2.gif",
        "models": ["Basico", "Pinzas", "Rotura"],
        "sizes": ["S", "M", "L"],
        "description": "Hechos con denim de alta calidad, estos pantalones ofrecen comodidad y un toque retro perfecto para cualquier ocasión.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
        
      },
      {
        "name": "Skinny Jeans",
        "price": 200000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static3.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif3.gif",
        "models": ["Rotura", "Perlas", "Cinta"],
        "sizes": ["S", "M", "L"],
        "description": "Hechos de mezclilla elástica, ofrecen una silueta esbelta y moderna, ideal para un look casual o más estilizado.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
        
      },
      {
        "name": "Chaqueta Denim",
        "price": 250000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static4.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif4.gif",
        "models": ["Corazones", "Brooks", "WOWB"],
        "sizes": ["S", "M", "L"],
        "description": "Con un corte ajustado o ligeramente oversize, se destacan por su estilo atemporal y su capacidad para complementar cualquier look casual.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Chaqueta Denim",
        "price": 250000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static5.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif5.gif",
        "models": ["Coffee", "Negra", "Unfollow"],
        "sizes": ["S", "M", "L"],
        "description": "Con un corte ajustado o ligeramente oversize, se destacan por su estilo atemporal y su capacidad para complementar cualquier look casual.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Overol",
        "price": 150000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static6.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif6.gif",
        "models": ["Rojo", "Marrón", "Azul"],
        "sizes": ["S", "M", "L"],
        "description": "Es perfecto para un look casual o de trabajo, y su versatilidad permite combinarlo con diferentes tipos de tops o accesorios.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Skinny Jeans",
        "price": 200000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static7.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif7.gif",
        "models": ["Parches", "Rotura", "Basico"],
        "sizes": ["S", "M", "L"],
        "description": "Son ideales para crear looks casuales o más sofisticados, y se pueden combinar fácilmente con camisetas, camisas o chaquetas.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Vestidos",
        "price": 250000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static8.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif8.gif",
        "models": ["Gris", "Verde", "Café"],
        "sizes": ["S", "M", "L"],
        "description": "Ideales para el día a día, hechos de materiales suaves y ligeros, perfectos para ocasiones informales o de descanso.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Sastreros",
        "price": 100000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static9.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif9.gif",
        "models": ["Gris", "Lineas", "Café"],
        "sizes": ["S", "M", "L"],
        "description": "Ofrecen una silueta elegante y profesional, ideales para entornos laborales o eventos formales.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Buzos",
        "price": 150000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static10.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif10.gif",
        "models": ["Gris", "Con Cierre", "Café"],
        "sizes": ["S", "M", "L"],
        "description": "Ideales para un look casual, se pueden combinar fácilmente con jeans, leggings o pantalones. Los buzos son una opción versátil y acogedora.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Blazers",
        "price": 200000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static11.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif11.gif",
        "models": ["Gris", "Rosa", "Marrón"],
        "sizes": ["S", "M", "L"],
        "description": "Con un corte estructurado y elegante, los convierte en una opción indispensable para lograr un estilo pulido y moderno.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      },
      {
        "name": "Corbatas",
        "price": 95000,
        "image": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/static12.jpg",
        "animatedImage": "https://raw.githubusercontent.com/Viglenis08/undertreads-assets/main/gif12.gif",
        "models": ["Amarilla", "Verde", "Cuadros"],
        "sizes": ["S", "M", "L"],
        "description": "Hecha de materiales como spandex y poliéster, ofrece flexibilidad, transpirabilidad y comodidad, ideal tanto para hacer deporte como para un look casual.",
        "reviews": [
            {
              "user": "Juan P.",
              "rating": 4,
              "comment": "Excelente calidad, me encantó!"
            },
            {
              "user": "María G.",
              "rating": 3,
              "comment": "El tamaño no era lo que esperaba."
            },
            {
              "user": "Ana S.",
              "rating": 5,
              "comment": "Definitivamente volveré a comprar!"
            }
          ]  
      
    }
  ];


  function generateProductCards(products) {
    const productGallery = document.getElementById('productGallery');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4', 'd-flex');
        
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="Producto ${product.name}" loading="lazy"
                    data-animated="${product.animatedImage}" 
                    data-static="${product.image}" 
                    data-bs-toggle="modal" data-bs-target="#productModal" data-product="${product.name}"
                    data-price="${product.price}" data-models='${JSON.stringify(product.models)}'
                    data-sizes='${JSON.stringify(product.sizes)}'>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <p class="product-description short-description" style="display: none;">
                        ${product.description}
                    </p>
                    <button class="show-more-btn btn custom-review-button">
                        <i class="far fa-file-alt"></i> Ver más
                    </button>
                    <button class="openReviewModal btn btn-link custom-review-button" data-product="${product.name}">
                        <i class="fas fa-star"></i> Ver Reseñas
                    </button> 
                </div>
            </div>
        `;
        
        productGallery.appendChild(productCard);
    });

    // Evento "Ver más"
    const showMoreBtns = document.querySelectorAll('.show-more-btn');
    showMoreBtns.forEach(button => {
        button.addEventListener('click', function() {
            const description = this.closest('.card-body').querySelector('.product-description');
            if (description.style.display === 'none') {
                description.style.display = 'block';
                this.textContent = 'Ver menos'; 
            } else {
                description.style.display = 'none';
                this.textContent = 'Ver más'; 
            }
        });
    });

    // Evento para abrir las reseñas
    const reviewButtons = document.querySelectorAll('.openReviewModal');
    reviewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            fetchReviews(productName);
        });
    });
}

async function fetchReviews(productName) {
  console.log("Producto seleccionado:", productName); // Depuración
  try {
      const product = products.find(p => p.name === productName);
      if (product) {
          renderReviews(product.reviews);
      } else {
          console.log("Producto no encontrado");
      }
  } catch (error) {
      console.error("Error al obtener las reseñas:", error);
  }
}

function renderReviews(reviews) {
    console.log("Reseñas del producto:", reviews); // Depuración
    const reviewsContainer = document.getElementById("reviewsContainer");
    reviewsContainer.innerHTML = ""; // Limpiar contenido anterior
    reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("col-md-4", "col-12");

        reviewElement.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${review.user}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">⭐️⭐️⭐️⭐️${"☆".repeat(5 - review.rating)}</h6>
                    <p class="card-text">"${review.comment}"</p>
                </div>
            </div>
        `;

        reviewsContainer.appendChild(reviewElement);
    });
}


// Llamada inicial para generar las tarjetas
generateProductCards(products);

