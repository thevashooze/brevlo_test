console.log("☢️ Brevlo Nuclear Fix Loaded");

// 1. CSS: Framer ke Error Message ko dikhne se pehle hi gayab kar do
const style = document.createElement('style');
style.innerHTML = `
  .framer-form-error, 
  div[data-framer-component-type="Form"] ~ div {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
  }
`;
document.head.appendChild(style);

// 2. THE INTERCEPTOR (Capture Phase)
// 'true' ka matlab hai ye event sabse pehle humein milega, Framer se bhi pehle
window.addEventListener('submit', function(e) {
    
    // Check karo ki ye wo wala form hai ya nahi
    const form = e.target;
    
    // Agar form ke andar "work together" jaisa kuch button hai ya ye main form hai
    // (Safety ke liye hum har form submit ko hijack kar rahe hain kyunki site pe ek hi form hai)
    
    // STOP EVERYTHING! Framer ko pata mat chalne do.
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    console.log("🛑 Framer Submission Blocked. Taking over.");

    // --- DATA NIKALO ---
    const nameInput = form.querySelector('input[name="name"], input[type="text"]');
    const emailInput = form.querySelector('input[name="email"], input[type="email"]');
    const msgInput = form.querySelector('textarea');

    const nameVal = nameInput ? nameInput.value : "Unknown";
    const emailVal = emailInput ? emailInput.value : "Unknown";
    const msgVal = msgInput ? msgInput.value : "Unknown";

    // --- BUTTON KO "SENDING" KARO ---
    const btn = form.querySelector('button, input[type="submit"], div[role="button"]');
    if (btn) {
        btn.innerText = "Sending...";
        btn.style.opacity = "0.7";
    }

    // --- CREATE NEW HIDDEN FORM (FormSubmit.co) ---
    // Hum naya form banakar submit karenge taaki Framer ka validation beech mein na aaye
    const newForm = document.createElement('form');
    newForm.action = "https://formsubmit.co/opeditor5@gmail.com";
    newForm.method = "POST";
    newForm.style.display = "none";

    // Data Fields
    const i1 = document.createElement('input'); i1.type="hidden"; i1.name="Name"; i1.value=nameVal;
    const i2 = document.createElement('input'); i2.type="hidden"; i2.name="Email"; i2.value=emailVal;
    const i3 = document.createElement('input'); i3.type="hidden"; i3.name="Message"; i3.value=msgVal;
    
    // Settings (Redirect to Thank You)
    const i4 = document.createElement('input'); i4.type="hidden"; i4.name="_next"; 
    i4.value = "https://brevlomedia.com/thank-you"; // Vercel wala link bhi daal sakta hai yahan agar domain connect nahi hai
    
    const i5 = document.createElement('input'); i5.type="hidden"; i5.name="_subject"; i5.value="New Lead from Brevlo!";
    const i6 = document.createElement('input'); i6.type="hidden"; i6.name="_captcha"; i6.value="false";

    newForm.appendChild(i1); newForm.appendChild(i2); newForm.appendChild(i3);
    newForm.appendChild(i4); newForm.appendChild(i5); newForm.appendChild(i6);

    document.body.appendChild(newForm);
    
    // FIRE!
    newForm.submit();

}, true); // <--- YE 'true' SABSE ZAROORI HAI
