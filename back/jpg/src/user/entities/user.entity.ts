import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'USER' })
export class User {
    @PrimaryColumn({ name: 'ID_USER' })
    idUser: number;

    @Column({ type:'varchar', length: 40, name: 'NOMBRE' })
    nombre: string;

    @Column({ type:'varchar', length: 80, name: 'APELLIDO' })
    apellido: string;

    @Column({ type:'varchar', length: 1024,  name: 'IMG' })
    img: string;

    @Column({ type:'varchar', length: 100, name: 'EMAIL' })
    email: string;

    @Column({ type:'varchar', length: 100, name: 'DIRECCION' })
    direccion: string;
}