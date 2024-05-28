function startGame() {
    showStart();
}

function showStory(storyNode) {
    storyElement.innerText = storyNode.text;
    choicesElement.innerHTML = '';
    storyNode.choices.forEach(choice => {
        const button = document.createElement('a');
        button.innerText = choice.text;
        button.href = '#';
        button.classList.add('choice');
        button.onclick = () => showStory(gameData[choice.next]);
        choicesElement.appendChild(button);
    });
}

function loadScript(scriptName, callback) {
    const script = document.createElement('script');
    script.src = scriptName + '.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function showStart() {
    loadScript('start', startGame);
}

function showForest() {
    loadScript('forest', startForest);
}

// 其他功能函数...

// 启动游戏
startGame();