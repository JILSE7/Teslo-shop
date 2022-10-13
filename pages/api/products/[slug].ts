import { db } from 'database';
import Product from 'models/Product';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../interfaces/Products';

type Data = {
    message?: string;
    ok :boolean;
    data?: IProduct[];
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log(req.url);

    switch(req.method) {
        case 'GET':
            return getProductBySlug(req, res);
        default:
            return res.status(400).json({ message: 'Bad request', ok: false })

    }
}

const getProductBySlug = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { slug } = req.query;
    await db.connect();
    const product = await Product.findOne({ slug }).lean()
    if ( !product ) return res.status(400).json({ message: 'Producto no encontrado', ok: false })
    await db.disconnect();
    return res.status(200).json({ ok:true, data: [product],})
}
