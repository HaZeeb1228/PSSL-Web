function register(type) {
    alert(`You clicked on ${type} registration!`);
    // Additional functionality for registration can be added here
}

// Detect scroll event
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // Toggle the 'scrolled' class based on scroll position
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
function register(type) {
    if (type === 'owner') {
        window.location.href = 'owner.html';
    } else {
        alert(`You clicked on ${type} registration!`);
        // You can add more functionality here for team and player registration
    }
}

// Scroll event listener to change header color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


function register(type) {
    console.log(`Register button clicked for: ${type}`);
    if (type === 'owner') {
        window.location.href = 'owner.html';
    } else if (type === 'team') {
        window.location.href = 'team.html';
    } else if (type === 'player') {
        window.location.href = 'player.html';
    }
}
