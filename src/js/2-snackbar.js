import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
    form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', submitHandler)
console.dir(iziToast);
function submitHandler(event) {
    event.preventDefault();

    refs.stateInput = document.querySelector('input[name="state"]:checked');
    refs.delayInput = document.querySelector("input[name='delay']");

    const delay = parseInt(refs.delayInput.value);
    const state = refs.stateInput.value;
    console.log(state);
    const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
            setTimeout(() => {
                resolve(delay);
            }, delay)
        }
        if (state === 'rejected') {
            setTimeout(() => {
                reject(delay);
            }, delay)
        }
    })
    
    promise.then(delay => {
          iziToast.success({
        position: 'topRight',
        message: `Fullfiled promise in ${delay}ms`,
        backgroundColor: 'green',
        messageColor: 'white',
        progressBarColor: 'black',
        closeOnEscape: 'true',
        closeOnClick: 'true',
        })
    })

    promise.catch(delay => {
          iziToast.error({
        position: 'topRight',
        message: `Rejected promise in ${delay}ms`,
        backgroundColor: 'red',
        messageColor: 'white',
        progressBarColor: 'black',
        closeOnEscape: 'true',
        closeOnClick: 'true',
        })
    })
}