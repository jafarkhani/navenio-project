import { useState } from 'react';
import CharacterSearch from './components/CharacterSearch/CharacterSearch';
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";
import {People} from './models/People';

const App = () => {

  const [selectedRecord, SetselectedRecord] = useState<People>({
    name : "",
    gender: "",
    birth_year: "",
    height: "",
    mass: "",
    hair_color: ""
  });

  return (
    <div className="container col-md-8 col-md-2 col-lg-4 offset-lg-4">
      <div className="card mt-2">
        <div className="card-header text-center bg-info">
          <b>STARWARS HEROES</b>
        </div>
        
        <CharacterSearch 
          data-testid="searchCompoent"
          onSelectCharacter={SetselectedRecord}
        />
        <CharacterInfo
          data={selectedRecord}
        />  
      </div>
    </div>
  );
}

export default App;