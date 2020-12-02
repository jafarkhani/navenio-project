import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import CharacterInfo from './CharacterInfo';


describe("characterInfo component tests", ()=>{

    afterEach(cleanup);
    
    const props = {
        data: {
            name: "Luke Skywalker",
            birth_year: "19BBY",
            gender : "male",
            hair_color: "blond",
            height: 172,
            mass: 77,
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            eye_color: "blue",
            films: [ "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"],
            homeworld: "http://swapi.dev/api/planets/1/"
        }
    }

    it("renders without crashing", () => {
        let wrapper = shallow(<CharacterInfo {...props}/>)
        expect(wrapper.length).toBe(1)
    });

    it("renders correctly", () => {
        const {getByTestId} = render(<CharacterInfo {...props}/>);
        expect(getByTestId("loading")).toBeTruthy();
    });


    jest.mock('../../services/swapi', () => {
        const results = [{
            name: "Luke Skywalker",
            birth_year: "19BBY",
            gender : "male",
            hair_color: "blond",
            height: 172,
            mass: 77,
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            eye_color: "blue",
            films: [ "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"],
            homeworld: "http://swapi.dev/api/planets/1/"
        }];
    
        return {
            CompanyService: {
                fetchPeople: () => results
            }
        };
    });
    it("renders data correctly", () => {
        const {getByTestId} = render(<CharacterInfo {...props}/>);
        expect(getByTestId("loading")).toBeTruthy();
    });
})