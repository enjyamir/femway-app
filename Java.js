document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    const mainApp = document.getElementById('main-app');
    const logo = document.querySelector('.animated-logo');

    // Simulate loading delay (e.g., 3 seconds)
    setTimeout(() => {
        // Start fading out the splash container
        splash.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        splash.style.opacity = '0';
        splash.style.transform = 'scale(1.1)'; // Optional zoom-out effect

        setTimeout(() => {
            splash.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            // Fade in main app gently
            mainApp.style.opacity = '0';
            mainApp.style.transition = 'opacity 0.5s ease';
            requestAnimationFrame(() => {
                mainApp.style.opacity = '1';
            });
        }, 600); // This duration should match the fade-out time
    }, 3000);
});
// Java.js
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');

    if (splash) {
        splash.addEventListener('click', () => {
            window.location.href = 'home.html';
        });
    }
});

// Java.js
setTimeout(() => {
    window.location.href = 'home.html';
}, 3000); // Redirects after 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('dropzone');
    const nextBtn = document.querySelector('.btn-primary');

    // Handle file selection
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const fileName = e.target.files[0].name;
            
            // UI Feedback
            uploadArea.style.borderColor = 'var(--vibrant-red)';
            uploadArea.querySelector('p').innerText = `Selected: ${fileName}`;
            uploadArea.querySelector('h3').innerText = "File Uploaded!";
            
            // Enable "Next" button
            nextBtn.classList.remove('disabled');
        }
    });

    // Simple hover effect for upload area via JS for more control
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'var(--light-pink)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = 'transparent';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    const mainApp = document.getElementById('main-app');

    // Wait 3 seconds then switch
    setTimeout(() => {
        splash.style.opacity = '0';
        
        setTimeout(() => {
            splash.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            // Trigger a soft fade in for the main text
            mainApp.style.opacity = '0';
            mainApp.style.transition = 'opacity 0.8s ease';
            requestAnimationFrame(() => {
                mainApp.style.opacity = '1';
            });
        }, 600);
    }, 3000);
});
document.addEventListener('DOMContentLoaded', () => {
    const packages = document.querySelectorAll('.package-card');
    const motoTrigger = document.getElementById('moto-trigger');
    const motoIcon = document.querySelector('.animated-icon');

    // Handle Service Selection
    packages.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active state from all
            packages.forEach(p => p.classList.remove('active'));
            // Add to clicked
            card.classList.add('active');
            
            // Interaction feedback
            card.style.transform = 'scale(0.95)';
            setTimeout(() => card.style.transform = 'scale(1)', 100);
        });
    });

    // Special logic for Moto Ad click
    motoTrigger.addEventListener('click', () => {
        // Highlight the ad briefly when moto package is selected
        const ad = document.querySelector('.moto-ad');
        ad.style.boxShadow = '0 0 15px var(--vibrant-red)';
        setTimeout(() => ad.style.boxShadow = 'none', 1000);
    });

    // Simple Search Bar Interaction
    document.querySelector('.search-bar').addEventListener('click', () => {
        alert("Where would you like to go today?");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service-card');
    const search = document.querySelector('.search-box');

    // Handle Service Selection
    services.forEach(card => {
        card.addEventListener('click', () => {
            services.forEach(s => s.classList.remove('active'));
            card.classList.add('active');
            
            // Subtle click animation
            card.style.transform = 'scale(0.95)';
            setTimeout(() => card.style.transform = 'scale(1)', 100);
        });
    });

    // Simulated Search Logic
    search.addEventListener('click', () => {
        search.style.borderColor = 'var(--vibrant-red)';
        console.log("Opening destination input...");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const editBtn = document.querySelector('.btn-edit');
    const logoutBtn = document.querySelector('.btn-logout');

    // Menu Navigation effect
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const settingName = item.querySelector('span').innerText;
            console.log(`Navigating to: ${settingName}`);
            
            // Add a subtle click feedback
            item.style.backgroundColor = '#f0f0f0';
            setTimeout(() => item.style.backgroundColor = 'transparent', 200);
        });
    });

    // Edit Profile Logic
    editBtn.addEventListener('click', () => {
        console.log("Edit Profile Clicked");
        alert("Redirecting to Edit Profile...");
    });

    // Logout Logic
    logoutBtn.addEventListener('click', () => {
        const confirmLogout = confirm("Are you sure you want to logout?");
        if(confirmLogout) {
            console.log("User Logged Out");
            // Here you would redirect to the splash or login screen
            window.location.href = "index.html"; 
        }
    });
});

// Initial Trusted Contacts Data
const contacts = [
    { id: 1, name: "Mom", relation: "Mother", phone: "+1 234 567 8901" },
    { id: 2, name: "Best Friend", relation: "Friend", phone: "+1 234 567 8902" }
];

// Render Contacts
function renderContacts() {
    const list = document.getElementById('contactList');
    list.innerHTML = contacts.map(c => `
        <div class="activity-card">
            <div class="s-icon pink"><i class="fas fa-phone-alt"></i></div>
            <div class="item-info">
                <strong>${c.name}</strong>
                <span>${c.relation} • ${c.phone}</span>
            </div>
            <button class="btn-delete" onclick="deleteContact(${c.id})"><i class="far fa-trash-alt"></i></button>
        </div>
    `).join('');
}

// SOS Functionality
const sosBtn = document.getElementById('sosTrigger');
const overlay = document.getElementById('sosOverlay');

sosBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    console.log("SOS Alert Broadcasted to:", contacts.map(c => c.name));
});

function cancelSOS() {
    overlay.style.display = 'none';
}

function deleteContact(id) {
    const idx = contacts.findIndex(c => c.id === id);
    if (idx > -1) {
        contacts.splice(idx, 1);
        renderContacts();
    }
}

// Initialize
renderContacts();


// Function to handle notification interactions
document.addEventListener('DOMContentLoaded', () => {
    const markAllBtn = document.querySelector('.btn-mark-read');
    const notificationCards = document.querySelectorAll('.notif-card');

    // 1. Mark All Notifications as Read
    markAllBtn.addEventListener('click', () => {
        notificationCards.forEach(card => {
            markAsRead(card);
        });
        console.log("All notifications marked as read.");
    });

    // 2. Mark individual notification as read when clicked
    notificationCards.forEach(card => {
        card.addEventListener('click', () => {
            markAsRead(card);
        });
    });

    function markAsRead(card) {
        // Remove the 'unread' class which controls the red border
        card.classList.remove('unread');
        
        // Remove the red unread dot if it exists
        const dot = card.querySelector('.unread-dot');
        if (dot) {
            dot.style.display = 'none';
        }
        
        // Optional: Reduce opacity slightly to show it's "seen"
        card.style.opacity = '0.8';
    }
});

// 3. Navigation Logic
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});


