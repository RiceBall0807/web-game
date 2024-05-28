const forestNode = {
    text: "You are in the forest. What do you want to do next?",
    choices: [
        { text: "Continue forward", next: "continue_forward" },
        { text: "Turn back", next: "turn_back" }
    ]
};

function showForest() {
    showStory(forestNode);
}
