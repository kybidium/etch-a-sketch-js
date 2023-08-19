const divMain = document.querySelector('#main-div');
const GRID_DIM = 600;

let divTemp;

function fillDiv(gridNum = 16) {
    nodeList = divMain.querySelectorAll('#main-div > div')
    if (nodeList[0] != '') {
        console.log('nequal')
        nodeList.forEach(element => {
            divMain.removeChild(element);
        });
    }

    for (let i = 0; i < gridNum*gridNum; i++) {
        divTemp = document.createElement('div');
        divTemp.id = `div${i+1}`;
        divTemp.style.border = 'solid';
        divTemp.style["border-width"] = '0.1px';
        divTemp.style["border-color"] = 'black';
        divTemp.style.flex = '1 1 0';

        //set values proportional to the grid's dimensions
        divTemp.style.padding = `${(((GRID_DIM-(2*gridNum))/gridNum)/2)}px`;
        divTemp.style['background-color'] = 'white';
        
        //add hover effect
        divTemp.addEventListener('mouseover', (event) => {
            event.target.style['background-color'] = 'black';
        });

        divMain.appendChild(divTemp);
    }

}

const buttonMain = document.querySelector('#sizing-button');
buttonMain.addEventListener('click', () => {
    let dim = 1 * prompt("Enter your desired grid dimension as a single number\
    from 1-100 (e.g. entering '2' will result in a 2x2 grid)");
    
    // check within range and input is number
    if (dim > 100 || dim == 0 || dim !== dim) {
        alert("You must pick a number between 1 and 100")
    } else {
        fillDiv(dim);
    }
});


fillDiv()
