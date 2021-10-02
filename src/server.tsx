import { createServer, Model } from 'miragejs'

export default function worldTripServer() {
         createServer({
        models:{
            continents: Model,
        },
        seeds(server){
            server.db.loadData({
                continents:[
                    {
                        slug:'america',
                        name: 'América',
                        banner:'https://source.unsplash.com/IhamOkGSh5c',
                        description:'América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. O seu extremo oriental insular encontra-se na Groenlândia, o Nordostrundingen, enquanto o ocidental localiza-se nas Aleutas',
                        number_countries:36,
                        number_languages: 1061,
                        number_most_popular_cities:13,
                        most_popular_cities:[
                            {   
                                slug:'new-york-city',
                                name:'New York City',
                                banner:'https://source.unsplash.com/l8ypMiU1Hio',
                                country: 'Estados Unidos',
                                countryCode:'US'
                            },
                            {   
                                slug:'miami',
                                name:'Miami',
                                banner:'https://source.unsplash.com/PbyJbTJH9yY',
                                country: 'Estados Unidos',
                                countryCode:'US'
                            },
                            {   
                                slug:'los-angeles',
                                name:'Los Angeles',
                                banner:'https://source.unsplash.com/0YWaDPylkYA',
                                country: 'Estados Unidos',
                                countryCode:'US'
                            },
                            {   
                                slug:'las-vegas',
                                name:'Las Vegas',
                                banner:'https://source.unsplash.com/9xjdQ8-zLKI',
                                country: 'Estados Unidos',
                                countryCode:'US'
                            },
                            {   
                                slug:'cancun',
                                name:'Cancun',
                                banner:'https://source.unsplash.com/jdswuUaDeKM',
                                country: 'México',
                                countryCode:'MX'
                            },
                            {   
                                slug:'orlando',
                                name:'Orlando',
                                banner:'https://source.unsplash.com/kBkjgAeT5r4',
                                country: 'Estados Unidos',
                                countryCode:'US'
                            }
                        ]
                    },
                    {
                        slug:"asia",
                        name: 'Ásia',
                        banner:'https://souce.unsplash.com/TnUG2pWraPE',
                        description:'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.',
                        number_countries:50,
                        number_languages: 2301,
                        number_most_popular_cities:43,
                        most_popular_cities:[
                            {   
                                slug:'hong-kong',
                                name:'Hong Kong',
                                banner:'https://source.unsplash.com/JD4P2rfAkvc',
                                country: 'China',
                                countryCode:'CN'
                            },
                            {   
                                slug:'bangkok',
                                name:'Bangkok',
                                banner:'https://source.unsplash.com/-y3sidWvDxg',
                                country: 'Tailândia',
                                countryCode:'TH'
                            },
                            {   
                                slug:'mumbai',
                                name:'Mumbai',
                                banner:'https://source.unsplash.com/YtfUqAPLqMk',
                                country: 'Índia',
                                countryCode:'IN'
                            },
                            {   
                                slug:'macau',
                                name:'Macau',
                                banner:'https://source.unsplash.com/Hz-oLWIyts0',
                                country: 'China',
                                countryCode:'CN'
                            },
                            {   
                                slug:'dubai',
                                name:'Dubai',
                                banner:'https://source.unsplash.com/kZ1zThg6G40',
                                country: 'Emirados Árabes Unidos',
                                countryCode:'AE'
                            },
                            {   
                                slug:'shenzhen',
                                name:'Shenzhen',
                                banner:'https://source.unsplash.com/xQdUIo_MSQ4',
                                country: 'China',
                                countryCode:'CN'
                            },
                        ],
                    },
                    {
                        slug:'africa',
                        name:'África',
                        banner:'https://souce.unsplash.com/kfxEUCTUeyg',
                        description:'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.',
                        number_countries:54,
                        number_languages: 2000,
                        number_most_popular_cities:4,
                        most_popular_cities:[
                            {   
                                slug:'cairo',
                                name:'Cairo',
                                banner:'https://source.unsplash.com/pwMbtwA9LRc',
                                country: 'Egito',
                                countryCode:'EG'
                            },
                            {   
                                slug:'johannesburg',
                                name:'Johannesburg',
                                banner:'https://source.unsplash.com/xvJVDUoGpoU',
                                country: 'África do Sul',
                                countryCode:'ZA'
                            },
                            {   
                                slug:'marrakech',
                                name:'Marrakech',
                                banner:'https://source.unsplash.com/CFKksjYRSQ8',
                                country: 'Marrocos',
                                countryCode:'MA'
                            },
                            {   
                                slug:'hurghada',
                                name:'Hurghada',
                                banner:'https://source.unsplash.com/arn3YKR91uo',
                                country: 'Egito',
                                countryCode:'EG'
                            },
                        ]
                    },
                    {
                        slug:'europa',
                        name:'Europa',
                        banner:'https://souce.unsplash.com/iXqTqC-f6jI',
                        description:'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
                        number_countries:50,
                        number_languages: 60,
                        number_most_popular_cities:32,
                        most_popular_cities:[
                            {   
                                slug:'londres',
                                name:'Londres',
                                banner:'https://source.unsplash.com/7A15094rpp0',
                                country: 'Reino Unido',
                                countryCode:'GB'
                            },
                            {   
                                slug:'paris',
                                name:'Paris',
                                banner:'https://source.unsplash.com/QAwciFlS1g4',
                                country: 'França',
                                countryCode:'FR'
                            },
                            {   
                                slug:'athenas',
                                name:'Athenas',
                                banner:'https://source.unsplash.com/4JC7u16OmS0',
                                country: 'Grécia',
                                countryCode:'GR'
                            },
                            {   
                                slug:'barcelona',
                                name:'Barcelona',
                                banner:'https://source.unsplash.com/hVhfqhDYciU',
                                country: 'Espanha',
                                countryCode:'ES'
                            },
                            {   
                                slug:'roma',
                                name:'Roma',
                                banner:'https://source.unsplash.com/Q4g0Q-eVVEg',
                                country: 'Itália',
                                countryCode:'IT'
                            },
                            {   
                                slug:'berlin',
                                name:'Berlin',
                                banner:'https://source.unsplash.com/TK5I5L5JGxY',
                                country: 'Alemanha',
                                countryCode:'DE'
                            },
                        ]
                    },
                    {
                        slug:'oceania',
                        name:'Oceania',
                        banner:'https://souce.unsplash.com/kXgo9HVHOCg',
                        description:'Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d\'\Urville.',
                        number_countries:14,
                        number_languages: 848,
                        number_most_popular_cities:3,
                        most_popular_cities:[
                            {   
                                slug:'sidney',
                                name:'Sidney',
                                banner:'https://source.unsplash.com/jJF-zlkXTmU',
                                country: 'Austrália',
                                countryCode:'AU'
                            },
                            {   
                                slug:'melbourne',
                                name:'Melbourne',
                                banner:'https://source.unsplash.com/o3TZx8_j7FE',
                                country: 'Austrália',
                                countryCode:'AU'
                            },
                            {   
                                slug:'auckland',
                                name:'Auckland',
                                banner:'https://source.unsplash.com/v9FIx0J-KAA',
                                country: 'Nova Zelândia',
                                countryCode:'NZ'
                            },
                        ]
                    }
        
                ]
            })
        },
        
        routes(){
            this.namespace = 'api';

            this.get('/continents', () => {
                return this.schema.all('continents');
            })
        }
    })
}