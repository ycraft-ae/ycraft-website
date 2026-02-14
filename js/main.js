function showPage(id) {
    document.getElementById('pg-home').style.display = 'none';
    document.querySelectorAll('.detail-page').forEach(function(p) { p.style.display = 'none'; });
    document.getElementById('pg-' + id).style.display = 'block';
    document.getElementById('navHome').style.display = 'none';
    document.getElementById('navDetail').style.display = 'flex';
    var info = {
        struct: { t:'STRUCT v1.2.0', c:'Buy — $29', l:'https://ycraft.gumroad.com/l/struct' },
        textflow: { t:'TextLab Pro v1.0', c:'Buy — $39', l:'https://ycraft.gumroad.com/l/textlab-pro' },
        expressionkit: { t:'ExpressionKit', c:'Coming Soon', l:'https://ycraft.gumroad.com/l/expressionkit' },
        install: { t:'Installation Guide', c:'Back to Home', l:'javascript:goHome()' }
    };
    var p = info[id];
    document.getElementById('navDetailTitle').textContent = p.t;
    var cta = document.getElementById('navDetailCta');
    cta.textContent = p.c; cta.href = p.l;
    if (id === 'expressionkit') { cta.style.cssText = 'background:rgba(93,232,178,0.08);color:#5DE8B2;border:1px solid rgba(93,232,178,0.2);padding:8px 20px;border-radius:100px;font-weight:600;font-size:13px;text-decoration:none;'; }
    else if (id === 'install') { cta.style.cssText = 'background:rgba(0,212,255,0.08);color:#00D4FF;border:1px solid rgba(0,212,255,0.2);padding:8px 20px;border-radius:100px;font-weight:600;font-size:13px;text-decoration:none;cursor:pointer;'; cta.removeAttribute('href'); cta.onclick = goHome; }
    else { cta.style.cssText = ''; cta.onclick = null; }
    window.scrollTo(0, 0);
}
function goHome() {
    document.querySelectorAll('.detail-page').forEach(function(p) { p.style.display = 'none'; });
    document.getElementById('pg-home').style.display = 'block';
    document.getElementById('navHome').style.display = '';
    document.getElementById('navDetail').style.display = 'none';
    window.scrollTo(0, 0);
}
var nav = document.getElementById('nav');
window.addEventListener('scroll', function() { nav.classList.toggle('scrolled', window.scrollY > 50); });
var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e, i) { if (e.isIntersecting) { setTimeout(function() { e.target.classList.add('visible'); }, i * 100); obs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });

// Apple-style showcase scroll animations
// Track scroll direction
var lastScrollY = window.scrollY;
var scrollDirection = 'down';

window.addEventListener('scroll', function() {
    if (window.scrollY > lastScrollY) {
        scrollDirection = 'down';
    } else {
        scrollDirection = 'up';
    }
    lastScrollY = window.scrollY;
});

var showcaseObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // Always show when in view
            entry.target.classList.add('visible');
        } else if (scrollDirection === 'up') {
            // Only hide when scrolling UP and element is out of view
            entry.target.classList.remove('visible');
        }
        // When scrolling DOWN and out of view, keep visible (don't remove class)
    });
}, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('.d-showcase__section').forEach(function(el) { showcaseObs.observe(el); });
// Also observe product cards for homepage Apple-style animations
document.querySelectorAll('.product-card[data-direction]').forEach(function(el) { showcaseObs.observe(el); });
// ═══ Hero background — Canvas rendered glow (like Pixflow baked JPG) ═══
(function() {
    var canvas = document.getElementById('heroBgCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    
    function render() {
        var w = canvas.width = canvas.offsetWidth;
        var h = canvas.height = canvas.offsetHeight;
        
        // Base: koyu gradient
        var base = ctx.createLinearGradient(0, 0, 0, h);
        base.addColorStop(0, '#05050e');
        base.addColorStop(0.3, '#08081c');
        base.addColorStop(0.6, '#0b0920');
        base.addColorStop(1, '#07070d');
        ctx.fillStyle = base;
        ctx.fillRect(0, 0, w, h);
        
        // Glow 1: Sağ üst — büyük mor
        var g1 = ctx.createRadialGradient(w * 0.75, h * 0.25, 0, w * 0.75, h * 0.25, w * 0.45);
        g1.addColorStop(0, 'rgba(120, 100, 255, 0.18)');
        g1.addColorStop(0.4, 'rgba(100, 80, 200, 0.08)');
        g1.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, w, h);
        
        // Glow 2: Sol alt — cyan
        var g2 = ctx.createRadialGradient(w * 0.15, h * 0.7, 0, w * 0.15, h * 0.7, w * 0.4);
        g2.addColorStop(0, 'rgba(0, 180, 255, 0.12)');
        g2.addColorStop(0.5, 'rgba(0, 120, 200, 0.05)');
        g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, w, h);
        
        // Glow 3: Orta sağ — pink
        var g3 = ctx.createRadialGradient(w * 0.65, h * 0.55, 0, w * 0.65, h * 0.55, w * 0.3);
        g3.addColorStop(0, 'rgba(255, 80, 180, 0.1)');
        g3.addColorStop(0.5, 'rgba(200, 50, 150, 0.04)');
        g3.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g3;
        ctx.fillRect(0, 0, w, h);
        
        // Glow 4: Sol üst — sarı/turuncu
        var g4 = ctx.createRadialGradient(w * 0.25, h * 0.2, 0, w * 0.25, h * 0.2, w * 0.25);
        g4.addColorStop(0, 'rgba(255, 200, 80, 0.07)');
        g4.addColorStop(0.6, 'rgba(200, 150, 50, 0.03)');
        g4.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g4;
        ctx.fillRect(0, 0, w, h);
        
        // Glow 5: Panel arkası — extra mor halo
        var g5 = ctx.createRadialGradient(w * 0.72, h * 0.45, 0, w * 0.72, h * 0.45, w * 0.25);
        g5.addColorStop(0, 'rgba(130, 110, 255, 0.12)');
        g5.addColorStop(0.6, 'rgba(90, 70, 200, 0.04)');
        g5.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g5;
        ctx.fillRect(0, 0, w, h);
        
        // Grid çizgileri
        ctx.strokeStyle = 'rgba(130, 120, 255, 0.04)';
        ctx.lineWidth = 0.5;
        var gridSize = 80;
        // Sadece merkez bölgede grid çiz
        var cx = w * 0.65, cy = h * 0.45, gridR = w * 0.35;
        for (var x = 0; x < w; x += gridSize) {
            for (var y = 0; y < h; y += gridSize) {
                var dx = x - cx, dy = y - cy;
                var dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < gridR) {
                    var alpha = 0.04 * (1 - dist / gridR);
                    ctx.strokeStyle = 'rgba(130, 120, 255, ' + alpha + ')';
                    ctx.beginPath();
                    ctx.moveTo(x, 0); ctx.lineTo(x, h);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(0, y); ctx.lineTo(w, y);
                    ctx.stroke();
                }
            }
        }
        
        // Yatay ışık çizgisi
        var streak = ctx.createLinearGradient(0, 0, w, 0);
        streak.addColorStop(0, 'rgba(0,0,0,0)');
        streak.addColorStop(0.2, 'rgba(120,110,255,0.06)');
        streak.addColorStop(0.5, 'rgba(0,200,255,0.1)');
        streak.addColorStop(0.8, 'rgba(120,110,255,0.06)');
        streak.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = streak;
        ctx.fillRect(0, h * 0.44, w, 2);
        
        // Hafif noise efekti
        var imageData = ctx.getImageData(0, 0, w, h);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 16) {
            var noise = (Math.random() - 0.5) * 6;
            data[i] = Math.max(0, Math.min(255, data[i] + noise));
            data[i+1] = Math.max(0, Math.min(255, data[i+1] + noise));
            data[i+2] = Math.max(0, Math.min(255, data[i+2] + noise));
        }
        ctx.putImageData(imageData, 0, 0);
    }
    
    render();
    window.addEventListener('resize', render);
})();

// handleNotify moved to AJAX form handler
// Installation Guide Tab Switching
function showInstallTab(os) {
    document.getElementById('installWindows').style.display = os === 'windows' ? 'block' : 'none';
    document.getElementById('installMac').style.display = os === 'mac' ? 'block' : 'none';
    document.getElementById('tabWindows').classList.toggle('install-tab--active', os === 'windows');
    document.getElementById('tabMac').classList.toggle('install-tab--active', os === 'mac');
}

document.querySelectorAll('#pg-home a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        if (this.getAttribute('onclick')) return;
        e.preventDefault();
        var t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// GOOGLE FORM SUBMISSION
var GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdyzeuH6U0hPjNeqG9oCtz3qj7QFzlm4sBzsQsN_WcrF7bL8A/formResponse';
var GOOGLE_FORM_EMAIL_FIELD = 'entry.377720187';

function submitToGoogleForm(email, onSuccess, onError) {
    var formData = new FormData();
    formData.append(GOOGLE_FORM_EMAIL_FIELD, email);

    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(function() {
        // no-cors mode doesn't return response, but submission works
        if (onSuccess) onSuccess();
    }).catch(function(error) {
        if (onError) onError(error);
    });
}

// TOP BAR FORM SUBMIT
function submitTopBarEmail() {
    var email = document.getElementById('topBarEmail').value;
    var form = document.getElementById('topBarForm');
    var successMsg = document.getElementById('topBarSuccess');

    if (!email || email.indexOf('@') < 1) {
        document.getElementById('topBarEmail').style.borderColor = '#FF6AC1';
        setTimeout(function() {
            document.getElementById('topBarEmail').style.borderColor = '';
        }, 2000);
        return;
    }

    submitToGoogleForm(email, function() {
        form.style.display = 'none';
        successMsg.classList.add('show');
        setTimeout(closeTopBar, 3000);
    });
}

// CONTACT FORM SUBMIT
var CONTACT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdgcIRd0oFzsCYNITSm1pKkdp22e9tqVSzhk6XTn31L4e9esw/formResponse';
var CONTACT_EMAIL_FIELD = 'entry.1323087617';
var CONTACT_MESSAGE_FIELD = 'entry.566604381';

function submitContactForm() {
    var email = document.getElementById('contactEmail').value;
    var message = document.getElementById('contactMessage').value;
    var msg = document.getElementById('contactMsg');

    // Validation
    if (!email || email.indexOf('@') < 1) {
        msg.className = 'contact-form__msg show error';
        msg.textContent = 'Please enter a valid email address.';
        return;
    }
    if (!message || message.trim().length < 10) {
        msg.className = 'contact-form__msg show error';
        msg.textContent = 'Please write a message (at least 10 characters).';
        return;
    }

    var formData = new FormData();
    formData.append(CONTACT_EMAIL_FIELD, email);
    formData.append(CONTACT_MESSAGE_FIELD, message);

    fetch(CONTACT_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(function() {
        msg.className = 'contact-form__msg show success';
        msg.textContent = '✓ Message sent! We\'ll get back to you soon.';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactMessage').value = '';
    }).catch(function() {
        msg.className = 'contact-form__msg show error';
        msg.textContent = 'Something went wrong. Please try again.';
    });
}

// NOTIFY FORM SUBMIT (Footer)
function submitNotifyEmail() {
    var email = document.getElementById('notifyEmail').value;
    var msg = document.getElementById('notifyMsg');

    if (!email || email.indexOf('@') < 1) {
        msg.style.color = '#FF6AC1';
        msg.textContent = 'Please enter a valid email.';
        msg.style.display = 'block';
        return;
    }

    submitToGoogleForm(email, function() {
        msg.style.color = '#5DE8B2';
        msg.textContent = '✓ Thanks! We\'ll keep you posted.';
        msg.style.display = 'block';
        document.getElementById('notifyEmail').value = '';
    }, function() {
        msg.style.color = '#FF6AC1';
        msg.textContent = 'Something went wrong. Try again.';
        msg.style.display = 'block';
    });
}

function closeTopBar() {
    var topBar = document.getElementById('topBar');
    topBar.classList.add('hidden');
    localStorage.setItem('ycraft_topbar_closed', 'true');
}

// Check if top bar was closed before
(function() {
    if (localStorage.getItem('ycraft_topbar_closed') === 'true') {
        document.getElementById('topBar').classList.add('hidden');
    }
})();

/* ═══════════════════════════════════════════════════════════════
   ENHANCEMENTS - Easily removable section
   To revert: Delete everything from here to end of file
   ═══════════════════════════════════════════════════════════════ */

// 1. SCROLL PROGRESS BAR
(function() {
    var progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
})();

// 2. FLOATING PARTICLES
(function() {
    var container = document.createElement('div');
    container.className = 'particles';
    for (var i = 0; i < 6; i++) {
        var particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = -Math.random() * 20 + 's';
        container.appendChild(particle);
    }
    document.body.appendChild(container);
})();

// 3. PRODUCT CARD 3D TILT EFFECT
(function() {
    var cards = document.querySelectorAll('.product-card');
    cards.forEach(function(card) {
        var isHovering = false;
        var currentX = 0, currentY = 0;
        var targetX = 0, targetY = 0;
        var isAnimating = false;

        function animate() {
            // Lerp (smooth interpolation)
            currentX += (targetX - currentX) * 0.03;
            currentY += (targetY - currentY) * 0.03;

            card.style.transform = 'perspective(1000px) rotateX(' + currentY + 'deg) rotateY(' + currentX + 'deg) scale3d(1.005, 1.005, 1.005)';

            if (isHovering || Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
                requestAnimationFrame(animate);
            } else {
                isAnimating = false;
                card.style.transform = '';
            }
        }

        card.addEventListener('mouseenter', function() {
            isHovering = true;
            card.classList.add('tilt');
            if (!isAnimating) {
                isAnimating = true;
                animate();
            }
        });

        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            targetX = (centerX - x) / 200;
            targetY = (y - centerY) / 200;
        });

        card.addEventListener('mouseleave', function() {
            isHovering = false;
            targetX = 0;
            targetY = 0;
            card.classList.remove('tilt');
        });
    });
})();

// 4. STATS COUNTER ANIMATION
(function() {
    var statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('counted');
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stats__item').forEach(function(item) {
        statsObserver.observe(item);
    });
})();
