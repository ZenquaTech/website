import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import React, { useState } from "react";
import Python from "@/components/assets/img/angularimg/python.webp";
import Carousel from "react-material-ui-carousel";
import Nodejs from "@/components/assets/img/homePageImages/nodejs-1.webp";
import ROR from "@/components/assets/img/homePageImages/ruby-on-rails (1).webp";
import Vuejs from "@/components/assets/img/homePageImages/vuejs.webp";
import Reactjs from "@/components/assets/img/homePageImages/reactjs.webp"
import angularjs from "@/components/assets/img/homePageImages/angular-1.webp";
import nextjs from "@/components/assets/img/homePageImages/nextjs.webp";
import ios from "@/components/assets/img/homePageImages/apple.webp";
import swift from "@/components/assets/img/homePageImages/swift.webp";
import rn from "@/components/assets/img/homePageImages/reactjs (1).webp";
import flutter from "@/components/assets/img/homePageImages/flutter.webp";
import larvel from "@/components/assets/img/homePageImages/laravel.webp";
import django from "@/components/assets/img/homePageImages/django.webp";
import codei from "@/components/assets/img/homePageImages/Codeignitor.webp";
import magento from "@/components/assets/img/homePageImages/magento.webp";
import nop from "@/components/assets/img/homePageImages/nopcommerce.webp";
import shopify from "@/components/assets/img/homePageImages/Shopify.webp";
import wordpress from "@/components/assets/img/homePageImages/wordpress.webp";
import drupal from "@/components/assets/img/homePageImages/drupal.webp";
import mysql from "@/components/assets/img/homePageImages/mysql.webp";
import firebase from "@/components/assets/img/homePageImages/firebase.webp";
import mongodb from "@/components/assets/img/homePageImages/mongodb.webp";
import azure from "@/components/assets/img/homePageImages/Azure.webp";
import google from "@/components/assets/img/homePageImages/google.webp";
import aws from "@/components/assets/img/homePageImages/Aws.webp";
import seo from "@/components/assets/img/homePageImages/seo-1.webp";
import smm from "@/components/assets/img/homePageImages/smm.webp";
import java from "@/components/assets/img/homePageImages/java-1.webp";
import blockchain from "@/components/assets/img/homePageImages/blockchain.webp";
import googlead from "@/components/assets/img/homePageImages/ppc-1.webp";
const servicesData: any = [
  {
    label: "Backend Development",
    stateKey: "backend",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          We understand the crucial role of reliable, secure, and efficient
          back-end solutions in driving business success. Our team of seasoned
          experts excels in back-end development across various programming
          languages, including PHP, ASP.NET, Java, NodeJS, NestJS, Python,
          Blockchain, and SharePoint.
        </p>
        <br />
        <p>
          At ZenQua, we harness the power of open-source technologies and cloud
          platforms, blending them with our innovative and analytical prowess to
          craft optimal solutions for your business. We prioritize agility,
          user-friendliness, and flexibility, ensuring that our systems are
          perfectly tailored to your needs. Our team stays abreast of the latest
          technological advancements, ensuring your business remains competitive
          in an ever-changing landscape.
        </p>
        <br />
        <p>
          Our mission is to propel you closer to your goals. With our
          all-encompassing back-end development services, you can achieve
          outstanding results without overspending. Contact us today to discover
          how we can help your business unlock its full potential.
        </p>

        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: Python, label: "Python" },
            { src: Nodejs, label: "NodeJS" },
            { src: ROR, label: "Ruby on Rails" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Frontend Development",
    stateKey: "frontend",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          We offer comprehensive front-end development services, utilizing
          AngularJS, VueJS, KnockoutJS, ReactJS, and NextJS. Our team of highly
          skilled developers collaborates closely with clients to understand
          their needs and create seamless user experiences. We are dedicated to
          helping you achieve your business goals by leveraging the best
          available technologies to build secure and industry-standard web
          solutions.
        </p>
        <br />
        <p>
          Partnering with us grants our clients access to cutting-edge IT
          solutions combined with well-defined processes, enabling swift project
          execution and accelerated development cycles. We ensure our clients
          receive maximum value for their investment by delivering on-time,
          within-budget solutions of the highest quality. Our developers possess
          extensive experience in creating front-end user interfaces, ranging
          from single-page websites to complex, interactive web applications,
          including progressive web apps (PWAs).
        </p>
        <br />
        <p>
          At ZenQua, we prioritize providing your users with the best possible
          experience. We focus on optimizing page load times, UX/UI design, and
          customer satisfaction. Let us help you craft the perfect digital
          experience for your customers and elevate your business to the next
          level.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: Vuejs, label: "VueJS" },
            { src: Reactjs, label: "ReactJS" },
            { src: angularjs, label: "AngularJS" },
            { src: nextjs, label: "NextJS" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Mobile App Development",
    stateKey: "mobile",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          We specialize in delivering custom mobile app development services
          across various platforms and languages, including iOS, Android, React
          Native, Swift, Ionic, Flutter, Xamarin, and Kotlin, among others. Our
          talented team of mobile app developers possesses the knowledge and
          tools necessary to design, develop, and deploy your mobile app with
          ease and efficiency.
        </p>
        <br />
        <p>
          Our comprehensive end-to-end mobile app development services enhance
          user engagement and experience through exceptional UI and UX design.
          We integrate everything – from custom back-end programming to
          intuitive user interface design – to create reliable, secure, and
          feature-rich apps for Android, iOS, and tablets. Our mobile app
          developers prioritize app design and UX/UI before diving into
          development and deployment.
        </p>
        <br />
        <p>
          We ensure that the code used to develop your mobile app is robust,
          capable of handling varying loads and spikes, making your application
          future-ready. With our all-encompassing mobile app development
          services, you can launch or deploy your application quickly, achieve
          your business objectives, and enhance customer engagement.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: rn, label: "ReactNative" },
            { src: ios, label: "iOS" },
            { src: flutter, label: "Flutter" },
            { src: swift, label: "Swift" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Framework Development",
    stateKey: "framework",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          We offer custom backend framework development services tailored to
          meet your specific needs. Our experienced developers specialize in a
          variety of well-known frameworks, including Laravel, CodeIgniter,
          Django, CakePHP, MEAN Stack, Ruby on Rails, and more. With extensive
          expertise in leveraging these powerful open-source frameworks, we
          build custom solutions that address modern business demands.
        </p>
        <br />
        <p>
          At ZenQua, we stay current with the latest technologies to ensure our
          clients remain competitive. Our state-of-the-art approach combines
          creativity with advanced analytics to deliver the best backend
          development solutions. We strive to develop reliable and agile
          systems, enabling our clients to maintain their business operations
          smoothly.
        </p>
        <br />
        <p>
          When you partner with ZenQua, you can expect cost-effective solutions
          and expert technical support. We are committed to providing backend
          solutions that optimize your infrastructure and elevate your business.
          Our team of experienced developers brings not only modern technology
          but also a dedication to customer excellence to every project.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: ROR, label: "Ruby on Rails" },
            { src: larvel, label: "Laravel" },
            { src: django, label: "Django" },
            { src: codei, label: "Codeignitor" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Ecommerce Development",
    stateKey: "ecommerce",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          We are your go-to experts for comprehensive and reliable eCommerce
          development services. Our development team excels in delivering robust
          and scalable solutions on leading platforms such as Magento, Shopify,
          WooCommerce, NopCommerce, and more. We understand the importance of
          creating agile, fast, and secure solutions, and we prioritize quality
          control and compatibility throughout the project. Each project is
          approached with a tailored and creative mindset, combining analytics
          and modern tools to deliver the right solution for your business
          needs.
        </p>
        <br />
        <p>
          Our approach focuses not only on building a powerful and robust
          frontend but also emphasizes creating a secure and reliable backend.
          We stay updated with the latest technologies to ensure our solutions
          are aligned with modern trends and meet our clients’ unique
          requirements. Our services are designed to maximize the usability and
          performance of your eCommerce platform, ensuring that our solutions
          are cost-effective, user-friendly, and flexible for continuous
          improvement and growth.
        </p>
        <br />
        <p>
          We are dedicated to helping our clients succeed by making their
          operations more efficient and cost-effective with our backend
          development services. Our experienced team leverages open-source
          technologies and cloud platforms to provide reliable and secure
          solutions. At ZenQua, your success is our priority, and we
          relentlessly strive to deliver the most agile and secure eCommerce
          development solutions.
        </p>

        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: magento, label: "Magento" },
            { src: nop, label: "Nop Commerce" },
            { src: shopify, label: "Shopify" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "CMS Development",
    stateKey: "cms",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          At ZenQua, we offer robust CMS development services across leading
          platforms such as WordPress, Drupal, and more. Our skilled development
          team works closely with clients to create customized solutions that
          leverage the latest technologies and cloud platforms, ensuring they
          stay ahead of their competition.
        </p>
        <br />
        <p>
          We recognize the importance of a modern website with backend solutions
          that guarantee data integrity and seamless operations. Our developers
          take the time to understand your objectives, crafting solutions that
          provide increased scalability, enhanced performance, and error-free
          coding. Designed to meet evolving needs, our solutions prioritize
          security, usability, and efficiency. We adopt an integrated approach
          to CMS development, ensuring secure data management, reliable
          networks, and the right tools for your success. Our expertise spans
          various languages, including PHP, ASP.Net, Java, NodeJS, NestJS,
          Python, Blockchain, and SharePoint, with a focus on delivering
          well-integrated, secure, and intuitive solutions.
        </p>
        <br />
        <p>
          Our goal is to provide advanced solutions that align with your
          business objectives. We offer agile and comprehensive services
          designed to drive success, enhance ROI, and keep you ahead of the
          competition. Contact our team today to discover how our professional
          CMS development services can benefit your business.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: wordpress, label: "Wordpress" },
            { src: drupal, label: "Drupal" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Database Development",
    stateKey: "database",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          Our team of highly skilled professionals specializes in delivering
          robust, reliable, and secure database development services across
          platforms such as MSSQL, MySQL, PostgreSQL, MongoDB, Redis, Oracle,
          Firebase, and more. We create customized solutions tailored to meet
          specific needs and demands, enabling clients to leverage their data
          effectively and enhance their competitive edge. By utilizing advanced
          techniques and the latest technologies, we ensure high efficiency,
          performance, and scalability in our services.
        </p>
        <br />
        <p>
          Our flexible solutions encompass all facets of database development,
          including detailed data modeling, data normalization and indexing, ETL
          processes, backup and recovery planning, database optimization,
          performance tuning, and complex query optimization. Additionally, we
          offer professional administrative services for the maintenance and
          ongoing support of our clients’ databases. Our solutions are crafted
          to ensure the highest level of security and compliance with industry
          standards.
        </p>
        <br />
        <p>
          At ZenQua, we are committed to delivering exceptional database
          solutions that help clients maximize their profitability and business
          potential. Understanding the significance of accurate and reliable
          data-driven decisions, we work diligently to meet the highest
          standards and provide the best value for your time and investment.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: mysql, label: "Mysql" },
            { src: firebase, label: "Firebase" },
            { src: mongodb, label: "Mongodb" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Devops Development",
    stateKey: "devops",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          At ZenQua, we are dedicated to providing comprehensive DevOps and
          infrastructure services across leading cloud environments such as AWS,
          Azure, and Google Cloud. Our seasoned DevOps and infrastructure
          experts assess customer requirements to create strategies for optimal
          cloud resource utilization. We approach cloud integration
          strategically, designing reliable, easily manageable environments. Our
          team excels in setting up applications, databases, and environments,
          and is proficient in using automation tools like Chef, Puppet,
          Ansible, and Docker.
        </p>
        <br />
        <p>
          We also specialize in building and managing virtual machines and
          provisioning solutions on public clouds. Additionally, we have
          extensive experience in configuring and managing serverless solutions
          across various cloud platforms. Our team adheres to best practices to
          evaluate, optimize, and secure cloud infrastructure for our clients.
          We address the challenges associated with different cloud platforms,
          implementing solutions to safeguard the environment and protect
          critical data.
        </p>
        <br />
        <p>
          With ZenQua, clients can be confident that their platforms are secure,
          well-maintained, and effectively governed. We are committed to
          providing top-notch solutions designed to reduce costs, enhance
          performance, and support the scaling of applications and workloads.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: azure, label: "Azure" },
            { src: aws, label: "AWS" },
            { src: google, label: "Google" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Digital Marketing",
    stateKey: "digital",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          At ZenQua, we provide a full suite of digital marketing services
          designed to help you achieve your business objectives and maximize
          your exposure across all digital channels. Our team of seasoned
          digital marketing experts excels in SEO, SMM, and other strategies
          proven to enhance online visibility for both small and large
          businesses. We craft tailored digital marketing strategies to boost
          brand awareness, drive website traffic, and improve conversion rates,
          ultimately leading to a higher ROI. By staying current with the latest
          marketing trends and technologies, we deliver innovative yet practical
          solutions to elevate your marketing efforts.
        </p>
        <br />
        <p>
          From search engine optimization (SEO) to content creation, our
          expertise spans the entire digital marketing spectrum. Whether you aim
          to increase brand awareness, enhance visibility, attract more organic
          traffic, or improve customer conversions, our team is equipped to
          deliver the results you need.
        </p>
        <br />
        <p>
          Recognizing that each business has unique needs, we take the time to
          understand your specific goals and develop a customized marketing plan
          tailored to your requirements. At ZenQua, you can count on receiving
          reliable, bespoke digital marketing services designed to help you
          achieve your desired business outcomes.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          {[
            { src: smm, label: "SMM" },
            { src: seo, label: "SEO" },
          ].map((tech, index) => (
            <div className="flex flex-col items-center mt-4" key={index}>
              <Image
                width={"100"}
                height={"100"}
                src={tech.src}
                alt={`${tech.label} Logo`}
              />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
        {/* <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <Image
              layout="intrinsic"
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/smm.svg"
              alt="smm"
              className="flex mt-4"
            />
            <p>SMM</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <Image
              layout="intrinsic"
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/seo-1.svg"
              alt="seo"
              className="flex mt-4"
            />
            <p>SEO</p>
          </div>
        </div> */}
      </div>
    ),
  },
];
const items = [
  {
    title: "Backend Development",
    description:
      "We develop efficient back-end solutions. With our expertise in programming languages and open source technologies, we provide agile, user-friendly, and flexible solutions that help businesses reach their full potential. Contact us today to learn how our services can help",
    image: [
      {
        url: Python,
      },
      {
        url: Nodejs,
      },
      {
        url: blockchain,
      },
      {
        url: java,
      },
    ],
  },
  {
    title: "Framework Development",
    description:
      "At ZenuQa, we provide custom backend framework development services tailored to your exact needs. Our experienced developers specialize in many popular frameworks and use state-of-the-art methods to deliver. For Example Ruby On Rails",
    image: [
      {
        url: ROR,
      },
      {
        url: larvel,
      },
      {
        url: codei,
      },
      {
        url: django,
      },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "At ZenQua, we provide comprehensive frontend development services, using the latest technologies. We focus on page load times, UX/UI design, and customer satisfaction, to ensure a seamless user experience. Let us help you create the perfect digital",
    image: [
      {
        url: Vuejs,
      },
      {
        url: Reactjs,
      },
      {
        url: angularjs,
      },
      {
        url: nextjs,
      },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "We focus on custom mobile app dev. services in various platforms/languages. Our talented team is equipped to design, develop, and deploy apps with ease. We offer end-to-end dev. services that enhance user engagement",
    image: [
      {
        url: Reactjs,
      },
      {
        url: Nodejs,
      },
      {
        url: blockchain,
      },
      {
        url: swift,
      },
    ],
  },
  {
    title: "DevOps & Infra",
    description:
      "At ZenQua, we specialize in DevOps & Infra services in popular cloud environments such as AWS, Azure, & Google Cloud. Our experienced professionals use automation tools & best practices to assess, optimize and secure cloud infrastructure for our clients. Empowering DevOps.",
    image: [
      {
        url: azure,
      },
      {
        url: aws,
      },
      {
        url: google,
      },
    ],
  },
  {
    title: "E-Commerce Development",
    description:
      "At ZenQua, we specialize in providing reliable eCommerce development services. Our experienced team leverages modern tools and open source technologies such as Magento, Shopify, WooCommerce, Nopcommerce and more to deliver top-notch eCommerce solutions",
    image: [
      {
        url: magento,
      },
      {
        url: nop,
      },
      {
        url: shopify,
      },
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "At ZenuQa, we provide comprehensive digital marketing services including SEO, SMM, PPC, content creation, and other services to help businesses achieve their goals and gain maximum exposure. Our services are effective for digital marketing",
    image: [
      {
        url: googlead,
      },
      {
        url: smm,
      },
      {
        url: seo,
      },
    ],
  },
];
function HeroWhatWeDo() {
  const [clickedButton5, setClickedButton5] = useState("Backend Development");

  const handleClick5 = (stateKey: any, label: string) => {
    setClickedButton5(label);
  };
  return (
    <div
      // className="max-w-6xl mx-auto px-4 sm:px-6 bg-yellow-800"
      className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mb-8 "
      id="what-we-do"
    >
      <h2 className=" font text-center uppercase service-button text-[#D9E3EA]">
        WHAT WE DO
      </h2>
      <h2 className="text-4xl font-extrabold text-center mb-4 service-button text-[#D9E3EA] ">
        Our Core Services
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 0px 3px white",
          borderRadius: "20px",
        }}
      >
        <div className="hidden sm:flex justify-center">
          <Grid container spacing={0} className="justify-center w-full">
            <Grid item xs={6} sm={3} lg={3} xl={2}>
              <Paper
                style={{
                  height: "100%",
                  padding: "2px",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
              >
                {servicesData.map((service: any, index: any) => (
                  <Button
                    className="hover:text-text-[#9BA9B4]  w-full"
                    key={index}
                    onClick={() =>
                      handleClick5(service.stateKey, service.label)
                    }
                    disableRipple
                  >
                    <h3
                      className="font-bold flex items-center"
                      style={{
                        width: "100%",
                        height: "40px",
                        borderRight:
                          clickedButton5 === service.label
                            ? "2px solid #019dce"
                            : "none",
                        paddingLeft: 10,
                        color:
                          clickedButton5 === service.label
                            ? "#019dce"
                            : "rgba(255,255,255,.75)",
                        fontSize:
                          clickedButton5 === service.label ? "15px" : "13.50px",
                        backgroundColor:
                          clickedButton5 === service.label
                            ? "#222224"
                            : "transparent",
                      }}
                    >
                      {service.label}
                    </h3>
                  </Button>
                ))}
              </Paper>
            </Grid>

            <Grid item xs={6} sm={9} lg={9} xl={10}>
              <Paper
                style={{
                  height: "100%",
                  backgroundColor: "transparent",
                  padding: "12px",
                }}
              >
                {servicesData.map((service: any) =>
                  clickedButton5 === service.label ? (
                    <div key={service.label}>{service.content}</div>
                  ) : null
                )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="block sm:hidden flex-wrap justify-center items-center w-full">
        <Carousel
          autoPlay={true}
          navButtonsAlwaysVisible={false}
          indicators={false}
          animation="slide"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "transform 0.10s ease-in-out",
          }}
        >
          {items.map((item: any, i: any) => (
            <Card
              key={i}
              style={{
                height: "58vh",
                width: "100%",
                border: "solid 1px white",
                borderRadius: "20px",
                background: "transparent",
                color: "white",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      textAlign: "center",
                      color: "#D9E3EA",
                      margin: "4%",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      color: "#9BA9B4 ",
                      fontSize: "19px",
                      textAlign: "justify",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      margin: "4%",
                      padding: "2%",
                    }}
                  >
                    {item.image.map((data: any, idx: any) => (
                      <div key={idx} style={{ marginTop: "4%" }}>
                        <Image
                          width={"100"}
                          height={"100"}
                          src={data.url}
                          alt={item.title}
                        />
                      </div>
                    ))}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HeroWhatWeDo;
