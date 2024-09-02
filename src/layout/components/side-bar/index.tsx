import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import dashboardImg from "./assets/dashboard.png";
import propertiesImg from "./assets/Properties.png";
import rentalsImg from "./assets/Rentals.png";
import maintainanceImg from "./assets/Maintanence.png";
import accountImg from "./assets/Accounting.png";
import calendarImg from "./assets/Calendar.png";
import documentsImg from "./assets/Documents.png";

const menus = [
  { label: "Dashboard", path: "/dashboard", img: dashboardImg },
  { label: "Properties", path: "/dashboard", img: propertiesImg },
  { label: "Rentals", path: "/dashboard", img: rentalsImg },
  { label: "Maintanance", path: "/dashboard", img: maintainanceImg },
  { label: "Accounting", path: "/dashboard", img: accountImg },
  { label: "Calendar", path: "/dashboard", img: calendarImg },
  { label: "Documents", path: "/dashboard", img: documentsImg },
];

const Sidebar = () => {
  return (
    <nav aria-label="main mailbox folders">
      <List>
        {menus.map(({ label, path, img }) => {
          return (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={img} width="20px" />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Sidebar;
