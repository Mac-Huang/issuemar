// TRAVEL & STAY PAGE - Our Adventures Together
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';

$w.onReady(function () {
    // Initialize travel page
    initializeTravelPage();
    
    // Load travel destinations and adventures
    loadTravelAdventures();
    
    // Setup interactive map
    setupInteractiveMap();
    
    // Setup gallery and filtering
    setupTravelGallery();
    
    // Setup future travel plans
    setupFuturePlans();
});

function initializeTravelPage() {
    // Page header
    $w('#travelTitle').text = "Our Adventures Around the World 🌍";
    $w('#travelSubtitle').text = "Every journey is better when we're together";
    
    // Travel intro
    $w('#travelIntro').text = `
        From romantic getaways to exciting adventures, we've explored the world 
        hand in hand. Each destination has given us new memories and brought us 
        closer together. Here are the places we've been and the dreams we're chasing.
    `;
    
    // Travel stats
    updateTravelStats();
}

function updateTravelStats() {
    // Travel statistics
    $w('#countriesVisited').text = "8";
    $w('#citiesExplored').text = "15";
    $w('#milesFlown').text = "12,450";
    $w('#memoriesCreated').text = "∞";
    
    // Labels
    $w('#countriesLabel').text = "Countries Visited";
    $w('#citiesLabel').text = "Cities Explored";
    $w('#milesLabel').text = "Miles Flown Together";
    $w('#memoriesLabel').text = "Memories Created";
}

function loadTravelAdventures() {
    // Travel destinations data (customize with your real trips)
    const adventures = [
        {
            id: 'paris-2023',
            destination: 'Paris, France 🇫🇷',
            date: 'April 2023',
            duration: '5 days',
            type: 'romantic',
            description: 'Our romantic getaway to the City of Love',
            highlights: ['Eiffel Tower at sunset', 'Seine River cruise', 'Louvre Museum', 'Montmartre walks'],
            photos: ['paris1.jpg', 'paris2.jpg', 'paris3.jpg'],
            coordinates: [48.8566, 2.3522],
            story: 'Paris was everything we dreamed of and more. Walking through the cobblestone streets, sharing croissants at sidewalk cafes, and watching the Eiffel Tower sparkle at night - it was pure magic.',
            favorite_moment: 'Dancing under the stars by the Seine',
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
            highlights: ['Shibuya crossing', 'Mount Fuji day trip', 'Traditional ryokan', 'Cherry blossom gardens'],
            photos: ['tokyo1.jpg', 'tokyo2.jpg', 'tokyo3.jpg'],
            coordinates: [35.6762, 139.6503],
            story: 'Tokyo blew our minds! From the bustling streets of Shibuya to the peaceful temples, every moment was an adventure. The food was incredible and we fell in love with the culture.',
            favorite_moment: 'Sunrise at Mount Fuji together',
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
            highlights: ['Ubud rice terraces', 'Beach sunsets in Seminyak', 'Temple visits', 'Couples spa day'],
            photos: ['bali1.jpg', 'bali2.jpg', 'bali3.jpg'],
            coordinates: [-8.4095, 115.1889],
            story: 'Bali was our slice of paradise. From the emerald rice terraces to the golden beaches, every day felt like a dream. We found peace, adventure, and deeper love.',
            favorite_moment: 'Watching sunrise from Mount Batur',
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
            highlights: ['Northern Lights', 'Blue Lagoon', 'Golden Circle tour', 'Glacier hiking'],
            photos: ['iceland1.jpg', 'iceland2.jpg', 'iceland3.jpg'],
            coordinates: [64.1466, -21.9426],
            story: 'Iceland was otherworldly! From chasing the Northern Lights to soaking in geothermal springs, every moment felt magical. The raw beauty brought us closer to nature and each other.',
            favorite_moment: 'Northern Lights dancing above us',
            budget: '$2,800',
            rating: 5
        }
    ];
    
    // Populate travel adventures
    populateAdventures(adventures);
}

function populateAdventures(adventures) {
    // Sort by date
    const sortedAdventures = adventures.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Setup repeater with adventure data
    $w('#travelRepeater').data = sortedAdventures.map(adventure => ({
        _id: adventure.id,
        destination: adventure.destination,
        date: adventure.date,
        duration: adventure.duration,
        type: adventure.type,
        description: adventure.description,
        story: adventure.story,
        favoriteMonent: adventure.favorite_moment,
        budget: adventure.budget,
        rating: adventure.rating,
        mainPhoto: adventure.photos[0],
        highlights: adventure.highlights.join(' • ')
    }));
    
    // Setup repeater interactions
    $w('#travelRepeater').onItemReady(($item, itemData) => {
        // Set content
        $item('#adventureDestination').text = itemData.destination;
        $item('#adventureDate').text = itemData.date;
        $item('#adventureDuration').text = itemData.duration;
        $item('#adventureDescription').text = itemData.description;
        $item('#adventureHighlights').text = itemData.highlights;
        
        // Set main photo
        if (itemData.mainPhoto) {
            $item('#adventureImage').src = itemData.mainPhoto;
        }
        
        // Type-based styling
        const typeColors = {
            'romantic': '#ff6b9d',
            'adventure': '#4ecdc4',
            'relaxation': '#45b7d1',
            'cultural': '#96ceb4'
        };
        
        $item('#typeTag').text = itemData.type.toUpperCase();
        $item('#typeTag').style.backgroundColor = typeColors[itemData.type] || '#6c757d';
        
        // Rating stars
        const stars = '⭐'.repeat(itemData.rating);
        $item('#adventureRating').text = stars;
        
        // Click to show details
        $item('#adventureCard').onClick(() => {
            showAdventureDetails(itemData);
        });
        
        // Hover effects
        $item('#adventureCard').onMouseIn(() => {
            $item('#adventureImage').style.transform = 'scale(1.05)';
        });
        
        $item('#adventureCard').onMouseOut(() => {
            $item('#adventureImage').style.transform = 'scale(1)';
        });
    });
}

function showAdventureDetails(adventure) {
    // Show detailed modal with full story
    $w('#adventureModalTitle').text = adventure.destination;
    $w('#adventureModalDate').text = `${adventure.date} • ${adventure.duration}`;
    $w('#adventureModalStory').text = adventure.story;
    $w('#adventureModalMoment').text = `💕 Favorite Moment: ${adventure.favoriteMonent}`;
    $w('#adventureModalBudget').text = `💰 Budget: ${adventure.budget}`;
    
    // Show modal
    $w('#adventureDetailModal').show('fade');
    
    // Close modal
    $w('#closeAdventureModal').onClick(() => {
        $w('#adventureDetailModal').hide('fade');
    });
}

function setupInteractiveMap() {
    // Interactive world map showing visited places
    $w('#worldMap').onClick((event) => {
        const clickedLocation = event.context.location;
        showLocationInfo(clickedLocation);
    });
    
    // Map view toggles
    $w('#mapViewAll').onClick(() => showAllDestinations());
    $w('#mapViewRomantic').onClick(() => filterMapByType('romantic'));
    $w('#mapViewAdventure').onClick(() => filterMapByType('adventure'));
    $w('#mapViewRelaxation').onClick(() => filterMapByType('relaxation'));
}

function setupTravelGallery() {
    // Photo gallery with all travel photos
    $w('#travelGallery').onCurrentItemChanged((event) => {
        const currentItem = event.item;
        if (currentItem) {
            $w('#galleryCaption').text = currentItem.description;
            $w('#galleryLocation').text = currentItem.location;
        }
    });
    
    // Gallery filtering
    $w('#filterAllPhotos').onClick(() => {
        $w('#travelGallery').show();
    });
    
    $w('#filterByDestination').onChange(() => {
        const selectedDestination = $w('#filterByDestination').value;
        filterGalleryByDestination(selectedDestination);
    });
}

function setupFuturePlans() {
    // Future travel wishlist
    const futurePlans = [
        {
            destination: 'Santorini, Greece 🇬🇷',
            reason: 'Sunset dinners and white-washed villages',
            priority: 'high',
            estimated_date: 'Summer 2024'
        },
        {
            destination: 'New Zealand 🇳🇿',
            reason: 'Adventure activities and stunning landscapes',
            priority: 'high',
            estimated_date: 'Fall 2024'
        },
        {
            destination: 'Morocco 🇲🇦',
            reason: 'Cultural immersion and desert adventures',
            priority: 'medium',
            estimated_date: '2025'
        },
        {
            destination: 'Norway 🇳🇴',
            reason: 'Northern lights and fjord cruises',
            priority: 'medium',
            estimated_date: '2025'
        }
    ];
    
    // Populate wishlist
    $w('#wishlistRepeater').data = futurePlans.map((plan, index) => ({
        _id: `plan-${index}`,
        ...plan
    }));
    
    $w('#wishlistRepeater').onItemReady(($item, itemData) => {
        $item('#wishDestination').text = itemData.destination;
        $item('#wishReason').text = itemData.reason;
        $item('#wishDate').text = itemData.estimated_date;
        
        // Priority styling
        const priorityColors = {
            'high': '#ff6b9d',
            'medium': '#ffa726',
            'low': '#66bb6a'
        };
        
        $item('#priorityTag').text = itemData.priority.toUpperCase();
        $item('#priorityTag').style.backgroundColor = priorityColors[itemData.priority];
    });
    
    // Add new destination to wishlist
    $w('#addDestinationButton').onClick(() => {
        showAddDestinationForm();
    });
}

function showAddDestinationForm() {
    $w('#addDestinationModal').show('fade');
    
    $w('#submitDestinationButton').onClick(() => {
        const newDestination = {
            destination: $w('#newDestination').value,
            reason: $w('#newReason').value,
            priority: $w('#newPriority').value,
            estimated_date: $w('#newEstimatedDate').value
        };
        
        // Add to wishlist
        addToWishlist(newDestination);
        
        // Hide modal
        $w('#addDestinationModal').hide('fade');
    });
}

// Travel planning tools
$w('#planTripButton').onClick(() => {
    $w('#tripPlanningSection').show('slide');
});

// Budget calculator
$w('#calculateBudgetButton').onClick(() => {
    const destination = $w('#budgetDestination').value;
    const duration = parseInt($w('#budgetDuration').value);
    const travelStyle = $w('#budgetStyle').value;
    
    const estimatedBudget = calculateTripBudget(destination, duration, travelStyle);
    $w('#budgetResult').text = `Estimated budget: $${estimatedBudget}`;
    $w('#budgetResult').show('fade');
});

function calculateTripBudget(destination, duration, style) {
    // Simple budget calculation (customize based on real data)
    const baseCosts = {
        'europe': 150,
        'asia': 80,
        'oceania': 180,
        'africa': 100,
        'americas': 120
    };
    
    const styleMultipliers = {
        'budget': 0.7,
        'mid-range': 1.0,
        'luxury': 2.0
    };
    
    const region = getRegionForDestination(destination);
    const baseCost = baseCosts[region] || 100;
    const multiplier = styleMultipliers[style] || 1.0;
    
    return Math.round(baseCost * duration * multiplier);
}

// Share travel experiences
$w('#shareTravelsButton').onClick(() => {
    const shareData = {
        title: 'Our Travel Adventures',
        text: 'Check out our amazing travel adventures together!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(window.location.href);
        showShareMessage('Travel page link copied to clipboard!');
    }
});

function showShareMessage(message) {
    $w('#shareMessage').text = message;
    $w('#shareMessage').show('fade').then(() => {
        setTimeout(() => {
            $w('#shareMessage').hide('fade');
        }, 3000);
    });
}
