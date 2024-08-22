import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-5 md:py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        left: "-35px",
                        top: "-20px",
                      }}
                      height="150px"
                      width="150px"
                      src="/images/WhatsApp_Image_2024-03-23_at_4.37.01_PM-removebg-preview.png"
                      alt="logo"
                    />
                    <div
                      style={{
                        position: "relative",
                        left: "-20px",
                        top: "-20px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 19,
                        }}
                        className="text-gray-400"
                      >
                        Zenqua Techologies Pvt. Ltd.
                      </span>

                      <div
                        style={{
                          fontSize: 13,
                        }}
                        className="text-gray-400"
                      >
                        Our Commitment: Making Technology Work for You!
                      </div>
                    </div>
                  </div>
                </Link>
                <div
                  style={{
                    position: "relative",
                    textAlign: "justify",
                    top: "-22px",
                  }}
                  className="text-sm"
                >
                  <ul>
                    <li className="mb-1">
                      <span
                        style={{ textAlign: "justify" }}
                        className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <span style={{ color: "white", fontWeight: 600 }}>
                          Zen:{" "}
                        </span>
                        A philosophy emphasizing meditation and intuitive
                        understanding for enlightenment, transcending
                        intellectual study.
                      </span>
                    </li>
                    <li className="mb-1">
                      <div
                        style={{ textAlign: "justify" }}
                        className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <span style={{ color: "white", fontWeight: 600 }}>
                          Qua:{" "}
                        </span>
                        Latin for "in the capacity of," indicating a specific
                        role or perspective.
                      </div>
                    </li>
                    <hr className="mb-2 mt-2" />
                    <li className="mb-1">
                      <div
                        style={{ textAlign: "justify" }}
                        className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <span style={{ color: "white", fontWeight: 600 }}>
                          Zenqua:{" "}
                        </span>
                        The integration of Zen's meditative principles with a
                        defined role or perspective, promoting mindfulness and
                        intuitive clarity within that context.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {/* 2nd block */}

              {/* 3rd block */}
              <div className="text-sm ml-1">
                <h6 className="text-gray-200 font-medium mb-1">Services</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Website Development
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Full Stack Development
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Contact Us</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Shreevardhan Complex, RNT Marg, South Tukoganj, Indore,
                      Madhya Pradesh 452001
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      contact@zenqua.com
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Ph : +91 731-4028250
                    </Link>
                  </li>

                  <div className="md:flex md:items-center md:justify-between mt-28">
                    {/* Social links */}
                    <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                      {/* <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-[#019dce] bg-gray-800 hover:text-gray-100 hover:bg-[#019dce] rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li> */}

                      <li className="ml-4">
                        <Link
                          target="_blank"
                          href="https://www.linkedin.com/company/zenqua-technologies/"
                          className="flex justify-center items-center text-[#019dce] bg-gray-800 hover:text-gray-100 hover:bg-[#019dce] rounded-full transition duration-150 ease-in-out"
                          aria-label="Linkedin"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                          </svg>
                        </Link>
                      </li>

                      <li className="ml-4">
                        <Link
                          target="_blank"
                          href="https://github.com/zenqua-technologies"
                          className="flex justify-center items-center text-[#019dce] bg-gray-800 hover:text-gray-100 hover:bg-[#019dce] rounded-full transition duration-150 ease-in-out"
                          aria-label="Github"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                          </svg>
                        </Link>
                      </li>

                      <li className="ml-4">
                        <Link
                          href="https://www.instagram.com/zenqua_technologies/"
                          className="flex justify-center items-center text-[#019dce] bg-gray-800 hover:text-gray-100 hover:bg-[#019dce] rounded-full transition duration-150 ease-in-out"
                          aria-label="Instagram"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20.145" cy="11.892" r="1" />
                            <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                            <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                          </svg>
                        </Link>
                      </li>
                      <li className="ml-4">
                        <Link
                          href="https://www.facebook.com/profile.php?id=61557762022662"
                          className="flex justify-center items-center text-[#019dce] bg-gray-800 hover:text-gray-100 hover:bg-[#019dce] rounded-full transition duration-150 ease-in-out"
                          aria-label="Facebook"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>

                    {/* Copyrights note */}
                    <div className="text-gray-400 text-sm mr-4">
                      {/* &copy; Cruip.com. All rights reserved. */}
                    </div>
                  </div>

                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
        </div>
      </div>
    </footer>
  );
}

// import React, { Component } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   withStyles,
//   WithStyles,
// } from "@material-ui/core";
// import { FaFacebookF  , FaInstagram  , FaLinkedin ,  FaPinterest , FaTwitter , FaYoutube} from "react-icons/fa";

// const styles = {
//   root: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#222",
//     width: "100vw",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     "& .MuiGrid-spacing-xs-3": {
//       display: "flex",
//       justifyContent: "center",
//     },
//   },
//   column: {
//     padding: 10,
//   },
//   title: {
//     color: "#fff",
//     marginBottom: 15,
//   },
//   item: {
//     color: "grey",
//     marginBottom: 5,
//   },
//   contactInfo: {
//     color: "#fff",
//     marginTop: 30,
//   },
// };

// interface Props extends WithStyles<typeof styles> {}

// class VIVERVEFlyer extends Component<Props> {
//   render() {
//     const { classes } = this.props;

//     return (
//       <div className={classes.root} >
//         <Box style={{ width: "100%"  }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>

//               </Typography>

//               <Typography className={classes.item}>

//                 <img
//                   style={{ marginLeft: "0" , height:'150' , width:'150px' }}
//                   height="110px"
//                   width="110px"
//                   src="http://localhost:3000/images/WhatsApp_Image_2024-03-23_at_4.37.01_PM-removebg-preview.png"
//                   alt="logo"
//                 />
//                 <Box style={{ display:"flex" ,flexWrap:'wrap'}}>

//                   <Box style={{ margin:'16px' , padding:'8px' , border:'solid 1px red' , borderRadius:'50%'}}>
//                    <FaFacebookF style={{ color:'red' }} />
//                   </Box>
//                   <Box style={{margin:'16px' , padding:'8px' , border:'solid 1px red' , borderRadius:'50%'}}>
//                    <FaInstagram  style={{ color:'red' }} />
//                   </Box>
//                   <Box style={{ margin:'16px'  ,padding:'8px' , border:'solid 1px red' , borderRadius:'50%'}}>
//                    <FaLinkedin  style={{ color:'red' }} />
//                   </Box>
//                   <Box style={{ margin:'16px'  ,padding:'8px' , border:'solid 1px red' , borderRadius:'50%'}}>
//                    < FaPinterest  style={{ color:'red' }} />
//                   </Box>
//                   <Box style={{ margin:'16px'  ,padding:'8px' , border:'solid 1px red' , borderRadius:'50%'}}>
//                    <FaTwitter  style={{ color:'red' }} />
//                   </Box>
//                   <Box style={{ margin:'16px'  ,padding:'8px' , border:'solid 1px red' , borderRadius:'50%'}}>
//                    <FaYoutube  style={{ color:'red' }} />
//                   </Box>
//                 </Box>

//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 BACKEND DEVELOPERS
//               </Typography>
//               <Typography className={classes.item}>
//                 Hire PHP Developers Hire Java Developers Hire NodeJS Developers
//                 Hire NestJS Developers Hire Python Developers Hire Blockchain
//                 Developers
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 MICROSOFT DEVELOPERS
//               </Typography>
//               <Typography className={classes.item}>
//                 Hire ASP.NET Developer Hire ASP.NET Developer Hire ASP.NET
//                 Developer Hire ASP.NET Developer Hire ASP.NET Developer
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 MOBILE APP DEVELOPERS
//               </Typography>
//               <Typography className={classes.item}>
//                 Hire iOS Developer Hire Android Developer Hire Swift Developer
//                 Hire Flutter Developer Hire Ionic Developer Hire Kotlin
//                 Developer Hire ReactNative Developer Hire Xamarin Developer
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box style={{ width: "100%" }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 Write us now
//               </Typography>

//               <Typography className={classes.item}>
//                 Email: hello@i-verve.com
//               </Typography>
//               <Typography variant="h6" className={classes.title}>
//                 Write us now
//               </Typography>

//               <Typography className={classes.item}>
//                 Email: hello@i-verve.com
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 FRONTEND DEVELOPERS
//               </Typography>

//               <Typography className={classes.item}>
//                 Hire AngularJs Developer Hire ReactJs Developer Hire VueJs
//                 Developer Hire KnockoutJs Developer Hire NextJs Developer
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 DATABASE DEVELOPERS
//               </Typography>

//               <Typography className={classes.item}>
//                 Hire MSSQL Developer Hire MYSQL Developer Hire Postgres
//                 Developer Hire MongoDB Developer Hire Redis Developer Hire
//                 Oracle Developer Hire Firebase Developer
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 FRAMEWORK DEVELOPERS
//               </Typography>

//               <Typography className={classes.item}>
//                 Hire Laravel Developer Hire Codeigniter Developer Hire Django
//                 Developer Hire MEAN Stack Developer Hire CakePHP Developer Hire
//                 ROR Developer
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box style={{ width: "100%" }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 Call Now
//               </Typography>

//               <Typography className={classes.item}>
//                 Phone: +1 404-641-9041 Phone: +1 848-313-6176
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 DEVOPS &DATA
//               </Typography>

//               <Typography className={classes.item}>
//                 Hire AWS Engineer Hire Azure Engineer Hire Google Cloud Engineer
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 CMS DEVELOPERS
//               </Typography>

//               <Typography className={classes.item}>
//                 Hire WordPress Developer Hire Drupal Developer Hire Kentico
//                 Developer Hire DotNetNuke Developer
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={4} lg={2} className={classes.column}>
//               <Typography variant="h6" className={classes.title}>
//                 E-COMMERCE DEVELOPERS
//               </Typography>

//               <Typography className={classes.item}>
//                 Hire Woocommerce Developer Hire Magento Developer Hire Shopify
//                 Developer Hire NopCommerce Developer
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(VIVERVEFlyer);
