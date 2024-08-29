export interface navigationItemData {
    label: string;
    link: string;
}

export interface navigationItem {
    label: string;
    link: string;
    subItems: navigationItemData[]
}