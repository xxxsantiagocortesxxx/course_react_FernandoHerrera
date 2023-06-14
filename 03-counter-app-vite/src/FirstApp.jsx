
import PropTypes  from "prop-types";


// esto es un componente
export const FirstApp = ( {title ,  subtitle, name} ) => {

  return (
    <>
      <h1> {title} </h1>
      <p>{subtitle }</p>
      <p>{ name }</p>

    </>
  )
}




///


//para definir el tipo de de un prop

//no se te olvie importarlo
FirstApp.propTypes = {

  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,

}


//define por defecto( default) sino se define un prop
FirstApp.defaultProps = {
  title: "no hay titulo",
  subtitle: 12345,
  name: "david cortes"

}