console.log("💀 Brevlo: Killing Framer JS on Form...");

window.addEventListener('load', () => {
    // 1 second wait karo taaki Framer poora load ho jaye
    setTimeout(() => {
        const originalForm = document.querySelector('form');
        
        if (originalForm) {
            console.log("🎯 Form Found. Performing Surgery...");

            // 1. INPUTS KO SAHI NAAM DO (Taaki Email mein data dikhe)
            const inputs = originalForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                const type = input.getAttribute('type');
                const placeholder = input.getAttribute('placeholder')?.toLowerCase() || "";
                
                // Email field pehchano
                if (type === 'email' || placeholder.includes('email')) {
                    input.setAttribute('name', 'Email');
                } 
                // Message field pehchano
                else if (input.tagName === 'TEXTAREA' || placeholder.includes('message')) {
                    input.setAttribute('name', 'Message');
                } 
                // Name field pehchano (Baaki bacha text input)
                else {
                    input.setAttribute('name', 'Name');
                }
                
                // Styling retain karo par pointer events on karo
                input.style.pointerEvents = "auto";
            });

            // 2. CLONE THE FORM (Ye step sabse zaroori hai)
            // Clone karte hi React ke saare event listeners gayab ho jate hain.
            // Ab ye bas ek dead HTML element hai jo dikhta Framer jaisa hai.
            const newForm = originalForm.cloneNode(true);

            // 3. CONFIGURE FORMSUBMIT.CO
            newForm.action = "https://formsubmit.co/vtoog2008@gmail.com";
            newForm.method = "POST";
            newForm.removeAttribute('data-framer-component-type'); // Framer ke nishaan mita do

            // 4. ADD HIDDEN SETTINGS (Redirect & Subject)
            const settings = document.createElement('div');
            settings.innerHTML = `
                <input type="hidden" name="_next" value="https://brevlomedia.com/thank-you">
                <input type="hidden" name="_subject" value="🚀 New Lead from Brevlo!">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_template" value="table"> 
            `;
            newForm.prepend(settings);

            // 5. BUTTON LOGIC
            // Framer ka button kabhi kabhi 'div' hota hai, use asli submit button banao
            const btn = newForm.querySelector('button, input[type="submit"], div[role="button"], a');
            if (btn) {
                // Button ko clean karo
                const newBtn = document.createElement('button');
                
                // Copy styles from original button to new button
                newBtn.className = btn.className;
                newBtn.style.cssText = btn.style.cssText;
                newBtn.style.cursor = "pointer";
                newBtn.style.width = "100%"; // Ensure width matches
                newBtn.innerHTML = btn.innerHTML || "Let's Work Together"; // Keep text
                
                // Replace old button with real button
                btn.parentNode.replaceChild(newBtn, btn);
            }

            // 6. SWAP (Asli Surgery)
            // Framer wala form uda do, apna 'Frankenstein' form laga do
            originalForm.parentNode.replaceChild(newForm, originalForm);
            
            console.log("✅ Surgery Successful. Framer disconnected. Form is pure HTML now.");

        } else {
            console.log("❌ Form not found yet.");
        }
    }, 2000); // 2 second wait to be safe
});
