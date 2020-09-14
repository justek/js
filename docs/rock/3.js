
        const message = document.querySelector('.message');
        const score = document.querySelector('.score');
        const buttons = document.querySelectorAll('button');
        const winnerScores = [0,0];

        for ( let i = 0 ; i < buttons.length ; i++){
            buttons[i].addEventListener('click', playGame);
        }

        function playGame(e){

            let playerSelection = e.target.name;

            let computerSelection = Math.random();
            if (computerSelection < .34){
                computerSelection = 'kamien';
            } else if (computerSelection <= .67){
                computerSelection = 'papier';
            } else {
                computerSelection = 'nozyczki';
            }

            let result = checkWinner(playerSelection, computerSelection);

            if (result === 'Gracz'){
                result += ' wygrywa!';
                winnerScores[0]++;
            }

            if (result === 'Komputer'){
                result += ' wygrywa!';
                winnerScores[1]++;
            }

            if (result === 'Remis'){
                result += '.'
            }

            score.innerHTML = 'Gracz: [ ' + winnerScores[0]+ ' ] Komputer: [ ' + winnerScores[1] + ' ]';
            messenger('Gracz: <strong>' + playerSelection + '</strong> VS Komputer: <strong>' + computerSelection + '</strong><br>' + result);
        }

        function messenger(selectionMessage){
            message.innerHTML = selectionMessage;
        }

        function checkWinner(player, computer){
            if (player === computer){
                return 'Remis';
            }

            if (player === 'kamien'){
                if(computer === 'papier'){
                    return 'Komputer';
                } else {
                    return 'Gracz';
                }
            }

            if (player === 'papier'){
                if (computer === 'nozyczki'){
                    return 'Komputer';
                } else {
                    return 'Gracz';
                }
            }

            if (player === 'nozyczki'){
                if (computer === 'kamien'){
                    return 'Komputer';
                } else {
                    return 'Gracz';
                }
            }
        }