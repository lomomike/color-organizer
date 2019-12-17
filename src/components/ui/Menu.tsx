import * as PropTypes from 'prop-types'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../stylesheets/Menu.scss'

const selectedStyle = { color: 'red' }

const Menu = ({ match }) =>
    <nav className="menu">
        <NavLink to="/" style={match.isExact && selectedStyle}>date</NavLink>
        <NavLink to="/sort/title" activeStyle={selectedStyle}>title</NavLink>
        <NavLink to="/sort/rating" activeStyle={selectedStyle}>rating</NavLink>
    </nav>

Menu.propTypes = {
    sort: PropTypes.string
}

export default Menu
