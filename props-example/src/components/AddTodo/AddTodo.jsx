import './AddTodo.css';

function AddTodo() {
    let todo = '';

    function getTodoInput(event) {
        todo = event.target.value; // Hämtar vad som står i inputfältet
        console.log(todo);
    }

    function handleClick() {
        console.log(`Lägger till todo: ${todo}`);
    }

    return (
        <section>
            <input type="text" onChange={ getTodoInput } />
            <button onClick={ handleClick }>Lägg till todo</button>
        </section>
    )
}

export default AddTodo;

// const inputElem = document.querySelector('input');

// inputElem.addEventListener('keyup', (event) => {
//     const inputValue = event.target.value;
// });