import Globals from "../Globals";
import { IPage } from "../models/IPage";
import { ServiceBase } from "./ServiceBase";

export default class PageService extends ServiceBase {

    public static async getPageAll(): Promise<IPage[]> {
        var result = await this.requestJson<IPage[]>({
            url: Globals.hostName + '/api/pages/',
            method: "GET"
        });
        try {
            if (result) return result;
        } catch (e) {
            console.log('page all error', e);
        }
        return null;
    }

    public static async getPage (id: number): Promise<IPage> {
        var result = await this.requestJson<IPage>({
            url: Globals.hostName + '/api/pages/' + id,
            method: "GET"
        });
        try {
            if (result) return result;
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    public static async getPageBySlug(slug: string): Promise<IPage> {
        var result = await this.requestJson<IPage>({
            url: Globals.hostName + "/api/pages/slug/" + slug.toLowerCase(),
            method: "GET"
        });
        try {
            if (result) return result;
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    public static async createPage(model: IPage) {
        var result = await this.requestJson<IPage>({
            url: Globals.hostName + '/api/pages',
            data: model,
            method: "POST"
        });
        try {
            if (result) return result;
        } catch (e) {
            console.log(e);
        }
        return null;
    }
    
    public static async searchPage (keyword: string):Promise<IPage[]> {
        var result = await this.requestJson<IPage[]>({
            url: Globals.hostName + `/api/pages/search/${keyword.toLowerCase()}`,
            method: "GET"
        });
        try {
            if (result) return result;
        } catch (e) {
            console.log(e);
        }
    }
}