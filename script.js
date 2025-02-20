async function getAIResponse() {
    const userInput = document.getElementById("userInput").value;
    const responseElement = document.getElementById("response");

    responseElement.innerText = "Loading...";

    const response = await fetch("https://api-inference.huggingface.co/models/braxtongough/HandyAI", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: userInput })
    });

    const result = await response.json();
    responseElement.innerText = result[0]?.generated_text || "No response.";
}
