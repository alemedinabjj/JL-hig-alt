// Abre e fecha quando clicar no icone Hamburguer.!
const nav = document.querySelector('.header nav')
const toggle = document.querySelectorAll('nav .toggle')


for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

//  Quando clicar em um Item do menu,Esconder o menu!

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

//adicionar sombra ao header da página quando dar scroll

const header = document.querySelector('.header')
const navHeight = header.offsetHeight;
const logo = document.querySelector('.logo')
const menuNav = document.querySelector('.menu-nav')
const listNav = document.querySelector('.menu-nav-list')
const hamburg = document.querySelector('.icon-menu')
const navMenu = menuNav.offsetHeight


function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight){
        // scroll é maior que a altura do header
        header.classList.add('scroll')
        menuNav.classList.add('change-nav')
        listNav.classList.add('showNav')
        hamburg.classList.add('showHamburg')
        
        logo.innerHTML =  `
        <div class="logo-alt-1">
        <a href="#" class="logo"><span>JL</span>.</a>
        </div>
        `
    }else {
        // se for menor que a altura do header
        header.classList.remove('scroll')
        menuNav.classList.remove('change-nav')
        listNav.classList.remove('showNav')
        hamburg.classList.remove('showHamburg')
        logo.innerHTML = `
        <a href="#" class="logo">JL<span>higienizações</span>.</a>`
    }
}


//  testimonials slider --- ! 

const swiper = new Swiper('.swiper', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

//   scroll review: mostrar elementos quando der scroll

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})


scrollReveal.reveal(`
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
`,


{interval: 100})

// botão de voltar ao topo (backToTop) !

const btnTop = document.querySelector('.backToTop')

function backTop(){

    if(scrollY >= 560) {
        btnTop.classList.add('show')
    }else {
        btnTop.classList.remove('show')
    }


}
//  menu ativo conforme a seção visivel na pagina
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
        document.querySelector('.menu-nav ul li a[href*=' + sectionId + ']').classList.add('active')
        
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
        document.querySelector('.menu-nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }
}

// when scroll ... !

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backTop()
    activateMenuAtCurrentSection()
})


