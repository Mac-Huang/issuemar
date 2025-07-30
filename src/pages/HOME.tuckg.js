// HOME PAGE - Our Love Story Welcome
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

$w.onReady(function () {
    // Initialize home page with love story elements
    initializeLoveStoryHome();
    
    // Set up navigation
    setupNavigation();
    
    // Initialize counters and stats
    updateLoveStats();
    
    // Setup hero section interactions
    setupHeroSection();
});

function initializeLoveStoryHome() {
    // Hero section - Main love story welcome
    $w('#heroTitle').text = "Welcome to Our Love Story ❤️";
    $w('#heroSubtitle').text = "Join us on our journey of love, adventure, and endless memories";
    
    // Welcome message
    $w('#welcomeText').text = `
        From our first meeting to this very moment, every day has been 
        a new chapter in our beautiful love story. Here you'll find our 
        precious memories, adventures around the world, and the milestones 
        that have made our relationship so special.
    `;
    
    // Featured sections preview
    $w('#timelinePreview').text = "📅 Our Timeline";
    $w('#travelPreview').text = "🧳 Our Adventures"; 
    $w('#memoriesPreview').text = "📸 Our Memories";
}

function setupNavigation() {
    // Navigation to different sections
    $w('#btnTimeline').onClick(() => {
        wixLocation.to('/events');
    });
    
    $w('#btnTravel').onClick(() => {
        wixLocation.to('/travel-stay');
    });
    
    $w('#btnMemories').onClick(() => {
        wixLocation.to('/schedule');
    });
    
    $w('#btnOurStory').onClick(() => {
        wixLocation.to('/profile');
    });
}

function updateLoveStats() {
    // Calculate days together (update with your actual start date)
    const startDate = new Date('2023-01-01'); // Replace with your actual start date
    const today = new Date();
    const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    // Update stats display
    $w('#daysTogether').text = daysTogether.toString();
    $w('#daysLabel').text = "Days Together";
    
    // Other relationship stats
    $w('#adventuresCount').text = "12"; // Update with real count
    $w('#adventuresLabel').text = "Adventures Shared";
    
    $w('#memoriesCount').text = "∞";
    $w('#memoriesLabel').text = "Precious Memories";
    
    $w('#loveLevel').text = "100%";
    $w('#loveLevelLabel').text = "Love Level";
}

function setupHeroSection() {
    // Hero section animations and interactions
    $w('#heroImage').onViewportEnter(() => {
        $w('#heroImage').show('fade', {duration: 1000});
    });
    
    // Smooth scroll to content
    $w('#btnExplore').onClick(() => {
        $w('#contentSection').scrollTo();
    });
    
    // Interactive elements
    $w('#heartButton').onClick(() => {
        // Add heart animation effect
        $w('#heartButton').hide().show('bounce');
        showLoveMessage();
    });
}

function showLoveMessage() {
    const loveMessages = [
        "You make every day brighter! ☀️",
        "Forever grateful for this love 💕",
        "Our story keeps getting better! 📖",
        "Adventure awaits us! 🌟",
        "Together is our favorite place 🏡"
    ];
    
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    $w('#loveMessage').text = randomMessage;
    $w('#loveMessage').show('fade').then(() => {
        setTimeout(() => {
            $w('#loveMessage').hide('fade');
        }, 3000);
    });
}

// Photo gallery interaction
$w('#homeGallery').onCurrentItemChanged((event) => {
    const currentItem = event.item;
    if (currentItem) {
        $w('#galleryCaption').text = currentItem.description || "A beautiful moment together";
    }
});

// Contact/guest book functionality
$w('#btnGuestBook').onClick(() => {
    wixLocation.to('/qa'); // Q&A page as guest book
});

// Special date countdown (for wedding, anniversary, etc.)
function setupSpecialDateCountdown() {
    const specialDate = new Date('2024-12-31'); // Update with your special date
    const today = new Date();
    
    if (specialDate > today) {
        const timeDiff = specialDate - today;
        const daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
        $w('#countdownText').text = `${daysUntil} days until our special day!`;
        $w('#countdownSection').show();
    }
}

// Initialize countdown if needed
setupSpecialDateCountdown();
