import { cleanup, render, waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import CharacterInfo from './CharacterInfo';
import {displayFeatures, People } from '../../models/People';

describe("characterInfo component tests", ()=>{

    afterEach(cleanup);
    
    const props = {
        data: {
            name: "Luke Skywalker",
            birth_year: "19BBY",
            gender : "male",
            hair_color: "blond",
            height: "172",
            mass: "77",
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

    it("load data correctly", async () => {
        const {getByTestId} = render(<CharacterInfo {...props} />);
        await waitFor(() => getByTestId("table-character-info"));
        displayFeatures.forEach(f => {
            expect(getByTestId("info-" + f.field).textContent).toEqual(props.data[f.field as keyof People]);
        });        
      });

    it("don't show missing feature in data", async ()=>{
        const props = {
            data: {
                name: "Luke Skywalker"                
            }
        }
        const {queryByTestId } = render(<CharacterInfo {...props} />);
        await waitFor(() => queryByTestId ("table-character-info"));
        expect(queryByTestId ("info-gender")).toBeNull();        
    })
})