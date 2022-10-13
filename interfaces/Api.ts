import { IProduct } from './Products';
export type ResponseProducts = {
    message?: string;
    ok :boolean;
    data?: IProduct[];
}