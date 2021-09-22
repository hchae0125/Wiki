import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Page {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    urlFriendlyName: string;
    
    @Column()
    content: string;
    
    @Column()
    createdAt: string;
    
    @Column()
    lastModifiedAt: string;
    
    @Column()
    parsedContent: string;
}