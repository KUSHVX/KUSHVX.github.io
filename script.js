/* --- Variables (Light Mode Default) --- */
:root {
    --primary-color: #4361ee;
    --secondary-color: #3f37c9;
    --bg-color: #ffffff;
    --bg-alt: #f8f9fa;
    --text-color: #333333;
    --text-light: #666666;
    --card-bg: #ffffff;
    --shadow: 0 5px 15px rgba(0,0,0,0.1);
    --transition: all 0.3s ease;
}

/* --- Dark Mode Variables --- */
.dark-mode {
    --primary-color: #4cc9f0;
    --secondary-color: #4895ef;
    --bg-color: #0f172a;
    --bg-alt: #1e293b;
    --text-color: #f1f5f9;
    --text-light: #94a3b8;
    --card-bg: #1e293b;
    --shadow: 0 5px 15px rgba(0,0,0,0.3);
}

/* --- Global Reset --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
    overflow-x: hidden;
}

/* --- Utility Classes --- */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 80px 0;
}

.bg-alt {
    background-color: var(--bg-alt);
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 50px;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin: 10px auto 0;
    border-radius: 2px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    cursor: pointer;
    border: none;
}

.btn-primary {
    background: var(--primary-color);
    color: #fff;
}

.btn-primary:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
}

.btn-outline {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    margin-left: 10px;
}

.btn-outline:hover {
    background: var(--primary-color);
    color: #fff;
}

/* --- Navigation --- */
#navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--bg-color);
    box-shadow: var(--shadow);
    z-index: 1000;
    padding: 15px 0;
}

.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Animated Logo */
.logo-text {
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
    color: var(--text-color);
    letter-spacing: 1px;
    position: relative;
}

.logo-text span {
    color: var(--primary-color);
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--primary-color);
}

.nav-controls {
    display: flex;
    align-items: center;
    gap: 15px;
}

#theme-toggle {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
}

.hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* --- Hero Section --- */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 60px;
}

.hero h1 {
    font-size: 4rem;
    margin: 10px 0;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.typing-effect {
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 500;
}

.hero-desc {
    max-width: 600px;
    margin: 0 auto 30px;
    color: var(--text-light);
    line-height: 1.6;
}

/* --- About & Mission --- */
.about-text {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.mission-vision {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
}

.mv-card {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    border-top: 4px solid var(--primary-color);
}

.mv-card i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 10px;
}

/* --- Cards Grid (Services) --- */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.card {
    background: var(--card-bg);
    padding: 30px;
    border-radius: 15px;
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.card:hover {
    transform: translateY(-10px);
}

.card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 20px;
}

/* --- Experience Timeline --- */
.timeline {
    border-left: 3px solid var(--primary-color);
    padding-left: 30px;
    margin-left: 20px;
}

.timeline-item {
    margin-bottom: 40px;
    position: relative;
}

.timeline-item::before {
    content: '';
    width: 15px;
    height: 15px;
    background: var(--primary-color);
    border-radius: 50%;
    position: absolute;
    left: -39px;
    top: 5px;
}

.achieve-list {
    list-style: none;
    margin-top: 10px;
}

.achieve-list li {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.achieve-list i {
    color: var(--primary-color);
}

/* --- Skills --- */
.skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
}

.tags span {
    background: var(--bg-alt);
    border: 1px solid var(--primary-color);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
}

/* --- Goals --- */
.goals-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.goal-item {
    background: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}

/* --- Testimonials --- */
.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.t-card {
    background: var(--card-bg);
    padding: 25px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    font-style: italic;
}

.t-card h4 {
    margin-top: 15px;
    font-style: normal;
    color: var(--primary-color);
}

/* --- Contact --- */
.contact-wrapper {
    max-width: 600px;
    margin: 30px auto;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input, .contact-form textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: var(--card-bg);
    color: var(--text-color);
    font-family: inherit;
}

/* --- Footer --- */
footer {
    background: var(--bg-alt);
    padding: 40px 0;
    text-align: center;
    margin-top: 50px;
}

.socials {
    margin-top: 15px;
}

.socials a {
    color: var(--text-color);
    font-size: 1.5rem;
    margin: 0 10px;
    transition: var(--transition);
}

.socials a:hover {
    color: var(--primary-color);
}

/* --- Animations --- */
.hidden {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

/* --- Mobile Responsive --- */
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 60px;
        right: -100%;
        width: 100%;
        height: calc(100vh - 60px);
        background: var(--bg-color);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
    }

    .nav-links.active {
        right: 0;
    }

    .hamburger {
        display: block;
    }

    .hero h1 {
        font-size: 2.5rem;
    }
    
    .mission-vision, .skills-container {
        grid-template-columns: 1fr;
    }
}
