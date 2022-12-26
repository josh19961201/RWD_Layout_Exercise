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
