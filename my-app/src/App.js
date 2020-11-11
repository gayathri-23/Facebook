import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Left from './Left';
import M from './M';
import Friendlist from './Friendlist';



function App(){



    return (
    <div className="App">
    <Header/>
    <div className="facebook">
    <Left />
    <M/>
    <Friendlist/>
    
    </div>

    </div>
  );
    }


export default App;
