import { IsNotEmpty, Length } from "class-validator";

export class CreateClientBody{
    @IsNotEmpty()
    @Length(5,255)
    readonly name: string;
}