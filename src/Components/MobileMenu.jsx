import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import MenuList from "./MenuList";
import theme from "../theme";

const MobileMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => setOpenDrawer(!openDrawer);
  const closeDrawer = () => setOpenDrawer(false); 

  const smMedia = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Stack>
      <IconButton onClick={handleDrawer}>
        <Menu className="menu-icon" />
      </IconButton>

      <Drawer open={openDrawer} onClose={handleDrawer}>
        <Box sx={{background: theme.palette.accent.main, width: !smMedia ? '50vw' : '80vw'}} className="h-screen grid content-center px-12">
          <MenuList closeDrawer={closeDrawer} sx={{ width: "50vw" }} direction={"column"} />
        </Box>
      </Drawer>
    </Stack>
  );
};

export default MobileMenu;
