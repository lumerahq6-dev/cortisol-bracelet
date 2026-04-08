// Gauge needle animation
const needle = document.getElementById('gauge-needle');
let currentAngle = -60;
let targetAngle = -60;

function animateNeedle() {
    // Randomly shift target every 2-4 seconds
    const diff = targetAngle - currentAngle;
    currentAngle += diff * 0.05;
    needle.style.transform = `rotate(${currentAngle}deg)`;
    requestAnimationFrame(animateNeedle);
}

function randomTarget() {
    // Range: -70 (green/low) to 70 (red/high)
    targetAngle = -70 + Math.random() * 140;
    const delay = 2000 + Math.random() * 3000;
    setTimeout(randomTarget, delay);
}

animateNeedle();
randomTarget();

// Waitlist counter animation
function animateCounter() {
    const counter = document.getElementById('waitlist-count');
    // Simulated count - replace with real API call later
    const target = 847;
    let current = 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(eased * target);
        counter.textContent = current.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// Run counter when visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) observer.observe(statsEl);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Waitlist form
const form = document.getElementById('waitlist-form');
const successEl = document.getElementById('waitlist-success');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    const btnText = form.querySelector('.btn-text');
    const btnLoading = form.querySelector('.btn-loading');

    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';

    // Simulate API call (replace with real endpoint - Mailchimp, ConvertKit, etc.)
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Store email in localStorage as backup
    const emails = JSON.parse(localStorage.getItem('waitlist_emails') || '[]');
    emails.push({ email, date: new Date().toISOString() });
    localStorage.setItem('waitlist_emails', JSON.stringify(emails));

    // Show success
    form.style.display = 'none';
    successEl.style.display = 'block';

    // Update counter
    const counter = document.getElementById('waitlist-count');
    const current = parseInt(counter.textContent.replace(',', '')) || 847;
    counter.textContent = (current + 1).toLocaleString();
});

// Share buttons
document.getElementById('share-twitter')?.addEventListener('click', (e) => {
    e.preventDefault();
    const text = encodeURIComponent("Just joined the waitlist for the cortisol bracelet — it's the TikTok meme but REAL. An actual analog gauge on your wrist. @cortisolbracelet");
    const url = encodeURIComponent('https://cortisolbracelet.com');
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
});

document.getElementById('share-copy')?.addEventListener('click', () => {
    navigator.clipboard.writeText('https://cortisolbracelet.com').then(() => {
        const btn = document.getElementById('share-copy');
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy Link', 2000);
    });
});

// FAQ accordions - smooth
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== item) other.open = false;
            });
        }
    });
});

// Navbar scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll reveal animations
const revealElements = document.querySelectorAll('.step, .feature-card, .faq-item, .price-card');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Gauge reactivity - make needle spike when user scrolls to stressful sections
window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    // Bias needle toward red as user scrolls deeper (more "invested" = more "stressed")
    const scrollInfluence = scrollPercent * 40;
    targetAngle = Math.min(targetAngle + scrollInfluence * 0.01, 70);
});
