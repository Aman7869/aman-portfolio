// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.className = 'fa-solid fa-bars text-xl';
        } else {
            menuIcon.className = 'fa-solid fa-xmark text-xl';
        }
    });
}

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.className = 'fa-solid fa-bars text-xl';
    });
});

// Active Link Highlight on Scroll (ScrollSpy)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-nav');
        }
    });
});

// Copy to Clipboard Utility
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = buttonElement.innerText;
        buttonElement.innerText = 'Copied!';
        buttonElement.classList.add('bg-emerald-600', 'text-white');
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.classList.remove('bg-emerald-600', 'text-white');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Set Current Year in Footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
