/*=================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*=================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*=================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header, .home-content, .heading, .about-content h4', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .about-content h3, .explore-box, .team-member.left .member-details, .team-member.right .member-photo', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p, .explore p, .team-member.left .member-photo, .team-member.right .member-details', { origin: 'right' });


/*=================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Empowering Innovators and Tech Enthusiasts'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*=================== Gallery Panel ====================*/
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}