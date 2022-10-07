import { db } from 'database';
import Product from 'models/Product';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../interfaces/Products';

type Data = {
    message?: string;
    ok: boolean;
    data?: IProduct[];
}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log('llego aqui');
    switch(req.method) {
        case 'GET':
            return getProductSearch(req, res);
        default:
            return res.status(400).json({ message: 'Bad request', ok: false })

    }
}

const getProductSearch = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    let { q = '' } = req.query;
    console.log();
    
    if ( q?.length === 0 ){
        return res.status(400).json({
            message: 'Debe de especificar el query de busqueda',
            ok: false
        })
    }

    q = q?.toString().toLowerCase();

    await db.connect()
    const products = await Product.find({$text: {$search: q }}).lean()
    await db.disconnect()

    return res.status(400).json({
        message: q?.toString(),
        ok: true,
        data: products
    })    
}
