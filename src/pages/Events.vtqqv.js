// EVENTS PAGE - Our Love Story Timeline
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';

$w.onReady(function () {
    // Initialize timeline page
    initializeTimeline();
    
    // Setup milestone interactions
    setupMilestones();
    
    // Setup filtering and navigation
    setupTimelineNavigation();
    
    // Load timeline data
    loadTimelineEvents();
});

function initializeTimeline() {
    // Page header
    $w('#timelineTitle').text = "Our Love Story Timeline 💕";
    $w('#timelineSubtitle').text = "Every milestone that brought us closer together";
    
    // Timeline description
    $w('#timelineDescription').text = `
        From the moment we first met to all the adventures we've shared, 
        this is the story of us - told through the moments that matter most.
    `;
}

function loadTimelineEvents() {
    // Timeline milestones data (customize with your real dates and events)
    const milestones = [
        {
            id: 'first-meeting',
            date: 'January 15, 2023',
            title: 'First Meeting ✨',
            description: 'The day our eyes first met and everything changed',
            category: 'beginning',
            image: 'first-meeting.jpg',
            details: 'It was a perfect day when we first saw each other...'
        },
        {
            id: 'first-date',
            date: 'January 28, 2023',
            title: 'First Date 🍽️',
            description: 'Our first official date - dinner and endless conversation',
            category: 'dating',
            image: 'first-date.jpg',
            details: 'We talked for hours and time just flew by...'
        },
        {
            id: 'first-kiss',
            date: 'February 14, 2023',
            title: 'First Kiss 💋',
            description: 'Valentine\'s Day made perfect with our first kiss',
            category: 'romance',
            image: 'first-kiss.jpg',
            details: 'Under the stars, everything felt magical...'
        },
        {
            id: 'relationship-official',
            date: 'March 10, 2023',
            title: 'Official Couple 💑',
            description: 'The day we made it official - boyfriend and girlfriend',
            category: 'milestone',
            image: 'official-couple.jpg',
            details: 'We knew we wanted to be together forever...'
        },
        {
            id: 'first-trip',
            date: 'May 20, 2023',
            title: 'First Trip Together 🧳',
            description: 'Our first adventure - exploring new places together',
            category: 'travel',
            image: 'first-trip.jpg',
            details: 'Discovering the world was better with you by my side...'
        },
        {
            id: 'meeting-families',
            date: 'July 4, 2023',
            title: 'Meeting the Families 👨‍👩‍👧‍👦',
            description: 'The day our families became one big happy family',
            category: 'family',
            image: 'meeting-families.jpg',
            details: 'Everyone loved you just as much as I do...'
        },
        {
            id: 'moving-in',
            date: 'September 1, 2023',
            title: 'Moving In Together 🏡',
            description: 'Creating our first home together',
            category: 'milestone',
            image: 'moving-in.jpg',
            details: 'Our little apartment became our sanctuary...'
        },
        {
            id: 'engagement',
            date: 'December 25, 2023',
            title: 'Engagement 💍',
            description: 'Christmas proposal - the best gift ever',
            category: 'proposal',
            image: 'engagement.jpg',
            details: 'When you said yes, my heart exploded with joy...'
        }
    ];
    
    // Populate timeline repeater
    populateTimeline(milestones);
}

function populateTimeline(milestones) {
    // Sort milestones by date
    const sortedMilestones = milestones.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Setup repeater with milestone data
    $w('#timelineRepeater').data = sortedMilestones.map((milestone, index) => ({
        _id: milestone.id,
        date: milestone.date,
        title: milestone.title,
        description: milestone.description,
        category: milestone.category,
        image: milestone.image,
        details: milestone.details,
        isEven: index % 2 === 0 // For alternating layout
    }));
    
    // Setup repeater item interactions
    $w('#timelineRepeater').onItemReady(($item, itemData) => {
        // Set milestone content
        $item('#milestoneDate').text = itemData.date;
        $item('#milestoneTitle').text = itemData.title;
        $item('#milestoneDescription').text = itemData.description;
        
        // Set category styling
        $item('#categoryTag').text = itemData.category.toUpperCase();
        
        // Milestone image
        if (itemData.image) {
            $item('#milestoneImage').src = itemData.image;
        }
        
        // Alternating layout styling
        if (itemData.isEven) {
            $item('#milestoneCard').style.backgroundColor = '#ffeef8';
        }
        
        // Click handler for milestone details
        $item('#milestoneCard').onClick(() => {
            showMilestoneDetails(itemData);
        });
        
        // Hover effects
        $item('#milestoneCard').onMouseIn(() => {
            $item('#milestoneCard').style.transform = 'scale(1.02)';
        });
        
        $item('#milestoneCard').onMouseOut(() => {
            $item('#milestoneCard').style.transform = 'scale(1)';
        });
    });
}

function showMilestoneDetails(milestone) {
    // Show detailed modal/lightbox
    $w('#detailModalTitle').text = milestone.title;
    $w('#detailModalDate').text = milestone.date;
    $w('#detailModalDescription').text = milestone.details;
    $w('#detailModalImage').src = milestone.image;
    
    // Show modal
    $w('#milestoneDetailModal').show('fade');
    
    // Close modal handler
    $w('#closeModalButton').onClick(() => {
        $w('#milestoneDetailModal').hide('fade');
    });
}

function setupMilestones() {
    // Category filter buttons
    $w('#filterAll').onClick(() => filterMilestones('all'));
    $w('#filterBeginning').onClick(() => filterMilestones('beginning'));
    $w('#filterDating').onClick(() => filterMilestones('dating'));
    $w('#filterMilestones').onClick(() => filterMilestones('milestone'));
    $w('#filterTravel').onClick(() => filterMilestones('travel'));
    $w('#filterFamily').onClick(() => filterMilestones('family'));
    
    // Add milestone button (for future events)
    $w('#addMilestoneButton').onClick(() => {
        showAddMilestoneForm();
    });
}

function filterMilestones(category) {
    if (category === 'all') {
        $w('#timelineRepeater').show();
    } else {
        $w('#timelineRepeater').filter(wixData.filter().eq('category', category));
    }
    
    // Update active filter button styling
    updateFilterButtons(category);
}

function updateFilterButtons(activeCategory) {
    // Reset all button styles
    const filterButtons = ['#filterAll', '#filterBeginning', '#filterDating', '#filterMilestones', '#filterTravel', '#filterFamily'];
    
    filterButtons.forEach(button => {
        $w(button).style.backgroundColor = '#ffffff';
        $w(button).style.color = '#333333';
    });
    
    // Highlight active button
    const activeButton = activeCategory === 'all' ? '#filterAll' : `#filter${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`;
    $w(activeButton).style.backgroundColor = '#d63384';
    $w(activeButton).style.color = '#ffffff';
}

function setupTimelineNavigation() {
    // Back to home button
    $w('#backToHomeButton').onClick(() => {
        wixLocation.to('/');
    });
    
    // Share timeline button
    $w('#shareTimelineButton').onClick(() => {
        shareTimeline();
    });
    
    // Print timeline button
    $w('#printTimelineButton').onClick(() => {
        window.print();
    });
}

function shareTimeline() {
    const shareData = {
        title: 'Our Love Story Timeline',
        text: 'Check out our beautiful love story timeline!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        $w('#shareMessage').text = 'Timeline link copied to clipboard!';
        $w('#shareMessage').show('fade').then(() => {
            setTimeout(() => {
                $w('#shareMessage').hide('fade');
            }, 3000);
        });
    }
}

function showAddMilestoneForm() {
    // Show form to add new milestone
    $w('#addMilestoneModal').show('fade');
    
    // Form submission
    $w('#submitMilestoneButton').onClick(() => {
        const newMilestone = {
            date: $w('#newMilestoneDate').value,
            title: $w('#newMilestoneTitle').value,
            description: $w('#newMilestoneDescription').value,
            category: $w('#newMilestoneCategory').value
        };
        
        // Add to timeline (you can save to database here)
        addNewMilestone(newMilestone);
        
        // Hide modal
        $w('#addMilestoneModal').hide('fade');
    });
}

// Timeline animations on scroll
$w('#timelineRepeater').onViewportEnter(() => {
    $w('#timelineRepeater').show('fadeInUp', {duration: 800});
});
