import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import Settings from "@mui/icons-material/Settings";

export const NAVIGATION = {
    sidebar: [
        {
            segment: "",
            title: "Home",
            icon: <HomeIcon />,
        },
        {
            segment: "store",
            title: "Store",
            icon: <StoreIcon />,
        },
        {
            segment: "consultation",
            title: "Consultation",
            icon: <LocalHospitalIcon />,
        },
        {
            segment: "petshop",
            title: "Petshop",
            icon: <PetsIcon />,
        },
        {
            kind: "divider",
        }
    ],

    menu: [
        {
            segment: "profile",
            title: "Profile",
            icon: <AccountBoxIcon />,
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
