import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import arrowIosForwardFill from "@iconify/icons-eva/arrow-ios-forward-fill";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  List,
  Drawer,
  Link,
  Collapse,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Button,
} from "@material-ui/core";
// components
import Logo from "../../components/Logo";
import NavSection from "../../components/NavSection";
import Scrollbar from "../../components/Scrollbar";
import { MIconButton } from "../../components/@material-extend";
//
import menuConfig from "./MenuConfig";

// ----------------------------------------------------------------------

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: "capitalize",
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  isOpen: PropTypes.bool,
  isActive: PropTypes.bool,
  onOpen: PropTypes.func,
};

function MenuMobileItem({ item, name, isOpen, isActive, onOpen }) {
  const { title, path, icon, children } = item;

  if (children) {
    return (
      <div key={title}>
        <ListItemStyle button onClick={() => onOpen(path)}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Box
            component={Icon}
            icon={
              name === path && isOpen
                ? arrowIosDownwardFill
                : arrowIosForwardFill
            }
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        {name === path && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
              <NavSection
                navConfig={children}
                sx={{
                  "&.MuiList-root:last-child .MuiListItem-root": {
                    height: 200,
                    backgroundSize: "92%",
                    backgroundPosition: "center",
                    bgcolor: "background.neutral",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      "url(/static/illustrations/illustration_dashboard.png)",
                    "& > *:not(.MuiTouchRipple-root)": { display: "none" },
                  },
                  "& .MuiListSubheader-root": {
                    pl: PADDING,
                    display: "flex",
                    alignItems: "center",
                    "&:before": {
                      ml: "6px",
                      mr: "22px",
                      width: 8,
                      height: 2,
                      content: "''",
                      borderRadius: 2,
                      bgcolor: "currentColor",
                    },
                  },
                  "& .MuiListItem-root": {
                    pl: PADDING,
                    "&:before": { display: "none" },
                    "&.active": {
                      color: "primary.main",
                      bgcolor: "transparent",
                    },
                  },
                  "& .MuiListItemIcon-root": {
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    "&:before": {
                      width: 4,
                      height: 4,
                      content: "''",
                      borderRadius: "50%",
                      bgcolor: "currentColor",
                    },
                  },
                }}
              />
            </Box>
          </Collapse>
        )}
      </div>
    );
  }

  return (
    <ListItemStyle
      button
      key={title}
      to={path}
      component={RouterLink}
      sx={{
        ...(isActive && {
          color: "primary.main",
          fontWeight: "fontWeightMedium",
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
        }),
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}

MenuMobile.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
};

export default function MenuMobile({ isOffset, isHome }) {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleOpen = (name) => {
    setOpen(!open);
    setName(name);
  };

  return (
    <>
      <MIconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: "common.white" }),
          ...(isOffset && { color: "text.primary" }),
        }}
      >
        <Icon icon={menu2Fill} />
      </MIconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Link component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
            <Logo sx={{ mx: PADDING, my: 3 }} />
          </Link>

          <List disablePadding>
            {menuConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                name={name}
                isOpen={open}
                onOpen={handleOpen}
                isActive={pathname === link.path}
              />
            ))}
          </List>

          <Stack
            spacing={2}
            sx={{ margin: "0px 20px" }}
            direction={{ xs: "column", md: "row" }}
          >
            <Button
              sx={{ borderRadius: 50 }}
              color="secondary"
              variant="outlined"
              target="_blank"
              onClick="href: PATH_PAGE.faqs"
            >
              Sign In
            </Button>
            <Button
              sx={{ borderRadius: 50 }}
              color="secondary"
              variant="contained"
              target="_blank"
              onClick="href: PATH_PAGE.faqs"
            >
              Demo
            </Button>
            <Button
              sx={{ borderRadius: 50 }}
              variant="contained"
              target="_blank"
              onClick="href: PATH_PAGE.faqs"
            >
              Free Trial
            </Button>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
