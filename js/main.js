const banner = document.querySelector('#banner')
const about = document.querySelector('#about')
const testimonials = document.querySelector('#testimonials')

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset
  const speed = 0.3
  banner.style.backgroundPosition = `0% ${scrollTop * speed}px`
  about.style.backgroundPosition = `0% ${scrollTop * speed}px`
  testimonials.style.backgroundPosition = `0% ${scrollTop * speed}px`
})

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})
