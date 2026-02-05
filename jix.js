console.log("💀 Brevlo Lobotomy Script Loaded");

// 1. ERROR HIDER (Agar galti se 1% bhi error aaye, toh wo dikhe hi na)
const style = document.createElement('style');
style.innerHTML = `
  /* Framer Error Message ko hide karo */
  .framer-form-error, 
  div[data-framer-component-type="Form"] ~ div {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
  }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
    
    // --- SETTINGS ---
    const MY_EMAIL = "opeditor5@gmail.com"; // Yahan apni email confirm kar lena
    // ----------------

    // Button ko dhoondne ke liye loop (Framer load hone ka wait)
    const killerInterval = setInterval(() => {
        
        // Button dhoondo
        const targets = document.querySelectorAll('button, a[role="button"], div[role="button"]');
        let framerBtn = null;

        for (let btn of targets) {
            if (btn.innerText && btn.innerText.toLowerCase().includes("work together")) {
                framerBtn = btn;
                break;
            }
        }

        if (framerBtn) {
            clearInterval(killerInterval);
            console.log("🎯 Button Found. Performing Lobotomy...");

            // 2. THE LOBOTOMY (Button ka 'Submit' power cheen lo)
            // Agar ye 'submit' nahi rahega, toh Framer form trigger hi nahi hoga.
            framerBtn.setAttribute("type", "button"); 

            // 3. CLONE & REPLACE (Framer ke connection kaat do)
            const cleanBtn = framerBtn.cloneNode(true);
            framerBtn.parentNode.replaceChild(cleanBtn, framerBtn);

            // 4. APNA LOGIC LAGAO (FormSubmit.co)
            cleanBtn.style.cursor = "pointer";
            cleanBtn.style.opacity = "1";
            
            cleanBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Visual Feedback
                cleanBtn.innerText = "Sending...";
                cleanBtn.style.opacity = "0.7";

                // --- DATA COLLECTION ---
                // Page se inputs dhoondo
                const nameVal = document.querySelector('input[type="text"]')?.value || "No Name";
                const emailVal = document.querySelector('input[type="email"]')?.value || "No Email";
                const msgVal = document.querySelector('textarea')?.value || "No Message";

                // --- CREATE INVISIBLE FORM FOR FORMSUBMIT ---
                // Hum JS se ek naya form banayenge aur use submit karenge
                const form = document.createElement('form');
                form.action = `https://formsubmit.co/${MY_EMAIL}`;
                form.method = "POST";
                form.style.display = "none";

                // Hidden Inputs
                const inputName = document.createElement('input');
                inputName.type = "hidden"; inputName.name = "name"; inputName.value = nameVal;
                
                const inputEmail = document.createElement('input');
                inputEmail.type = "hidden"; inputEmail.name = "email"; inputEmail.value = emailVal;
                
                const inputMsg = document.createElement('input');
                inputMsg.type = "hidden"; inputMsg.name = "message"; inputMsg.value = msgVal;

                // Settings (Redirect & Subject)
                const inputRedirect = document.createElement('input');
                inputRedirect.type = "hidden"; inputRedirect.name = "_next"; 
                inputRedirect.value = "https://brevlomedia.com/thank-you"; // Tera thank you page

                const inputSubject = document.createElement('input');
                inputSubject.type = "hidden"; inputSubject.name = "_subject"; 
                inputSubject.value = "New Lead from Brevlo Website!";

                const inputCaptcha = document.createElement('input');
                inputCaptcha.type = "hidden"; inputCaptcha.name = "_captcha"; 
                inputCaptcha.value = "false";

                // Append everything
                form.appendChild(inputName);
                form.appendChild(inputEmail);
                form.appendChild(inputMsg);
                form.appendChild(inputRedirect);
                form.appendChild(inputSubject);
                form.appendChild(inputCaptcha);

                document.body.appendChild(form);
                
                // --- FIRE! ---
                form.submit(); 
            };
            
            console.log("✅ Button is now under our control.");
        }
    }, 500); // Check every 500ms
});
