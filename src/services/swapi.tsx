import { People } from "../models/People";

const PeopleUrl = "https://swapi.dev/api/";

async function fetchPeople(searchValue: string) : Promise<Array<People>>{
    try{
        const response = await fetch(PeopleUrl + "people/?search=" + searchValue);
        const result = await response.json();

        return result.results;
    }
    catch(err){
        return [];
    }
}

export const SwapiService = {
    fetchPeople 
}