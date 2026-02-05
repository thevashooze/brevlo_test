console.log("👻 Brevlo: Vercel Ghost Mode Activated");

// 1. CSS Injection: Error messages ko force-hide karna
const style = document.createElement('style');
style.innerHTML = `
  /* Framer ke error box ko chupa do */
  .framer-form-error, 
  div[data-framer-component-type="Form"] ~ div {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
  }
`;
document.head.appendChild(style);

// 2. Main Logic
document.addEventListener("DOMContentLoaded", () => {
    
    // --- SETTINGS (Is email par leads aayengi) ---
    const MY_EMAIL = "opeditor5@gmail.com"; 
    // ---------------------------------------------

    const finder = setInterval(() => {
        // Button dhoondo (Text match karke)
        const targets = document.querySelectorAll('button, a, div[role="button"]');
        let targetBtn = null;

        for (let btn of targets) {
            if (btn.innerText && btn.innerText.toLowerCase().includes("work together")) {
                targetBtn = btn;
                break;
            }
        }

        if (targetBtn) {
            clearInterval(finder);
            console.log("🎯 Target Found. Applying Logic.");

            // A. CLONE & REPLACE (Framer ka dimaag nikal do)
            // Isse Framer ke saare event listeners hat jayenge
            const newBtn = targetBtn.cloneNode(true);
            targetBtn.parentNode.replaceChild(newBtn, targetBtn);

            // B. Visuals fix karo (Clone hone par kabhi kabhi styles hil jate hain)
            newBtn.style.cursor = "pointer";
            newBtn.style.pointerEvents = "auto";

            // C. Click Logic (FormSubmit.co)
            newBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();

                // 1. Text change "Sending..."
                const originalText = newBtn.innerText;
                newBtn.innerText = "Sending...";
                newBtn.style.opacity = "0.7";

                // 2. Data uthao
                const name = document.querySelector('input[type="text"]')?.value || "No Name";
                const email = document.querySelector('input[type="email"]')?.value || "No Email";
                const msg = document.querySelector('textarea')?.value || "No Message";

                // 3. Invisible Form banao aur submit karo
                const form = document.createElement('form');
                form.action = `https://formsubmit.co/${MY_EMAIL}`;
                form.method = "POST";
                
                // Hidden Inputs
                const i1 = document.createElement('input'); i1.type="hidden"; i1.name="Name"; i1.value=name;
                const i2 = document.createElement('input'); i2.type="hidden"; i2.name="Email"; i2.value=email;
                const i3 = document.createElement('input'); i3.type="hidden"; i3.name="Message"; i3.value=msg;
                
                // Settings
                const i4 = document.createElement('input'); i4.type="hidden"; i4.name="_next"; 
                // Redirect wapas Thank You page par
                i4.value = window.location.origin + "/thank-you"; 
                
                const i5 = document.createElement('input'); i5.type="hidden"; i5.name="_captcha"; i5.value="false";
                const i6 = document.createElement('input'); i6.type="hidden"; i6.name="_subject"; i6.value="New Lead from Brevlo!";

                form.appendChild(i1); form.appendChild(i2); form.appendChild(i3);
                form.appendChild(i4); form.appendChild(i5); form.appendChild(i6);

                document.body.appendChild(form);
                form.submit(); // Browser ko page change karne do
            };
        }
    }, 500); // Har 500ms check karo
});
