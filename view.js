
function show(){

    let html = `<div class="mainPage">`;

    //    model.buttons.map(b => b = html += `<button onclick="${b}()"> ${b}</button> <br>`)
    html += ` <div class="header"><h2>Baby 2023</h2></div>`;
    html += `<div class="menu">`
   for(let i = 0; i < model.buttons.length; i++){
    html += `<button class="menuBTN" onclick="${model.buttons[i]}()">${model.buttons[i]}</button> `
   }   
   html += `</div>
            <div class="content">${model.view}</div>`   
    document.getElementById('app').innerHTML = html
}

function Hjem(){
    
    model.current = 'Hjem'
        model.view = `
        <div> En side med enkel oversikt over det man trenger å huske når man venter baby.  </div>
        `
    show();
 
}

function Fødebag(){
    model.current = 'Fødebag';
    model.view = `<li> fødebag</li>`;
    show();
}

function Settings(){
    model.current = 'Settings'
    model.view = `Settings`;
    show()
}




