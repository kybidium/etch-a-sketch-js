const divMain = document.querySelector('#main-div');


let divTemp;

function fillDiv(gridNum = 16) {
    nodeList = divMain.querySelectorAll('#main-div > div')
    if (nodeList[0] != '') {
        console.log('nequal')
        nodeList.forEach(element => {
            divMain.removeChild(element);
        });
    }
    console.log(divMain.querySelectorAll('#main-div > div'))
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
    console.log(divMain.querySelectorAll('#main-div > div'))
}

const buttonMain = document.querySelector('#sizing');
buttonMain.addEventListener('click', () => {
    let dim = prompt("Enter your desired grid dimension as a single number\
        (e.g. entering '2' will result in a 2x2 grid)");
    fillDiv(dim);
    
});


fillDiv();
console.log(divMain.querySelectorAll('#main-div > div'))