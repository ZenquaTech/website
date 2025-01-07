"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  makeStyles,
} from "@material-ui/core";
import { Add,Clear } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    ...theme.typography,
  },
  drawer: {
   scrollBehavior: "smooth",
    scrollbarWidth:"none",
    backgroundColor: "#1B1A1F",
    color: "white",
    borderBottom: "#F037A5",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
    width: "17em",
  },
  drawerItem: {
    ...theme.typography,
    fontSize: "16px",
    fontWeight: 500,
  },
  buttonConfig: {
    color: "#ffffffbf",
    "&:hover": {
      color: "#019dce",
    },
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "DM Sans, sans-serif",
    textTransform: "capitalize",
    width: " 100%",
    textAlign: "start",
    padding: "15px",
  },
  menuTitle: {
    color: "#ffffffbf",
    "&:hover": {
      color: "#019dce",
    },
    "& .MuiListItemText-root": {},

    "& .MuiListItemText-primary": {
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: "DM Sans, sans-serif",
      textTransform: "capitalize",
    },
  },
  subMenuItemStyle: {
    color: "#ffffffa6",
    opacity: 0.9,
    "&:hover": {
      color: "#019dce",
    },
    "& .MuiListItemText-primary": {
      fontFamily: "DM Sans, sans-serif",
      textTransform: "capitalize",
      fontWeight: "bold",
      marginRight: "20px",
      fontSize: "12.544px",
    },
  },
  subMenuTitleStyle: {
    color: "#ffffffa6",
    "&:hover": {
      color: "#019dce",
    },
    "& .MuiListItemText-primary": {
      fontFamily: "DM Sans, sans-serif",
      fontWeight: "bold",
      opacity: "0.65",
      fontSize: "12.544px",
    },
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      // opacity: 1,
      backgroundColor: "red",
      color: "orange",
    },
  },
}));


const menuData = [
  {
    title: "Company",
    items: [
      {
        title: "ABOUT US",
        href: "/",
        subMenu: [
          { title: "Partnerships", href: "/Partnerships" },
        ],
      },
      {
        title: "CAREERS",
        href: "/",
        subMenu: [
          { title: "Why Join Us", href: "/why-join-us" },
        ],
      },
    ],
  },
  {
    title: "Technologies",
    items: [
      {
        title: "BACKEND",
        href: "/",
        subMenu: [
          { title: "NodeJS", href: "/backend/nodejs" },
          { title: "NestJS", href: "/backend/nestjs" },
          { title: "ROR", href: "/backend/ror" },
        ],
      },
      {
        title: "FRONTEND",
        href: "/",
        subMenu: [
          { title: "AngularJS", href: "/frontend/angular" },
          { title: "ReactJS", href: "/frontend/react" },
          { title: "VueJS", href: "/frontend/vue" },
          { title: "NextJS", href: "/frontend/next" },
        ],
      },
      {
        title: "MOBILE",
        href: "/",
        subMenu: [{ title: "React Native", href: "/mobile/reactnative" }],
      },
      {
        title: "E-COMMERCE",
        href: "/",
        subMenu: [
          { title: "Woo Commerce", href: "/ecommerce/woo" },
          { title: "Magento", href: "/ecommerce/magento" },
          { title: "Shopify", href: "/ecommerce/shopify" },
          { title: "Nop Commerce", href: "/ecommerce/nop" },
        ],
      },
      {
        title: "CMS",
        href: "/",
        subMenu: [{ title: "WordPress", href: "/cms/wordpress" }],
      },
      {
        title: "FRAMEWORKS",
        href: "/",
        subMenu: [
          { title: "MERN Stack", href: "/framework/mern" },
          { title: "MEAN Stack", href: "/framework/mean" },
          { title: "Ruby on Rails", href: "/framework/ror" },
        ],
      },
      {
        title: "DATABASE",
        href: "/",
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
        href: "/",
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
        href: "/",
        subMenu: [{ title: "SEO", href: "/digital/seo" }],
      },
    ],
  },
  {
    title: "Hire Developers",
    items: [
      {
        title: "BACKEND DEVELOPERS",
        href: "/",
        subMenu: [
          { title: "NodeJS Developer", href: "/backend/nodejs" },
          { title: "NestJS Developer", href: "/backend/nestjs" },
          { title: "ROR Developer", href: "/backend/ror" },
        ],
      },
      {
        title: "FRONTEND DEVELOPERS",
        href: "/",
        subMenu: [
          { title: "AngularJS Developer", href: "/frontend/angular" },
          { title: "ReactJS Developer", href: "/frontend/react" },
          { title: "VueJS Developer", href: "/frontend/vue" },
          { title: "NextJS Developer", href: "/frontend/next" },
        ],
      },
      {
        title: "MOBILE DEVELOPERS",
        href: "/",
        subMenu: [
          { title: "React Native Developer", href: "/mobile/reactnative" },
        ],
      },
      {
        title: "E-COMMERCE DEVELOPERS",
        href: "/",
        subMenu: [
          { title: "Woo Commerce Developer", href: "/ecommerce/woo" },
          { title: "Magento Developer", href: "/ecommerce/magento" },
          { title: "Shopify Developer", href: "/ecommerce/shopify" },
          { title: "Nop Commerce Developer", href: "/ecommerce/nop" },
        ],
      },
      {
        title: "CMS DEVELOPERS",
        href: "/",
        subMenu: [{ title: "WordPress Developer", href: "/cms/wordpress" }],
      },
      {
        title: "FRAMEWORKS DEVELOPERS",
        href: "/",
        subMenu: [
          { title: "MERN Stack Developer", href: "/framework/mern" },
          { title: "MEAN Stack Developer", href: "/framework/mean" },
          { title: "Ruby on Rails Developer", href: "/framework/ror" },
        ],
      },
      {
        title: "DATABASE DEVELOPERS",
        href: "/",
        subMenu: [
          { title: "MYSQL Developer", href: "/database/mysql" },
          { title: "PostgreSQL Developer", href: "/database/postgresql" },
          { title: "MongoDB Developer", href: "/database/mongodb" },
          { title: "Redis Developer", href: "/database/redis" },
          { title: "Firebase Developer", href: "/database/firebase" },
        ],
      },
      {
        title: "DEVOPS DEVELOPERS",
        href: "/",
        subMenu: [
          { title: "AWS Engineer developer", href: "/cloud/aws" },
          { title: "Azure Engineer developer", href: "/cloud/azure" },
          { title: "Google Cloud Engineer developer", href: "/cloud/google" },
        ],
      },
    ],
  },
  {
    title: "Expertise",
    href: "/",
    items: [
      {
        title: "ReactJS Developer",
        href: "/frontend/react",
        subMenu: [],
      },
      {
        title: "React Native Developer",
        href: "/mobile/reactnative",
        subMenu: [],
      },
      {
        title: "NodeJS Developer",
        href: "/backend/nodejs",
        subMenu: [],
      },
      {
        title: "NodeJS Developer",
        href: "/frontend/next",
        subMenu: [],
      },
      {
        title: "Ruby on Rails",
        href: "/backend/ror",
        subMenu: [],
      },
    ],
  },
];

export default function MobileMenu() {
  const classes = useStyles();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [openSubItem, setOpenSubItem] = useState<number | null>(null);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleSubItemToggle = (index:number) => {
    setOpenSubItem(openSubItem === index ? null : index);
  };


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

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
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
            classes={{ selected: classes.drawerItemSelected }}
            style={{
              marginBottom: "50px",
            }}
          >
            <ListItemText className={classes.drawerItem} />
          </ListItem>
          {menuData.map((menu, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={() => {
                  handleSubMenuToggle(index);
                }}
                className={classes.menuTitle}
                classes={{ selected: classes.menuTitle }}
              >
                <ListItemText
                  className={classes.menuTitle}
                  primary={menu.title}
                />
                {openSubMenu === index ? (
                  <Clear style={{ fontSize: "15px" }} />
                ) : (
                  <Add style={{ fontSize: "15px" }} />
                )}
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
                        }}
                        className={classes.subMenuItemStyle}
                      >
                        <Box className="w-full flex justify-between">
                          {item.href !== "/" ? (
                            <Link
                              key={subIndex}
                              href={item.href ? item.href : "/"}
                              passHref
                              className="w-1/2"
                            >
                              <ListItemText
                                onClick={() => {
                                  setMobileNavOpen(false);
                                }}
                                className={classes.subMenuItemStyle}
                                primary={item.title}
                              />
                            </Link>
                          ) : (
                            <ListItemText
                              className={classes.subMenuItemStyle}
                              primary={item.title}
                            />
                          )}
                          {item.subMenu.length > 0 && (
                            <Box className="w-1/2 flex justify-end">
                              {openSubItem === subIndex ? (
                                <Clear style={{ fontSize: "15px" }} />
                              ) : (
                                <Add style={{ fontSize: "15px" }} />
                              )}
                            </Box>
                          )}
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
                              }}
                              key={subItemIndex}
                              button
                              className={classes.subMenuTitleStyle}
                              onMouseOver={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.color = "#019dce";
                              }}
                              onMouseOut={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.color = "#ffffffbf";
                              }}
                            >
                              <Link
                                key={subItemIndex}
                                href={subItem.href ? subItem.href : "/"}
                                passHref
                              >
                                <ListItemText
                                  className={classes.subMenuTitleStyle}
                                  primary={subItem.title}
                                  onClick={() => {
                                    setMobileNavOpen(false);
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
            className={classes.buttonConfig}
          >
            Contact Us
          </button>
        </List>
      </SwipeableDrawer>
    </div>
  );
}
