export interface Article {
    id: string;
    title?: string;
    blocks: ArticleBlock[];
}

export interface ArticleBlock {
    id: string;
    title?: string;
    elements: ArticleElem[];
}

export interface ArticleElem {
    id: string;
    type: ArticleElemType;
    content?: string | string[];
}

export enum ArticleElemTypeEnum {
    text = "TEXT",
    olist = "ORDERED_LIST",
    ulist = "UNORDERED_LIST",
    title = "TITLE",
    link = "LINK"
}

export type ArticleElemType = ArticleElemTypeEnum.text | ArticleElemTypeEnum.olist | ArticleElemTypeEnum.ulist | ArticleElemTypeEnum.title | ArticleElemTypeEnum.link;