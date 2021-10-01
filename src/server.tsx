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
                        id:1,
                        name: 'América do Sul',
                    },
                    {
                        id:2,
                        name: 'América do Norte'
                    },
                    {
                        id:3,
                        name: 'Ásia'
                    },
                    {
                        id:4,
                        name:'África'
                    },
                    {
                        id:5,
                        name:'Europa'
                    },
                    {
                        id:6,
                        name:'Oceania'
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