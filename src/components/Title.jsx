import PropTypes from 'prop-types'

const Title = ({ children }) => {
    return (
        <h1 className='font-bold text-center text-2xl my-4'>
            { children }
        </h1>
    )
}

Title.propTypes = {
    children: PropTypes.node,
}

export default Title