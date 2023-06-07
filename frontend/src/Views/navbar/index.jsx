import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../Components/FlexBetween";
import {
  NavbarContainer,
  NavbarTitle,
  SearchBar,
  MobileMenuButton,
  Dropdown,
  MobileMenu,
  MobileMenuCloseButton,
  MobileMenuItems,
} from "./NavbarStyles";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const fullName = "Awais";

  return (
    <NavbarContainer padding="1rem 6%" backgroundColor={theme.palette.background.alt}>
      <FlexBetween gap="1.75rem">
        <NavbarTitle
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary.main"
          onClick={() => navigate("/home")}
        >
          Nothing
        </NavbarTitle>
        {isNonMobileScreens && (
          <SearchBar backgroundColor={theme.palette.neutral.light} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </SearchBar>
        )}
      </FlexBetween>

      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <Dropdown variant="standard" value={fullName}>
            <Select value={fullName} input={<InputBase />}>
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </Dropdown>
        </FlexBetween>
      ) : (
        <MobileMenuButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </MobileMenuButton>
      )}

      {!isNonMobileScreens && isMobileMenuToggled && (
        <MobileMenu>
          <Box display="flex" justifyContent="flex-end" padding="1rem">
            <MobileMenuCloseButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </MobileMenuCloseButton>
          </Box>

          <MobileMenuItems
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <Dropdown variant="standard" value={fullName}>
              <Select value={fullName} input={<InputBase />}>
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </Dropdown>
          </MobileMenuItems>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
