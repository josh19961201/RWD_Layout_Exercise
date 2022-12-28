const banner = document.querySelector('#banner')
const about = document.querySelector('#about')
const testimonials = document.querySelector('#testimonials')

// 視差背景
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset
  const speed = 0.3
  banner.style.backgroundPosition = `0% ${scrollTop * speed}px`
  about.style.backgroundPosition = `0% ${scrollTop * speed}px`
  testimonials.style.backgroundPosition = `0% ${scrollTop * speed}px`
})

// slick
$(document).ready(function () {
  $('#carousel1').slick({
    centerMode: true,
    arrows: true,
    slidesToShow: 2,
    centerPadding: 0,
    dot: false,
    asNavFor: '#carousel2',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  })
  $('#carousel2').slick({
    fade: true,
    dot: false,
    arrows: false,
    asNavFor: '#carousel1'
  })
})
