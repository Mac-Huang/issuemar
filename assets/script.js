// Love Story Website JavaScript

// Data for timeline, memories, and adventures
const timelineData = [
    {
        id: 'first-meeting',
        date: 'January 15, 2023',
        title: 'First Meeting ✨',
        description: 'The day our eyes first met and everything changed. It was a perfect day when we first saw each other...',
        category: 'beginning'
    },
    {
        id: 'first-date',
        date: 'January 28, 2023',
        title: 'First Date 🍽️',
        description: 'Our first official date - dinner and endless conversation. We talked for hours and time just flew by...',
        category: 'dating'
    },
    {
        id: 'first-kiss',
        date: 'February 14, 2023',
        title: 'First Kiss 💋',
        description: 'Valentine\'s Day made perfect with our first kiss. Under the stars, everything felt magical...',
        category: 'dating'
    },
    {
        id: 'relationship-official',
        date: 'March 10, 2023',
        title: 'Official Couple 💑',
        description: 'The day we made it official - boyfriend and girlfriend. We knew we wanted to be together forever...',
        category: 'milestone'
    },
    {
        id: 'first-trip',
        date: 'May 20, 2023',
        title: 'First Trip Together 🧳',
        description: 'Our first adventure - exploring new places together. Discovering the world was better with you by my side...',
        category: 'travel'
    },
    {
        id: 'meeting-families',
        date: 'July 4, 2023',
        title: 'Meeting the Families 👨‍👩‍👧‍👦',
        description: 'The day our families became one big happy family. Everyone loved you just as much as I do...',
        category: 'milestone'
    },
    {
        id: 'moving-in',
        date: 'September 1, 2023',
        title: 'Moving In Together 🏡',
        description: 'Creating our first home together. Our little apartment became our sanctuary...',
        category: 'milestone'
    },
    {
        id: 'engagement',
        date: 'December 25, 2023',
        title: 'Engagement 💍',
        description: 'Christmas proposal - the best gift ever. When you said yes, my heart exploded with joy...',
        category: 'milestone'
    }
];

const adventuresData = [
    {
        id: 'paris-2023',
        destination: 'Paris, France 🇫🇷',
        date: 'April 2023',
        duration: '5 days',
        type: 'romantic',
        description: 'Our romantic getaway to the City of Love',
        story: 'Paris was everything we dreamed of and more. Walking through the cobblestone streets, sharing croissants at sidewalk cafes, and watching the Eiffel Tower sparkle at night - it was pure magic.',
        favoriteMonent: 'Dancing under the stars by the Seine',
        budget: '$2,500',
        rating: 5
    },
    {
        id: 'tokyo-2023',
        destination: 'Tokyo, Japan 🇯🇵',
        date: 'June 2023',
        duration: '7 days',
        type: 'adventure',
        description: 'Cultural immersion and amazing food adventures',
        story: 'Tokyo blew our minds! From the bustling streets of Shibuya to the peaceful temples, every moment was an adventure. The food was incredible and we fell in love with the culture.',
        favoriteMonent: 'Sunrise at Mount Fuji together',
        budget: '$3,200',
        rating: 5
    },
    {
        id: 'bali-2023',
        destination: 'Bali, Indonesia 🇮🇩',
        date: 'August 2023',
        duration: '10 days',
        type: 'relaxation',
        description: 'Tropical paradise and spiritual retreat',
        story: 'Bali was our slice of paradise. From the emerald rice terraces to the golden beaches, every day felt like a dream. We found peace, adventure, and deeper love.',
        favoriteMonent: 'Watching sunrise from Mount Batur',
        budget: '$2,000',
        rating: 5
    },
    {
        id: 'iceland-2023',
        destination: 'Reykjavik, Iceland 🇮🇸',
        date: 'October 2023',
        duration: '6 days',
        type: 'adventure',
        description: 'Northern lights and natural wonders',
        story: 'Iceland was otherworldly! From chasing the Northern Lights to soaking in geothermal springs, every moment felt magical. The raw beauty brought us closer to nature and each other.',
        favoriteMonent: 'Northern Lights dancing above us',
        budget: '$2,800',
        rating: 5
    }
];

const memoriesData = [
    {
        id: 'memory-001',
        title: 'Sunday Morning Pancakes 🥞',
        date: '2024-07-28',
        category: 'everyday',
        description: 'You made heart-shaped pancakes and my heart melted',
        mood: 'cozy',
        location: 'Our Kitchen',
        favorite: true
    },
    {
        id: 'memory-002',
        title: 'Caught in the Rain ☔',
        date: '2024-07-15',
        category: 'adventure',
        description: 'We got soaked but couldn\'t stop laughing',
        mood: 'playful',
        location: 'Downtown Park',
        favorite: true
    },
    {
        id: 'memory-003',
        title: 'First "I Love You" 💕',
        date: '2024-06-10',
        category: 'milestone',
        description: 'The moment that changed everything',
        mood: 'emotional',
        location: 'Sunset Beach',
        favorite: true
    },
    {
        id: 'memory-004',
        title: 'Movie Night Marathon 🎬',
        date: '2024-07-20',
        category: 'everyday',
        description: 'Harry Potter marathon with homemade butterbeer',
        mood: 'cozy',
        location: 'Living Room',
        favorite: false
    },
    {
        id: 'memory-005',
        title: 'Surprise Birthday Party 🎂',
        date: '2024-05-15',
        category: 'celebration',
        description: 'You planned the perfect surprise with all our friends',
        mood: 'joyful',
        location: 'Community Center',
        favorite: true
    }
];

// Love messages for random display
const loveMessages = [
    "You make every day brighter! ☀️",
    "Forever grateful for this love 💕",
    "Our story keeps getting better! 📖",
    "Adventure awaits us! 🌟",
    "Together is our favorite place 🏡",
    "You're my favorite person 💝",
    "Every moment with you is magic ✨",
    "Love you to the moon and back 🌙"
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize navigation
    setupNavigation();
    
    // Calculate and display love statistics
    updateLoveStats();
    
    // Populate timeline
    populateTimeline();
    
    // Populate adventures
    populateAdventures();
    
    // Populate memories
    populateMemories();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup periodic love messages
    setupLoveMessages();
    
    // Update relationship stats
    updateRelationshipStats();
}

function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function updateLoveStats() {
    // Calculate days together (update with your actual start date)
    const startDate = new Date('2023-01-01'); // Replace with your actual start date
    const today = new Date();
    const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    // Animate counter
    animateCounter('days-together', daysTogether);
}

function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let currentValue = 0;
    const increment = targetValue / 100;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue);
    }, 20);
}

function populateTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        timelineItem.setAttribute('data-category', item.category);
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-description">${item.description}</div>
            </div>
            <div class="timeline-dot"></div>
        `;
        
        timelineItem.addEventListener('click', () => showTimelineModal(item));
        container.appendChild(timelineItem);
    });
}

function populateAdventures() {
    const container = document.getElementById('adventures-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    adventuresData.forEach(adventure => {
        const adventureCard = document.createElement('div');
        adventureCard.className = 'adventure-card fade-in';
        adventureCard.setAttribute('data-type', adventure.type);
        
        adventureCard.innerHTML = `
            <div class="adventure-image">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="adventure-content">
                <div class="adventure-destination">${adventure.destination}</div>
                <div class="adventure-date">${adventure.date} • ${adventure.duration}</div>
                <div class="adventure-description">${adventure.description}</div>
                <div class="adventure-type">${adventure.type.toUpperCase()}</div>
            </div>
        `;
        
        adventureCard.addEventListener('click', () => showAdventureModal(adventure));
        container.appendChild(adventureCard);
    });
}

function populateMemories() {
    const container = document.getElementById('memories-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    memoriesData.forEach(memory => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'memory-card fade-in';
        memoryCard.setAttribute('data-category', memory.category);
        memoryCard.setAttribute('data-favorite', memory.favorite);
        
        const categoryColors = {
            'everyday': '#4ecdc4',
            'adventure': '#ff6b9d',
            'milestone': '#ffa726',
            'celebration': '#66bb6a'
        };
        
        memoryCard.innerHTML = `
            <div class="memory-image">
                <i class="fas fa-camera"></i>
            </div>
            <div class="memory-content">
                <div class="memory-title">${memory.title} ${memory.favorite ? '<i class="fas fa-heart" style="color: #ff6b9d;"></i>' : ''}</div>
                <div class="memory-date">${formatDate(memory.date)}</div>
                <div class="memory-description">${memory.description}</div>
                <div class="memory-category" style="background: ${categoryColors[memory.category] || '#6c757d'}">${memory.category.toUpperCase()}</div>
            </div>
        `;
        
        memoryCard.addEventListener('click', () => showMemoryModal(memory));
        container.appendChild(memoryCard);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Filter functions
function filterTimeline(category) {
    const items = document.querySelectorAll('.timeline-item');
    const filterBtns = document.querySelectorAll('.timeline-filters .filter-btn');
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterMemories(category) {
    const items = document.querySelectorAll('.memory-card');
    const filterBtns = document.querySelectorAll('.memories-filters .filter-btn');
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    items.forEach(item => {
        const shouldShow = category === 'all' || 
                          item.getAttribute('data-category') === category ||
                          (category === 'favorites' && item.getAttribute('data-favorite') === 'true');
        
        item.style.display = shouldShow ? 'block' : 'none';
    });
}

// Modal functions
function showTimelineModal(item) {
    const modal = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${item.title}</h2>
        <p class="modal-date" style="color: var(--primary-color); font-weight: 600; margin-bottom: 1rem;">${item.date}</p>
        <p style="line-height: 1.6; color: var(--text-light);">${item.description}</p>
        <div style="margin-top: 1.5rem;">
            <span style="background: var(--primary-color); color: white; padding: 4px 12px; border-radius: 15px; font-size: 0.8rem;">
                ${item.category.toUpperCase()}
            </span>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function showAdventureModal(adventure) {
    const modal = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${adventure.destination}</h2>
        <p class="modal-date" style="color: var(--secondary-color); font-weight: 600; margin-bottom: 1rem;">
            ${adventure.date} • ${adventure.duration}
        </p>
        <p style="line-height: 1.6; color: var(--text-light); margin-bottom: 1.5rem;">${adventure.story}</p>
        <div style="margin-bottom: 1rem;">
            <strong style="color: var(--primary-color);">💕 Favorite Moment:</strong> ${adventure.favoriteMonent}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong style="color: var(--primary-color);">💰 Budget:</strong> ${adventure.budget}
        </div>
        <div>
            <strong style="color: var(--primary-color);">⭐ Rating:</strong> ${'⭐'.repeat(adventure.rating)}
        </div>
    `;
    
    modal.style.display = 'flex';
}

function showMemoryModal(memory) {
    const modal = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${memory.title} ${memory.favorite ? '<i class="fas fa-heart" style="color: #ff6b9d;"></i>' : ''}</h2>
        <p class="modal-date" style="color: var(--secondary-color); font-weight: 600; margin-bottom: 1rem;">
            ${formatDate(memory.date)}
        </p>
        <p style="line-height: 1.6; color: var(--text-light); margin-bottom: 1.5rem;">${memory.description}</p>
        <div style="margin-bottom: 1rem;">
            <strong style="color: var(--primary-color);">📍 Location:</strong> ${memory.location}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong style="color: var(--primary-color);">😊 Mood:</strong> ${memory.mood}
        </div>
        <div>
            <span style="background: var(--secondary-color); color: white; padding: 4px 12px; border-radius: 15px; font-size: 0.8rem;">
                ${memory.category.toUpperCase()}
            </span>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    modal.style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-overlay');
    if (e.target === modal) {
        closeModal();
    }
});

// Love messages
function setupLoveMessages() {
    // Show a random love message every 30 seconds
    setInterval(showRandomLoveMessage, 30000);
}

function showRandomLoveMessage() {
    const loveMessage = document.getElementById('love-message');
    const loveText = document.getElementById('love-text');
    
    if (loveMessage && loveText) {
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        loveText.textContent = randomMessage;
        
        loveMessage.style.display = 'flex';
        
        setTimeout(() => {
            loveMessage.style.display = 'none';
        }, 3000);
    }
}

// Relationship stats
function updateRelationshipStats() {
    const startDate = new Date('2023-01-01'); // Update with your actual start date
    const today = new Date();
    const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const monthsTogether = Math.floor(daysTogether / 30);
    const yearsTogether = Math.floor(daysTogether / 365);
    
    // Animate counters when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('relationship-days', daysTogether);
                animateCounter('relationship-months', monthsTogether);
                animateCounter('relationship-years', yearsTogether > 0 ? yearsTogether : 1);
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.relationship-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Share functionality
function shareWebsite() {
    const shareData = {
        title: 'Issuemar.Love - Our Love Story',
        text: 'Check out our beautiful love story website!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Website link copied to clipboard! 💕');
        });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem;
        border-radius: 10px;
        z-index: 3000;
        animation: slideInFromRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowDown') {
        const sections = ['home', 'timeline', 'travel', 'memories', 'about'];
        const currentSection = getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
            scrollToSection(sections[currentIndex + 1]);
        }
    }
    
    if (e.key === 'ArrowUp') {
        const sections = ['home', 'timeline', 'travel', 'memories', 'about'];
        const currentSection = getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex > 0) {
            scrollToSection(sections[currentIndex - 1]);
        }
    }
});

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let current = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    return current;
}

// Easter egg: Heart rain effect
let heartRainActive = false;

function createHeartRain() {
    if (heartRainActive) return;
    
    heartRainActive = true;
    const duration = 3000;
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}vw;
                font-size: ${Math.random() * 20 + 20}px;
                z-index: 9999;
                pointer-events: none;
                animation: heartFall ${Math.random() * 2 + 3}s linear forwards;
            `;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 150);
    }
    
    setTimeout(() => {
        heartRainActive = false;
    }, duration);
}

// Add heart rain CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes slideInFromRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Trigger heart rain on logo click (easter egg)
document.querySelector('.nav-logo')?.addEventListener('click', createHeartRain);

// Initialize heart animation on love stats hover
document.querySelector('.love-stats')?.addEventListener('mouseenter', () => {
    if (Math.random() < 0.3) { // 30% chance
        showRandomLoveMessage();
    }
});