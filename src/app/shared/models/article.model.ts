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
    type: "TEXT" | "ORDERED_LIST" | "UNORDERED_LIST" | "TITLE" | "LINK";
    content?: string | string[];
}

