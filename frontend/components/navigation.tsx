import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import Settings from "@mui/icons-material/Settings";
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';

export const NAVIGATION = {
    sidebar: [
        {
            segment: "",
            title: "Home",
            icon: <HomeIcon />,
        },
        {
            kind: "divider",
        },
        {
            segment: "store",
            title: "Store",
            icon: <StoreIcon />,
        },
        {
            kind: "divider",
        },
        {
            segment: "consultation",
            title: "Consultation",
            icon: <LocalHospitalIcon />,
        },
        {
            kind: "divider",
        },
        {
            segment: "pets",
            title: "My Pet",
            icon: <PetsIcon />,
        },
        {
            kind: "divider",
        },
        {
            segment: "petshop",
            title: "Petshop",
            icon: <BabyChangingStationIcon />,
        }
    ],

    menu: [
        {
            segment: "profile",
            title: "Profile",
            icon: <AccountBoxIcon />,
        },
        {
            kind: "divider",
        },
        {
            segment: "history",
            title: "History",
            icon: <HistoryIcon />,
        },
        {
            kind: "divider",
        },
        {
            segment: "settings",
            title: "Settings",
            icon: <Settings />,
        },
    ],
};
