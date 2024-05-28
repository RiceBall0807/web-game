const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

// 儲存選擇
let choiceResult = {};

// 選項資料
const gameData = {
    start: {
        key: "start",
        text: "You find yourself in a dark forest. What do you do?",
        choices: [
            { text: "Look around", next: "look_around" },
            { text: "Walk forward", next: "walk_forward" }
        ]
    },
    look_around: {
        key: "look_around",
        text: "You see trees all around and a path leading forward.",
        choices: [
            { text: "Take the path", next: "walk_forward" },
            { text: "Climb a tree", next: "climb_tree" }
        ]
    },
    walk_forward: {
        key: "walk_forward",
        text: "You walk forward and encounter a wild animal.",
        choices: [
            { text: "Run away", next: "run_away" },
            { text: "Fight the animal", next: "fight_animal" }
        ]
    },
    climb_tree: {
        key: "climb_tree",
        text: "You climb a tree and get a better view of the surroundings.",
        choices: [
            { text: "Climb down", next: "look_around" },
            { text: "Stay up", next: "stay_up_tree" }
        ]
    },
    run_away: {
        key: "run_away",
        text: "You run away safely. You are back where you started.",
        choices: [
            { text: "Look around", next: "look_around" },
            { text: "Walk forward", next: "walk_forward" }
        ]
    },
    fight_animal: {
        key: "fight_animal",
        text: "You fight the animal and win. You are safe for now.",
        choices: [
            { text: "Look around", next: "look_around" },
            { text: "Walk forward", next: "walk_forward" }
        ]
    },
    stay_up_tree: {
        key: "stay_up_tree",
        text: "You stay up in the tree and see a beautiful sunset.",
        choices: [
            { text: "Climb down", next: "look_around" }
        ]
    }
};

function startGame() {
    showStory(gameData.start);
}

function showStory(storyNode) {
    storyElement.innerText = storyNode.text;
    choicesElement.innerHTML = '';
    storyNode.choices.forEach(choice => {
        const button = document.createElement('a');
        button.innerText = choice.text;
        button.href = '#';
        button.classList.add('choice');
        button.onclick = () => {
            // 保存选择结果到 choiceResult 对象中
            choiceResult[storyNode.key] = choice.text;
            showStory(gameData[choice.next]);
            showChosen();
        };
        choicesElement.appendChild(button);
    });
}

function showChosen(storyNode) {
    const choiceText = document.createElement('p');
    choiceText.innerText = storyNode.choices.map(choice => choice.text).join(' | ');
    document.getElementById('choices-container').innerHTML = '';
    document.getElementById('choices-container').appendChild(choiceText);
}

startGame();
