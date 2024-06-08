document.getElementById('binaryForm').addEventListener('submit', function(event) {
    let formValid = true;
    let options = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'];
    
    options.forEach(option => {
        let radios = document.getElementsByName(option);
        let optionChecked = false;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                optionChecked = true;
                break;
            }
        }
        if (!optionChecked) {
            formValid = false;
        }
    });

    let confirmCheckbox = document.getElementById('confirmCheckbox').checked;

    if (!formValid || !confirmCheckbox) {
        alert('Por favor, preencha todas as opções e confirme que revisou suas escolhas.');
        event.preventDefault();
    }
});
