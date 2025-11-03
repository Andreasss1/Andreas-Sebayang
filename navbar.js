class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(17, 24, 39, 0.8);
                    backdrop-filter: blur(10px);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    border-bottom: 1px solid rgba(55, 65, 81, 0.5);
                }
                .logo {
                    background: linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-weight: bold;
                    font-size: 1.5rem;
                    letter-spacing: -0.5px;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                }
                .nav-links a {
                    color: #d1d5db;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    padding: 0.5rem 0;
                }
                .nav-links a:hover {
                    color: #ffffff;
                }
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%);
                    transition: width 0.3s ease;
                }
                .nav-links a:hover::after {
                    width: 100%;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            <nav>
                <a href="#" class="logo">Personal Website</a>
                <ul class="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
        
        // Initialize feather icons in shadow DOM
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);