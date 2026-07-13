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
    "25016",
    "25023",
    "25027",
    "25028",
    "452312"
];

// GROUP PRESENTATIONS
const GROUPS = [
    {
        id: "A",
        topic: "Kidney Failure & Nasogastric Tubing",
        members: [
            "Salaudeen Mariam",
            "Adama Peace",
            "Ajibade Lydia",
            "Omotosho Doyinsola"
        ],
        summary: "📋 GROUP A – CLINICAL DEMONSTRATION & CASE PRESENTATION\n\n" +
                 "Group A delivered an outstanding and comprehensive presentation on Kidney Failure and Nasogastric Tubing, demonstrating exceptional clinical knowledge and practical nursing skills. The presentation was divided into two main sections: theoretical understanding and practical demonstration.\n\n" +
                 "🔬 KIDNEY FAILURE PRESENTATION:\n" +
                 "The group began by providing an in-depth exploration of kidney failure, covering its pathophysiology, etiology, and classification into acute and chronic forms. They discussed the common causes including hypertension, diabetes mellitus, glomerulonephritis, and polycystic kidney disease. The clinical features were thoroughly explained, highlighting early warning signs such as fatigue, edema, changes in urine output, and later complications including electrolyte imbalances, metabolic acidosis, and uremic syndrome.\n\n" +
                 "The nursing management section was particularly impressive, with the group outlining comprehensive care plans including:\n" +
                 "• Monitoring vital signs and fluid balance\n" +
                 "• Assessing for signs of fluid overload or dehydration\n" +
                 "• Implementing dietary modifications (low protein, low potassium, low sodium)\n" +
                 "• Administering prescribed medications including antihypertensives and diuretics\n" +
                 "• Preparing patients for dialysis or kidney transplant when indicated\n" +
                 "• Providing patient education on lifestyle modifications and self-care\n" +
                 "• Offering psychological support and coping strategies\n\n" +
                 "🩺 NASOGASTRIC (NG) TUBE PROCEDURE DEMONSTRATION:\n" +
                 "The group then transitioned to a practical demonstration of NG tube insertion and management. They meticulously explained the step-by-step procedure including:\n" +
                 "• Patient assessment and preparation (explaining the procedure, obtaining consent)\n" +
                 "• Equipment preparation (NG tube, lubricant, syringe, stethoscope, tape)\n" +
                 "• Proper positioning of the patient (sitting upright or semi-Fowler's position)\n" +
                 "• Accurate measurement of tube length (from nose to ear to xiphoid process)\n" +
                 "• Gentle insertion technique with patient cooperation\n" +
                 "• Confirmation of tube placement (aspiration of gastric contents, auscultation, pH testing)\n" +
                 "• Securing the tube and initiating feeding or medication administration\n" +
                 "• Ongoing care and monitoring for complications\n\n" +
                 "The group emphasized crucial nursing considerations including patient comfort, dignity, and safety throughout the procedure. They also highlighted potential complications such as aspiration, tube displacement, and infection, with strategies for prevention and management.\n\n" +
                 "The presentation was well-received, demonstrating the group's thorough understanding of both theoretical concepts and practical nursing skills essential for quality patient care.",
        driveLink: "https://drive.google.com/drive/folders/15ZYs13nZg2pcGuApFMcy4zzSctcUXwbX"
    },
    {
        id: "B",
        topic: "Gastric Lavage & Heart Failure",
        members: [
            "Famous Esther",
            "Abiona Tomi Olorunnisomo",
            "Ayobami Olunike Adeniran",
            "Folasayo Ojo"
        ],
        summary: "📋 GROUP B – CLINICAL DEMONSTRATION & CASE PRESENTATION\n\n" +
                 "Group B delivered an exceptional and well-structured presentation on Heart Failure and Gastric Lavage, showcasing their comprehensive understanding of these critical nursing topics. The presentation was both educational and clinically relevant.\n\n" +
                 "❤️ HEART FAILURE PRESENTATION:\n" +
                 "The group provided an extensive overview of heart failure, beginning with its definition as a progressive condition where the heart cannot pump enough blood to meet the body's demands. They discussed the two main types: systolic heart failure (reduced ejection fraction) and diastolic heart failure (preserved ejection fraction).\n\n" +
                 "The etiology section covered common causes including:\n" +
                 "• Coronary artery disease and myocardial infarction\n" +
                 "• Hypertension and valvular heart disease\n" +
                 "• Cardiomyopathy and congenital heart defects\n" +
                 "• Diabetes mellitus and thyroid disorders\n\n" +
                 "Clinical manifestations were thoroughly explained, including:\n" +
                 "• Dyspnea on exertion and orthopnea\n" +
                 "• Paroxysmal nocturnal dyspnea\n" +
                 "• Peripheral edema and weight gain\n" +
                 "• Fatigue and exercise intolerance\n" +
                 "• Jugular venous distension and hepatomegaly\n" +
                 "• Pulmonary crackles and S3 gallop\n\n" +
                 "The nursing management section was comprehensive, covering:\n" +
                 "• Assessment of vital signs, weight, and fluid status\n" +
                 "• Monitoring for signs of worsening heart failure\n" +
                 "• Administering medications including ACE inhibitors, beta-blockers, diuretics, and digoxin\n" +
                 "• Implementing dietary modifications (low sodium, fluid restriction)\n" +
                 "• Promoting physical activity within tolerance limits\n" +
                 "• Patient education on medication compliance, symptom monitoring, and lifestyle changes\n" +
                 "• Psychological support and coping strategies for chronic illness management\n\n" +
                 "🩺 GASTRIC LAVAGE PROCEDURE DEMONSTRATION:\n" +
                 "The group then demonstrated the gastric lavage procedure, commonly known as stomach pumping. They explained this emergency procedure used to remove toxic substances from the stomach. Key points covered included:\n\n" +
                 "• Indications for gastric lavage (drug overdose, poisoning, gastrointestinal bleeding)\n" +
                 "• Contraindications (ingestion of corrosive substances, hydrocarbons)\n" +
                 "• Equipment preparation (lavage tube, funnel, warm water, basin)\n" +
                 "• Patient positioning (left lateral decubitus position)\n" +
                 "• Step-by-step insertion and lavage technique\n" +
                 "• Monitoring for complications (aspiration, electrolyte imbalances)\n" +
                 "• Documentation and post-procedure care\n\n" +
                 "The group emphasized the importance of proper patient assessment, informed consent, and maintaining patient dignity throughout the procedure. They also highlighted the nurse's role in monitoring for complications and ensuring patient safety.\n\n" +
                 "Overall, Group B delivered a comprehensive presentation that effectively combined theoretical knowledge with practical clinical skills, demonstrating their competence as future nursing professionals.",
        driveLink: "https://drive.google.com/drive/folders/16DOqhC6myLdX2U18qTCUsjM6fJ050zTm"
    },
    {
        id: "C",
        topic: "Nursing Diagnosis for Severe COVID-19 & Practical Demonstration of Rectal Wash-Out & Parenteral Feeding",
        members: [
            "Tobore Jeconiah",
            "Nwodu Gift",
            "Micheal Favour",
            "Tobore Faithfulness",
            "Hephzibah Ojo Anjolaoluwa"
        ],
        summary: "📋 GROUP C – CLINICAL DEMONSTRATION & CASE PRESENTATION\n\n" +
                 "Group C delivered an outstanding and highly practical presentation on Nursing Diagnosis for Severe COVID-19, along with live demonstrations of Rectal Wash-Out and Parenteral Feeding. Their presentation was comprehensive, clinically relevant, and expertly delivered.\n\n" +
                 "🦠 SEVERE COVID-19 NURSING DIAGNOSIS & MANAGEMENT:\n" +
                 "The group began by addressing the critical topic of nursing care for patients with severe COVID-19, reflecting the current global health challenges. They discussed the pathophysiology of COVID-19, focusing on the inflammatory response, acute respiratory distress syndrome (ARDS), and multisystem involvement.\n\n" +
                 "Nursing diagnoses identified included:\n" +
                 "• Impaired gas exchange related to alveolar inflammation and fluid accumulation\n" +
                 "• Ineffective breathing pattern related to respiratory muscle fatigue\n" +
                 "• Risk for infection transmission related to viral shedding\n" +
                 "• Activity intolerance related to hypoxemia and fatigue\n" +
                 "• Anxiety related to critical illness and isolation\n" +
                 "• Imbalanced nutrition: less than body requirements related to increased metabolic demands\n\n" +
                 "Comprehensive nursing management strategies were discussed:\n" +
                 "• Monitoring oxygen saturation and implementing oxygen therapy\n" +
                 "• Positioning strategies (prone positioning for improved oxygenation)\n" +
                 "• Administration of prescribed medications (antivirals, corticosteroids, anticoagulants)\n" +
                 "• Fluid and electrolyte management\n" +
                 "• Prevention of complications (pressure ulcers, deep vein thrombosis)\n" +
                 "• Psychological support and communication with family members\n" +
                 "• Strict infection control measures and use of personal protective equipment (PPE)\n" +
                 "• Patient education on post-COVID recovery and rehabilitation\n\n" +
                 "🩺 RECTAL WASH-OUT PROCEDURE DEMONSTRATION:\n" +
                 "The group then demonstrated the rectal wash-out procedure, also known as bowel irrigation. This procedure is used for fecal impaction management or as part of bowel preparation. Key aspects covered included:\n\n" +
                 "• Indications for rectal wash-out (fecal impaction, constipation, pre-surgical preparation)\n" +
                 "• Equipment preparation (irrigation set, lubricant, warm water, basin)\n" +
                 "• Patient positioning and privacy maintenance\n" +
                 "• Step-by-step insertion and irrigation technique\n" +
                 "• Monitoring for patient comfort and complications\n" +
                 "• Post-procedure care and documentation\n\n" +
                 "💉 PARENTERAL FEEDING (TOTAL PARENTERAL NUTRITION) DEMONSTRATION:\n" +
                 "The group also demonstrated parenteral feeding, a life-saving intervention for patients unable to receive enteral nutrition. Important points included:\n\n" +
                 "• Indications for parenteral nutrition (severe malnutrition, gastrointestinal dysfunction, critical illness)\n" +
                 "• Components of parenteral nutrition solutions (carbohydrates, proteins, lipids, electrolytes, vitamins, minerals)\n" +
                 "• Central vs. peripheral administration routes\n" +
                 "• Preparation and administration technique\n" +
                 "• Monitoring for complications (infection, metabolic disturbances, electrolyte imbalances)\n" +
                 "• Nursing responsibilities in TPN management and patient monitoring\n\n" +
                 "🌟 CLOSING REMARKS:\n" +
                 "Group C successfully integrated theoretical knowledge with practical clinical skills, demonstrating exceptional clinical competence and professional readiness. Their presentation highlighted the importance of evidence-based practice and the application of the nursing process in caring for complex patients. The group's collaborative approach and attention to patient safety were commendable.\n\n" +
                 "The presentation was a testament to the students' dedication to nursing excellence and their ability to translate theoretical concepts into safe, effective patient care.",
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
                        <p style="white-space: pre-line; line-height: 1.8;">${group.summary}</p>
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
