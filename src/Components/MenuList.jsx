import {
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
} from "@mui/material";
import theme from "../theme";
import { Instagram, Twitter, WhatsApp } from "@mui/icons-material";

const menuItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Clients", "#clients"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

const MenuList = ({ direction, closeDrawer }) => {
  const handleMenuItemClick = () => {
    closeDrawer(); // Call the closeDrawer function when a menu item is clicked
  };

  return (
    <Stack
      className={direction === "column" ? "mobile-menu-list" : ""}
      direction={direction}
      spacing={4}
    >
      <List
        disablePadding
        className={`${direction === "row" && "flex"} gap-12`}
      >
        {menuItems.map((item) => (
          <ListItem disablePadding key={item[1]}>
            <ListItemButton
              onClick={() => {
                handleMenuItemClick();
              }}
              disableRipple
              className="uppercase"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                fontFamily: theme.typography.fontFamily,
                p: 0,
                position: "relative",
                "&:hover": {
                  background: "none",
                  "&::after": {
                    width: "100%",
                  },
                },
                "&::after": {
                  transition: "all .25s ease-in-out",
                  content: '""',
                  position: "absolute",
                  background: theme.palette.primary.main,
                  height: "4px",
                  width: "0%",
                  bottom: "-0.5rem",
                  left: "50%",
                  transform: "translate(-50%, 0px)",
                },
              }}
              href={item[1]}
            >
              {item[0]}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ButtonGroup className="flex gap-2">
        <IconButton
          sx={{
            color: theme.palette.accent.main,
            ":hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
            },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.accent.main,
            ":hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
            },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.accent.main,
            ":hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
            },
          }}
        >
          <WhatsApp />
        </IconButton>
      </ButtonGroup>
    </Stack>
  );
};

export default MenuList;
