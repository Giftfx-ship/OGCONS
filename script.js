/* ================================================================
   OGBMOSO COLLEGE OF NURSING SCIENCE
   FOUNDATION OF NURSING PRESENTATION PORTAL
   ULTIMATE PREMIUM JAVASCRIPT
   ================================================================ */

// ==========================================
//  📋 CONFIGURATION - EDIT THIS SECTION ONLY
// ==========================================

// SCHOOL INFORMATION
const SCHOOL = {
    name: "OGBMOSO COLLEGE OF NURSING SCIENCE",
    tagline: "Excellence in Nursing Education",
    logo: "images/logo.png"
};

// AUTHORIZED STUDENTS - Add all matric numbers here
const STUDENTS = [
    "NSG2024001",
    "NSG2024002",
    "NSG2024003",
    "NSG2024004",
    "NSG2024005",
    "NSG2024006",
    "NSG2024007",
    "NSG2024008",
    "NSG2024009",
    "NSG2024010"
];

// GROUP PRESENTATIONS
const GROUPS = [
    {
        id: "A",
        topic: "STU - Fundamentals of Nursing Practice",
        members: [
            "Student Name 1",
            "Student Name 2",
            "Student Name 3",
            "Student Name 4"
        ],
        summary: "STU - This comprehensive presentation covers the foundational principles of nursing practice including patient assessment techniques, basic care procedures, nursing ethics, and professional standards. The group demonstrated exceptional understanding of core nursing concepts.",
        driveLink: "https://drive.google.com/drive/folders/YOUR_GROUP_A_LINK_HERE"
    },
    {
        id: "B",
        topic: "STU - Patient Care & Safety Protocols",
        members: [
            "Student Name 1",
            "Student Name 2",
            "Student Name 3"
        ],
        summary: "STU - This presentation focuses on critical patient safety protocols, infection control measures, fall prevention strategies, medication safety, and quality care delivery in clinical settings. The group showcased excellent knowledge of safety standards.",
        driveLink: "https://drive.google.com/drive/folders/YOUR_GROUP_B_LINK_HERE"
    },
    {
        id: "C",
        topic: "STU - Clinical Nursing Skills & Procedures",
        members: [
            "Student Name 1",
            "Student Name 2",
            "Student Name 3",
            "Student Name 4",
            "Student Name 5"
        ],
        summary: "STU - This presentation demonstrates essential clinical nursing skills including vital signs monitoring, medication administration techniques, wound care, emergency response procedures, and patient documentation. The group delivered an outstanding presentation.",
        driveLink: "https://drive.google.com/drive/folders/YOUR_GROUP_C_LINK_HERE"
    }
];

// DEVELOPER CREDITS
const CREDITS = {
    developer: "Gift",
    developerNumber: "2349164624021",
    creative: "Jeconaih",
    creativeNumber: "080XXXXXXXX"
};

// ==========================================
//  🚀 APPLICATION LOGIC - DO NOT EDIT BELOW
// ==========================================

// ===== SESSION MANAGEMENT =====
function getCurrentUser() {
    return sessionStorage.getItem('currentUser');
}

function setCurrentUser(matric) {
    sessionStorage.setItem('currentUser', matric);
}

function clearSession() {
    sessionStorage.removeItem('currentUser');
}

function requireLogin() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return user;
}

// ===== NAVIGATION =====
function goToDashboard() {
    window.location.href = 'dashboard.html';
}

function goToGroup(groupId) {
    window.location.href = `group.html?id=${groupId}`;
}

function goToLogin() {
    window.location.href = 'index.html';
}

// ==========================================
//  🏠 INDEX.HTML (LOGIN PAGE)
// ==========================================
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
    document.addEventListener('DOMContentLoaded', function() {
        if (getCurrentUser()) {
            window.location.href = 'dashboard.html';
            return;
        }

        const loginForm = document.getElementById('loginForm');
        const matricInput = document.getElementById('matricInput');
        const errorMsg = document.getElementById('errorMsg');
        const loginBtn = document.getElementById('loginBtn');
        const btnText = loginBtn.querySelector('.btn-text');
        const btnLoader = loginBtn.querySelector('.btn-loader');

        setTimeout(() => matricInput.focus(), 500);

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const matric = matricInput.value.trim().toUpperCase();
            
            if (!matric) {
                showError('Please enter your Matric Number.');
                return;
            }

            btnText.classList.add('hidden');
            btnLoader.classList.remove('hidden');
            loginBtn.disabled = true;

            setTimeout(() => {
                if (STUDENTS.includes(matric)) {
                    setCurrentUser(matric);
                    window.location.href = 'dashboard.html';
                } else {
                    btnText.classList.remove('hidden');
                    btnLoader.classList.add('hidden');
                    loginBtn.disabled = false;
                    showError('❌ Invalid Matric Number. Please check and try again.');
                    matricInput.value = '';
                    matricInput.focus();
                }
            }, 800);
        });

        function showError(message) {
            errorMsg.querySelector('span:last-child').textContent = message;
            errorMsg.classList.remove('hidden');
            setTimeout(() => errorMsg.classList.add('hidden'), 5000);
        }

        matricInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') loginForm.dispatchEvent(new Event('submit'));
        });
    });
}

// ==========================================
//  📊 DASHBOARD.HTML
// ==========================================
if (window.location.pathname.includes('dashboard.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const user = requireLogin();
        if (!user) return;

        document.getElementById('userMatric').textContent = user;

        const container = document.getElementById('groupsContainer');
        document.getElementById('groupCount').textContent = GROUPS.length;

        GROUPS.forEach((group, index) => {
            const card = document.createElement('div');
            card.className = 'group-card';
            card.style.animationDelay = `${(index + 1) * 0.1}s`;
            card.innerHTML = `
                <span class="card-number">${index + 1}</span>
                <div class="group-badge">
                    <span class="icon">🏥</span> Group ${group.id}
                </div>
                <h3>Group ${group.id}</h3>
                <div class="group-topic">${group.topic}</div>
                <div class="group-members">
                    <strong>👥 Members:</strong> ${group.members.join(', ')}
                    <span class="member-count">${group.members.length}</span>
                </div>
                <div class="card-footer">
                    <button class="group-drive-btn" onclick="event.stopPropagation(); goToGroup('${group.id}')">
                        📸 View Presentation
                        <span class="arrow">→</span>
                    </button>
                    <span class="group-photo-count">
                        <span class="icon">🖼️</span> ${group.members.length} Members
                    </span>
                </div>
            `;
            card.addEventListener('click', () => goToGroup(group.id));
            container.appendChild(card);
        });

        document.getElementById('logoutBtn').addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                clearSession();
                window.location.href = 'index.html';
            }
        });
    });
}

// ==========================================
//  🔍 GROUP.HTML (DETAIL PAGE)
// ==========================================
if (window.location.pathname.includes('group.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const user = requireLogin();
        if (!user) return;

        document.getElementById('userMatric').textContent = user;

        const urlParams = new URLSearchParams(window.location.search);
        const groupId = urlParams.get('id');
        
        if (!groupId) {
            window.location.href = 'dashboard.html';
            return;
        }

        const group = GROUPS.find(g => g.id.toUpperCase() === groupId.toUpperCase());
        if (!group) {
            window.location.href = 'dashboard.html';
            return;
        }

        const container = document.getElementById('groupDetail');
        container.innerHTML = `
            <div class="detail-header">
                <div class="detail-badge">
                    <span class="icon">🏥</span> Group ${group.id}
                </div>
                <div class="detail-title-group">
                    <h2>Group ${group.id} Presentation</h2>
                    <div class="detail-topic">${group.topic}</div>
                </div>
            </div>

            <div class="detail-grid">
                <div class="detail-section">
                    <h4>
                        <span class="icon">👥</span> Group Members 
                        <span class="badge-count">${group.members.length}</span>
                    </h4>
                    <ul>
                        ${group.members.map(member => `<li>${member}</li>`).join('')}
                    </ul>
                </div>

                <div class="detail-section">
                    <h4>
                        <span class="icon">📝</span> Presentation Summary
                    </h4>
                    <p>${group.summary}</p>
                </div>

                <div class="detail-section detail-section-full">
                    <div class="drive-button-wrapper">
                        <p class="drive-label">📸 Access All Presentation Photos</p>
                        <a href="${group.driveLink}" target="_blank" class="detail-drive-btn">
                            <span class="icon">📸</span>
                            View on Google Drive
                            <span class="arrow">🚀</span>
                        </a>
                        <div class="drive-hint">
                            <span class="hint-icon">💡</span>
                            Click to open Google Drive folder with all photos
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('backBtn').addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });

        document.getElementById('logoutBtn').addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                clearSession();
                window.location.href = 'index.html';
            }
        });
    });
}

// ==========================================
//  🛡️ CONSOLE BRANDING
// ==========================================

console.log('🏥 OGBMOSO COLLEGE OF NURSING SCIENCE');
console.log('📋 Foundation of Nursing Presentation Portal');
console.log('👨‍💻 Designed by Gift & Jeconaih');
console.log('❤️ Excellence in Nursing Education');
console.log('✨ Class of 2026');
