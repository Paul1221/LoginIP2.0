import { Token } from '@angular/compiler/src/ml_parser/lexer';

export class User {
    id: number;
    username: String;
    password: String;
    email:String;
    token:Token;
}