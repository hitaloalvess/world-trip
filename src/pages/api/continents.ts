import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../services/api";


export default async function Continents(req: NextApiRequest, res: NextApiResponse){
        const response = await api('/continents')
        const data = response.data

        if(data) return res.status(200).send(data)
}