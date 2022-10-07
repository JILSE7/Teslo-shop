import { constans, db } from 'database';
import Product from 'models/Product';
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../interfaces/Products';

type Data = {
    message: string;
    data?: IProduct[];
    ok: boolean;
}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch(req.method) {
        case 'GET':
            return getProduct(req, res);
        default:
            return res.status(400).json({ message: 'Bad request', ok: false })

    }
}

const getProduct = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {gender = 'all'} = req.query;

    let condition = {}

    if(gender !== 'all' && constans.SHOP_CONSTANST.validGenders.includes(`${gender}`)) condition = {gender}

    await db.connect();
    const products = await Product.find(condition)
                                  .select('title images price inStock slug -_id')
                                  .lean();
    await db.disconnect();

    return res.status(200).json({ message: 'ok', data: products, ok: true })

}
