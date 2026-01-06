// Destination data
const destinations = {
    knysna: {
        name: 'Knysna / Sedgefield',
        image: 'https://images.unsplash.com/photo-1593544792254-57831aae3a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLbnlzbmElMjBTb3V0aCUyMEFmcmljYXxlbnwxfHx8fDE3Njc2OTYzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        price: 'R3000',
        activity: 'Boat Cruise'
    },
    gansbaai: {
        name: 'Gansbaai / Hermanus',
        image: 'https://images.unsplash.com/photo-1704034523195-2a8f400d3233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIZXJtYW51cyUyMHdoYWxlc3xlbnwxfHx8fDE3Njc2OTYzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        price: 'R2500',
        activity: 'Wine Tasting'
    },
    langebaan: {
        name: 'Langebaan',
        image: 'https://images.unsplash.com/photo-1695094399480-87b09aa28d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW5nZWJhYW4lMjBsYWdvb258ZW58MXx8fHwxNzY3Njk2MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        price: 'R2500',
        activity: 'Quad Biking or Paintball'
    }
};

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Close mobile menu when clicking a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

// Navigation
function navigateToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update active nav link on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// Open destination detail modal
function openDestinationDetail(destinationId) {
    const destination = destinations[destinationId];
    if (!destination) return;
    
    const modal = document.getElementById('destinationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalHeroImage = document.getElementById('modalHeroImage');
    const modalPrice = document.getElementById('modalPrice');
    const modalActivity = document.getElementById('modalActivity');
    
    modalTitle.textContent = destination.name;
    modalHeroImage.src = destination.image;
    modalHeroImage.alt = destination.name;
    modalPrice.textContent = destination.price;
    modalActivity.textContent = destination.activity;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close destination detail modal
function closeDestinationDetail() {
    const modal = document.getElementById('destinationModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('destinationModal');
    if (event.target === modal || event.target.classList.contains('modal-overlay')) {
        closeDestinationDetail();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeDestinationDetail();
    }
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
