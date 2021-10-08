
export type Continent = {
    id:string;
    name:string;
    banner:string;
    description:string;
    number_countries: number;
    number_languages: number;
    number_most_popular_cities: number;
    most_popular_cities:{
        slug:string;
        name:string;
        banner: string;
        country: string;
        countryCode:string;
    }[]
}