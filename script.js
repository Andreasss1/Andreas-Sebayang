// Typing animation
document.addEventListener('DOMContentLoaded', () => {
    const typed = document.getElementById('typed');
    const strings = [
        "Hello...",
        "I'm an AIoT Automation Engineer & Data Specialist"
    ];
    
    let currentString = 0;
    let currentChar = 0;
    let typing = true;
    let deleting = false;
    
    function type() {
        if (typing) {
            typed.textContent = strings[currentString].substring(0, currentChar + 1);
            currentChar++;
            
            if (currentChar === strings[currentString].length) {
                typing = false;
                setTimeout(() => {
                    deleting = true;
                    setTimeout(deleteText, 1500);
                }, 1500);
            } else {
                setTimeout(type, 100);
            }
        }
    }
    
    function deleteText() {
        if (deleting) {
            typed.textContent = strings[currentString].substring(0, currentChar - 1);
            currentChar--;
            
            if (currentChar === 0) {
                deleting = false;
                currentString = (currentString + 1) % strings.length;
                typing = true;
                setTimeout(type, 500);
            } else {
                setTimeout(deleteText, 50);
            }
        }
    }
    
    setTimeout(type, 1000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});