// PROFILE PAGE - Our Love Story & About Us
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';

$w.onReady(function () {
    // Initialize profile page
    initializeProfilePage();
    
    // Load couple information
    loadCoupleProfiles();
    
    // Setup love story sections
    setupLoveStorySection();
    
    // Setup future plans and dreams
    setupFuturePlans();
    
    // Setup contact and social
    setupContactSection();
});

function initializeProfilePage() {
    // Page header
    $w('#profileTitle').text = "About Us - Our Love Story 💕";
    $w('#profileSubtitle').text = "Two hearts, one beautiful journey";
    
    // Main love story intro
    $w('#loveStoryIntro').text = `
        We are [Your Names], two souls who found each other and decided to build 
        a life full of love, laughter, and adventure. This is our story - 
        where we came from, how we met, and where we're going together.
    `;
}

function loadCoupleProfiles() {
    // Partner 1 Profile (customize with real information)
    const partner1 = {
        name: "Partner 1 Name",
        age: 28,
        profession: "Software Developer",
        hometown: "New York, NY",
        hobbies: ["Photography", "Hiking", "Cooking", "Reading"],
        favoriteQuote: "Life is better when we're together",
        dreamDestination: "New Zealand",
        perfectDate: "Sunset dinner by the ocean",
        loveLanguage: "Quality Time",
        favoriteThing: "Your smile in the morning",
        profilePhoto: "partner1-profile.jpg",
        funFacts: [
            "Can't start the day without coffee ☕",
            "Has visited 15 countries",
            "Makes the best pancakes",
            "Always cold, even in summer"
        ]
    };
    
    // Partner 2 Profile
    const partner2 = {
        name: "Partner 2 Name",
        age: 26,
        profession: "Graphic Designer",
        hometown: "Los Angeles, CA",
        hobbies: ["Art", "Yoga", "Travel", "Dancing"],
        favoriteQuote: "Adventure is out there",
        dreamDestination: "Santorini, Greece",
        perfectDate: "Cozy movie night at home",
        loveLanguage: "Acts of Service",
        favoriteThing: "The way you laugh at my jokes",
        profilePhoto: "partner2-profile.jpg",
        funFacts: [
            "Can speak three languages",
            "Never says no to dessert 🍰",
            "Remembers every anniversary",
            "Sings in the shower every day"
        ]
    };
    
    // Populate profiles
    populatePartnerProfile('#partner1Section', partner1);
    populatePartnerProfile('#partner2Section', partner2);
    
    // Couple combined info
    setupCoupleInfo(partner1, partner2);
}

function populatePartnerProfile(sectionId, partner) {
    // Basic info
    $w(`${sectionId} #partnerName`).text = partner.name;
    $w(`${sectionId} #partnerAge`).text = `${partner.age} years old`;
    $w(`${sectionId} #partnerProfession`).text = partner.profession;
    $w(`${sectionId} #partnerHometown`).text = `From ${partner.hometown}`;
    
    // Profile photo
    if (partner.profilePhoto) {
        $w(`${sectionId} #partnerPhoto`).src = partner.profilePhoto;
    }
    
    // Details
    $w(`${sectionId} #partnerQuote`).text = `"${partner.favoriteQuote}"`;
    $w(`${sectionId} #dreamDestination`).text = partner.dreamDestination;
    $w(`${sectionId} #perfectDate`).text = partner.perfectDate;
    $w(`${sectionId} #loveLanguage`).text = partner.loveLanguage;
    $w(`${sectionId} #favoriteThing`).text = partner.favoriteThing;
    
    // Hobbies
    $w(`${sectionId} #hobbiesList`).text = partner.hobbies.join(" • ");
    
    // Fun facts repeater
    $w(`${sectionId} #funFactsRepeater`).data = partner.funFacts.map((fact, index) => ({
        _id: `fact-${index}`,
        fact: fact
    }));
    
    $w(`${sectionId} #funFactsRepeater`).onItemReady(($item, itemData) => {
        $item('#funFact').text = itemData.fact;
    });
}

function setupCoupleInfo(partner1, partner2) {
    // Relationship statistics
    const relationshipStart = new Date('2023-01-01'); // Update with real date
    const today = new Date();
    const daysTogether = Math.floor((today - relationshipStart) / (1000 * 60 * 60 * 24));
    const monthsTogether = Math.floor(daysTogether / 30);
    const yearsTogether = Math.floor(daysTogether / 365);
    
    $w('#daysTogether').text = daysTogether.toString();
    $w('#monthsTogether').text = monthsTogether.toString();
    $w('#yearsTogether').text = yearsTogether > 0 ? yearsTogether.toString() : "< 1";
    
    // Couple facts
    const coupleFacts = [
        `We both love ${findCommonHobby(partner1.hobbies, partner2.hobbies)}`,
        "We're both morning people ☀️",
        "Pizza is our go-to date night food 🍕",
        "We can't watch scary movies together",
        "We finish each other's sentences",
        "We both cry during Disney movies",
        "Coffee shop dates are our favorite",
        "We're planning our future together every day"
    ];
    
    $w('#coupleFactsRepeater').data = coupleFacts.map((fact, index) => ({
        _id: `couple-fact-${index}`,
        fact: fact
    }));
    
    $w('#coupleFactsRepeater').onItemReady(($item, itemData) => {
        $item('#coupleFact').text = itemData.fact;
    });
}

function setupLoveStorySection() {
    // Our story sections
    const storyChapters = [
        {
            chapter: "How We Met",
            title: "The Beginning ✨",
            content: `
                It was [date/location] when our paths first crossed. [Describe how you met - 
                was it through friends, at work, online, etc.] From the very first 
                conversation, we knew there was something special between us.
            `,
            icon: "💫"
        },
        {
            chapter: "Falling in Love",
            title: "Growing Closer 💕",
            content: `
                What started as friendship quickly blossomed into something deeper. 
                [Share about your early dating days, first dates, when you knew 
                this was special]. Every moment together felt like magic.
            `,
            icon: "💘"
        },
        {
            chapter: "Our Relationship",
            title: "Building Together 🏡",
            content: `
                As our love grew stronger, we began building our life together. 
                [Talk about moving in, meeting families, major milestones]. 
                We learned that we make the perfect team.
            `,
            icon: "🤝"
        },
        {
            chapter: "Looking Forward",
            title: "Our Future 🌟",
            content: `
                Every day with you feels like a new adventure waiting to happen. 
                We're excited about [upcoming plans, dreams, goals]. Our love 
                story is just getting started.
            `,
            icon: "🔮"
        }
    ];
    
    // Populate story chapters
    $w('#storyChaptersRepeater').data = storyChapters.map((chapter, index) => ({
        _id: `chapter-${index}`,
        ...chapter
    }));
    
    $w('#storyChaptersRepeater').onItemReady(($item, itemData) => {
        $item('#chapterIcon').text = itemData.icon;
        $item('#chapterTitle').text = itemData.title;
        $item('#chapterContent').text = itemData.content;
        
        // Expand/collapse functionality
        $item('#chapterCard').onClick(() => {
            toggleChapterExpansion($item, itemData._id);
        });
    });
}

function setupFuturePlans() {
    // Dreams and goals together
    const futurePlans = [
        {
            category: "Travel Dreams",
            plans: [
                "Visit all 7 continents together",
                "Take a month-long European adventure",
                "See the Northern Lights in Iceland",
                "Go on an African safari"
            ],
            icon: "🌍"
        },
        {
            category: "Life Goals",
            plans: [
                "Buy our dream home",
                "Get married in [location/style]",
                "Start a family",
                "Learn a new language together"
            ],
            icon: "🏡"
        },
        {
            category: "Adventures",
            plans: [
                "Learn to scuba dive",
                "Take cooking classes",
                "Go skydiving",
                "Learn to dance salsa"
            ],
            icon: "🎢"
        },
        {
            category: "Traditions",
            plans: [
                "Annual anniversary trips",
                "Monthly date nights",
                "Holiday traditions",
                "Weekly adventure days"
            ],
            icon: "🎉"
        }
    ];
    
    // Populate future plans
    $w('#futurePlansRepeater').data = futurePlans.map((category, index) => ({
        _id: `future-${index}`,
        ...category
    }));
    
    $w('#futurePlansRepeater').onItemReady(($item, itemData) => {
        $item('#planCategory').text = itemData.category;
        $item('#planIcon').text = itemData.icon;
        
        // Plans list
        const plansList = itemData.plans.map(plan => `• ${plan}`).join('\n');
        $item('#plansList').text = plansList;
    });
}

function setupContactSection() {
    // Contact and social media (if you want to share)
    const contactInfo = {
        email: "hello@issuemar.love", // Optional
        instagram: "@issuemar_love", // Optional
        location: "Based in [City, State]"
    };
    
    // Anniversary countdown
    const nextAnniversary = new Date('2024-01-01'); // Update with your anniversary
    const today = new Date();
    const daysUntilAnniversary = Math.ceil((nextAnniversary - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilAnniversary > 0) {
        $w('#anniversaryCountdown').text = `${daysUntilAnniversary} days until our next anniversary!`;
        $w('#anniversarySection').show();
    }
    
    // Guest book link
    $w('#guestBookButton').onClick(() => {
        wixLocation.to('/qa');
    });
    
    // Share our story
    $w('#shareStoryButton').onClick(() => {
        shareOurStory();
    });
    
    // Back to home
    $w('#backToHomeButton').onClick(() => {
        wixLocation.to('/');
    });
}

// Helper functions
function findCommonHobby(hobbies1, hobbies2) {
    const common = hobbies1.find(hobby => hobbies2.includes(hobby));
    return common || "spending time together";
}

function toggleChapterExpansion($item, chapterId) {
    const isExpanded = $item('#chapterContent').isVisible;
    
    if (isExpanded) {
        $item('#chapterContent').hide('slide');
        $item('#expandIcon').text = "▼";
    } else {
        $item('#chapterContent').show('slide');
        $item('#expandIcon').text = "▲";
    }
}

function shareOurStory() {
    const shareData = {
        title: 'Our Love Story',
        text: 'Check out our beautiful love story!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(window.location.href);
        showMessage('Story link copied to clipboard! 💕');
    }
}

function showMessage(message) {
    $w('#messageDisplay').text = message;
    $w('#messageDisplay').show('fade').then(() => {
        setTimeout(() => {
            $w('#messageDisplay').hide('fade');
        }, 3000);
    });
}

// Photo gallery of couple photos
$w('#coupleGallery').onCurrentItemChanged((event) => {
    const currentItem = event.item;
    if (currentItem) {
        $w('#galleryCaption').text = currentItem.description || "A beautiful moment together";
    }
});

// Love letter/message section
$w('#writeLoveMessage').onClick(() => {
    $w('#loveMessageModal').show('fade');
});

$w('#sendLoveMessageButton').onClick(() => {
    const message = $w('#loveMessageText').value;
    const sender = $w('#messageSender').value;
    
    // Save love message (you can implement saving to database)
    saveLoveMessage(message, sender);
    
    $w('#loveMessageModal').hide('fade');
    showMessage('Love message sent! 💌');
});

// Relationship advice or quotes section
const loveQuotes = [
    "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "The best thing to hold onto in life is each other.",
    "Love is composed of a single soul inhabiting two bodies."
];

// Display random love quote
function showRandomLoveQuote() {
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    $w('#dailyLoveQuote').text = randomQuote;
}

// Initialize with a quote
showRandomLoveQuote();

// Refresh quote button
$w('#refreshQuoteButton').onClick(() => {
    showRandomLoveQuote();
});
