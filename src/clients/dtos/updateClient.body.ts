import { IsNotEmpty, Length } from "class-validator";

export class UpdateClientBody{
    @IsNotEmpty()
    @Length(5,255)
    readonly name: string;
}