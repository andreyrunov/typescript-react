import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MenuItem } from "../../../interfaces/menu.interface";


export interface ItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    menu: MenuItem[];
    id?: any;
}