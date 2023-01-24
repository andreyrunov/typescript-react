import { TopLevelCategory } from "./page.interface";

export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageItem[];
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}




// [
//     {
//         "_id": {
//             "secondCategory": "Аналитика"
//         },
//         "pages": [
//             {
//                 "alias": "financial-analytics",
//                 "title": "Курсы по финансовой аналитике",
//                 "_id": "76845672458hfdnty5637356uywr54",
//                 "category": "Финансовая аналитика",
//             },
//             {
//                 "alias": "big-data",
//                 "title": "Курсы по Big Data",
//                 "_id": "xcfgb45456345ytjit845u85",
//                 "category": "Big Data",
//             },
//             {
//                 "alias": "data-science",
//                 "title": "Курсы по Data Science",
//                 "_id": "gsdt456457ujt7957356ugsd",
//                 "category": "Data Science",
//             },
//             {
//                 "alias": "machine-learning",
//                 "title": "Курсы по машинному обучению",
//                 "_id": "dyhndy65363thwrg567u467jryhn",
//                 "category": "Машинное обучение",
//             },
//         ]
//     },
//     {
//         "_id": {
//             "secondCategory": "Бизнес"
//         },
//         "pages": [
//             {
//                 "alias": "finansovaya-gramotnost",
//                 "title": "Курсы финансовой грамотности",
//                 "_id": "dfhrth5657i69k80l89",
//                 "category": "Финансовая грамотность",
//             },
//             {
//                 "alias": "entrepreneurs",
//                 "title": "Курсы предпринимательства",
//                 "_id": "dfhnyf4y25425yqerfsefs4342",
//                 "category": "Предпринимательство",
//             },
//         ]
//     },
// ];