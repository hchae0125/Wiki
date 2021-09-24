import { Repository, EntityRepository } from 'typeorm';
import { Page } from '../models/page';

@EntityRepository(Page)
export default class PageRepository extends Repository<Page> {
    
}