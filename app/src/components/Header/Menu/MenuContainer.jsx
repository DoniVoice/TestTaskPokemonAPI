import React from 'react'
import {connect} from 'react-redux'
import Menu from './Menu'
import {setClickMenuBurger} from '../../../redux/pokemonList-reducer'


class MenuContainer extends React.Component {
    render() {
        return(
            <Menu clickMenuBurger={this.props.clickMenuBurger}
                    screenWidth={this.props.screenWidth}
                    setClickMenuBurger={this.props.setClickMenuBurger}/>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        clickMenuBurger: state.pokemonList.clickMenuBurger,
        screenWidth: state.pokemonList.screenWidth
    }
}

export default connect(mapStateToProps, {
    setClickMenuBurger
})(MenuContainer)