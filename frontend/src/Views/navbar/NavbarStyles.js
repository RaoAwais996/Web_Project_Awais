import { styled, Box, IconButton, FormControl, Typography } from "@mui/material";
import FlexBetween from "../../Components/FlexBetween";
import { Close, Menu } from "@mui/icons-material";

 const NavbarContainer = styled(FlexBetween)(({ theme }) => ({
  padding: "1rem 6%",
  backgroundColor: theme.palette.background.alt,
}));

 const NavbarTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "clamp(1rem, 2rem, 2.25rem)",
    color: "black", 
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  }));
  

 const SearchBar = styled(FlexBetween)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.light,
  borderRadius: "9px",
  gap: "3rem",
  padding: "0.1rem 1.5rem",
}));

 const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  fontSize: "25px",
}));

 const Dropdown = styled(FormControl)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.light,
  width: "150px",
  borderRadius: "0.25rem",
  padding: "0.25rem 1rem",
  "& .MuiSvgIcon-root": {
    paddingRight: "0.25rem",
    width: "3rem",
  },
  "& .MuiSelect-select:focus": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

 const MobileMenu = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: "0",
  bottom: "0",
  height: "100%",
  zIndex: "10",
  maxWidth: "500px",
  minWidth: "300px",
  backgroundColor: theme.palette.background.default,
}));

 const MobileMenuCloseButton = styled(IconButton)(({ theme }) => ({
  fontSize: "25px",
}));

 const MobileMenuItems = styled(FlexBetween)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
}));


export { NavbarContainer, NavbarTitle, SearchBar, MobileMenuButton, Dropdown, MobileMenu, MobileMenuCloseButton, MobileMenuItems }