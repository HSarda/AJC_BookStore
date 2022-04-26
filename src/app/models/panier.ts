import { User } from "./user";
import { Book } from "./book";

export interface Panier {
    user: User,
    books: Book[]
}
