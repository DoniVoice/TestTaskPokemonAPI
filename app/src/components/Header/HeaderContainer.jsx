import React from 'react'
import {connect} from 'react-redux'
import {setClickMenuBurger} from '../../redux/pokemonList-reducer'
import Header from './Header'


class HeaderContainer extends React.Component {
    render() {
        return(
            <Header setClickMenuBurger={this.props.setClickMenuBurger}
                    clickMenuBurger={this.props.clickMenuBurger}/>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        clickMenuBurger: state.pokemonList.clickMenuBurger
    }
}

export default connect(mapStateToProps, {
    setClickMenuBurger
})(HeaderContainer)

