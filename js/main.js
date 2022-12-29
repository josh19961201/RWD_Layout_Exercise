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

$('#carousel1').slick({
  // 寬
  // focusOnSelect: true, // 點擊切換
  infinite: true,
  variableWidth: true,
  centerMode: true,
  responsive: [
    {
      // 窄
      breakpoint: 768,
      settings: {
        centerMode: false,
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ],
  asNavFor: '#carousel2'
})
$('#carousel2').slick({
  fade: true,
  arrows: false,
  asNavFor: '#carousel1'
})
