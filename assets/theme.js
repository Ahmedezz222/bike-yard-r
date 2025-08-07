// Bike Yard Shopify Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme functionality
  initTheme();
});

function initTheme() {
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize search functionality
  initSearch();
  
  // Initialize cart functionality
  initCart();
  
  // Initialize product image gallery
  initProductGallery();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
}

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuButton = document.querySelector('.header__mobile-menu');
  const mobileNav = document.querySelector('.header__mobile-nav');
  const menuIcon = document.querySelector('.mobile-menu-icon');
  const closeIcon = document.querySelector('.mobile-menu-close');
  
  if (mobileMenuButton && mobileNav) {
    mobileMenuButton.addEventListener('click', function() {
      mobileNav.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking on links
  const mobileLinks = document.querySelectorAll('.header__mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}

// Search Functionality
function initSearch() {
  const searchButton = document.querySelector('.header__search');
  const searchBar = document.querySelector('.header__search-bar');
  const closeSearchButton = document.querySelector('.header__search-bar button');
  
  if (searchButton && searchBar) {
    searchButton.addEventListener('click', function() {
      searchBar.classList.toggle('hidden');
      if (!searchBar.classList.contains('hidden')) {
        searchBar.querySelector('input').focus();
      }
    });
  }
  
  if (closeSearchButton) {
    closeSearchButton.addEventListener('click', function() {
      searchBar.classList.add('hidden');
    });
  }
  
  // Close search on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchBar && !searchBar.classList.contains('hidden')) {
      searchBar.classList.add('hidden');
    }
  });
}

// Cart Functionality
function initCart() {
  // Add to cart form handling
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
  
  addToCartForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.textContent = 'Adding...';
      submitButton.disabled = true;
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Update cart count
        updateCartCount();
        
        // Show success message
        showNotification('Product added to cart!', 'success');
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        showNotification('Error adding product to cart', 'error');
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      });
    });
  });
}

// Update cart count in header
function updateCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      const cartCountElement = document.querySelector('.header__cart span');
      if (cartCountElement) {
        if (cart.item_count > 0) {
          cartCountElement.textContent = cart.item_count;
          cartCountElement.style.display = 'flex';
        } else {
          cartCountElement.style.display = 'none';
        }
      }
    })
    .catch(error => {
      console.error('Error updating cart count:', error);
    });
}

// Product Gallery Functionality
function initProductGallery() {
  const thumbnails = document.querySelectorAll('.product-page__thumbnail');
  const mainImage = document.getElementById('ProductMainImage');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const imageUrl = this.querySelector('img').src.replace('150x150', '600x600');
      if (mainImage) {
        mainImage.src = imageUrl;
      }
      
      // Update active thumbnail
      thumbnails.forEach(t => t.classList.remove('border-primary-600'));
      this.classList.add('border-primary-600');
    });
  });
}

// Smooth Scrolling
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification__content">
      <span class="notification__message">${message}</span>
      <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    max-width: 400px;
    animation: slideIn 0.3s ease-out;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .notification__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .notification__close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
  }
  
  .notification__close:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
document.head.appendChild(notificationStyles);

// Lazy Loading for Images
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// Initialize lazy loading
initLazyLoading();

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
  // Handle responsive behavior
  const mobileNav = document.querySelector('.header__mobile-nav');
  if (window.innerWidth >= 768 && mobileNav) {
    mobileNav.classList.add('hidden');
  }
}, 250));

// Handle scroll events
window.addEventListener('scroll', throttle(function() {
  // Add scroll-based functionality here
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }
}, 100));

// Export functions for global use
window.BikeYardTheme = {
  showNotification,
  updateCartCount,
  initTheme
};
