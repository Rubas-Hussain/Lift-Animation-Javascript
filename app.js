const btnsContainer = document.querySelector('#buttonsContainer');
const liftImage = document.querySelector('#liftImage');

const moveLift = () => {
    let btnDivs = []; 

    for (let i = 0; i < 3; i++) {
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('btn-1');
        btnDiv.innerHTML = ``;
        btnsContainer.appendChild(btnDiv);
        btnDivs.push(btnDiv); 

        i==0 ? btnDiv.style.backgroundColor = 'yellow' : btnDiv.style.backgroundColor = 'grey' ;
        btnDiv.addEventListener('click', () => {

            btnDivs.forEach((btn) => btn.style.backgroundColor = '');

            btnDiv.style.backgroundColor = 'yellow';

            if (i == 0) {
                liftImage.style.marginTop = '10px';
            } else if (i == 1) {
                liftImage.style.marginTop = '250px';
            } else if (i == 2) {
                liftImage.style.marginTop = '450px';
            }
        });
    }
}

moveLift();
