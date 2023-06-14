
import PropTypes  from "prop-types";


export const CounterApp = ( {value} ) => {

    function handLedAdd(event, newValue) {
        
        console.log(newValue)
    }



  return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

        <button onClick={ (event) => handLedAdd(event, 'hola')}>
            +1
        </button>
    </>

  )
}


CounterApp.propTypes = {

    value: PropTypes.number

}