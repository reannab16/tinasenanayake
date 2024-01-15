"use client"
import React from "react";
import { LinkType } from "../nav/NavBar";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Open_Sans } from "next/font/google";
import { opensans } from "@/app/layout";
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import {
  usePopupState,
  bindHover,
  bindFocus,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import theme from "@/app/styles/theme";

const StyledMenu = styled((props: MenuProps) => (
    <HoverMenu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(3),
      minWidth: 180,
      color:
        theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 12,
          color: theme.palette.primary.contrastText,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

export default function DropDown({name, link, dropdown}: LinkType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const popupState = usePopupState({
      variant: 'popover',
      popupId: 'demoMenu',
    })
  const open = Boolean(anchorEl);
  


  return (
    <div>
      <Button
        variant="contained"
        {...bindHover(popupState)}
        {...bindFocus(popupState)}
        disableElevation
        sx={{
            borderRadius: "9999px",
            textTransform: 'none',
            color: "#6B5539",
            height: "auto",
            paddingY: "3px",
            paddingX: "12px",
            backgroundColor: "#C296C7",
          

            '&.MuiButton-root': {
              backgroundColor: popupState.isOpen ? "#C296C7" : "#FFFBF3",
              color: popupState.isOpen ? "#FFFBF3" : "#6B5539",
              '&:hover': {
                color: "#FFFBF3",
                backgroundColor: "#C296C7"
            },
            '&:active': {
                color: "#FFFBF3",
                backgroundColor: "#C296C7",
            },
            }
            

        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        options
      </Button>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 40, horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        sx={{
          '& .MuiPaper-root': {
            // borderRadius: 4,
            // marginTop: theme.spacing(3),
            minWidth: 180,
            color:
              theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
            boxShadow:
              'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
              padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
              '& .MuiSvgIcon-root': {
                fontSize: 12,
                color: theme.palette.primary.contrastText,
                marginRight: theme.spacing(1.5),
              },
              '&:active': {
                backgroundColor: alpha(
                  theme.palette.primary.main,
                  theme.palette.action.selectedOpacity,
                ),
              },
            },
          },
        }}
      >
        <MenuItem onClick={popupState.close} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={popupState.close} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        {/* <Divider sx={{ my: 0.5, color: "#FFFBF3" }} /> */}
        <div className="w-full h-[1px] bg-[var(--trans-cream)] my-1"></div>
        <MenuItem onClick={popupState.close} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={popupState.close} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </HoverMenu>
    </div>
  );

    

}