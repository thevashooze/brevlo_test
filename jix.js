console.log("🚀 Brevlo: God Mode (Smart Link) Activated.");

window.addEventListener('load', () => {
    const hunter = setInterval(() => {
        const framerForm = document.querySelector('form');
        
        if (framerForm) {
            console.log("🎯 Framer Form Found. Replacing...");
            clearInterval(hunter);

            const parent = framerForm.parentElement;
            framerForm.remove(); 

            // --- SMART LINK DETECTION ---
            // Ye automatic pata karega ki abhi site 'vercel.app' pe hai ya 'com' pe
            const currentSite = window.location.origin; 
            const successPage = `${currentSite}/thank-you`; 

            // Create Custom Form
            const myForm = document.createElement('form');
            myForm.action = "https://formsubmit.co/vtoog2008@gmail.com";
            myForm.method = "POST";
            
            myForm.style.cssText = `
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 100%;
                height: 100%;
                opacity: 0;
                animation: fadeIn 0.5s forwards;
            `;

            // HTML inject karte waqt 'successPage' variable use karenge
            myForm.innerHTML = `
                <input type="hidden" name="_next" value="${successPage}">
                
                <input type="hidden" name="_subject" value="🔥 New Lead from Brevlo Site!">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_template" value="table">

                <input type="text" name="Name" placeholder="Name" required 
                    style="width: 100%; padding: 16px; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; color: white; font-family: 'Inter', sans-serif; font-size: 16px; outline: none; transition: border 0.3s;">
                
                <input type="email" name="Email" placeholder="Email" required 
                    style="width: 100%; padding: 16px; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; color: white; font-family: 'Inter', sans-serif; font-size: 16px; outline: none; transition: border 0.3s;">
                
                <textarea name="Message" placeholder="Message" rows="4" required 
                    style="width: 100%; padding: 16px; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; color: white; font-family: 'Inter', sans-serif; font-size: 16px; outline: none; resize: vertical; transition: border 0.3s;"></textarea>

                <button type="submit" 
                    style="width: 100%; padding: 16px; background: white; color: black; border: none; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; cursor: pointer; transition: opacity 0.2s;">
                    Let's work together!
                </button>
            `;

            // Hover effects logic
            const inputs = myForm.querySelectorAll('input, textarea');
            inputs.forEach(el => {
                el.onfocus = () => el.style.borderColor = "#666";
                el.onblur = () => el.style.borderColor = "#333";
            });
            const btn = myForm.querySelector('button');
            btn.onmouseover = () => btn.style.opacity = "0.8";
            btn.onmouseout = () => btn.style.opacity = "1";

            parent.appendChild(myForm);

            // Animation CSS
            const styleSheet = document.createElement("style");
            styleSheet.innerText = `@keyframes fadeIn { to { opacity: 1; } }`;
            document.head.appendChild(styleSheet);

            console.log(`✅ Form Ready. Redirect will go to: ${successPage}`);
        }
    }, 100);
});
