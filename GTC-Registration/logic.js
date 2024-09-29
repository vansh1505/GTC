window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navItems.forEach(item => item.classList.remove('active'));
            navItems[index].classList.add('active');
        }
    });
});
document.querySelector('.nav-a[href="#home"]').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default anchor behavior
    window.scrollTo({
        top: 0,  // Scroll to the top of the page
        behavior: 'smooth'  // Smooth scroll
    });
});