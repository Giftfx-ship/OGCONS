/* ================================================================
   OGBMOSO COLLEGE OF NURSING SCIENCE
   FOUNDATION OF NURSING PRESENTATION PORTAL
   ULTIMATE PREMIUM JAVASCRIPT V3 - COMPLETE
   ================================================================ */

// ==========================================
//  📋 CONFIGURATION - EDIT THIS SECTION ONLY
// ==========================================

// SCHOOL INFORMATION
const SCHOOL = {
    name: "OGBMOSO COLLEGE OF NURSING SCIENCE",
    tagline: "Excellence in Nursing Education",
    logo: "images/logo.JPG"
};

// AUTHORIZED STUDENTS - Add all matric numbers here
const STUDENTS = [
    "25002",
    "25003",
    "25006",
    "25007",
    "25008",
    "25009",
    "25010",
    "25011",
    "25012",
    "25013",
    "25015",
    "25023",
    "25028",
    "25016",
    "25027"
    // Add more students as needed
];

// GROUP PRESENTATIONS
const GROUPS = [
    {
        id: "A",
        topic: "STU - "Kidney Failure & Nasogastric Tubing.",
        members: [
            "Salaudeen Mariam",
            "Adama Peace",
            "Ajibade Lydia",
            "Omotosho Doyinsola"
        ],
        summary: "STU - Group A – Clinical Demonstration & Case Presentation,Group A presented on kidney failure, discussing its causes, clinical features, nursing management, and patient care. The group also demonstrated the nasogastric (NG) tube procedure, highlighting proper insertion techniques, feeding, medication administration, and essential nursing considerations to ensure patient safety.",
        driveLink: "https://drive.google.com/drive/folders/15ZYs13nZg2pcGuApFMcy4zzSctcUXwbX"
    },
    {
        id: "B",
        topic: "STU - Gastric Lavage & Heart Failure.",
        members: [
            "Famous Esther",
            "Abiona Tomi Olorunnisomo",
            "Ayobami Olunike Adeniran",
            "Folasayo Ojo"
        ],
        summary: "STU - "Clinical Demonstration & Case Presentation,Group B presented on heart failure, covering its causes, signs and symptoms, nursing diagnoses, and appropriate nursing management. The group also demonstrated gastric lavage, emphasizing the correct procedure, indications, precautions, and the nurse’s role in ensuring safe and effective patient care.",
        driveLink: "https://drive.google.com/drive/folders/16DOqhC6myLdX2U18qTCUsjM6fJ050zTm"
    },
    {
        id: "C",
        topic: "STU - Nursing Dianosis For A Patient With Servere Covid-19 & Practically Demonstrate Rectal Wash-Out And Parenteral Feeding.",
        members: [
            "Tobore Jeconiah",
            "Nwodu Gift",
            "Micheal Favour",
            "Tobore Faithfulness",
            "Hephzibah Ojo Anjolaoluwa"
        ],
        summary: "STU - Group C – Clinical Demonstration & Case Presentation,Group C presented a practical demonstration of rectal washout and parenteral feeding, showcasing the correct procedures, nursing responsibilities, and essential patient safety measures. The group also discussed the nursing diagnoses and nursing management of a patient with severe COVID-19, emphasizing the application of the nursing process and evidence-based care.The presentation successfully integrated theoretical knowledge with practical skills, enhancing clinical understanding and professional competence in nursing practice.",
        driveLink: "https://drive.google.com/drive/folders/1xb5pPHe_kzp8j4rv_N6W8GOp4jqFlFQN"
    }
];

// DEVELOPER CREDITS
const CREDITS = {
    developer: "Dev Gift",
    developerNumber: "2349164624021",
    creative: "Jeconiah",
    creativeNumber: "2348143548086"
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
        // Check if already logged in
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

        // Focus input on load
        setTimeout(() => {
            matricInput.focus();
        }, 500);

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const matric = matricInput.value.trim().toUpperCase();
            
            // Validate input
            if (!matric) {
                showError('Please enter your Matric Number.');
                return;
            }

            // Show loading state
            btnText.classList.add('hidden');
            btnLoader.classList.remove('hidden');
            loginBtn.disabled = true;

            // Simulate loading for better UX
            setTimeout(() => {
                // Check against student list
                if (STUDENTS.includes(matric)) {
                    // Login successful - store matric number
                    setCurrentUser(matric);
                    window.location.href = 'dashboard.html';
                } else {
                    // Login failed
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
            const errorText = errorMsg.querySelector('span:last-child');
            if (errorText) {
                errorText.textContent = message;
            } else {
                errorMsg.innerHTML = `<span class="icon">❌</span><span>${message}</span>`;
            }
            errorMsg.classList.remove('hidden');
            
            // Shake animation
            errorMsg.style.animation = 'none';
            setTimeout(() => {
                errorMsg.style.animation = 'fadeInUp 0.5s ease';
            }, 10);

            setTimeout(() => {
                errorMsg.classList.add('hidden');
            }, 5000);
        }

        // Enter key support
        matricInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });
    });
}

// ==========================================
//  📊 DASHBOARD.HTML
// ==========================================
if (window.location.pathname.includes('dashboard.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        // Get the logged-in user's matric number
        const user = requireLogin();
        if (!user) return;

        // ✅ FIX: Display the actual matric number used to login
        const userMatricEl = document.getElementById('userMatric');
        if (userMatricEl) {
            userMatricEl.textContent = user;
        }

        // Render groups
        const container = document.getElementById('groupsContainer');
        const groupCountEl = document.getElementById('groupCount');
        
        if (groupCountEl) {
            groupCountEl.textContent = GROUPS.length;
        }

        if (container) {
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
                card.addEventListener('click', function() {
                    goToGroup(group.id);
                });
                container.appendChild(card);
            });
        }

        // Logout
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

        // ✅ FIX: Display the actual matric number used to login
        const userMatricEl = document.getElementById('userMatric');
        if (userMatricEl) {
            userMatricEl.textContent = user;
        }

        // Get group ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const groupId = urlParams.get('id');
        
        if (!groupId) {
            window.location.href = 'dashboard.html';
            return;
        }

        // Find group
        const group = GROUPS.find(g => g.id.toUpperCase() === groupId.toUpperCase());
        if (!group) {
            window.location.href = 'dashboard.html';
            return;
        }

        // Render group detail
        const container = document.getElementById('groupDetail');
        if (container) {
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
                            <p class="drive-label">
                                <span class="label-icon">📸</span> Access All Presentation Photos
                            </p>
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
        }

        // Back button
        document.getElementById('backBtn').addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });

        // Logout
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
console.log('👨‍💻 Designed by Dev Gift & Creative Jeconiah');
console.log('❤️ Excellence in Nursing Education');
console.log('✨ Class of 2026');
console.log('📞 Dev: 2349164624021');
console.log('📞 Creative: 2348143548086');
