import { Category } from "./category";
import { Editor } from "./editor";
import { Style } from "./style";

export interface Book {
    id: number;
    name: string;
    price: number;
    editor: Editor[];
    style: Style[];
    description: string;
    category: Category[];
    series: string;
    quantity: number;
    author: string;
    score: number;
    picture: string;
    isbn: number;
    release_date: Date;
}