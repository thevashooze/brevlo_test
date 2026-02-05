console.log("🛠️ Brevlo: Starting Form Replacement Operation...");

window.addEventListener('load', () => {
    // Thoda wait karo taaki Framer apna form load kar le
    setTimeout(() => {
        // 1. Framer ka Form dhoondo
        const framerForm = document.querySelector('form');
        
        if (framerForm) {
            // Uska parent dhoondo taaki hum wahi replace kar sakein
            const container = framerForm.parentElement;
            
            // 2. Framer Form ko DELETE karo
            framerForm.remove();
            console.log("🗑️ Framer Form Deleted.");

            // 3. Apna CUSTOM Form banao (Dark Theme Style)
            const myForm = document.createElement('form');
            myForm.action = "https://formsubmit.co/opeditor5@gmail.com";
            myForm.method = "POST";
            myForm.style.display = "flex";
            myForm.style.flexDirection = "column";
            myForm.style.gap = "15px";
            myForm.style.width = "100%";
            myForm.style.maxWidth = "100%"; // Container ki width le lega

            // --- SETTINGS ---
            // Redirect link (Apna Vercel wala link daal dena agar domain connected nahi hai)
            const successUrl = window.location.origin + "/thank-you";
            
            myForm.innerHTML = `
                <input type="hidden" name="_next" value="${successUrl}">
                <input type="hidden" name="_subject" value="New Lead from Brevlo Website!">
                <input type="hidden" name="_captcha" value="false">

                <input type="text" name="name" placeholder="Name" required 
                    style="padding: 16px; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; color: white; font-family: 'Inter', sans-serif; font-size: 16px; outline: none;">
                
                <input type="email" name="email" placeholder="Email" required 
                    style="padding: 16px; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; color: white; font-family: 'Inter', sans-serif; font-size: 16px; outline: none;">
                
                <textarea name="message" placeholder="Message" rows="4" required 
                    style="padding: 16px; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; color: white; font-family: 'Inter', sans-serif; font-size: 16px; outline: none; resize: none;"></textarea>

                <button type="submit" 
                    style="padding: 16px; background: white; border: none; border-radius: 12px; color: black; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; cursor: pointer; transition: opacity 0.2s;">
                    Let's work together!
                </button>
            `;

            // Hover effect for button
            const btn = myForm.querySelector('button');
            btn.onmouseover = () => btn.style.opacity = "0.8";
            btn.onmouseout = () => btn.style.opacity = "1";

            // 4. Inject karo
            container.appendChild(myForm);
            console.log("✅ Custom Form Injected Successfully.");
            
        } else {
            console.log("❌ Framer form not found to replace.");
        }
    }, 1500); // 1.5 seconds wait (adjust if needed)
});
