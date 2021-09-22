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
    
    public static async searchPage (keyword: string):Promise<IPage[]> {
        // var result = await this.requestJson<IPage[]>({
        //     url: Globals.hostName + `api/pages/search/${keyword.toLowerCase()}`,
        //     method: "GET"
        // });
        var tempResult: IPage[] = [{name: keyword, content: "test content", lastModifiedAt: Date.toString()}];

        // try {
        //     if (result) return result;
        //     return tempResult;
        // } catch (e) {
        //     tempResult[0].content = e;
        //     return tempResult;
        // }
        return tempResult;
    }
}