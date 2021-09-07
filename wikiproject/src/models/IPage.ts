export interface IPage {
    id?: number;
    name: string;
    urlFridnelyName?: string;
    content: string;
    createdAt?: string;
    lastModifiedAt: string;
    parsedContent?: string;
    desc?: string;
}