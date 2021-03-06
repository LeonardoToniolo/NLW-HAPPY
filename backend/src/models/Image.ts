import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    path: string;

    @ManyToOne(()=> Orphanage, ophanage => ophanage.images)
    @JoinColumn({ name: 'orphanage_Id'})
    orphanage: Orphanage;
}