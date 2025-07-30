// Love Story Website JavaScript

// Data for timeline, memories, and adventures
const timelineData = [
    {
        id: 'first-meeting',
        date: 'September 3, 2018',
        title: 'First Meeting ✨',
        description: 'The first day of High School - the day our eyes first met and everything changed. Little did we know this was the beginning of our beautiful love story...',
        category: 'beginning'
    },
    {
        id: 'first-date',
        date: 'July 26, 2019',
        title: 'First Date 🍽️',
        description: 'Our first official date after almost a year of friendship. We talked for hours and realized what we had was truly special...',
        category: 'dating'
    },
    {
        id: 'first-kiss',
        date: 'August 5, 2019',
        title: 'First Kiss 💋',
        description: 'On the taxi, a perfect unexpected moment that sealed our feelings. Everything felt magical and right...',
        category: 'dating'
    },
    {
        id: 'relationship-official',
        date: 'August 7, 2019',
        title: 'Official Couple 💑',
        description: 'Valentine\'s Day - the day we made it official. We knew we wanted to be together forever...',
        category: 'milestone'
    },
    {
        id: 'meeting-her-family',
        date: 'October 1, 2024',
        title: 'Meeting Her Family 👨‍👩‍👧‍👦',
        description: 'The day I met her wonderful family. They welcomed me with open arms and I knew I was truly part of something special...',
        category: 'milestone'
    },
    {
        id: 'future-adventures',
        date: 'Coming Soon',
        title: 'Future Adventures 🌟',
        description: 'Our first trip together, moving in, engagement, and so many more beautiful moments are waiting for us...',
        category: 'future'
    }
];

const adventuresData = [
    {
        id: 'dream-paris',
        destination: 'Paris, France 🇫🇷',
        date: 'Future Plan',
        duration: '7 days',
        type: 'romantic',
        description: 'Our dream romantic getaway to the City of Love',
        story: 'We dream of walking through the cobblestone streets of Paris, sharing croissants at sidewalk cafes, and watching the Eiffel Tower sparkle at night. This will be our first international adventure together!',
        favoriteMonent: 'Future: Dancing under the stars by the Seine',
        budget: 'Planning',
        rating: '⭐ Dream Trip'
    },
    {
        id: 'dream-tokyo',
        destination: 'Tokyo, Japan 🇯🇵',
        date: 'Future Plan',
        duration: '10 days',
        type: 'adventure',
        description: 'Cultural immersion and amazing food adventures',
        story: 'We can\'t wait to explore the bustling streets of Shibuya, visit peaceful temples, and experience incredible Japanese culture together. The food, the traditions, the beauty - everything awaits us!',
        favoriteMonent: 'Future: Sunrise at Mount Fuji together',
        budget: 'Saving up',
        rating: '⭐ Dream Trip'
    },
    {
        id: 'dream-bali',
        destination: 'Bali, Indonesia 🇮🇩',
        date: 'Future Plan',
        duration: '8 days',
        type: 'relaxation',
        description: 'Tropical paradise and spiritual retreat',
        story: 'We dream of our slice of paradise - emerald rice terraces, golden beaches, and peaceful moments together. This will be our perfect relaxation getaway where we can just be together.',
        favoriteMonent: 'Future: Watching sunrise from Mount Batur',
        budget: 'Planning',
        rating: '⭐ Dream Trip'
    },
    {
        id: 'local-adventures',
        destination: 'Local Dates 🏙️',
        date: 'Ongoing',
        duration: 'Every weekend',
        type: 'romantic',
        description: 'Our beautiful local adventures and dates',
        story: 'While we plan our big adventures, we treasure every local date - from cozy cafes to scenic walks, movie nights to trying new restaurants. Every moment together is an adventure.',
        favoriteMonent: 'Every moment with you',
        budget: 'Priceless',
        rating: 5
    }
];

const memoriesData = [
    {
        id: 'memory-001',
        title: 'Gaming Together 🎮',
        date: '2024-07-28',
        category: 'everyday',
        description: 'Me playing Apex Legends while you play Hearthstone - perfect parallel gaming date',
        mood: 'cozy',
        location: 'Our Gaming Setup',
        favorite: true
    },
    {
        id: 'memory-002',
        title: 'Food Adventure 🍜',
        date: '2024-07-15',
        category: 'adventure',
        description: 'Trying 5 different restaurants in one day because you love food so much!',
        mood: 'playful',
        location: 'Around the City',
        favorite: true
    },
    {
        id: 'memory-003',
        title: 'First "I Love You" 💕',
        date: '2019-08-01',
        category: 'milestone',
        description: 'The moment that changed everything - just before we became official',
        mood: 'emotional',
        location: 'High School Campus',
        favorite: true
    },
    {
        id: 'memory-004',
        title: 'Coding Study Session 💻',
        date: '2024-07-20',
        category: 'everyday',
        description: 'Working on our CS projects together - you on PhD research, me on undergrad assignments',
        mood: 'productive',
        location: 'Library/Video Call',
        favorite: false
    },
    {
        id: 'memory-005',
        title: 'Werewolf Game Night 🐺',
        date: '2024-05-15',
        category: 'celebration',
        description: 'You taught me your favorite card game and completely destroyed me at it',
        mood: 'joyful',
        location: 'Online Game Room',
        favorite: true
    },
    {
        id: 'memory-006',
        title: 'Her Epic Sleep Marathon 😴',
        date: '2024-06-30',
        category: 'everyday',
        description: 'You slept for 14 hours straight like a pig and I just watched you being adorable',
        mood: 'amusing',
        location: 'Her Dorm Room',
        favorite: true
    },
    {
        id: 'memory-007',
        title: 'Football Explanation Attempt 🏈',
        date: '2024-09-15',
        category: 'everyday',
        description: 'Trying to explain American football rules to you while you pretended to understand',
        mood: 'funny',
        location: 'Video Call During Game',
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
    // Calculate days together from the day we became official couple
    const startDate = new Date('2019-08-07'); // August 7, 2019 - Official Couple date
    const today = new Date();
    const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    // Use the actual days you provided: 2184 days from first meeting
    // But let's show days as official couple for the main stat
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
    // From first meeting (High School)
    const firstMeeting = new Date('2018-09-03'); // September 3, 2018
    // From official couple date  
    const officialDate = new Date('2019-08-07'); // August 7, 2019
    const today = new Date();
    
    // Days since first meeting (2184 days as you mentioned)
    const daysSinceFirstMeeting = Math.floor((today - firstMeeting) / (1000 * 60 * 60 * 24));
    // Days as official couple
    const daysAsCouple = Math.floor((today - officialDate) / (1000 * 60 * 60 * 24));
    const monthsAsCouple = Math.floor(daysAsCouple / 30);
    const yearsAsCouple = Math.floor(daysAsCouple / 365);
    
    // Animate counters when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('relationship-days', daysSinceFirstMeeting); // Show days since first meeting
                animateCounter('relationship-months', monthsAsCouple);
                animateCounter('relationship-years', yearsAsCouple);
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