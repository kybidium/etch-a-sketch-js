const divMain = document.querySelector('#main-div');

divMain.style.display = 'flex';
divMain.style.width = '100vh';
divMain.style.height = '100vh';
divMain.style['flex-wrap'] = 'wrap';
divMain.style.margin = '0 auto';

let gridNum = 16;
let divTemp;
for (let i = 0; i < gridNum*gridNum; i++) {
    divTemp = document.createElement('div');
    divTemp.id = `div${i+1}`;
    divTemp.style["border-width"] = '0.5px';
    divTemp.style["border-color"] = 'black';
    divTemp.style.border = 'solid';
    divTemp.style.flex = '1 0 0';

    //set values proportional to the grid's dimensions
    //value 2.2 chosen to divide the padding value by 2
    //.2 arbitrarily chosen to account for border width 
    divTemp.style.padding = `${((100/gridNum)/2.2)}%`;
    
    divTemp.addEventListener('mouseover', (event) => {
        event.target.style['background-color'] = 'black';
    });

    divMain.appendChild(divTemp);
}

