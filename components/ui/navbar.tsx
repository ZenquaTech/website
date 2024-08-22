"use client";
import React, { useState } from "react";
import { Grid, Button, Paper, Typography, Box } from "@material-ui/core";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link from "next/link";

const styles = (theme: Theme) =>
  createStyles({
    menu: {
      color: "white",
      backgroundColor: "black",
      borderRadius: "20px",
      marginTop: "40px",
      "& .MuiMenuItem-root": {
        width: "100vw",
      },
    },
    menuItem: {
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    },
  });

interface NavbarProps {
  classes: {
    menu: string;
    menuItem: string;
  };
}

interface NavbarState {
  openMenu: string | null;
  isMenuOpen: boolean;
}

interface SubMenuItem {
  title: string;
  href?: string;
}

interface MenuItem {
  title: string;
  href?: string;
  subMenu: SubMenuItem[];
}

interface MenuData {
  [key: string]: {
    title: string;
    items: MenuItem[];
  };
}

const menuData: MenuData = {
  Company: {
    title: "COMPANY",
    items: [
      {
        title: "ABOUT US",
        subMenu: [
          { title: "Partnerships", href: "/Partnerships" },
          { title: "Engagement Models", href: "/EngagementModel" },
          { title: "Global Delivery Models", href: '/Global' },
          { title: "Contact Us", href: '/ContactUs' },
        ],
      },
      {
        title: "INSIGHTS",
        subMenu: [
          { title: "Blogs" },
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
  Technologies: {
    title: "TECHNOLOGIES",
    items: [
      {
        title: "BACKEND", href: "/backend",
        subMenu: [
          { title: "NodeJS", href: "/backend/nodejs" },
          { title: "NestJS", href: "/backend/nestjs" },
          { title: "ROR", href: "/backend/ror" },
        ],
      },
      {
        title: "FRONTEND",
        subMenu: [
          { title: "AngularJS", href: '/frontend/angular' },
          { title: "ReactJS", href: '/frontend/react' },
          { title: "VueJS", href: '/frontend/vue' },
          { title: "NextJS", href: '/frontend/next' },
        ],
      },
      {
        title: "MOBILE",
        subMenu: [
          { title: "React Native", href: '/mobile/reactnative' },
        ],
      },
      {
        title: "E-Commerce",
        subMenu: [
          { title: "Woo Commerce" , href:'/ecommerce/woo' },
          { title: "Magento" , href:'/ecommerce/magento' },
          { title: "Shopify" , href:'/ecommerce/shopify'},
          { title: "Nop Commerce" , href:'/ecommerce/nop' },
        ],
      },
      {
        title: "CMS",
        subMenu: [
          { title: "WordPress" , href:'/cms/wordpress' },
        ],
      },
      {
        title: "FRAMEWORKS",
        subMenu: [
          { title: "MERN Stack" , href:'/framework/mern' },
          { title: "MEAN Stack", href:'/framework/mean' },
          { title: "Ruby on Rails", href:'/framework/ror' },
        ],
      },
      {
        title: "DATABASE",
        subMenu: [
          { title: "MYSQL" , href:'/database/mysql' },
          { title: "PostgreSQL", href:'/database/postgresql'  },
          { title: "MongoDB", href:'/database/mongodb'  },
          { title: "Redis" , href:'/database/redis' },
          { title: "Firebase" , href:'/database/firebase' },
        ],
      },
      {
        title: "CLOUD",
        subMenu: [
          { title: "AWS Cloud", href:'/cloud/aws' },
          { title: "Azure Cloud" ,href:'/cloud/azure'},
          { title: "Google Cloud" ,href:'/cloud/google'},
          { title: "" },
          { title: "" },
        ],
      },
      {
        title: "DIGITAL MARKETING",
        subMenu: [
          { title: "SEO" , href:"/digital/seo" },
        ],
      },
    ],
  },

  "Hire Developers": {
    title: "Hire Developers",
    items: [
      {
        title: "BACKEND Developers" ,
        subMenu: [
          { title: "NodeJS Developer" , href:"/backend/nodejs" },
          { title: "NestJS Developer" , href:"/backend/nestjs" },
          { title: "ROR Developer" , href:"/backend/ror" },
        ],
      },
      {
        title: "FRONTEND Developers",
        subMenu: [
          { title: "AngularJS Developer" , href:'/frontend/angular' },
          { title: "ReactJS Developer"  ,  href:'/frontend/reactjs' },
          { title: "VueJS Developer" ,  href:'/frontend/vuejs' },
          { title: "NextJS Developer" ,  href:'/frontend/nextjs' },
        ],
      },
      {
        title: "MOBILE Developer",
        subMenu: [
          { title: "React Native Developer" , href:'/mobile/reactnative'},
        ],
      },
      {
        title: "E-Commerce Developers",
        subMenu: [
          { title: "Woo Commerce Developer" , href:'/ecommerce/woo' },
          { title: "Magento Developer" , href:'/ecommerce/magento' },
          { title: "Shopify Developer" , href:'/ecommerce/shopify'},
          { title: "Nop Commerce Developer" , href:'/ecommerce/nop' },
        ],
      },
      {
        title: "CMS Developer",
        subMenu: [
          { title: "WordPress Developer", href:'/cms/wordpress' },
        ],
      },
      {
        title: "FRAMEWORKS Developer",
        subMenu: [
          { title: "MERN Stack Developer" , href:'/framework/mern' },
          { title: "MEAN Stack Developer", href:'/framework/mean' },
          { title: "Ruby on Rails Developer", href:'/framework/ror' },
        ],
      },
      {
        title: "DATABASE Developers",
        subMenu: [
          { title: "MYSQL Developer" , href:'/database/mysql' },
          { title: "PostgreSQL Developer", href:'/database/postgresql'  },
          { title: "MongoDB Developer", href:'/database/mongodb'  },
          { title: "Redis Developer" , href:'/database/redis' },
          { title: "Firebase Developer" , href:'/database/firebase' },
        ],
      },
      {
        title: "DEVOPS developers",
        subMenu: [
          { title: "AWS Engineer developer",href:'/cloud/aws' },
          { title: "Azure Engineer developer" ,href:'/cloud/azure' },
          { title: "Google Cloud Engineer developer",href:'/cloud/google' },
        ],
      },
    ],
  },
  "Expertise": {
    title: "Expertise",
    items: [{ title: "", 
    subMenu: [
    { title: "ReactJS Developer", href:'/frontend/reactjs'},
    { title: "React Native Developer" , href:'/mobile/reactnative'},
    { title: "NodeJS Developer", href:"/backend/nodejs" },
    { title: "NextJS Developer" , href:'/frontend/nextjs'},
    { title: "Ruby on Rails", href:"/backend/ror" },
  ] 
}],
  },
};

class Navbar extends React.Component<NavbarProps, NavbarState> {
  state: NavbarState = {
    openMenu: null,
    isMenuOpen: false,
  };

  handleMenuEnter = (menu: string) => () => {
    this.setState({ openMenu: menu });
  };
  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  handleMenuLeave = () => {
    this.setState({ openMenu: null });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };
handleItemClick = () => {
  this.setState({ openMenu: null });
  };
  

  render() {
    const { classes } = this.props;
    const { openMenu } = this.state;

    return (
      <Grid
        container
        direction="column"
        style={{ color: "white", display: "flex", justifyContent: "center" }}
      >
        <div>
          {Object.keys(menuData).map((menu) => (
            <div
              key={menu}
              style={{ display: "inline-block", marginRight: "20px" }}
            >
              <Button
                aria-controls={`${menu}-menu`}
                aria-haspopup="true"
                onMouseEnter={this.handleMenuEnter(menu)}
                onMouseLeave={this.handleMenuLeave}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = "#019dce";
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = "#ffffffbf";
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    color: "rgba(255, 255, 255, 0.75)",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {menu}
                 
                </Box>
              </Button>
              {menu !== "Expertise" && openMenu === menu  && (
                <div
                  onMouseEnter={this.handleMenuEnter(menu)}
                  onMouseLeave={this.handleMenuLeave}
                  style={{
                    position: "absolute",
                    backgroundColor: "#1B1A1F",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 10,
                    borderRadius: "20px",
                    left: 10,
                    right: 10,
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Paper
                        style={{
                          borderRadius: "20px",
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "#1B1A1F",
                          padding: "3% 7%",
                          width: "100vw",
                        }}
                      >
                        <Box style={{ display: "flex", flexDirection: "row" }}>
                          {menuData[menu].items.map((item, itemIndex) => (
                            <Box
                              key={itemIndex}
                              display="flex"
                              flexDirection="column"
                              marginBottom="10px"
                              style={{ flex: 1, margin: "0 10px" }}
                            >
                               <Link
                                      href={item.href ? item.href : "/"}
                                      passHref
                                    >
                              <Typography
                                style={{
                                  color: "#ffffffa6",
                                  opacity: "0.65",
                                  fontWeight: "bold",
                                  marginRight: "20px",
                                  fontSize: "12.544px",
                                  cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.color = "#019dce";
                                }}
                                onMouseOut={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.color = "#ffffffbf";
                                }}
                              >
                                {item.title}
                              </Typography>
                              </Link>
                              {item?.subMenu?.length > 0 && (
                                <Box display="flex" flexDirection="column">
                                  {item.subMenu.map((subItem, subItemIndex) => (
                                    <Link
                                      key={subItemIndex}
                                      href={subItem.href ? subItem.href : "/"}
                                      passHref
                                      onClick={this.handleItemClick}
                                    >
                                      <Typography
                                        component="a"
                                        key={subItemIndex}
                                        style={{
                                          color: "#ffffffbf",
                                          fontSize: "12px",
                                          fontWeight: "400",
                                          cursor: "pointer",
                                          opacity: "0.75",
                                          lineHeight:'1.8rem'
                                        }}
                                        onMouseOver={(e) => {
                                          const target = e.target as HTMLElement;
                                          target.style.color = "#019dce";
                                        }}
                                        onMouseOut={(e) => {
                                          const target = e.target as HTMLElement;
                                          target.style.color = "#ffffffbf";
                                        }}
                                        
                                      >
                                        {subItem.title}
                                      </Typography>
                                    </Link>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              )}
              {menu === "Expertise" && openMenu === menu
                && (
                  <div
                  onMouseEnter={this.handleMenuEnter(menu)}
                  onMouseLeave={this.handleMenuLeave}
                  style={{
                    position: "absolute",
                    backgroundColor:"red",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 10,
                    borderRadius: "20px",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Paper
                        style={{
                          borderRadius: "5.6px",
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "#1B1A1F",
                          
                          padding: "10% 0px",
                          width: "216px",
                        }}
                      >
                        <Box style={{ display: "flex", flexDirection: "row" }}>
                          {menuData[menu].items.map((item, itemIndex) => (
                            <Box
                              key={itemIndex}
                              display="flex"
                              flexDirection="column"
                              marginBottom="10px"
                              style={{ flex: 1, margin: "0 10px" }}
                            >
                               <Link
                                      href={item.href ? item.href : "/"}
                                      passHref
                                    >
                              <Typography
                                style={{
                                  color: "#ffffffa6",
                                  opacity: "0.65",
                                  fontWeight: "bold",
                                  marginRight: "20px",
                                  fontSize: "12.544px",
                                  cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.color = "#019dce";
                                }}
                                onMouseOut={(e) => {
                                  const target = e.target as HTMLElement;
                                  target.style.color = "#ffffffbf";
                                }}
                              >
                                {item.title}
                              </Typography>
                              </Link>
                              {item.subMenu.length > 0 && (
                                <Box display="flex" flexDirection="column">
                                  {item.subMenu.map((subItem, subItemIndex) => (
                                    <Link
                                      key={subItemIndex}
                                      href={subItem.href ? subItem.href : "/"}
                                      passHref
                                    >
                                      <Typography
                                        component="a"
                                        key={subItemIndex}
                                        style={{
                                          color: "#ffffffbf",
                                          fontSize: "12px",
                                          fontWeight: "400",
                                          cursor: "pointer",
                                          opacity: "0.75",
                                          lineHeight:'1.8rem'
                                        }}
                                        onMouseOver={(e) => {
                                          const target = e.target as HTMLElement;
                                          target.style.color = "#019dce";
                                        }}
                                        onMouseOut={(e) => {
                                          const target = e.target as HTMLElement;
                                          target.style.color = "#ffffffbf";
                                        }}
                                        onClick={()=>this.handleMenuLeave}
                                      >
                                        {subItem.title}
                                      </Typography>
                                    </Link>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
                )
              }
            </div>
          ))}
           <Button
             onClick={() => {
              this.scrollToBottom();
            }}
              >
                <Box
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Contact Us
                </Box>
              </Button>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Navbar);
