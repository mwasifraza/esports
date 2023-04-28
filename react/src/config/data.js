import { CurrencyDollarIcon, PuzzlePieceIcon, TrophyIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { banner3, slide1, slide2, slide3 } from "../assets";

export const tournaments = [
    {
        image: slide1,
        title: "PUBG Mobile Tournament",
        tag: "PUBG Mobile",
        date: "26th April 2023"
    },
    {
        image: slide2,
        title: "COD Tournament",
        tag: "Call of Duty",
        date: "29th April 2023"
    },
    {
        image: slide3,
        title: "Takken7 Tournament",
        tag: "Takken",
        date: "3rd May 2023"
    }
];

export const teams = [
    {
        image: banner3,
        name: "F3 Esports",
        members: "1,562"
    },
    {
        image: banner3,
        name: "Eagles Esports",
        members: "478"
    },
    {
        image: banner3,
        name: "Fearless Gamers",
        members: "746"
    },
    {
        image: banner3,
        name: "Legions Esports",
        members: "1,065"
    }
];

export const records = [
    {
        icon: PuzzlePieceIcon,
        number: "1,200+",
        title: "games"
    },
    {
        icon: UserIcon,
        number: "654,800+",
        title: "players"
    },
    {
        icon: UserGroupIcon,
        number: "1,000+",
        title: "teams"
    },
    {
        icon: TrophyIcon,
        number: "156",
        title: "champions"
    },
    {
        icon: CurrencyDollarIcon,
        number: "1,000,000 USD",
        title: "worth of prizes"
    }
];