export const MenuTypeEnum_CONSTANTS = [
    'MENU', 
    'BUTTON'
] as const;
export type MenuTypeEnum = typeof MenuTypeEnum_CONSTANTS[number];
