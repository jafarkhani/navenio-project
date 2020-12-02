export interface People{
  name : string;
  gender: string;
  birth_year: string;
  height: number;
  mass: number;
  hair_color: string;
};

export function getProperties<T>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}
