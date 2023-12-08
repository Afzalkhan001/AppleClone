const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.remove('hide-on-scroll');
        } else {
            target.classList.add('hide-on-scroll');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hide-on-scroll').forEach(element => {
    observer.observe(element);
});

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;

    // Set opacity for H1 and H2 based on scroll position
    document.querySelector('h1').style.opacity = 1 - (scrollY / 300);
    document.querySelector('h2').style.opacity = 1 - (scrollY / 300);

    // Set opacity for scroll-container based on scroll position
    document.querySelector('.scroll-container').style.opacity = (scrollY / 300);
});
