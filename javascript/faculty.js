const iframe = document.getElementById('myIframe'); // Replace 'myIframe' with the ID of your iframe

if (iframe) {
    iframe.onload = () => {
        // Code to be executed after the iframe loads
        // Accessing frameElement through contentWindow
        if (iframe.contentWindow && iframe.contentWindow.window.frameElement) { 
            iframe.contentWindow.window.frameElement.dispatchEvent(o);
        } else {
            console.error("Frame element not available even after loading.");
        }
    };
} else {
  console.error("Iframe element not found.");
}

// Tambahkan target="_blank" ke semua elemen <a>
document.querySelectorAll('.faculty-container a').forEach(link => {
    link.setAttribute('target', '_blank');
});
  