const windowContents = {
    about: {
        icon: '<img src="resource/aboutMesmall.png" />',
        title: 'about',
        content: `
            <p>Hello! I'm Sathya, a developer and digital artist who loves creating things on the internet! ✨</p>
            
            <h3>who am i?</h3>
            <p>Just someone who enjoys coding, drawing, and making cool stuff. I believe in learning by doing and sharing what I know with others.</p>
            
            <h3>what I love</h3>
            <ul>
                <li>Building websites and web apps</li>
                <li>Creating digital illustrations</li>
                <li>Learning new technologies</li>
                <li>Coffee and late-night coding sessions</li>
                <li>Anime and pixel art</li>
            </ul>
            
            <h3>my journey</h3>
            <p>Started learning web development a few years ago and fell in love with it. Now I'm on a mission to create beautiful and functional digital experiences!</p>

            <img src="resource/aboutMe.png" alt="Sathya's Avatar" class="avatar-image" />
        `
    },
    work: {
        icon: '<img src="resource/work_small.png" />',
        title: 'work',
        content: `
            <p>Here are some projects I've been working on recently! 🚀</p>
            
            <div class="project-card">
                <h4>Personal Portfolio</h4>
                <p>A cozy corner of the internet where I share my work and thoughts. Built with love and lots of coffee!</p>
                <p><strong>made with:</strong> HTML, CSS, JavaScript</p>
            </div>
            
            <div class="project-card">
                <h4>Todo App with Character</h4>
                <p>A task manager that's actually fun to use, with cute animations and encouraging messages.</p>
                <p><strong>made with:</strong> React, Local Storage</p>
            </div>
            
            <div class="project-card">
                <h4>Weather Buddy</h4>
                <p>Weather app with personality! Get forecasts with cute weather characters.</p>
                <p><strong>made with:</strong> Vue.js, Weather API</p>
            </div>
            
            <div class="project-card">
                <h4>Art Gallery Site</h4>
                <p>A gallery to showcase digital art with smooth transitions and a cozy aesthetic.</p>
                <p><strong>made with:</strong> HTML, CSS, JavaScript</p>
            </div>

            <img src="resource/work.png" alt="Sathya's Avatar" class="avatar-image" />
        `
    },
    art: {
        icon: '<img src="resource/artSmall.png" />',
        title: 'art',
        content: `
            <p>I love creating digital art in my free time! Here's what I've been up to lately. 🎨</p>
            
            <h3>illustration</h3>
            <p>Character designs, slice-of-life scenes, and cozy vibes. I love drawing cute characters and everyday moments that make you smile.</p>
            
            <h3>pixel art</h3>
            <p>Creating tiny worlds and retro-style sprites. There's something special about working with pixels!</p>
            
            <h3>UI design</h3>
            <p>Designing interfaces that feel warm and welcoming. I believe good design should make people happy!</p>
            
            <h3>current projects</h3>
            <ul>
                <li>Character sticker set</li>
                <li>Cozy UI component library</li>
                <li>Daily doodle challenge</li>
                <li>Pixel art game assets</li>
            </ul>
            
            <p>I share my art on social media occasionally. Feel free to check it out! 💕</p>

            <img src="resource/art.png" alt="Sathya's Avatar" class="avatar-image" />
        `
    },
    skills: {
        icon: '⚡',
        title: 'skills',
        content: `
            <p>Things I'm comfortable working with! Always learning more. 📚</p>
            
            <div class="skill-item">
                <div class="skill-header">
                    <span>HTML & CSS</span>
                    <span>90%</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" style="width: 90%"></div>
                </div>
            </div>
            
            <div class="skill-item">
                <div class="skill-header">
                    <span>JavaScript</span>
                    <span>85%</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" style="width: 85%"></div>
                </div>
            </div>
            
            <div class="skill-item">
                <div class="skill-header">
                    <span>React</span>
                    <span>80%</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" style="width: 80%"></div>
                </div>
            </div>
            
            <div class="skill-item">
                <div class="skill-header">
                    <span>UI/UX Design</span>
                    <span>85%</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" style="width: 85%"></div>
                </div>
            </div>
            
            <div class="skill-item">
                <div class="skill-header">
                    <span>Digital Art</span>
                    <span>88%</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" style="width: 88%"></div>
                </div>
            </div>
            
            <h3>tools i use</h3>
            <p>VS Code, Figma, Procreate, Git, Notion, and way too much coffee ☕</p>
            
            <h3>currently learning</h3>
            <p>Node.js, Three.js, and advanced animation techniques!</p>
        `
    },
    contact: {
        icon: '<img src="resource/contactsmall.png" />',
        title: 'contact',
        content: `
            <p>Want to chat? I'd love to hear from you! 💌</p>
            
            <div class="contact-item">
                <span class="icon"><i class="fa-solid fa-envelope fa-xl" style="color: #74C0FC;"></i></span>
                <div>
                    <strong>Email</strong><br>
                    sathyakoko@gmail.com
                </div>
            </div>
            
            <div class="contact-item">
                <span class="icon"><i class="fa-brands fa-facebook fa-xl" style="color: #74C0FC;"></i></span>
                <div>
                    <strong>Facebook</strong><br>
                    @Morn Sathya
                    <a href="https://web.facebook.com/real.sathya" target="_blank" rel="noopener noreferrer">Visit Profile</a>
                </div>
            </div>
            
            <div class="contact-item">
                <span class="icon"><i class="fa-brands fa-square-linkedin fa-xl" style="color: #0c306e;"></i></span>
                <div>
                    <strong>LinkedIn</strong><br>
                    @Morn Sathya
                    <a href="https://www.linkedin.com/in/morn-sathya-3038b421a/" target="_blank" rel="noopener noreferrer">Visit Profile</a>

                </div>
            </div>
            
            <div class="contact-item">
                <span class="icon"><i class="fa-brands fa-github fa-xl" style="color: #030507;"></i></span>
                <div>
                    <strong>GitHub</strong><br>
                    @Morn Sathya
                    <a href="https://github.com/konpozzhr" target="_blank" rel="noopener noreferrer">Visit Profile</a>
                    
                </div>
            </div>
            
            <h3>let's work together!</h3>
            <p>I'm always open to interesting projects, collaborations, or just chatting about tech and art. Don't be shy, reach out! ✨</p>
            
            <p style="text-align: center; margin-top: 2rem; font-style: italic;">
                ~ usually replies within 24 hours ~
            </p>
            <img src="resource/contact.png" alt="Sathya's Avatar" class="avatar-image" />
        `
    },
    stuff: {
        icon: '<img src="resource/stuffSmall.png" />',
        title: 'stuff',
        content: `
            <p>Random things I like and enjoy! 🎉</p>
            
            <h3>favorite tools</h3>
            <ul>
                <li>VS Code with cozy themes</li>
                <li>Notion for organizing everything</li>
                <li>Figma for designs</li>
                <li>Procreate for iPad art</li>
            </ul>
            
            <h3>inspiration</h3>
            <ul>
                <li>Cozy cafes and rainy days</li>
                <li>Lo-fi music while coding</li>
                <li>Cute anime and manga</li>
                <li>Indie games with pixel art</li>
            </ul>
            
            <h3>currently vibing to</h3>
            <p>Lo-fi beats, city pop, and acoustic covers. Music makes everything better! 🎵</p>
            
            <h3>fun facts</h3>
            <ul>
                <li>I collect cute stationery</li>
                <li>Can't start my day without coffee ☕</li>
                <li>Love exploring new web design trends</li>
                <li>Always have too many browser tabs open</li>
            </ul>
            
            <p style="text-align: center; margin-top: 2rem;">
                Thanks for visiting my little corner! 💕
            </p>
            <img src="resource/stuff.png" alt="Sathya's Avatar" class="avatar-image" />
        `
    }
};

let windowIdCounter = 0;
let highestZIndex = 900;
let activeWindows = {};

function openWindow(section, event) {
    createSparkles(event);
    
    const windowId = `window-${section}-${windowIdCounter++}`;
    const data = windowContents[section];
    
    const windowEl = document.createElement('div');
    windowEl.className = 'window active';
    windowEl.id = windowId;
    windowEl.style.left = `${100 + Object.keys(activeWindows).length * 30}px`;
    windowEl.style.top = `${100 + Object.keys(activeWindows).length * 30}px`;
    
    windowEl.innerHTML = `
        <div class="window-header">
            <div class="window-title">
                <span>${data.icon}</span>
                <span>${data.title}</span>
            </div>
            <button class="window-close" onclick="closeWindow('${windowId}')">×</button>
        </div>
        <div class="window-body">
            ${data.content}
        </div>
    `;
    
    document.body.appendChild(windowEl);
    activeWindows[windowId] = windowEl;
    
    makeDraggable(windowEl, windowId);
    bringToFront(windowId);
}

function closeWindow(windowId) {
    const windowEl = document.getElementById(windowId);
    if (windowEl) {
        windowEl.style.animation = 'windowPop 0.3s ease-out reverse';
        setTimeout(() => {
            windowEl.remove();
            delete activeWindows[windowId];
        }, 300);
    }
}

function makeDraggable(windowEl, windowId) {
    const header = windowEl.querySelector('.window-header');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    header.addEventListener('touchstart', dragStart);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', dragEnd);

    windowEl.addEventListener('mousedown', () => bringToFront(windowId));

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === header || header.contains(e.target)) {
            isDragging = true;
            bringToFront(windowId);
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            windowEl.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
}

function bringToFront(windowId) {
    Object.values(activeWindows).forEach(win => win.classList.remove('focused'));
    
    const windowEl = document.getElementById(windowId);
    if (windowEl) {
        highestZIndex++;
        windowEl.style.zIndex = highestZIndex;
        windowEl.classList.add('focused');
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = '🌠';
    } else {
        themeIcon.textContent = '❄️';
    }
}

function createSparkles(e) {
    const sparkleContainer = document.getElementById('sparkles');
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = e.clientX + (Math.random() - 0.5) * 50 + 'px';
        sparkle.style.top = e.clientY + (Math.random() - 0.5) * 50 + 'px';
        sparkleContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }
}

// Parallax effect
document.addEventListener('mousemove', (e) => {
    const doodles = document.querySelectorAll('.doodle');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
    
    doodles.forEach((doodle, index) => {
        const speed = (index + 1) * 0.5;
        doodle.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px) rotate(${moveX * 0.5}deg)`;
    });
});

// Close all windows with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const windowIds = Object.keys(activeWindows);
        if (windowIds.length > 0) {
            closeWindow(windowIds[windowIds.length - 1]);
        }
    }
});