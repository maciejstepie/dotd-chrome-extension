import React from 'react';
import './App.css';
import NavTop from './NavTop';
import Content from './Content';
import {useSelector} from 'react-redux';
import RaidTable from './RaidTable';






function App() {

  const page = useSelector(state => state.openRaidReducer);




    return (
      <div className="App">
        <NavTop/>
        {page ? <RaidTable/> : <Content/>}
       
      </div>
     
    );



  
}


export default App;
