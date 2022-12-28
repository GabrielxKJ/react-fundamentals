import PropTypes from "prop-types";


function Item(props) {
    return (
        <>
            <li>{props.marca}</li>
        </>
    )
}

export default Item

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.propTypes = {
    marca: 'Faltou a marca',
    ano_lancamento: 1,
}
