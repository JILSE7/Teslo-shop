import { db } from "database"
import { IProduct } from "interfaces";
import Product from 'models/Product';



export const getBySlug = async(slug: string): Promise<IProduct | null> => {
    try {
        await db.connect();
        const product = await Product.findOne({ slug }).lean();
        if(!product) return null;
        await db.disconnect();
        return JSON.parse(JSON.stringify(product));
    } catch (error) {
        return null;
    }
}


interface ProductSlug {
    slug: string
}
export const getAllSlugs = async(): Promise<ProductSlug[]> => {
    try {
        await db.connect();
        const product = await Product.find().select("slug -_id").lean();
        await db.disconnect();
        return JSON.parse(JSON.stringify(product));
    } catch (error) {
        return [];
    }
}

export const getProductsByTerm = async(param:string): Promise<IProduct[]> => {
    try {
        const query = param?.toString().toLowerCase();

        await db.connect()
        const products = await Product.find({$text: {$search: query }}).lean()
        await db.disconnect()

        return JSON.parse(JSON.stringify(products));
        
    } catch (error) {
        return [];
    }
}


export const getAllProducts = async(): Promise<IProduct[]> => {
    try {
        await db.connect()
        const products = await Product.find().lean()
        await db.disconnect()

        return JSON.parse(JSON.stringify(products));
        
    } catch (error) {
        return [];
    }
}
