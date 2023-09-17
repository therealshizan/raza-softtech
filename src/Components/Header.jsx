import { Stack, useMediaQuery } from "@mui/material";
import Logo from "./Logo";
import MenuList from "./MenuList";
import theme from "../theme";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const tabletMedia = useMediaQuery(theme.breakpoints.up("tablet"));
  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      justifyContent={"space-between"}
      sx={{
        px: 10,
        py: sticky ? 2 : 4,
        [theme.breakpoints.down("md")]: { px: 5, py: 2 },
        zIndex: 1,
        transition: 'all .25s ease-in-out' 
      }}
      className={`bg-white sticky top-0 ${sticky && 'shadow'}`}
    >
      {/* Logo */}
      <Logo />

      {/* Menu */}
      {tabletMedia ? <MenuList direction={"row"} /> : <MobileMenu />}
    </Stack>
  );
};

export default Header;
