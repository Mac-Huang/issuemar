// SCHEDULE PAGE - Our Precious Memories & Moments Gallery
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';

$w.onReady(function () {
    // Initialize memories page
    initializeMemoriesPage();
    
    // Load memory collection
    loadPreciousMemories();
    
    // Setup memory gallery
    setupMemoryGallery();
    
    // Setup memory creation tools
    setupMemoryCreation();
    
    // Setup calendar view
    setupMemoryCalendar();
});

function initializeMemoriesPage() {
    // Page header
    $w('#memoriesTitle').text = "Our Precious Memories 📸";
    $w('#memoriesSubtitle').text = "Every moment captured, every feeling preserved";
    
    // Memories intro
    $w('#memoriesIntro').text = `
        From quiet Sunday mornings to grand adventures, from silly selfies to 
        meaningful conversations - every memory is a treasure. This is our 
        collection of moments that make our love story unique and beautiful.
    `;
    
    // Memory stats
    updateMemoryStats();
}

function updateMemoryStats() {
    // Memory collection statistics
    $w('#totalMemories').text = "247";
    $w('#photosTaken').text = "1,892";
    $w('#videosRecorded').text = "43";
    $w('#journalEntries').text = "89";
    
    // Labels
    $w('#totalMemoriesLabel').text = "Total Memories";
    $w('#photosLabel').text = "Photos Together";
    $w('#videosLabel').text = "Videos Recorded";
    $w('#journalLabel').text = "Journal Entries";
}

function loadPreciousMemories() {
    // Sample memory data (customize with your real memories)
    const memories = [
        {
            id: 'memory-001',
            title: 'Sunday Morning Pancakes 🥞',
            date: '2024-07-28',
            category: 'everyday',
            type: 'photo',
            description: 'You made heart-shaped pancakes and my heart melted',
            photos: ['pancakes1.jpg', 'pancakes2.jpg'],
            mood: 'cozy',
            location: 'Our Kitchen',
            tags: ['breakfast', 'lazy-sunday', 'cooking-together'],
            journal_entry: 'There\'s something magical about Sunday mornings with you. The way you hum while cooking, how you always remember I like extra syrup...',
            favorite: true
        },
        {
            id: 'memory-002',
            title: 'Caught in the Rain ☔',
            date: '2024-07-15',
            category: 'adventure',
            type: 'photo',
            description: 'We got soaked but couldn\'t stop laughing',
            photos: ['rain1.jpg', 'rain2.jpg'],
            mood: 'playful',
            location: 'Downtown Park',
            tags: ['rain', 'spontaneous', 'laughter'],
            journal_entry: 'We should have been annoyed about getting caught in the rain, but instead we danced in it like kids...',
            favorite: true
        },
        {
            id: 'memory-003',
            title: 'First "I Love You" 💕',
            date: '2024-06-10',
            category: 'milestone',
            type: 'journal',
            description: 'The moment that changed everything',
            photos: ['first-i-love-you.jpg'],
            mood: 'emotional',
            location: 'Sunset Beach',
            tags: ['first-time', 'love', 'emotional'],
            journal_entry: 'I had been wanting to say it for weeks, but when you said it first while watching the sunset, I knew this was forever...',
            favorite: true
        },
        {
            id: 'memory-004',
            title: 'Movie Night Marathon 🎬',
            date: '2024-07-20',
            category: 'date-night',
            type: 'video',
            description: 'Harry Potter marathon with homemade butterbeer',
            photos: ['movie-night1.jpg'],
            videos: ['movie-night-timelapse.mp4'],
            mood: 'cozy',
            location: 'Living Room',
            tags: ['movie-night', 'harry-potter', 'cozy'],
            journal_entry: 'Eight movies, one weekend, endless snuggles. You fell asleep during Goblet of Fire - again!',
            favorite: false
        },
        {
            id: 'memory-005',
            title: 'Surprise Birthday Party 🎂',
            date: '2024-05-15',
            category: 'celebration',
            type: 'photo',
            description: 'You planned the perfect surprise with all our friends',
            photos: ['birthday1.jpg', 'birthday2.jpg', 'birthday3.jpg'],
            mood: 'joyful',
            location: 'Community Center',
            tags: ['birthday', 'surprise', 'friends', 'celebration'],
            journal_entry: 'I thought you forgot my birthday, but you had planned the most amazing surprise party. I cried happy tears!',
            favorite: true
        }
    ];
    
    // Populate memories
    populateMemories(memories);
}

function populateMemories(memories) {
    // Sort by date (newest first)
    const sortedMemories = memories.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Setup repeater with memory data
    $w('#memoriesRepeater').data = sortedMemories.map(memory => ({
        _id: memory.id,
        title: memory.title,
        date: formatDate(memory.date),
        category: memory.category,
        type: memory.type,
        description: memory.description,
        mainPhoto: memory.photos ? memory.photos[0] : 'default-memory.jpg',
        mood: memory.mood,
        location: memory.location,
        isFavorite: memory.favorite,
        hasVideo: memory.videos && memory.videos.length > 0,
        hasJournal: memory.journal_entry && memory.journal_entry.length > 0,
        photoCount: memory.photos ? memory.photos.length : 0
    }));
    
    // Setup repeater interactions
    $w('#memoriesRepeater').onItemReady(($item, itemData) => {
        // Set content
        $item('#memoryTitle').text = itemData.title;
        $item('#memoryDate').text = itemData.date;
        $item('#memoryDescription').text = itemData.description;
        $item('#memoryLocation').text = `📍 ${itemData.location}`;
        
        // Set main photo
        if (itemData.mainPhoto) {
            $item('#memoryImage').src = itemData.mainPhoto;
        }
        
        // Category styling
        const categoryColors = {
            'everyday': '#4ecdc4',
            'adventure': '#ff6b9d',
            'milestone': '#ffa726',
            'date-night': '#ab47bc',
            'celebration': '#66bb6a',
            'travel': '#42a5f5'
        };
        
        $item('#categoryTag').text = itemData.category.replace('-', ' ').toUpperCase();
        $item('#categoryTag').style.backgroundColor = categoryColors[itemData.category] || '#6c757d';
        
        // Mood emoji
        const moodEmojis = {
            'cozy': '🥰',
            'playful': '😄',
            'emotional': '🥺',
            'joyful': '😊',
            'romantic': '😍',
            'adventurous': '🤩'
        };
        
        $item('#moodEmoji').text = moodEmojis[itemData.mood] || '💕';
        
        // Show favorite heart
        if (itemData.isFavorite) {
            $item('#favoriteHeart').show();
        }
        
        // Show media type indicators
        if (itemData.hasVideo) {
            $item('#videoIcon').show();
        }
        
        if (itemData.hasJournal) {
            $item('#journalIcon').show();
        }
        
        if (itemData.photoCount > 1) {
            $item('#photoCount').text = `+${itemData.photoCount - 1}`;
            $item('#photoCount').show();
        }
        
        // Click handler for memory details
        $item('#memoryCard').onClick(() => {
            showMemoryDetails(itemData._id);
        });
        
        // Favorite toggle
        $item('#favoriteButton').onClick(() => {
            toggleFavorite(itemData._id);
        });
        
        // Hover effects
        $item('#memoryCard').onMouseIn(() => {
            $item('#memoryImage').style.transform = 'scale(1.05)';
            $item('#memoryOverlay').show('fade');
        });
        
        $item('#memoryCard').onMouseOut(() => {
            $item('#memoryImage').style.transform = 'scale(1)';
            $item('#memoryOverlay').hide('fade');
        });
    });
}

function showMemoryDetails(memoryId) {
    // Find memory data
    const memory = findMemoryById(memoryId);
    if (!memory) return;
    
    // Populate detailed modal
    $w('#memoryDetailTitle').text = memory.title;
    $w('#memoryDetailDate').text = formatDate(memory.date);
    $w('#memoryDetailLocation').text = memory.location;
    $w('#memoryDetailDescription').text = memory.description;
    
    // Show journal entry if available
    if (memory.journal_entry) {
        $w('#memoryJournalEntry').text = memory.journal_entry;
        $w('#journalSection').show();
    } else {
        $w('#journalSection').hide();
    }
    
    // Setup photo gallery
    if (memory.photos && memory.photos.length > 0) {
        setupDetailGallery(memory.photos);
        $w('#memoryDetailGallery').show();
    }
    
    // Show video if available
    if (memory.videos && memory.videos.length > 0) {
        $w('#memoryVideo').src = memory.videos[0];
        $w('#videoSection').show();
    } else {
        $w('#videoSection').hide();
    }
    
    // Show tags
    if (memory.tags) {
        $w('#memoryTags').text = memory.tags.map(tag => `#${tag}`).join(' ');
    }
    
    // Show modal
    $w('#memoryDetailModal').show('fade');
    
    // Close modal handler
    $w('#closeMemoryModal').onClick(() => {
        $w('#memoryDetailModal').hide('fade');
    });
}

function setupMemoryGallery() {
    // Filter controls
    $w('#filterAllMemories').onClick(() => filterMemories('all'));
    $w('#filterEveryday').onClick(() => filterMemories('everyday'));
    $w('#filterAdventure').onClick(() => filterMemories('adventure'));
    $w('#filterMilestones').onClick(() => filterMemories('milestone'));
    $w('#filterDates').onClick(() => filterMemories('date-night'));
    $w('#filterCelebrations').onClick(() => filterMemories('celebration'));
    $w('#filterFavorites').onClick(() => filterMemories('favorites'));
    
    // View toggles
    $w('#gridViewButton').onClick(() => setMemoryView('grid'));
    $w('#listViewButton').onClick(() => setMemoryView('list'));
    $w('#calendarViewButton').onClick(() => setMemoryView('calendar'));
    
    // Search functionality
    $w('#memorySearchBox').onInput(() => {
        const searchTerm = $w('#memorySearchBox').value;
        searchMemories(searchTerm);
    });
    
    // Sort options
    $w('#sortByDate').onClick(() => sortMemories('date'));
    $w('#sortByCategory').onClick(() => sortMemories('category'));
    $w('#sortByFavorite').onClick(() => sortMemories('favorite'));
}

function setupMemoryCreation() {
    // Add new memory button
    $w('#addMemoryButton').onClick(() => {
        showAddMemoryModal();
    });
    
    // Quick memory buttons
    $w('#quickPhotoMemory').onClick(() => {
        showQuickMemoryForm('photo');
    });
    
    $w('#quickJournalMemory').onClick(() => {
        showQuickMemoryForm('journal');
    });
    
    $w('#quickVideoMemory').onClick(() => {
        showQuickMemoryForm('video');
    });
}

function showAddMemoryModal() {
    // Show comprehensive add memory form
    $w('#addMemoryModal').show('fade');
    
    // Form submission
    $w('#submitMemoryButton').onClick(() => {
        const newMemory = {
            title: $w('#newMemoryTitle').value,
            date: $w('#newMemoryDate').value,
            category: $w('#newMemoryCategory').value,
            type: $w('#newMemoryType').value,
            description: $w('#newMemoryDescription').value,
            location: $w('#newMemoryLocation').value,
            journal_entry: $w('#newMemoryJournal').value,
            mood: $w('#newMemoryMood').value
        };
        
        // Save new memory
        saveNewMemory(newMemory);
        
        // Hide modal
        $w('#addMemoryModal').hide('fade');
        
        // Show success message
        showMessage('New memory saved! 💕');
    });
}

function setupMemoryCalendar() {
    // Calendar view for memories by date
    $w('#memoryCalendar').onChange((event) => {
        const selectedDate = event.target.value;
        showMemoriesForDate(selectedDate);
    });
    
    // Month navigation
    $w('#prevMonthButton').onClick(() => {
        navigateMonth(-1);
    });
    
    $w('#nextMonthButton').onClick(() => {
        navigateMonth(1);
    });
}

// Memory management functions
function filterMemories(category) {
    if (category === 'all') {
        $w('#memoriesRepeater').show();
    } else if (category === 'favorites') {
        $w('#memoriesRepeater').filter(wixData.filter().eq('isFavorite', true));
    } else {
        $w('#memoriesRepeater').filter(wixData.filter().eq('category', category));
    }
}

function toggleFavorite(memoryId) {
    // Toggle favorite status
    const memory = findMemoryById(memoryId);
    if (memory) {
        memory.favorite = !memory.favorite;
        // Update in database/storage
        updateMemoryInStorage(memory);
        // Refresh display
        refreshMemoryDisplay();
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Memory sharing
$w('#shareMemoriesButton').onClick(() => {
    const shareData = {
        title: 'Our Precious Memories',
        text: 'Check out our beautiful collection of memories!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(window.location.href);
        showMessage('Memories page link copied to clipboard!');
    }
});

// Backup memories
$w('#backupMemoriesButton').onClick(() => {
    exportMemoriesToFile();
});

function showMessage(message) {
    $w('#messageDisplay').text = message;
    $w('#messageDisplay').show('fade').then(() => {
        setTimeout(() => {
            $w('#messageDisplay').hide('fade');
        }, 3000);
    });
}

// Memory slideshow
$w('#startSlideshowButton').onClick(() => {
    startMemorySlideshow();
});

function startMemorySlideshow() {
    // Start automatic slideshow of favorite memories
    $w('#memorySlideshowModal').show('fade');
    
    // Implementation for slideshow logic
    const favoriteMemories = getFavoriteMemories();
    let currentIndex = 0;
    
    const slideshowInterval = setInterval(() => {
        if (currentIndex >= favoriteMemories.length) {
            currentIndex = 0;
        }
        
        const memory = favoriteMemories[currentIndex];
        $w('#slideshowImage').src = memory.photos[0];
        $w('#slideshowTitle').text = memory.title;
        $w('#slideshowDescription').text = memory.description;
        
        currentIndex++;
    }, 5000);
    
    // Close slideshow
    $w('#closeSlideshowButton').onClick(() => {
        clearInterval(slideshowInterval);
        $w('#memorySlideshowModal').hide('fade');
    });
}
