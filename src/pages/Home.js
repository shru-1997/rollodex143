import React from 'react'
import CardList from '../components/card-list/card-list.component';
import Search from '../components/search/search.component';
import './Home.style.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({monsters:users}));
    }

    handlesearch =(event)=>{
        this.setState({searchfield:event.target.value})
    }
    
    render(){
        const {monsters,searchfield} = this.state
        const filteredMonsters = monsters.filter((monster) =>monster.name.toLowerCase().includes(searchfield.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <Search handlesearch={this.handlesearch}/>
                <CardList monsters={filteredMonsters}/>

            </div>
            </>
        )
    }


}
export default Home