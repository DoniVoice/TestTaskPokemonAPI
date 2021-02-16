import React from 'react'
import s from './App.module.css'
import {Switch} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import {Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import PokemonListContainer from './components/PokemonList/PokemonListContainer'
import Forum from './components/ForumPage/ForumPage'
import PokemonPageContainer from './components/PokemonPage/PokemonPageContainer'
import ListNamesContainer from './components/ListNames/ListNamesContainer'
import ContactsPage from './components/ContactsPage/ContactsPage'
import GamesPage from './components/GamesPage/GamesPage'

function App() {
  return (
    <div className={s.app}>
          <HeaderContainer />
          <ListNamesContainer />
            <Switch>
                <Route exact path='/' component={PokemonListContainer}/>
                <Route exact path='/forum' component={Forum}/>
                <Route exact path='/contacts' component={ContactsPage}/>
                <Route exact path='/games' component={GamesPage}/>
                <Route exact path='/pokemon/:pokemonName' render={() => 
                <PokemonPageContainer/>}/>
            </Switch>
          <Footer />
    </div>
  );
}

export default App;
