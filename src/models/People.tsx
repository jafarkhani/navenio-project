export interface People{
  name : string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
};

//display information of a character
const displayFeatures = [
  {field : "gender", title : "Gender"},
  {field : "birth_year", title : "Birth Year"},
  {field : "height", title : "Height"},
  {field : "mass", title : "Mass"},
  {field : "hair_color", title : "Hair Color"}        
];
export default displayFeatures;

export function getProperties<T>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}
