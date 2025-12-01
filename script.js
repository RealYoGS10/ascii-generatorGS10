function generateASCII() {
    const text = document.getElementById("textInput").value.trim();
    const font = document.getElementById("fontSelect").value;
    const outputDiv = document.getElementById("asciiOutput");
    
    if (!text) {
        outputDiv.textContent = "Please enter some text!";
        return;
    }

    // Generate multiple examples with slight variations
    const fonts = ["Standard", "Slant", "Ghost", "Big", "Block"];
    outputDiv.textContent = ""; // Clear previous output

    fonts.forEach(f => {
        figlet.text(text, { font: f }, function(err, data) {
            if (err) {
                console.log('Something went wrong: ' + err);
                return;
            }
            const pre = document.createElement("pre");
            pre.textContent = data;
            outputDiv.appendChild(pre);
        });
    });
}
