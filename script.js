// Preloader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    
    // Simulate loading time
    setTimeout(function() {
        preloader.classList.add('fade-out');
        
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 800);
    }, 1500);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Back to Top Button - Versão simplificada e funcional
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterBtns.length && portfolioItems.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Testimonial Slider
const testimonials = [
    {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        text: 'O Ronaldo soluções foi essencial para o sucesso do meu negócio. O novo site que criaram não só ficou moderno e responsivo, mas também ajudou a aumentar minhas vendas online. Trabalho profissional e entrega pontual!',
        author: 'Lucas Fernandes',
        role: 'Empresário, cliente desde 2022'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: 'Contratei a Ronaldo para editar os vídeos do meu canal e o resultado foi impressionante! Edição fluida, criativa e com identidade visual única. A equipe entendeu minha ideia logo de cara.',
        author: 'Juliana Costa',
        role: 'Criadora de conteúdo'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        text: 'Trabalho com eventos e precisava de um vídeo institucional impactante. O Ronaldo entregou algo acima das minhas expectativas. Roteiro, edição e finalização impecáveis! Recomendo de olhos fechados.',
        author: 'Thiago Martins',
        role: 'Produtor de eventos'
    }
    
];

let currentTestimonial = 0;
const testimonialContainer = document.querySelector('.testimonial-slider');

function showTestimonial(index) {
    if (testimonialContainer) {
        const testimonial = testimonials[index];
        testimonialContainer.innerHTML = `
            <div class="testimonial">
                <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar">
                <p class="testimonial-text">${testimonial.text}</p>
                <h4 class="testimonial-author">${testimonial.author}</h4>
                <p class="testimonial-role">${testimonial.role}</p>
            </div>
        `;
        
        // Add fade-in effect
        const newTestimonial = testimonialContainer.querySelector('.testimonial');
        setTimeout(() => {
            newTestimonial.style.opacity = '1';
            newTestimonial.style.transform = 'translateY(0)';
        }, 10);
    }
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize first testimonial
if (testimonialContainer) {
    showTestimonial(currentTestimonial);
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        // For demonstration, we'll just show an alert
        alert(`Obrigado, ${name}! Sua mensagem sobre ${service} foi enviada com sucesso. Entraremos em contato em breve.`);
        
        // Reset form
        this.reset();
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('.newsletter-input').value;
        
        // Here you would typically send the email to a server
        // For demonstration, we'll just show an alert
        alert(`Obrigado por assinar nossa newsletter! Um e-mail de confirmação foi enviado para ${email}.`);
        
        // Reset form
        this.reset();
    });
}

// Animate hero title on hover
const heroTitle = document.querySelector('.hero-title span');
if (heroTitle) {
    heroTitle.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(-5deg)';
    });
    
    heroTitle.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0)';
    });
}

// Service card hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        const centerX = this.offsetWidth / 2;
        const centerY = this.offsetHeight / 2;
        
        const angleX = (centerY - y) / 10;
        const angleY = (x - centerX) / 10;
        
        this.style.transform = `perspective(-1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(-1000px) rotateX(0) rotateY(0) translateY(-10px)';
    });
});
// Função para os botões de agendamento
function setupServiceButtons() {
    document.querySelectorAll('.service-btn').forEach(button => {
        // Adiciona um pequeno efeito visual ao clicar
        button.addEventListener('click', function(e) {
            // Efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Redirecionamento para WhatsApp (opcional - já está no HTML)
            const serviceName = this.closest('.service-card').querySelector('.service-title').textContent;
            const servicePrice = this.closest('.service-card').querySelector('.service-price').textContent;
            const whatsappUrl = `https://wa.me/5516997348658?text=Olá Espaço Érika Hair! Gostaria de agendar: ${serviceName} (${servicePrice})`;
            
            // Se quiser fazer o redirecionamento via JS em vez de HTML
            // window.open(whatsappUrl, '_blank');
        });
    });
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    setupServiceButtons();
});
            // Preenche automaticamente o campo de serviço no formulário
            const serviceSelect = document.getElementById('servico');
            if (serviceSelect) {
                // Encontra a opção correspondente
                const option = Array.from(serviceSelect.options).find(opt => 
                    opt.text.toLowerCase().includes(serviceTitle.toLowerCase())
                );
                
                if (option) {
                    option.selected = true;
                } else {
                    // Se não encontrar correspondência exata, seleciona "Outro"
                    const otherOption = serviceSelect.querySelector('option[value="outro"]');
                    if (otherOption) otherOption.selected = true;
                }
            }