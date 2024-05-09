
function starter()
{
const playerNumLabel = document.createElement("label");
playerNumLabel.textContent = "Choose the number of players";
document.body.appendChild(playerNumLabel);

const playerNum = document.createElement("input");
document.body.appendChild(playerNum);

const confirmButton = document.createElement("button");
confirmButton.textContent = "Confirm";
document.body.appendChild(confirmButton);

confirmButton.addEventListener("click", () => {
    const numOfPlayers = playerNum.value;

    const addPlayerGrid = document.createElement("div");
    addPlayerGrid.classList.add("addPlayerGrid");
    document.body.appendChild(addPlayerGrid);

    for (i = 0; i < numOfPlayers ; i++)
    {
        const playerNameLabel = document.createElement("label");
        playerNameLabel.textContent = "Player name";
        playerNameLabel.classList.add("playerInputLabel");
        playerNameLabel.setAttribute('for', 'PlayerNameInput'+(i+1));
        addPlayerGrid.appendChild(playerNameLabel);
        
        const playerName = document.createElement("input");
        playerName.classList.add("playerNameInput");
        playerName.setAttribute('id', 'PlayerNameInput'+(i+1));
        addPlayerGrid.appendChild(playerName);
    } // end of for

    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    addPlayerGrid.appendChild(startButton);
    
    // addPlayers(numOfPlayers);
});
}

function createPlayer() {
    const player =
    {
        id: null,
        name: "",
        life: 100,
        mana: 100,
        actions: 2,
    };
    return player;
} // end of createPlayer

function gameround(){       
    // game = gameround() must be created in order to manipulate it with get and switch
    let activePlayer = "Player 1";
    
    
    const switchActivePlayer = () => {
        activePlayer = activePlayer === "Player 1" ? "Player 2" : "Player 1";
    };
    
    const getActivePlayer = () => {
        return activePlayer;
    };
    
    return { getActivePlayer, switchActivePlayer, };
} // end of gameround

function addPlayers( numOfPlayers){
    const playersBox = document.createElement("div");
    playersBox.classList.add("playersBox");
    document.body.appendChild(playersBox);
    
    for (let i = 0; i < numOfPlayers; i++) {
        
        const playerList ={}; //playerList object hidden inside FOR, FIX IT ACCORDING TO VIDEO 22
        playerList[i] = createPlayer();
        playerList[i].id = i+1;
        console.log(playerList[i]);
         //// give color etc. to each player
        
        const player = document.createElement("div");
        player.classList.add("player");
        playersBox.appendChild(player);
        
        const playerName = document.createElement('span');
        playerName.classList.add("playerName");
        playerName.textContent = "Player "+(i+1);
        player.appendChild(playerName);
        playerList[i].name = player.textContent;
        
        const playerHp = document.createElement("div");
        playerHp.classList.add("playerHp");
        player.appendChild(playerHp);
        playerHp.textContent = playerList[i].life;
        
        const playerMana = document.createElement("div");
        playerMana.classList.add("playerMana");
        playerMana.textContent = playerList[i].mana;
        player.appendChild(playerMana);
        
        const playerActions = document.createElement("div");
        playerActions.textContent = playerList[i].actions;
        playerActions.classList.add("playerActions");
        player.appendChild(playerActions);
        
        const blastButton = document.createElement("button");
        blastButton.textContent = "Blast"
        blastButton.classList.add("skillButton");
        player.appendChild(blastButton);
        
        const healButton = document.createElement("button");
        healButton.textContent = "Heal"
        healButton.classList.add("skillButton");
        player.appendChild(healButton);
        
        const replenishButton = document.createElement("button");
        replenishButton.textContent = "Replenish"
        replenishButton.classList.add("skillButton");
        player.appendChild(replenishButton);

/////////returns a console status////////////////////////////////////////
        const statusButton = document.createElement("button");
        statusButton.textContent = "Status"
        statusButton.classList.add("skillButton");
        player.appendChild(statusButton);

        function statusSkill () {
            console.log(playerList[i]);
        };

        statusButton.addEventListener("click", function(){
        statusSkill( playerList[i] , playerList[i]);
        });
/////////////////////////////////////////////////////////////////////////        

    function blastSkill (playerUserId , playerTargetId ) {
            playerTargetId.life = playerTargetId.life - 15;
            playerUserId.mana = playerUserId.mana - 7;
            playerHp.textContent = playerList[i].life;
            playerMana.textContent = playerList[i].mana;
        };
        
    function healSkill (playerUser, playerTarget) {
            playerTarget.life = playerTarget.life + 20;
            playerUser.mana = playerUser.mana - 5;
            playerHp.textContent = playerList[i].life;
            playerMana.textContent = playerList[i].mana;
        };
        
    function replenishSkill (playerUser, playerTarget) {
            playerTarget.mana = playerTarget.mana + 10;
            playerMana.textContent = playerList[i].mana;
        };

blastButton.addEventListener("click", function(){
blastSkill( playerList[i] , playerList[i]);
});

healButton.addEventListener("click", function(){
healSkill( playerList[i] , playerList[i]);
});

replenishButton.addEventListener("click", function(){
replenishSkill( playerList[i] , playerList[i]);
});
    }// end of for
}; // end of addPlayers


addPlayers(2);