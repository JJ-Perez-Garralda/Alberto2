import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'CUIDADOR' })
export class Cuidador {
    @PrimaryColumn({ name: 'ID_CUIDADOR' })
    idCuidador: number;

    @Column({ type:'varchar', length: 40, name: 'NOMBRE' })
    nombre: string;

    @Column({ type:'varchar', length: 80, name: 'APELLIDO' })
    apellido: string;

    @Column({ type:'varchar', length: 1024,  name: 'IMG' })
    img: string;
    
    @Column({ type:'varchar', length: 43, name: 'VIDEO' })
    video: string;

    @Column({ type:'varchar', length: 100, name: 'EMAIL' })
    email: string;

    @Column({ type:'varchar', length: 100, name: 'DESCRIPCION' })
    descripcion: string;
}