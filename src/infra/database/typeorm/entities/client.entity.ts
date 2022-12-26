import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_clients')
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    key: string;

    @Column()
    active: boolean;
}
