class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: rgba(17, 24, 39, 0.8);
                    backdrop-filter: blur(10px);
                    color: #d1d5db;
                    padding: 3rem 2rem;
                    text-align: center;
                    border-top: 1px solid rgba(55, 65, 81, 0.5);
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .social-links a {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    background: rgba(156, 163, 175, 0.2);
                    transition: all 0.3s ease;
                }
                .social-links a:hover {
                    background: linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%);
                    transform: translateY(-3px);
                }
                .copyright {
                    margin-top: 1rem;
                    font-size: 0.9rem;
                    color: #9ca3af;
                }
            </style>
            <footer>
                <div class="footer-content">
                    
                    <div class="copyright">
                        &copy; ${new Date().getFullYear()} Andreas Sebayang. All rights reserved.
                    </div>
                </div>
            </footer>
        `;
        
        // Initialize feather icons in shadow DOM
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-footer', CustomFooter);