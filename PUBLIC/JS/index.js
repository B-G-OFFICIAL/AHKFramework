const header_btn_home = document.getElementById('header-btn-home'),
    header_btn_about = document.getElementById('header-btn-about'),
    header_btn_contact = document.getElementById('header-btn-contact');

    const footer_btn_home = document.getElementById('footer-btn-home'),
    footer_btn_about = document.getElementById('footer-btn-about'),
    footer_btn_contact = document.getElementById('footer-btn-contact');

const cont_home = document.getElementById('cont-home'),
    cont_about = document.getElementById('cont-about'),
    cont_contact = document.getElementById('cont-contact');

const hideData = () => {
    cont_home.style.display = 'none';
    cont_about.style.display = 'none';
    cont_contact.style.display = 'none';
}

header_btn_home.addEventListener('click', () => {
    hideData();
    cont_home.style.display = 'block';
    scrollToTop();
});

header_btn_about.addEventListener('click', () => {
    hideData();
    cont_about.style.display = 'block';
    scrollToTop();
});

header_btn_contact.addEventListener('click', () => {
    hideData();
    cont_contact.style.display = 'block';
    scrollToTop();
});

footer_btn_home.addEventListener('click', () => {
    hideData();
    cont_home.style.display = 'block';
    scrollToTop();
});

footer_btn_about.addEventListener('click', () => {
    hideData();
    cont_about.style.display = 'block';
    scrollToTop();
});

footer_btn_contact.addEventListener('click', () => {
    hideData();
    cont_contact.style.display = 'block';
    scrollToTop();
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// end js code for open home contact about