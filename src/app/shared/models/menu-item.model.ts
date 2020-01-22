export interface MenuItem {
  id: string;
  title: string;
  link?: string;
  subtitle?: string;
  type: 'ITEM' | 'GROUP_HEADER';
  disabled?: boolean;
  children?: MenuItem[];
  childrenVisible?: boolean;
}
