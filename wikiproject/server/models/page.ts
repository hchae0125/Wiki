import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Page {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({type: 'text', unique: true, nullable: false})
    name: string;

    @Column({type: 'text', unique: true, nullable: false})
    urlFriendlyName: string | undefined;
    
    @Column({type: 'text', nullable: false})
    content: string | undefined;
    
    @Column({type: 'text', nullable: false})
    createdAt: string | undefined;
    
    @Column({type: 'text', nullable: false})
    lastModifiedAt: string | undefined;
    
    parsedContent: string | undefined;
}