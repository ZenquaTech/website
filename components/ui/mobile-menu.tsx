"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
  makeStyles,
  styled,
  useTheme,
} from "@material-ui/core";
import { createTheme } from "@mui/material/styles";
//import { makeStyles } from "@material-ui/core/styles";

const useGlobalStyles = makeStyles({
  "@global": {
    ".MuiPaper-root::-webkit-scrollbar": {
      width: "2px",
    },
    ".MuiPaper-root::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(100, 100, 100, 0.6)",
      borderRadius: "6px",
    },
    ".MuiPaper-root::-webkit-scrollbar-track": {
      backgroundColor: "rgba(200, 200, 200, 0.3)",
      borderRadius: "6px",
    },
  },
});

import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { number } from "prop-types";
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    marginBottom: "3em",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  logo: {
    height: 25,
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      height: 20,
    },
    [theme.breakpoints.down("xs")]: {
      height: 20,
    },
  },
  logoContainer: {
    marginLeft: "6em",
    marginRight: "4em",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "1em",
      marginLeft: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  tabContainer: {
    marginRight: "auto",
  },
  tab: {
    ...theme.typography,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: "rgb(34 43 69)",
    borderBottom: "#F037A5",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: "black",
    color: "white",
    borderBottom: "#F037A5",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
    width: "17em",
  },
  drawerItem: {
    ...theme.typography,
    opacity: 1,
    fontSize: "16px",
    fontWeight: 500,
  },
  drawerItemEstimate: {
    "&:hover": {},
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
      backgroundColor: "red",
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "rgb(34 43 69)",
    borderBottom: "#F037A5",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
    paddingRight: "5%",
  },
  searchIcon: {
    padding: theme.spacing(0, 0.2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid black",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const menuData = [
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        subMenu: [
          { title: "Partnerships", href: "/partnership" },
          { title: "Engagement Models" },
          { title: "Global Delivery Models" },
          { title: "Contact Us" },
        ],
      },
      {
        title: "PRODUCTS",
        subMenu: [{ title: "Infinity SMS" }],
      },
      {
        title: "INSIGHTS",
        subMenu: [
          { title: "Blogs", href: "/blogs" },
          { title: "White Papers" },
          { title: "Videos", href: "/videos" },
        ],
      },
      {
        title: "CAREERS",
        subMenu: [
          { title: "Open Positions", href: "/open" },
          { title: "Why Join Us", href: "/why" },
        ],
      },
    ],
  },
  {
    title: "Technologies",
    items: [
      {
        title: "BACKEND",
        href: "/backend",
        subMenu: [
          { title: "NodeJS", href: "/backend/nodejs" },
          { title: "NestJS", href: "/backend/nestjs" },
          { title: "Python", href: "/backend/python" },
        ],
      },
      {
        title: "FRONTEND",
        subMenu: [
          { title: "AngularJS", href: "/frontend/angular" },
          { title: "ReactJS", href: "/frontend/react" },
          { title: "VueJS", href: "/frontend/vue" },
          { title: "NextJS", href: "/frontend/next" },
        ],
      },
      {
        title: "MOBILE",
        subMenu: [
          { title: "iOS", href: "/mobile/ios" },
          { title: "Android", href: "/mobile/android" },
          { title: "Swift", href: "/mobile/swift" },
          { title: "Flutter", href: "/mobile/flutter" },
          { title: "React Native", href: "/mobile/reactnative" },
        ],
      },
      {
        title: "E-Commerce",
        subMenu: [
          { title: "Woo Commerce", href: "/ecommerce/woo" },
          { title: "Magento", href: "/ecommerce/magento" },
          { title: "Shopify", href: "/ecommerce/shopify" },
          { title: "Nop Commerce", href: "/ecommerce/nop" },
        ],
      },
      {
        title: "CMS",
        subMenu: [
          { title: "WordPress", href: "/cms/wordpress" },
          { title: "Drupal", href: "/cms/drupal" },
        ],
      },
      {
        title: "FRAMEWORKS",
        subMenu: [
          { title: "Django", href: "/framework/django" },
          { title: "MEAN Stack", href: "/framework/mern" },
          { title: "Ruby on Rails", href: "/framework/ror" },
        ],
      },
      {
        title: "DATABASE",
        subMenu: [
          { title: "MYSQL", href: "/database/mysql" },
          { title: "PostgreSQL", href: "/database/postgresql" },
          { title: "MongoDB", href: "/database/mongodb" },
          { title: "Redis", href: "/database/redis" },
          { title: "Firebase", href: "/database/firebase" },
        ],
      },
      {
        title: "CLOUD",
        subMenu: [
          { title: "AWS Cloud", href: "/cloud/aws" },
          { title: "Azure Cloud", href: "/cloud/azure" },
          { title: "Google Cloud", href: "/cloud/google" },
          { title: "" },
          { title: "" },
        ],
      },
      {
        title: "DIGITAL MARKETING",
        subMenu: [
          { title: "SEO", href: "digital/seo" },
          { title: "SMO", href: "digital/smo" },
        ],
      },
    ],
  },
  {
    title: "Hire Developers",
    items: [
      {
        title: "BACKEND Developers",
        subMenu: [
          { title: "NodeJS Developer", href: "/backendD/nodejsdeveloper" },
          { title: "NestJS Developer", href: "/backendD/nestjsdeveloper" },
          { title: "Python Developer", href: "/backendD/pythondeveloper" },
        ],
      },
      {
        title: "FRONTEND Developers",
        subMenu: [
          { title: "AngularJS Developer", href: "/frontendD/angulardeveloper" },
          { title: "ReactJS Developer", href: "/frontendD/reactjsdeveloper" },
          { title: "VueJS Developer", href: "/frontendD/vuejsdeveloper" },
          { title: "NextJS Developer", href: "/frontendD/nextjsdeveloper" },
        ],
      },
      {
        title: "MOBILE Developer",
        subMenu: [
          { title: "iOS Developer", href: "/mobileD/ios" },
          { title: "Android Developer", href: "/mobileD/reactnative" },
          { title: "Swift Developer", href: "/mobileD/flutter" },
          { title: "Flutter Developer", href: "/mobileD/" },
          { title: "React Native Developer", href: "/mobileD/" },
        ],
      },
      {
        title: "E-Commerce Developers",
        subMenu: [
          { title: "Woo Commerce Developer" },
          { title: "Magento Developer" },
          { title: "Shopify Developer" },
          { title: "Nop Commerce Developer" },
        ],
      },
      {
        title: "CMS Developer",
        subMenu: [
          { title: "WordPress Developer" },
          { title: "Drupal Developer" },
        ],
      },
      {
        title: "FRAMEWORKS Developer",
        subMenu: [
          { title: "Laravel Developer" },
          { title: "Django Developer" },
          { title: "MEAN Stack Developer" },
          { title: "Ruby on Rails Developer" },
        ],
      },
      {
        title: "DATABASE Developers",
        subMenu: [
          { title: "MYSQL Developer" },
          { title: "PostgreSQL Developer" },
          { title: "MongoDB Developer" },
          { title: "Redis Developer" },
          { title: "Oracle Developer" },
          { title: "Firebase Developer" },
        ],
      },
      {
        title: "DEVOPS developers",
        subMenu: [
          { title: "AWS Engineer developer" },
          { title: "Azure Engineer developer" },
          { title: "Google Cloud Engineer developer" },
          { title: "" },
          { title: "" },
        ],
      },
    ],
  },

  {
    title: " Expertise",
    items: [
      {
        title: "Expertise",
        subMenu: [
          { title: "ReactJS Developer" },
          { title: "React Native Developer" },
          { title: "NodeJS Developer" },
          { title: "NextJS Developer" },
          { title: "Ruby on Rails" },
        ],
      },
    ],
  },
  {
    title: "Our Work",
    items: [{ title: "BACKEND DEVELOPERS", subMenu: [] }],
  },
];

export default function MobileMenu() {
  const classes = useStyles();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState(0);
  const [openSubItem, setOpenSubItem] = useState(0);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? 0 : index);
  };

  const handleSubItemToggle = (index:number) => {
    setOpenSubItem(openSubItem === index ? 0 : index);
  };

  const [selected, setSelected] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [selectedSubTitle, setSelectedSubTitle] = useState(0);

  const handleSelect = (index:number) => {
    setSelected(index);
  };
  const handleSelectTitle = (index:number) => {
    setSelectedTitle(index);
  };
  const handleSelectSubTitle = (index:number) => {
    setSelectedSubTitle(index);
  };

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];
  const [opend, setOpend] = useState(false);

  const handleClickd = () => {
    setOpend(!opend);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  useGlobalStyles();
  return (
    <div>
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      <SwipeableDrawer
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpen={() => setMobileNavOpen(true)}
        classes={{ paper: classes.drawer }}     
      >
        <List disablePadding>
          <ListItem
            button
            style={{ marginBottom: "50px" }}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} />
          </ListItem>
          {menuData.map((menu, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={() => {
                  handleSubMenuToggle(index);
                  handleSelect(index);
                }}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText
                  className={classes.drawerItem}
                  style={{ color: selected === index ? "blue" : "white" }}
                  primary={menu.title}
                />
                {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menu.items.map((item, subIndex) => (
                    <React.Fragment key={subIndex}>
                      <ListItem
                        classes={{
                          root: classes.menuItem,
                        }}
                        button
                        onClick={() => {
                          handleSubItemToggle(subIndex);
                          handleSelectTitle(subIndex);
                        }}
                      >
                        <Box className="w-full flex justify-between">
                          <Link
                            key={subIndex}
                            href={item.href ? item.href : "/"}
                            passHref
                            className="w-1/2"
                          >
                            <ListItemText
                              className={classes.drawerItem}
                              style={{
                                color:
                                  selectedTitle === subIndex ? "blue" : "white",
                              }}
                              primary={item.title}
                            />
                          </Link>
                          <Box className="w-1/2 flex justify-end">
                            {openSubItem === subIndex ? (
                              <ExpandLess />
                            ) : (
                              <ExpandMore />
                            )}
                          </Box>
                        </Box>
                      </ListItem>

                      <Collapse
                        in={openSubItem === subIndex}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {item.subMenu.map((subItem, subItemIndex) => (
                            <ListItem
                              classes={{
                                root: classes.menuItem,
                                // selected: classes.drawerItemSelected,
                              }}
                              key={subItemIndex}
                              button
                            >
                              <Link
                                key={subItemIndex}
                                href={subItem.href ? subItem.href : "/"}
                                passHref
                              >
                                <ListItemText
                                  className={classes.drawerItem}
                                  primary={subItem.title}
                                  onClick={() => {
                                    setMobileNavOpen(false);
                                    handleSelectSubTitle(subIndex);
                                  }}
                                  style={{
                                    color:
                                      selectedSubTitle === subItemIndex
                                        ? "blue"
                                        : "white",
                                  }}
                                />
                              </Link>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
          <button
            onClick={() => {
              scrollToBottom();
              setMobileNavOpen(false);
            }}
            style={{
              width: " 100%",
              fontSize: "15px",
              textAlign: "start",
              padding: "15px",
            }}
          >
            Contact Us
          </button>
        </List>
      </SwipeableDrawer>
    </div>
  );
}
