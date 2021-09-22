import { Repository, EntityRepository } from 'typeorm';
import { Page } from '../models/page';

@EntityRepository(Page)
export class PageRepository extends Repository<Page> {
    
}