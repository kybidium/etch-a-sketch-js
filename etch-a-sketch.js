const divMain = document.querySelector('#main-div');


let gridNum = 16;
let divTemp;
for (let i = 0; i < gridNum*gridNum; i++) {
    divTemp = document.createElement('div');
    divTemp.id = `div${i+1}`;
    divTemp.style.border = 'solid';
    divTemp.style["border-width"] = '0.1px';
    divTemp.style["border-color"] = 'black';
    divTemp.style.flex = '1 1 0';

    //set values proportional to the grid's dimensions
    //value 2.2 chosen to divide the padding value by 2
    //.2 arbitrarily chosen to account for border width
    //maybe add constant for 600px dimensions 
    divTemp.style.padding = `${(((600-(2*gridNum))/gridNum)/2)}px`;
    divTemp.style['background-color'] = 'white';
    divTemp.addEventListener('mouseover', (event) => {
        event.target.style['background-color'] = 'black';
    });

    divMain.appendChild(divTemp);
}

