window.onload = () => {
  const inp = document.getElementById("inp");
  const nameList = document.getElementById("name-list");
  const display = document.getElementById("display");
  const giveATray = document.getElementById("give-a-tray");
  const fristPosion = document.getElementById("frist-Posion");
  const secondPosions = document.getElementById("second-posion");
  const thirdPosion = document.getElementById("third-posion");
  const partiCepentName = [];

  // Extract text from text area And store it to an array.
  inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let newNames = event.target.value.split(", ");
      if (newNames[0] !== "") {
        newNames.forEach((name) => {
          partiCepentName.push(name);
          let item = createListItem(name);
          nameList.appendChild(item);
          event.target.value = "";
        });
      }
    }
  });

  giveATray.addEventListener("click", function () {
    if (partiCepentName.length !== 0) {
      let shuffelNames = shuffel(partiCepentName);
      for (let i = 1; i < shuffelNames.length; i++) {
        (function (i, count) {
          setTimeout(() => {
           let rend = Math.floor(Math.random() * (shuffelNames.length)); 
            display.innerHTML = shuffelNames[rend];
            if (count == shuffelNames.length - 1) {
              if (!fristPosion.innerHTML) {
                fristPosion.innerHTML = shuffelNames[rend];
                let ind = partiCepentName.indexOf(shuffelNames[rend]);
                partiCepentName.splice(ind, 1);
              } else if (!secondPosions.innerHTML) {
                secondPosions.innerHTML = shuffelNames[rend];
                let ind = partiCepentName.indexOf(shuffelNames[rend]);
                partiCepentName.splice(ind, 1);
              } else if (!thirdPosion.innerHTML) {
                thirdPosion.innerHTML = shuffelNames[rend];
                let ind = partiCepentName.indexOf(shuffelNames[rend]);
                partiCepentName.splice(ind, 1);
              } else {
                alert("rafell Drow full end");
              }
            }
          }, i); 
        })(i * 100, i);
      }
    } else {
      alert("is empty");
    }
  });
};

function createListItem(names) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = names;
  return li;
}

function shuffel(arr) {
  let shuffeldArray = [...arr];
  for (let i = shuffeldArray.length - 1; i > 0; i--) {
    let rend = Math.floor(Math.random() * (i + 1));
    let temp = shuffeldArray[rend];
    shuffeldArray[rend] = shuffeldArray[i];
    shuffeldArray[i] = temp;
    return shuffeldArray;
  }
}
