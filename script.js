
document.addEventListener('DOMContentLoaded', function() {

    // FORM VALIDATION
    const sendButton = document.getElementById('sendMessageBtn');
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            const name = document.getElementById('clientName').value.trim();
            const email = document.getElementById('clientEmail').value.trim();
            const sessionType = document.getElementById('sessionType').value;
            const message = document.getElementById('clientMessage').value.trim();

            if (name && email && sessionType !== 'Choose...' && message) {
                alert('Thank you for your interest, ' + name + '! I will get back to you within 24 hours.');

                // close modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
                modal.hide();

                // clear form
                document.getElementById('clientName').value = '';
                document.getElementById('clientEmail').value = '';
                document.getElementById('clientPhone').value = '';
                document.getElementById('sessionType').value = 'Choose...';
                document.getElementById('clientMessage').value = '';
            } else {
                alert('Please fill in all required fields (Name, Email, Session Type, and Message).');
            }
        });
    }

    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !this.hasAttribute('data-bs-toggle')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // CAROUSEL AUTO-PAUSE ON HOVER
    const carousel = document.getElementById('photoCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.pause();
            }
        });

        carousel.addEventListener('mouseleave', function() {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.cycle();
            }
        });
    }

    // DYNAMIC PHOTO MODAL
    document.querySelectorAll('[data-bs-target="#photoModal"]').forEach((button) => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const img = card.querySelector('.card-img-top');
            const title = card.querySelector('.card-title').textContent;
            const description = card.querySelector('.card-text').textContent;
            
            const modalImg = document.getElementById('photoModalImage');
            const modalTitle = document.getElementById('photoModalTitle');
            const modalDescription = document.getElementById('photoModalDescription');

            if (modalImg && modalTitle && modalDescription) {
                modalImg.src = img.src;
                modalImg.alt = title;
                modalTitle.textContent = title;
                modalDescription.textContent = description;
            }
        });
    });
    
    // LOG MODAL EVENTS
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.addEventListener('shown.bs.modal', function () {
            console.log('Contact modal opened');
        });

        contactModal.addEventListener('hidden.bs.modal', function () {
            console.log('Contact modal closed');
        });
    }
});