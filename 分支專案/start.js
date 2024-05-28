const startNode = {
    text: "You find yourself in a dark forest. What do you do?",
    choices: [
        { text: "Look around", next: "look_around" },
        { text: "Walk forward", next: "walk_forward" }
    ]
};

function startGame() {
    showStory(startNode);
}
