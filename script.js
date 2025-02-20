async function getAIResponse() {
    const userInput = document.getElementById("userInput").value;
    const responseElement = document.getElementById("response");

    responseElement.innerText = "Loading...";

    const response = await fetch("https://api-inference.huggingface.co/models/YOUR_MODEL_NAME", {
        method: "POST",
        headers: {
            "Authorization": "Bearer YOUR_HUGGINGFACE_API_KEY",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: userInput })
    });

    const result = await response.json();
    responseElement.innerText = result[0]?.generated_text || "No response.";
}
