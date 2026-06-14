/* ===== Data ===== */
const UPI_APPS = [
  {
    id: "phonepe",
    name: "PhonePe",
    initials: "Pe",
    color: "#5F259F",
    lightBg: "#F3E8FF",
    badgeText: "Most Downloaded",
    badgeClass: "badge-violet",
    tagline: "India's Most Popular UPI App",
    rating: 4.7,
    reviews: "1.5 Cr+",
    desc: "PhonePe is India's leading UPI app with over 500 million registered users. It offers seamless payments, financial services, and a built-in mini-app platform.",
    features: [
      "Instant bank-to-bank UPI transfers",
      "UPI AutoPay for recurring subscriptions",
      "Mobile, DTH & utility bill payments",
      "Health, life & vehicle insurance"
    ],
    website: "https://www.phonepe.com"
  },
  {
    id: "googlepay",
    name: "Google Pay",
    initials: "G",
    color: "#4285F4",
    lightBg: "#EBF3FF",
    badgeText: "Best Cashback",
    badgeClass: "badge-blue",
    tagline: "Fast, Simple & Secure by Google",
    rating: 4.6,
    reviews: "90L+",
    desc: "Google Pay (GPay) combines the trust of Google with UPI's infrastructure. Known for scratch cards, rewards, and an ultra-clean interface loved by millions.",
    features: [
      "Pay via UPI ID, phone number & QR code",
      "Scratch cards & Google Rewards cashback",
      "Bill splitting with contacts",
      "NFC contactless payments (Android)"
    ],
    website: "https://pay.google.com"
  },
  {
    id: "bhim",
    name: "BHIM UPI",
    initials: "B",
    color: "#FF6B00",
    lightBg: "#FFF0E5",
    badgeText: "Government App",
    badgeClass: "badge-orange",
    tagline: "Official Government UPI App",
    rating: 4.2,
    reviews: "30L+",
    desc: "BHIM (Bharat Interface for Money) is the official UPI app by NPCI. It's the most trusted, lightweight app that works even on entry-level smartphones across India.",
    features: [
      "Developed directly by NPCI (Government body)",
      "Supports 20+ Indian languages",
      "Aadhaar-linked biometric payments",
      "BHIM Vouchers for DBT subsidies"
    ],
    website: "https://www.bhimupi.org.in"
  },
  {
    id: "amazonpay",
    name: "Amazon Pay",
    initials: "A",
    color: "#FF9900",
    lightBg: "#FFF7E5",
    badgeText: "Best for Shopping",
    badgeClass: "badge-amber",
    tagline: "Pay & Shop Seamlessly",
    rating: 4.4,
    reviews: "50L+",
    desc: "Amazon Pay integrates UPI with India's largest e-commerce platform. Get exclusive cashback on Amazon purchases and use UPI across all partner merchants.",
    features: [
      "One-tap UPI checkout on Amazon.in",
      "Amazon Pay Later (buy now, pay in 30 days)",
      "No-cost EMI on eligible products",
      "Exclusive 5-10% cashback on Amazon"
    ],
    website: "https://www.amazon.in/amazonpay"
  },
  {
    id: "paytm",
    name: "Paytm",
    initials: "P",
    color: "#00BAF2",
    lightBg: "#E5F7FD",
    badgeText: "Super App",
    badgeClass: "badge-cyan",
    tagline: "Payments Bank + UPI + Wallet",
    rating: 4.3,
    reviews: "1 Cr+",
    desc: "Paytm is India's original fintech super app, combining a payments bank, UPI, wallet, investments, and merchant tools into one platform used by 350M+ users.",
    features: [
      "Paytm Payments Bank savings account",
      "UPI + digital wallet combined",
      "FASTag for highway toll payments",
      "Stock trading & IPO investing (Paytm Money)"
    ],
    website: "https://paytm.com"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Pay",
    initials: "W",
    color: "#25D366",
    lightBg: "#E8F8EF",
    badgeText: "Most Convenient",
    badgeClass: "badge-green",
    tagline: "Pay Within Your Chats",
    rating: 4.1,
    reviews: "20L+",
    desc: "WhatsApp Pay lets you send money directly inside WhatsApp conversations. With 500M WhatsApp users in India, paying friends feels as simple as sending a message.",
    features: [
      "Pay directly inside any WhatsApp chat",
      "No separate app or registration needed",
      "Powered by UPI — NPCI & RBI approved",
      "Payment receipts visible in chat thread"
    ],
    website: "https://www.whatsapp.com"
  }
];

const STEPS = [
  { step: "01", title: "Download a UPI App", desc: "Install any UPI-enabled app like PhonePe, Google Pay, BHIM, or Amazon Pay from the Play Store or App Store." },
  { step: "02", title: "Link Your Bank Account", desc: "Register with your mobile number (linked to your bank account) and verify it via OTP sent to your phone." },
  { step: "03", title: "Create Your UPI ID", desc: "Set a unique UPI ID (like yourname@bankname) and create a secure 4–6 digit UPI PIN using your debit card details." },
  { step: "04", title: "Send or Receive Money", desc: "Enter the recipient's UPI ID, mobile number, or scan their QR code. Enter the amount and confirm with your UPI PIN." },
  { step: "05", title: "Check Transaction Status", desc: "Get instant SMS and in-app notifications for every transaction. View complete history in the app anytime." }
];

const SAFETY_TIPS = [
  { icon: "🔒", bg: "bg-rose", title: "Never Share Your UPI PIN", desc: "Your UPI PIN is like your ATM PIN. No bank, app, or UPI helpline will ever ask for it." },
  { icon: "👁", bg: "bg-amber", title: "Verify Before You Pay", desc: "Always double-check the recipient's name after entering their UPI ID before confirming." },
  { icon: "⚠", bg: "bg-orange", title: "Beware of Collect Requests", desc: "Scammers send fake 'collect' requests. You NEVER need a PIN to receive money." },
  { icon: "📱", bg: "bg-violet", title: "Use Official Apps Only", desc: "Download UPI apps only from Google Play Store or Apple App Store." },
  { icon: "🛡", bg: "bg-emerald", title: "Enable App Lock", desc: "Lock your UPI app with fingerprint, face ID, or a PIN to prevent unauthorized access." },
  { icon: "📶", bg: "bg-blue", title: "Avoid Public Wi-Fi", desc: "Never make UPI payments on public Wi-Fi networks. Use mobile data for secure transactions." }
];

const BENEFITS = [
  { icon: "⚡", bg: "bg-blue", title: "Instant 24/7 Transfers", desc: "Send money any time of day or night — weekends and holidays included. Transfers complete in seconds." },
  { icon: "💰", bg: "bg-emerald", title: "Zero Transaction Fees", desc: "Most UPI transactions are completely free for users. No hidden charges on person-to-person transfers." },
  { icon: "📷", bg: "bg-violet", title: "QR Code Payments", desc: "Scan any QR code to pay instantly at shops, restaurants, petrol pumps, and online stores." },
  { icon: "🏦", bg: "bg-amber", title: "Works Across All Banks", desc: "UPI connects 350+ banks. Use a single app to manage money from multiple bank accounts." },
  { icon: "💳", bg: "bg-rose", title: "No Card Needed", desc: "Pay using just your mobile number or UPI ID. No need to carry debit/credit cards." },
  { icon: "📩", bg: "bg-cyan", title: "Request & Collect Money", desc: "Send payment requests to friends, family, or customers. Collect dues with a single tap." }
];

const STATS = [
  { value: "₹20L Cr+", label: "Monthly transaction value" },
  { value: "1,300 Cr+", label: "Transactions in Dec 2024" },
  { value: "350+", label: "Banks on UPI network" },
  { value: "500M+", label: "Active UPI users in India" }
];

const STORAGE_KEY = "upiGuideProgress";

/* ===== Progress (localStorage) ===== */
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (_) {}
  return { appsExplored: [], tipsRead: [], stepsViewed: false };
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getProgress() {
  if (!window._progress) window._progress = loadProgress();
  return window._progress;
}

function markAppExplored(id) {
  const p = getProgress();
  if (!p.appsExplored.includes(id)) {
    p.appsExplored.push(id);
    saveProgress(p);
    updateDashboard();
  }
}

function markTipsRead() {
  const p = getProgress();
  if (!p.tipsRead.includes("all")) {
    p.tipsRead = ["all"];
    saveProgress(p);
    updateDashboard();
  }
}

function markStepsViewed() {
  const p = getProgress();
  if (!p.stepsViewed) {
    p.stepsViewed = true;
    saveProgress(p);
    updateDashboard();
  }
}

/* ===== Render ===== */
function renderApps() {
  const grid = document.getElementById("appsGrid");
  grid.innerHTML = UPI_APPS.map((app) => `
    <article class="app-card" data-app="${app.id}">
      <div class="app-card-header">
        <div class="app-avatar" style="background:${app.color}">${app.initials}</div>
        <div class="app-meta">
          <div class="app-name-row">
            <div>
              <div class="app-name">${app.name}</div>
              <div class="app-tagline">${app.tagline}</div>
            </div>
            <span class="app-badge ${app.badgeClass}" style="background:${app.lightBg};color:${app.color}">${app.badgeText}</span>
          </div>
        </div>
      </div>
      <div class="app-card-body">
        <p class="app-desc">${app.desc}</p>
        <div class="app-rating-row">
          <span class="app-rating"><span class="star">★</span> ${app.rating}</span>
          <span>${app.reviews} reviews</span>
          <span class="platform-tag">Android</span>
          <span class="platform-tag">iOS</span>
        </div>
        <button class="features-toggle" data-toggle="${app.id}">Show features ▼</button>
        <div class="app-features" id="features-${app.id}">
          <ul>${app.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="app-card-footer" style="background:${app.lightBg}">
        <span class="app-certified"><span class="cert-check">✓</span> NPCI Certified · RBI Approved</span>
        <a href="${app.website}" target="_blank" rel="noopener noreferrer" class="btn-app" style="background:${app.color}">Website ›</a>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".features-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.toggle;
      const panel = document.getElementById(`features-${id}`);
      const open = panel.classList.toggle("open");
      btn.textContent = open ? "Hide features ▲" : "Show features ▼";
      if (open) markAppExplored(id);
    });
  });
}

function renderSteps() {
  document.getElementById("stepsList").innerHTML = STEPS.map((s) => `
    <div class="step-item">
      <div class="step-number">${s.step}</div>
      <div class="step-content">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderTips() {
  document.getElementById("tipsGrid").innerHTML = SAFETY_TIPS.map((t) => `
    <div class="tip-card">
      <div class="tip-icon ${t.bg}">${t.icon}</div>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
    </div>
  `).join("");
}

function renderBenefits() {
  document.getElementById("benefitsGrid").innerHTML = BENEFITS.map((b) => `
    <div class="benefit-card">
      <div class="benefit-icon ${b.bg}">${b.icon}</div>
      <h3>${b.title}</h3>
      <p>${b.desc}</p>
    </div>
  `).join("");
}

function renderStats(containerId) {
  document.getElementById(containerId).innerHTML = STATS.map((s) => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

function updateDashboard() {
  const p = getProgress();
  document.getElementById("appsExplored").textContent = `${p.appsExplored.length} / ${UPI_APPS.length}`;
  document.getElementById("tipsRead").textContent = p.tipsRead.length ? `6 / 6` : `0 / 6`;
  document.getElementById("stepsViewed").textContent = p.stepsViewed ? `5 / 5` : `0 / 5`;

  document.getElementById("dashboardStats").innerHTML = STATS.map((s) => `
    <div class="dash-stat-card">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");

  document.getElementById("dashboardLinks").innerHTML = UPI_APPS.map((app) => `
    <a href="${app.website}" target="_blank" rel="noopener noreferrer" class="dash-link" style="background:${app.color}">
      <span class="dash-link-avatar">${app.initials}</span>
      ${app.name}
    </a>
  `).join("");
}

/* ===== Routing ===== */
function showPage(page) {
  const home = document.getElementById("homePage");
  const dash = document.getElementById("dashboardPage");

  if (page === "dashboard") {
    home.classList.add("hidden");
    dash.classList.remove("hidden");
    updateDashboard();
    window.scrollTo(0, 0);
  } else {
    home.classList.remove("hidden");
    dash.classList.add("hidden");
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    const isDash = link.getAttribute("href") === "#dashboard";
    link.classList.toggle("active", page === "dashboard" ? isDash : !isDash && link.dataset.page === "home");
  });
}

function handleRoute() {
  const hash = location.hash.slice(1) || "home";
  if (hash === "dashboard") {
    showPage("dashboard");
  } else {
    showPage("home");
  }
}

/* ===== Intersection observers for progress ===== */
function setupObservers() {
  const stepsSection = document.getElementById("how-to-use");
  const tipsSection = document.getElementById("safety");

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) markStepsViewed(); }),
      { threshold: 0.3 }
    );
    obs.observe(stepsSection);

    const tipsObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) markTipsRead(); }),
      { threshold: 0.2 }
    );
    tipsObs.observe(tipsSection);
  }
}

/* ===== Mobile Nav ===== */
function closeMobileNav() {
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("navToggle").setAttribute("aria-expanded", "false");
}

document.getElementById("navToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("navToggle").setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

document.getElementById("logoHome").addEventListener("click", (e) => {
  e.preventDefault();
  location.hash = "";
  showPage("home");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ===== Badge styles (injected once) ===== */
const badgeStyles = document.createElement("style");
badgeStyles.textContent = `
  .badge-violet { background: #F3E8FF !important; color: #5F259F !important; }
  .badge-blue { background: #EBF3FF !important; color: #4285F4 !important; }
  .badge-orange { background: #FFF0E5 !important; color: #FF6B00 !important; }
  .badge-amber { background: #FFF7E5 !important; color: #FF9900 !important; }
  .badge-cyan { background: #E5F7FD !important; color: #00BAF2 !important; }
  .badge-green { background: #E8F8EF !important; color: #25D366 !important; }
`;
document.head.appendChild(badgeStyles);

/* ===== Init ===== */
renderApps();
renderSteps();
renderTips();
renderBenefits();
renderStats("statsGrid");
renderStats("dashboardStatsBottom");
setupObservers();
window.addEventListener("hashchange", handleRoute);
handleRoute();
// Scroll Reveal Animation

function revealElements() {
    const reveals = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
    );

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

const counters = document.querySelectorAll('.stat-value');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.innerText.replace(/\D/g,'');
        let count = 0;
        const speed = target / 80;

        const animate = () => {
            count += speed;

            if(count < target){
                counter.innerText = Math.floor(count) + '+';
                requestAnimationFrame(animate);
            }else{
                counter.innerText = target + '+';
            }
        };

        animate();
    };

    updateCounter();
});