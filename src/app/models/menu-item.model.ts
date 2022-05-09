export interface MenuItem {
    id: string;
    title: string;
    link?: string;
    subtitle?: string;
    type: "ITEM" | "GROUP_HEADER" | "SUB_ITEM";
    disabled?: boolean;
    children?: MenuItem[];
    childrenVisible?: boolean;
}
