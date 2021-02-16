import React from 'react'
import {connect} from 'react-redux'
import {setSearchForName} from '../../../../redux/pokemonList-reducer'
import ListNames from './ListNames'


class ListNamesContainer extends React.Component {
    render() {
        return(
            <ListNames setSearchForName={this.props.setSearchForName}
                        searchForName={this.props.searchForName}/>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        searchForName: state.pokemonList.searchForName
    }
}

export default connect(mapStateToProps, {
    setSearchForName
})(ListNamesContainer)