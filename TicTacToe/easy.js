var b1,b2,b3,b4,b5,b6,b7,b8,b9,rand;
rand = Math.random();
var valid;
function inserter(event) {
    if(event.target.innerHTML === "") {
        event.target.innerHTML = "O";
        setTimeout(score , 300); 
        setTimeout(pcMarker , 400);
    } 
}

function pcMarker() {
     valid = false ;
     while(valid == false) {
     b1=document.getElementById('B1');
     b2=document.getElementById('B2');
     b3=document.getElementById('B3');
     b4=document.getElementById('B4');
     b5=document.getElementById('B5');
     b6=document.getElementById('B6');
     b7=document.getElementById('B7');
     b8=document.getElementById('B8');
     b9=document.getElementById('B9');
        if((rand < 0.11 && rand > 0) && (b1.innerHTML === "")) {
            b1.innerHTML = "X";
            valid = true;
        }//easy
        else if((rand < 0.22 && rand > 0.11 ) &&( b2.innerHTML === "")) {
            b2.innerHTML = "X";
            valid = true;
        }
        else if((rand < 0.33 && rand > 0.22) && (b3.innerHTML === "")) {
            b3.innerHTML = "X";
            valid = true;
        }
        else if((rand<0.44 && rand > 0.33) && (b4.innerHTML === "")) {
            b4.innerHTML = "X";
            valid = true;
        }
        else if((rand < 0.55 && rand > 0.44) && (b5.innerHTML === "")) {
            b5.innerHTML = "X";
            valid = true;
        }
        else if((rand < 0.66 && rand > 0.55) && (b6.innerHTML === "")) {
            b6.innerHTML = "X";
            valid = true;
        }
        else if((rand < 0.77 && rand > 0.66) && (b7.innerHTML === "")) {
            b7.innerHTML = "X";
            valid = true;
        }
        else if((rand < 0.88 && rand > 0.77) && (b8.innerHTML === "")) {
            b8.innerHTML = "X";
            valid = true;
        }
        else if((rand < 1 && rand > 0.88) && (b9.innerHTML === "")) {
            b9.innerHTML = "X";
            valid = true;
        }//ending easy
        if(!(b1.innerHTML === "" || b2.innerHTML === "" || b3.innerHTML === "" || b4.innerHTML === "" || b5.innerHTML === "" ||
            b6.innerHTML === "" || b7.innerHTML === "" || b8.innerHTML === "" || b9.innerHTML === "")) { 
                score();
                break;
         }
        rand = Math.random();
        score();
    }
}

function score() {
    if((b1.innerHTML === "O" && b2.innerHTML === "O" && b3.innerHTML=== "O" )|| (b1.innerHTML === "O" && b4.innerHTML === "O" && b7.innerHTML=== "O" )||
    (b3.innerHTML === "O" && b6.innerHTML === "O" && b9.innerHTML=== "O") || (b7.innerHTML === "O" && b8.innerHTML === "O" && b9.innerHTML === "O" ) ||
    (b4.innerHTML === "O" && b5.innerHTML === "O" && b6.innerHTML== "O") || (b1.innerHTML === "O" && b5.innerHTML === "O" && b9.innerHTML === "O") ||
    (b3.innerHTML === "O" && b5.innerHTML === "O" && b7.innerHTML === "O") || (b2.innerHTML === "O" && b5.innerHTML === "O" && b8.innerHTML === "O")) {
        setTimeout(() => alert("You win!"),10);
        stored1 = true;
        localStorage.setItem('storedScore1',JSON.stringify(stored1));
        setTimeout(() => window.location.href = './levels.html',5); 
    }
    else if((b1.innerHTML === "X" && b2.innerHTML === "X" && b3.innerHTML=== "X" )|| (b1.innerHTML === "X" && b4.innerHTML === "X" && b7.innerHTML=== "X" )||
    (b3.innerHTML === "X" && b6.innerHTML === "X" && b9.innerHTML=== "X") || (b7.innerHTML === "X" && b8.innerHTML === "X" && b9.innerHTML === "X" ) ||
    (b4.innerHTML === "X" && b5.innerHTML === "X" && b6.innerHTML== "X") || (b1.innerHTML === "X" && b5.innerHTML === "X" && b9.innerHTML ==="X") ||
    (b3.innerHTML === "X" && b5.innerHTML === "X" && b7.innerHTML === "X") || (b2.innerHTML === "X" && b5.innerHTML === "X" && b8.innerHTML === "X")) {
    setTimeout(() => alert("You loose!"),100);
    setTimeout(() => window.location.reload(),100);
    }
    
    else if(!(b1.innerHTML === "" || b2.innerHTML === "" || b3.innerHTML === "" || b4.innerHTML === "" || b5.innerHTML === "" ||
        b6.innerHTML === "" || b7.innerHTML === "" || b8.innerHTML === "" || b9.innerHTML === "")){
            setTimeout(() => alert("Its a tie!"),100);
            setTimeout(() => location.reload(),100); 
        }
}