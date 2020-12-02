import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

import CharacterSearch from './CharacterSearch';

describe("search component tests", ()=>{

    let props ={
        onSelectCharacter : jest.fn()
    }

    afterEach(cleanup);

    it("renders without crashing", () => {
        let wrapper = shallow(<CharacterSearch {...props}/>)
        expect(wrapper.length).toBe(1)
    });

    it("renders correctly", () => {
        let wrapper = shallow(<CharacterSearch {...props}/>)
        expect(wrapper.type()).toEqual('div');
    });


    jest.mock('../../services/swapi', () => {
        const results = [{
                name: "Luke Skywalker",
               /* birth_year: "19BBY",
                created: "2014-12-09T13:50:51.644000Z",
                edited: "2014-12-20T21:17:56.891000Z",
                eye_color: "blue",
                films: [ "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"],
                ​gender: "male",
                hair_color: "blond",
                height: 172,​
                homeworld: "http://swapi.dev/api/planets/1/",
                mass: 77,
                skin_color: "fair"*/
            }];
    
        return {
            CompanyService: {
                fetchPeople: () => results
            }
        };
    });

    jest.mock("react-select", () => ({ loadOptions, onChange }) => {  
        
        function handleChange(event) {    
            const option = loadOptions.find((option) => option.value === event.currentTarget.value);
            onChange(option);  
        }  
        return (    
            <select data-testid="select" value={value} onChange={handleChange}>      
                {loadOptions.map(({ name }) => ( 
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>  
        );
    });
})