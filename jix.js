console.log("🧟 Brevlo Zombie Mode: Activating...");

window.addEventListener('load', () => {
    const checkInterval = setInterval(() => {
        const originalForm = document.querySelector('form');
        
        if (originalForm) {
            clearInterval(checkInterval);
            console.log("🎯 Form Detected. Disconnecting Framer...");

            // 1. FORM KI EXACT COPY BANAO (Deep Clone)
            // Clone banane se React/Framer ke saare "Event Listeners" toot jate hain.
            const zombieForm = originalForm.cloneNode(true);

            // 2. PURANE FORM KO REPLACE KARO
            originalForm.parentNode.replaceChild(zombieForm, originalForm);
            console.log("✅ Framer Brain Removed. Form is now independent.");

            // 3. AB NAYE FORM PAR APNA CONTROL LAGAO
            zombieForm.action = "https://formsubmit.co/opeditor5@gmail.com";
            zombieForm.method = "POST";

            // 4. HIDDEN SETTINGS INJECT KARO (Redirect, Subject)
            // Hum HTML string inject kar rahe hain taaki sure rahein ki ye elements hain
            const settingsHTML = `
                <input type="hidden" name="_next" value="https://brevlomedia.com/thank-you">
                <input type="hidden" name="_subject" value="🔥 New Lead from Brevlo Site">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_template" value="table">
            `;
            zombieForm.insertAdjacentHTML('afterbegin', settingsHTML);

            // 5. INPUTS KO NAAM DO (Data Capture Fix)
            // Framer inputs par kabhi-kabhi 'name' attribute nahi hota, isliye hum manually set karenge
            const inputs = zombieForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input.type === 'email' || (input.placeholder && input.placeholder.toLowerCase().includes('email'))) {
                    input.name = "email";
                } else if (input.tagName === 'TEXTAREA' || (input.placeholder && input.placeholder.toLowerCase().includes('message'))) {
                    input.name = "message";
                } else if (input.type === 'text') {
                    input.name = "name";
                }
            });

            // 6. SUBMIT BUTTON DHOONDO AUR CLICK LOGIC LAGAO
            // (Button bhi clone ho chuka hai, toh Framer ka error nahi aayega)
            const submitBtn = zombieForm.querySelector('input[type="submit"], button, div[role="button"]');
            
            if (submitBtn) {
                // Agar button 'div' hai (Framer aksar div use karta hai), toh use clickable banao
                submitBtn.style.cursor = "pointer";
                
                submitBtn.addEventListener('click', (e) => {
                    // Agar ye asli button nahi hai (div hai), toh form ko manually submit karo
                    if (submitBtn.tagName !== "BUTTON" && submitBtn.type !== "submit") {
                        zombieForm.requestSubmit(); // Modern browsers
                    }
                    // Visual feedback
                    submitBtn.innerText = "Sending...";
                    submitBtn.style.opacity = "0.7";
                });
            }

        }
    }, 500); // Check every 500ms
});
