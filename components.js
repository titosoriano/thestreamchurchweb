// components.js
const menuHTML = "    <!-- Navigation -->\n    <nav class=\"nav\" id=\"nav\">\n        <div class=\"container\">\n            <div class=\"nav-content\">\n                <a href=\"https://thestreamchurch.org/\" class=\"nav-logo\">\n                    <img src=\"img/logo1.webp\" alt=\"The Stream Logo\" style=\"height: 40px; width: auto;\">\n                </a>\n\n                <div class=\"nav-links\">\n                    <a href=\"index.html#inicio\" class=\"nav-link\">Inicio</a>\n                    <div class=\"dropdown\">\n                        <a href=\"#\" class=\"nav-link dropdown-toggle\">Quienes somos <i data-lucide=\"chevron-down\"\n                                style=\"width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-left: 4px;\"></i></a>\n                        <div class=\"dropdown-menu\">\n                            <a href=\"nuestros-pastores.html\" class=\"dropdown-item\">Nuestros Pastores</a>\n                            <a href=\"mision-vision.html\" class=\"dropdown-item\">Misi\u00f3n y Visi\u00f3n</a>\n                            <a href=\"que-esperar.html\" class=\"dropdown-item\">Qu\u00e9 Esperar</a>\n                            <a href=\"tributo-santos-sandoval.html\" class=\"dropdown-item\">Tributo: Pastor Santos Sandoval</a>\n                        </div>\n                    </div>\n                    <a href=\"index.html#servicios\" class=\"nav-link\">Servicios</a>\n                    <a href=\"index.html#en-vivo\" class=\"nav-link\">En Vivo</a>\n                    <div class=\"dropdown\">\n                        <a href=\"#\" class=\"nav-link dropdown-toggle\">Ministerios <i data-lucide=\"chevron-down\"\n                                style=\"width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-left: 4px;\"></i></a>\n                        <div class=\"dropdown-menu\">\n                            <a href=\"index.html#ministerio-artes\" class=\"dropdown-item\">Ministerio de Artes</a>\n                            <a href=\"obras-y-misiones.html\" class=\"dropdown-item\">Obras y Misiones</a>\n                            <a href=\"fundacion-gracia.html\" class=\"dropdown-item\">Grace Foundation</a>\n                        </div>\n                    </div>\n                    <a href=\"index.html#eventos\" class=\"nav-link\">Eventos</a>\n                    <a href=\"index.html#comunidad\" class=\"nav-link\">Comunidad</a>\n                    <div class=\"dropdown\">\n                        <a href=\"#\" class=\"nav-link dropdown-toggle\">Recursos <i data-lucide=\"chevron-down\"\n                                style=\"width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-left: 4px;\"></i></a>\n                        <div class=\"dropdown-menu\">\n                            <a href=\"confecion-de-fe-de-los-bautistas.html\" class=\"dropdown-item\">Confesi\u00f3n de Fe</a>\n                            <a href=\"catecismo-menor-bautista.html\" class=\"dropdown-item\">Catecismo Menor</a>\n                        </div>\n                    </div>\n                </div>\n\n                <button class=\"mobile-menu-btn\" id=\"mobileMenuBtn\" aria-label=\"Menu\">\n                    <i data-lucide=\"menu\" style=\"width: 20px; height: 20px; color: white;\" id=\"menuIcon\"></i>\n                </button>\n            </div>\n        </div>\n    </nav>\n\n    <!-- Mobile Menu - Outside nav to ensure it works on all sections -->\n    <div class=\"mobile-menu\" id=\"mobileMenu\">\n        <div class=\"mobile-menu-inner\">\n            <a href=\"index.html#inicio\">Inicio</a>\n            <div>\n                <a href=\"#\" class=\"mobile-dropdown-toggle\" onclick=\"toggleMobileDropdown(event)\">Quienes somos <i\n                        data-lucide=\"chevron-down\"\n                        style=\"width: 16px; height: 16px; float: right; transition: transform 0.3s ease;\"></i></a>\n                <div class=\"mobile-dropdown-menu\">\n                    <a href=\"nuestros-pastores.html\" style=\"padding-left: 32px; font-size: 14px;\">Nuestros Pastores</a>\n                    <a href=\"mision-vision.html\" style=\"padding-left: 32px; font-size: 14px;\">Misi\u00f3n y Visi\u00f3n</a>\n                    <a href=\"que-esperar.html\" style=\"padding-left: 32px; font-size: 14px;\">Qu\u00e9 Esperar</a>\n                    <a href=\"tributo-santos-sandoval.html\" style=\"padding-left: 32px; font-size: 14px;\">Tributo: Pastor Santos Sandoval</a>\n                </div>\n            </div>\n            <a href=\"index.html#servicios\">Servicios</a>\n            <a href=\"index.html#en-vivo\">En Vivo</a>\n            <div>\n                <a href=\"#\" class=\"mobile-dropdown-toggle\" onclick=\"toggleMobileDropdown(event)\">Ministerios <i\n                        data-lucide=\"chevron-down\"\n                        style=\"width: 16px; height: 16px; float: right; transition: transform 0.3s ease;\"></i></a>\n                <div class=\"mobile-dropdown-menu\">\n                    <a href=\"index.html#ministerio-artes\" style=\"padding-left: 32px; font-size: 14px;\">Ministerio de\n                        Artes</a>\n                    <a href=\"obras-y-misiones.html\" style=\"padding-left: 32px; font-size: 14px;\">Obras y Misiones</a>\n                    <a href=\"fundacion-gracia.html\" style=\"padding-left: 32px; font-size: 14px;\">Grace Foundation</a>\n                </div>\n            </div>\n            <a href=\"index.html#eventos\">Eventos</a>\n            <a href=\"index.html#comunidad\">Comunidad</a>\n            <div>\n                <a href=\"#\" class=\"mobile-dropdown-toggle\" onclick=\"toggleMobileDropdown(event)\">Recursos <i\n                        data-lucide=\"chevron-down\"\n                        style=\"width: 16px; height: 16px; float: right; transition: transform 0.3s ease;\"></i></a>\n                <div class=\"mobile-dropdown-menu\">\n                    <a href=\"confecion-de-fe-de-los-bautistas.html\"\n                        style=\"padding-left: 32px; font-size: 14px;\">Confesi\u00f3n de Fe</a>\n                    <a href=\"catecismo-menor-bautista.html\" style=\"padding-left: 32px; font-size: 14px;\">Catecismo\n                        Menor</a>\n                </div>\n            </div>\n        </div>\n    </div>\n";
const footerHTML = "    <!-- Footer -->\n    <footer class=\"footer\" style=\"background: linear-gradient(to bottom, #020617, #0f172a);\">\n        <div class=\"container\">\n            <div class=\"footer-grid\">\n                <!-- Church Info -->\n                <div class=\"footer-brand scroll-reveal\">\n                    <h3>Mission Baptist Church</h3>\n                    <p class=\"gradient-text\">The Stream</p>\n                    <p class=\"tagline\">\"Un Lugar de Gracia\"</p>\n\n                    <div class=\"footer-contact\">\n                        <a href=\"https://www.google.com/maps?sll=40.636694,-74.505232&q=11+Technology+Drive+North+Warren,+NJ,+07059,+United+States&z=12\"\n                            target=\"_blank\" rel=\"noopener noreferrer\">\n                            <i data-lucide=\"map-pin\" style=\"width: 20px; height: 20px;\"></i>\n                            <span>11 Technology Drive North, Warren NJ 07059</span>\n                            <i data-lucide=\"external-link\" class=\"external\" style=\"width: 16px; height: 16px;\"></i>\n                        </a>\n                        <a href=\"tel:9089386852\">\n                            <i data-lucide=\"phone\" style=\"width: 20px; height: 20px;\"></i>\n                            <span>(908) 938-6852</span>\n                        </a>\n                        <div style=\"display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,0.7);\">\n                            <i data-lucide=\"mail\" style=\"width: 20px; height: 20px;\"></i>\n                            <span>info@thestreamchurch.org</span>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Pastors -->\n                <div class=\"scroll-reveal\">\n                    <h4>Nuestros Pastores</h4>\n                    <div class=\"footer-pastores\">\n                        <div>\n                            <p>Pastores Local</p>\n                            <p>Erick Y Karen Sandoval</p>\n                        </div>\n                        <div>\n                            <p>Pastores General</p>\n                            <p>Santos Y Mary Sandoval</p>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Social -->\n                <div class=\"scroll-reveal\">\n                    <h4>S\u00edguenos</h4>\n                    <div class=\"footer-social\">\n                        <a href=\"https://www.instagram.com/thestreamchurch/\" target=\"_blank\" rel=\"noopener noreferrer\"\n                            class=\"instagram\" title=\"Instagram\" aria-label=\"Instagram\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\">\n                                <rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\" />\n                                <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\" />\n                                <line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\" />\n                            </svg>\n                        </a>\n                        <a href=\"https://www.facebook.com/TheStreamChurchNJ/\" target=\"_blank\" rel=\"noopener noreferrer\"\n                            class=\"facebook\" title=\"Facebook\" aria-label=\"Facebook\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\">\n                                <path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\" />\n                            </svg>\n                        </a>\n                        <a href=\"https://www.youtube.com/channel/UCIFR8v6PMjHfYO1MyUnMaCQ\" target=\"_blank\"\n                            rel=\"noopener noreferrer\" class=\"youtube\" title=\"YouTube\" aria-label=\"YouTube\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\">\n                                <path\n                                    d=\"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17\" />\n                                <path d=\"m10 15 5-3-5-3z\" />\n                            </svg>\n                        </a>\n                    </div>\n\n                    <a href=\"https://maps.app.goo.gl/xv3umbvJt5U7nfwH8\" target=\"_blank\" rel=\"noopener noreferrer\"\n                        class=\"footer-map\">\n                        <i data-lucide=\"map-pin\" style=\"width: 20px; height: 20px;\"></i>\n                        Ver en Google Maps\n                        <i data-lucide=\"external-link\" style=\"width: 16px; height: 16px;\"></i>\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"footer-divider\"></div>\n\n            <div class=\"footer-bottom scroll-reveal\">\n                <p>Mission Baptist Church Inc is a 501(c)(3) organization, with an IRS ruling year of 2026, and\n                    donations are tax-deductible.</p>\n                <p>Este website es Mantenido por el ministerio de Media de Misi\u00f3n Iglesia Bautista El Arroyo, New Jersey\n                    (The Stream Church)</p>\n                <p>&copy; <span id=\"year\"></span> Mission Baptist Church: The Stream. Todos los derechos reservados.</p>\n            </div>\n\n            <!-- Designer Watermark -->\n            <div style=\"text-align: center; padding: 30px 0 20px; margin-top: 30px; position: relative;\">\n                <!-- Glow effect behind -->\n                <div\n                    style=\"position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 300px; height: 60px; background: radial-gradient(ellipse, rgba(34, 197, 94, 0.15) 0%, transparent 70%); filter: blur(20px); pointer-events: none;\">\n                </div>\n\n                <!-- Main badge container -->\n                <div style=\"display: inline-flex; align-items: center; gap: 12px; padding: 14px 28px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05)); backdrop-filter: blur(10px); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 50px; box-shadow: 0 4px 30px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255,255,255,0.1); position: relative; overflow: hidden; transition: all 0.3s ease; cursor: default;\"\n                    onmouseover=\"this.style.transform='translateY(-2px) scale(1.02)'; this.style.boxShadow='0 8px 40px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'\"\n                    onmouseout=\"this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 4px 30px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'\">\n\n                    <!-- Animated shine effect -->\n                    <div\n                        style=\"position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); animation: shine 3s infinite;\">\n                    </div>\n\n                    <!-- Shield icon with pulse -->\n                    <div style=\"position: relative;\">\n                        <div\n                            style=\"position: absolute; inset: -4px; background: rgba(34, 197, 94, 0.4); border-radius: 50%; filter: blur(8px); animation: pulse-glow 2s ease-in-out infinite;\">\n                        </div>\n                        <i data-lucide=\"shield-check\"\n                            style=\"width: 22px; height: 22px; color: #22c55e; position: relative; filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6));\"></i>\n                    </div>\n\n                    <!-- Text -->\n                    <span\n                        style=\"color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 400; letter-spacing: 0.5px;\">Website\n                        designed by</span>\n                    <strong\n                        style=\"background: linear-gradient(135deg, #22c55e, #4ade80); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; font-size: 14px; letter-spacing: 0.5px;\">Santos\n                        Soriano</strong>\n                </div>\n            </div>\n\n            <style>\n                @keyframes shine {\n                    0% {\n                        left: -100%;\n                    }\n\n                    50%,\n                    100% {\n                        left: 200%;\n                    }\n                }\n\n                @keyframes pulse-glow {\n\n                    0%,\n                    100% {\n                        opacity: 0.6;\n                        transform: scale(1);\n                    }\n\n                    50% {\n                        opacity: 1;\n                        transform: scale(1.1);\n                    }\n                }\n\n                @media (max-width: 640px) {\n                    .footer {\n                        padding-bottom: 100px !important;\n                    }\n                }\n            </style>\n\n            <div style=\"text-align: center; padding: 10px 0 20px;\">\n                <a href=\"https://www.interserver.net\" target=\"_blank\" rel=\"noopener noreferrer\"\n                    style=\"display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; text-decoration: none; transition: all 0.3s ease;\"\n                    onmouseover=\"this.style.background='rgba(255, 255, 255, 0.1)'; this.style.transform='translateY(-1px)'\"\n                    onmouseout=\"this.style.background='rgba(255, 255, 255, 0.05)'; this.style.transform='translateY(0)'\">\n                    <span style=\"color: rgba(255, 255, 255, 0.5); font-size: 11px; font-weight: 400;\">Powered by</span>\n                    <span style=\"color: #60a5fa; font-size: 11px; font-weight: 600;\">InterServer</span>\n                </a>\n            </div>\n        </div>\n    </footer>\n";

document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById("nav-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (navPlaceholder) {
        navPlaceholder.outerHTML = menuHTML;
        // active state
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-link, .dropdown-item');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }

    // We defer init slightly to allow DOM to recalculate
    setTimeout(initComponents, 50);
});

function initComponents() {
    if (window.lucide) {
        lucide.createIcons();
    }

    const yearElem = document.getElementById('year');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuIcon = document.getElementById('menuIcon');
    let isMenuOpen = false;

    function updateMenuIcon(isOpen) {
        if (!mobileMenuBtn) return;
        mobileMenuBtn.innerHTML = '';
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        newIcon.setAttribute('style', 'width: 20px; height: 20px; color: white;');
        newIcon.id = 'menuIcon';
        mobileMenuBtn.appendChild(newIcon);
        menuIcon = newIcon;

        if (isOpen) {
            mobileMenuBtn.classList.add('active');
        } else {
            mobileMenuBtn.classList.remove('active');
        }
        if (window.lucide) {
            lucide.createIcons();
        }
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('active', isMenuOpen);
            updateMenuIcon(isMenuOpen);
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.classList.contains('mobile-dropdown-toggle')) return;
                isMenuOpen = false;
                mobileMenu.classList.remove('active');
                updateMenuIcon(false);
            });
        });

        const mobileMenuInner = mobileMenu.querySelector('.mobile-menu-inner');
        if (mobileMenuInner) {
            mobileMenuInner.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                isMenuOpen = false;
                mobileMenu.classList.remove('active');
                updateMenuIcon(false);
            }
        });
    }

    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        window.dispatchEvent(new Event('scroll'));
    }

    window.toggleMobileDropdown = function (event) {
        event.preventDefault();
        const toggle = event.currentTarget;
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu && dropdownMenu.classList.contains('mobile-dropdown-menu')) {
            dropdownMenu.classList.toggle('active');
            const icon = toggle.querySelector('i');
            if (icon) {
                if (dropdownMenu.classList.contains('active')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        }
    };

    // Scroll reveal observer for dynamically injected elements like the footer
    const globalRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        globalRevealObserver.observe(el);
    });
}
