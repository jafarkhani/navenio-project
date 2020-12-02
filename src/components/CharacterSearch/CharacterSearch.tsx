import React from 'react';
import { OptionsType } from 'react-select';
import AsyncSelect from 'react-select/async';

import {SwapiService} from '../../services/swapi';
import {People} from '../../models/People';


interface Props{
    onSelectCharacter : React.Dispatch<React.SetStateAction<People>>;
}

const CharacterSearch: React.FC<Props> = (props) =>{

    const LoadCharacters = async (
        inputValue: string, 
        callback: (options: OptionsType<any>) => void) => {

            const characters = await SwapiService.fetchPeople(inputValue);
            callback(characters);
    }

    const LoadCharacterInfo = (selectedCharacter: any) : void => {
        props.onSelectCharacter(selectedCharacter);
    }

    return(
        <div className="card bg-light m-3 p-3">
            <h5>Character Name</h5>
            <div className="d-flex">
                <AsyncSelect 
                    cacheOptions                    
                    getOptionLabel={e => e.name}
                    getOptionValue={e => e.name}
                    loadOptions={LoadCharacters} 
                    className="flex-grow-1"
                    classNamePrefix="character-select"
                    onChange={LoadCharacterInfo}
                />                
            </div>
        </div>
        
    );
}

export default CharacterSearch;