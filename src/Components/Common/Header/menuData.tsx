import { Menu } from "@/types/menu";
import { useTransition } from "react";




const menuData = (t: (key: string) => string): Menu[] => [
  {
    id: 1,
    title: t("home"),
    path: "#",
    newTab: false,
  },

  {
    id: 2,
    title: t("partners"),
    path: "#partners",
    newTab: false,
  },


  {
    id: 3,
    title: t("features"),
    path: "#features",
    newTab: false,
  },

  {
    id: 4,
    title: t("services"),
    path: "#services",
    newTab: false,
  },
  
  {
    id: 5,
    title: t("news"),
    path: "#news",
    newTab: false,
  },

{
    id: 6,
    title: t("temework"),
    path: "#temework",
    newTab: false,
  },

  {
    id: 7,
    title: t("contact"),
    path: "#contact",
    newTab: false,
  },

 
];

export default menuData;