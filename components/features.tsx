"use client";
import {
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
} from "@material-ui/core";
import Link from 'next/link';
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Data from "./ui/data.json";
import CountUp from "react-countup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: {
      "&: hover": {
        display: "none",
      },
    },
  })
);

interface Statistic {
  label: string;
  value: number;
  unit?: string;
}

interface Person {
  name: string;
  experience: string;
  expertise: string;
  workedWith: string;
  avatarSrc: string;
}

const people: Person[] = [
  {
    name: "Mehul Manu",
    experience: "10+ Years",
    expertise: "AWS | Azure | Linux",
    workedWith: "CICD | Terraform",
    avatarSrc:
      "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
  },
  {
    name: "Dev Girisha",
    experience: "5+ Years",
    expertise: "Core | MVC | PowerBI",
    workedWith: " SQL | APIs",
    avatarSrc:
      "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
  },
  {
    name: "Sumat Bala",
    experience: "7+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
  },
  {
    name: "Prabhakara Indra",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
  },
];

type ServiceNames =
  | "Backend Development"
  | "Frontend Development"
  | "Mobile App Development"
  | "Framework Development"
  | "E-Commerce Development"
  | "CMS Development"
  | "Database Development"
  | "DevOps & Infra"
  | "Digital Marketing";

interface StatsCardProps {
  statistics: Statistic[];
}

interface StatsCardState {
  backend: boolean;
  frontend: boolean;
  mobile: boolean;
  framework: boolean;
  ecommerce: boolean;
  cms: boolean;
  database: boolean;
  devops: boolean;
  digital: boolean;
  clickedButton2: string;
  clickedButton3: string;
  selectedService: ServiceNames;
  techTrendsButton: string;
  State: State;
  clickedButton5: string;
  State2: State2;
  clickedButton6: string;
  Cost: boolean;
  Vast: boolean;
  Time: boolean;
  Experienced: boolean;
  Reduced: boolean;
  Custom: boolean;
}

// *****************************our service ssection*******

interface State {
  backend: boolean;
  frontend: boolean;
  mobile: boolean;
  framework: boolean;
  ecommerce: boolean;
  cms: boolean;
  database: boolean;
  devops: boolean;
  digital: boolean;
}
interface State2 {
  Cost: boolean;
  Vast: boolean;
  Time: boolean;
  Experienced: boolean;
  Reduced: boolean;
  Custom: boolean;
}
interface ServiceData {
  label: string;
  stateKey: keyof State;
  content: JSX.Element;
}
interface ServiceData2 {
  label: string;
  stateKey: keyof State2;
  content: JSX.Element;
}

const servicesData: ServiceData[] = [
  {
    label: "Backend Development",
    stateKey: "backend",
    content: (
      <div className="col-span-2 sm:col-span-3 text-medium text-[#9BA9B4] text-justify p-3">
        <p>
          We understand the crucial role of reliable, secure, and efficient back-end solutions in driving business success. Our team of seasoned experts excels in back-end development across various programming languages, including PHP, ASP.NET, Java, NodeJS, NestJS, Python, Blockchain, and SharePoint.
        </p>
        <br />
        <p>
          At ZenQua, we harness the power of open-source technologies and cloud platforms, blending them with our innovative and analytical prowess to craft optimal solutions for your business. We prioritize agility, user-friendliness, and flexibility, ensuring that our systems are perfectly tailored to your needs. Our team stays abreast of the latest technological advancements, ensuring your business remains competitive in an ever-changing landscape.
        </p>
        <br />
        <p>
          Our mission is to propel you closer to your goals. With our all-encompassing back-end development services, you can achieve outstanding results without overspending. Contact us today to discover how we can help your business unlock its full potential.
        </p>

        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/python-1.svg"
              alt="Backend Development"
            />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/nodejs-1.svg"
              alt="Backend Development"
            />
            <p>NodeJS</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/ruby-on-rails.svg"
              alt="Backend Development"
            />
            <p>Ruby on Rails</p>
          </div>
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
          We offer comprehensive front-end development services, utilizing AngularJS, VueJS, KnockoutJS, ReactJS, and NextJS. Our team of highly skilled developers collaborates closely with clients to understand their needs and create seamless user experiences. We are dedicated to helping you achieve your business goals by leveraging the best available technologies to build secure and industry-standard web solutions.
        </p>
        <br />
        <p>
          Partnering with us grants our clients access to cutting-edge IT solutions combined with well-defined processes, enabling swift project execution and accelerated development cycles. We ensure our clients receive maximum value for their investment by delivering on-time, within-budget solutions of the highest quality. Our developers possess extensive experience in creating front-end user interfaces, ranging from single-page websites to complex, interactive web applications, including progressive web apps (PWAs).
        </p>
        <br />
        <p>
          At ZenQua, we prioritize providing your users with the best possible experience. We focus on optimizing page load times, UX/UI design, and customer satisfaction. Let us help you craft the perfect digital experience for your customers and elevate your business to the next level.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/vuejs.svg"
              alt="Frontend Development"
              className="flex mt-4"
            />
            <p>VueJS</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/reactjs.svg"
              alt="Frontend Development"
              className="flex mt-4"
            />
            <p>ReactJS</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/angular-1.svg"
              alt="Frontend Development"
              className="flex mt-4"
            />
            <p>AngularJS</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/nextjs.svg"
              alt="Frontend Development"
              className="flex mt-4"
            />
            <p>NextJS</p>
          </div>
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
          We specialize in delivering custom mobile app development services across various platforms and languages, including iOS, Android, React Native, Swift, Ionic, Flutter, Xamarin, and Kotlin, among others. Our talented team of mobile app developers possesses the knowledge and tools necessary to design, develop, and deploy your mobile app with ease and efficiency.
        </p>
        <br />
        <p>
          Our comprehensive end-to-end mobile app development services enhance user engagement and experience through exceptional UI and UX design. We integrate everything – from custom back-end programming to intuitive user interface design – to create reliable, secure, and feature-rich apps for Android, iOS, and tablets. Our mobile app developers prioritize app design and UX/UI before diving into development and deployment.
        </p>
        <br />
        <p>
          We ensure that the code used to develop your mobile app is robust, capable of handling varying loads and spikes, making your application future-ready. With our all-encompassing mobile app development services, you can launch or deploy your application quickly, achieve your business objectives, and enhance customer engagement.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/reactjs.svg"
              alt="ReactNative"
              className="flex mt-4"
            />
            <p>ReactNative</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/apple.svg"
              alt="iOS"
              className="flex mt-4"
            />
            <p>iOS</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/flutter.svg"
              alt="Flutter"
              className="flex mt-4"
            />
            <p>Flutter</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/swift.svg"
              alt="Swift"
              className="flex mt-4"
            />
            <p>Swift</p>
          </div>
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
          We offer custom backend framework development services tailored to meet your specific needs. Our experienced developers specialize in a variety of well-known frameworks, including Laravel, CodeIgniter, Django, CakePHP, MEAN Stack, Ruby on Rails, and more. With extensive expertise in leveraging these powerful open-source frameworks, we build custom solutions that address modern business demands.
        </p>
        <br />
        <p>
          At ZenQua, we stay current with the latest technologies to ensure our clients remain competitive. Our state-of-the-art approach combines creativity with advanced analytics to deliver the best backend development solutions. We strive to develop reliable and agile systems, enabling our clients to maintain their business operations smoothly.
        </p>
        <br />
        <p>
          When you partner with ZenQua, you can expect cost-effective solutions and expert technical support. We are committed to providing backend solutions that optimize your infrastructure and elevate your business. Our team of experienced developers brings not only modern technology but also a dedication to customer excellence to every project.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/ruby-on-rails.svg"
              alt="ror"
              className="flex mt-4"
            />
            <p>Ruby on Rails</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/laravel.svg"
              alt="laravel"
              className="flex mt-4"
            />
            <p>Laravel</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/django.svg"
              alt="django"
              className="flex mt-4"
            />
            <p>Django</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/Codeignitor.svg"
              alt="Codeignitor"
              className="flex mt-4"
            />
            <p>Codeignitor</p>
          </div>
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
          We are your go-to experts for comprehensive and reliable eCommerce development services. Our development team excels in delivering robust and scalable solutions on leading platforms such as Magento, Shopify, WooCommerce, NopCommerce, and more. We understand the importance of creating agile, fast, and secure solutions, and we prioritize quality control and compatibility throughout the project. Each project is approached with a tailored and creative mindset, combining analytics and modern tools to deliver the right solution for your business needs.
        </p>
        <br />
        <p>
          Our approach focuses not only on building a powerful and robust frontend but also emphasizes creating a secure and reliable backend. We stay updated with the latest technologies to ensure our solutions are aligned with modern trends and meet our clients’ unique requirements. Our services are designed to maximize the usability and performance of your eCommerce platform, ensuring that our solutions are cost-effective, user-friendly, and flexible for continuous improvement and growth.
        </p>
        <br />
        <p>
          We are dedicated to helping our clients succeed by making their operations more efficient and cost-effective with our backend development services. Our experienced team leverages open-source technologies and cloud platforms to provide reliable and secure solutions. At ZenQua, your success is our priority, and we relentlessly strive to deliver the most agile and secure eCommerce development solutions.
        </p>

        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/magento.svg"
              alt="magento"
              className="flex mt-4"
            />
            <p>Magento</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/nopcommerce.svg"
              alt="nopcommerce"
              className="flex mt-4"
            />
            <p>Nop Commerce</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Shopify.svg"
              alt="Shopify"
              className="flex mt-4"
            />
            <p>Shopify</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/WooCommerce.svg"
              alt="WooCommerce"
              className="flex mt-4"
            />
            <p>Woo Commerce </p>
          </div>
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
          At ZenQua, we offer robust CMS development services across leading platforms such as WordPress, Drupal, and more. Our skilled development team works closely with clients to create customized solutions that leverage the latest technologies and cloud platforms, ensuring they stay ahead of their competition.
        </p>
        <br />
        <p>
          We recognize the importance of a modern website with backend solutions that guarantee data integrity and seamless operations. Our developers take the time to understand your objectives, crafting solutions that provide increased scalability, enhanced performance, and error-free coding. Designed to meet evolving needs, our solutions prioritize security, usability, and efficiency. We adopt an integrated approach to CMS development, ensuring secure data management, reliable networks, and the right tools for your success. Our expertise spans various languages, including PHP, ASP.Net, Java, NodeJS, NestJS, Python, Blockchain, and SharePoint, with a focus on delivering well-integrated, secure, and intuitive solutions.
        </p>
        <br />
        <p>
          Our goal is to provide advanced solutions that align with your business objectives. We offer agile and comprehensive services designed to drive success, enhance ROI, and keep you ahead of the competition. Contact our team today to discover how our professional CMS development services can benefit your business.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/wordpress.svg"
              alt="wordpress"
              className="flex mt-4"
            />
            <p>Wordpress</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/drupal.svg"
              alt="drupal"
              className="flex mt-4"
            />
            <p>Drupal</p>
          </div>

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
          Our team of highly skilled professionals specializes in delivering robust, reliable, and secure database development services across platforms such as MSSQL, MySQL, PostgreSQL, MongoDB, Redis, Oracle, Firebase, and more. We create customized solutions tailored to meet specific needs and demands, enabling clients to leverage their data effectively and enhance their competitive edge. By utilizing advanced techniques and the latest technologies, we ensure high efficiency, performance, and scalability in our services.
        </p>
        <br />
        <p>
          Our flexible solutions encompass all facets of database development, including detailed data modeling, data normalization and indexing, ETL processes, backup and recovery planning, database optimization, performance tuning, and complex query optimization. Additionally, we offer professional administrative services for the maintenance and ongoing support of our clients’ databases. Our solutions are crafted to ensure the highest level of security and compliance with industry standards.
        </p>
        <br />
        <p>
          At ZenQua, we are committed to delivering exceptional database solutions that help clients maximize their profitability and business potential. Understanding the significance of accurate and reliable data-driven decisions, we work diligently to meet the highest standards and provide the best value for your time and investment.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/mysql.svg"
              alt="mysql"
              className="flex mt-4"
            />
            <p>Mysql</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/firebase.svg"
              alt="firebase"
              className="flex mt-4"
            />
            <p>Firebase</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/mongodb.svg"
              alt="mongodb"
              className="flex mt-4"
            />
            <p>Mongodb</p>
          </div>
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
          At ZenQua, we are dedicated to providing comprehensive DevOps and infrastructure services across leading cloud environments such as AWS, Azure, and Google Cloud. Our seasoned DevOps and infrastructure experts assess customer requirements to create strategies for optimal cloud resource utilization. We approach cloud integration strategically, designing reliable, easily manageable environments. Our team excels in setting up applications, databases, and environments, and is proficient in using automation tools like Chef, Puppet, Ansible, and Docker.
        </p>
        <br />
        <p>
          We also specialize in building and managing virtual machines and provisioning solutions on public clouds. Additionally, we have extensive experience in configuring and managing serverless solutions across various cloud platforms. Our team adheres to best practices to evaluate, optimize, and secure cloud infrastructure for our clients. We address the challenges associated with different cloud platforms, implementing solutions to safeguard the environment and protect critical data.
        </p>
        <br />
        <p>
          With ZenQua, clients can be confident that their platforms are secure, well-maintained, and effectively governed. We are committed to providing top-notch solutions designed to reduce costs, enhance performance, and support the scaling of applications and workloads.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Azure.svg"
              alt="Azure"
              className="flex mt-4"
            />
            <p>Azure</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Aws.svg"
              alt="Aws"
              className="flex mt-4"
            />
            <p>AWS</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/google.svg"
              alt="google"
              className="flex mt-4"
            />
            <p>Google</p>
          </div>
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
          At ZenQua, we provide a full suite of digital marketing services designed to help you achieve your business objectives and maximize your exposure across all digital channels. Our team of seasoned digital marketing experts excels in SEO, SMM, and other strategies proven to enhance online visibility for both small and large businesses. We craft tailored digital marketing strategies to boost brand awareness, drive website traffic, and improve conversion rates, ultimately leading to a higher ROI. By staying current with the latest marketing trends and technologies, we deliver innovative yet practical solutions to elevate your marketing efforts.
        </p>
        <br />
        <p>
          From search engine optimization (SEO) to content creation, our expertise spans the entire digital marketing spectrum. Whether you aim to increase brand awareness, enhance visibility, attract more organic traffic, or improve customer conversions, our team is equipped to deliver the results you need.
        </p>
        <br />
        <p>
          Recognizing that each business has unique needs, we take the time to understand your specific goals and develop a customized marketing plan tailored to your requirements. At ZenQua, you can count on receiving reliable, bespoke digital marketing services designed to help you achieve your desired business outcomes.
        </p>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/smm.svg"
              alt="smm"
              className="flex mt-4"
            />
            <p>SMM</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/seo-1.svg"
              alt="seo"
              className="flex mt-4"
            />
            <p>SEO</p>
          </div>
        </div>
      </div>
    ),
  },
];

const servicesData2: ServiceData2[] = [
  {
    label: "Cost-Effectiveness",
    stateKey: "Cost",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg">
        <div>
          <p className="text-2xl font-bold text-[#019dce] mb-[2%]">
            Cost-Effectiveness
          </p>
        </div>
        <p className="text-lg text-[#9BA9B4] text-justify">
          Building a website or application doesn't have to be expensive.
          Partnering with a reliable development company can help you save on
          costs associated with hiring an in-house development team, such as
          software licensing, taxes, hardware, salaries and compensation. With
          their expertise, you can create an attractive and cost-effective
          solution for your business.
        </p>
      </div>
    ),
  },
  {
    label: "Vast Knowledge",
    stateKey: "Vast",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg">
        <div>
          <p className="text-2xl font-bold text-[#019dce] mb-[2%]">
            Vast Knowledge
          </p>
        </div>
        <p className="text-lg text-[#9BA9B4] text-justify">
          At ZenQua, we have the expertise and experience to create custom
          websites and apps that are tailored to your specific business needs.
          Our dedicated team of developers has the technical knowledge and
          coding. experience to handle any challenges and provide solutions that
          comply with industry regulations. With a proven track record of
          delivering successful projects, you can trust us to create the perfect
          digital solution for you.
        </p>
      </div>
    ),
  },

  {
    label: "Time-Saving",
    stateKey: "Time",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg">
        <div>
          <p className="text-2xl font-bold text-[#019dce] mb-[2%]">
            Time-Saving
          </p>
        </div>
        <p className="text-lg text-[#9BA9B4] text-justify">
          Launch your digital product quickly by outsourcing your development
          services to a reputable offshore software development agency. ZenQua's
          experienced developers can create a high-quality solution efficiently,
          enabling you to validate your business idea and adapt your promotional
          strategies and sales channels as needed. Don't waste time forming an
          in-house development team- outsource and get. up and runing in no
          time!
        </p>
      </div>
    ),
  },

  {
    label: "Experienced Partner",
    stateKey: "Experienced",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg ">
        <div>
          <p className="text-2xl font-bold text-[#019dce] mb-[2%]">
            Experienced Partner
          </p>
        </div>
        <p className="text-lg text-[#9BA9B4] text-justify">
          We have a strict quality assurance process in place for all our web
          development projects. Our dedicated QA team continously checks for
          bugs and errors, guaranteeing high-quality code. Our custom solutions
          are reliable, flexible and cost-effective, offering clients more
          features and functionalities within their budget and timeline. with
          us, you can trust that the solutions we provide are reliable and
          flecible.
        </p>
      </div>
    ),
  },

  {
    label: "Reduced Costs",
    stateKey: "Reduced",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg ">
        <div>
          <p className="text-2xl font-bold text-[#019dce] mb-[2%]">
            Reduced Costs
          </p>
        </div>
        <p className="text-lg text-[#9BA9B4] text-justify">
          Our team carefully assesses your requirements, understands your goals
          and applies a standard development process tailored to your project
          needs to avoid unnecessary costs. To make web application development
          more accessible for businesses, we offer cost-effective development
          models. This allows companies with limited budgets to complete their
          projects without breaking the bank.
        </p>
      </div>
    ),
  },
  {
    label: "Custom Solution",
    stateKey: "Custom",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg ">
        <div>
          <p className="text-2xl font-bold text-[#019dce] mb-[2%]">
            Custom Solution
          </p>
        </div>
        <p className="text-lg text-[#9BA9B4] text-justify">
          We help you achieve your goals one step at a time by scaling your idea
          in a budget-focused manner. Our customized web and application
          development approach, suitable for startups, businesses and
          enterprises, allows you to make small investments and move forward in
          a controlled environment with the best java industry expertise. Our
          standardized process helps you reach your milestones efficiently.
        </p>
      </div>
    ),
  },
];

// *****************************our service ssection*******

class StatsCard extends Component<StatsCardProps, StatsCardState> {
  animationIntervals: NodeJS.Timeout[] = [];

  constructor(props: StatsCardProps) {
    super(props);
    this.state = {
      clickedButton5: "Backend Development",
      clickedButton6: "Cost-Effectiveness",
      clickedButton2: "Big Data",
      clickedButton3: "Cost-Effectiveness",
      selectedService: "Backend Development" as ServiceNames,
      techTrendsButton: "Big Data",
      State: {
        backend: true,
        frontend: true,
        mobile: true,
        framework: true,
        ecommerce: true,
        cms: true,
        database: true,
        devops: true,
        digital: true,
      },
      State2: {
        Cost: true,
        Vast: true,
        Time: true,
        Experienced: true,
        Reduced: true,
        Custom: true,
      },
      backend: true,
      frontend: true,
      mobile: true,
      framework: true,
      ecommerce: true,
      cms: true,
      database: true,
      devops: true,
      digital: true,
      Cost: true,
      Vast: true,
      Time: true,
      Experienced: true,
      Reduced: true,
      Custom: true,
    };
  }

  handleClick5 = (stateKey: keyof State, label: string) => {
    this.setState({
      backend: stateKey === "backend",
      frontend: stateKey === "frontend",
      clickedButton5: label,
    });
  };

  handleClick6 = (stateKey: keyof State2, label: string) => {
    this.setState({
      backend: stateKey === "Cost",
      frontend: stateKey === "Vast",
      clickedButton6: label,
    });
  };

  handleClick = (button: string, buttonName: string) => {
    if (buttonName == "clickedButton2") {
      this.setState({
        clickedButton2: button,
      });
    } else {
      this.setState({
        clickedButton3: button,
      });
    }
  };

  componentWillUnmount() {
    this.animationIntervals.forEach((interval) => clearInterval(interval));
  }


  render() {
    const { clickedButton2 } = this.state;

    const items = [
      {
        title: "Backend Development",
        description:
          "We develop efficient back-end solutions. With our expertise in programming languages and open source technologies, we provide agile, user-friendly, and flexible solutions that help businesses reach their full potential. Contact us today to learn how our services can help",
        image: [
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/python-1.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/nodejs-1.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/blockchain.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/java-1.svg",
          },
        ],
      },
      {
        title: "Framework Development",
        description:
          "At ZenuQa, we provide custom backend framework development services tailored to your exact needs. Our experienced developers specialize in many popular frameworks and use state-of-the-art methods to deliver. For Example Ruby On Rails",
        image: [
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/ruby-on-rails.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/laravel.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/Codeignitor.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/django.svg",
          },
        ],
      },
      {
        title: "Frontend Development",
        description:
          "At ZenQua, we provide comprehensive frontend development services, using the latest technologies. We focus on page load times, UX/UI design, and customer satisfaction, to ensure a seamless user experience. Let us help you create the perfect digital",
        image: [
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/vuejs.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/reactjs.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/angular-1.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/nextjs.svg",
          },
        ],
      },
      {
        title: "Mobile App Development",
        description:
          "We focus on custom mobile app dev. services in various platforms/languages. Our talented team is equipped to design, develop, and deploy apps with ease. We offer end-to-end dev. services that enhance user engagement",
        image: [
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/reactjs.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/nodejs-1.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/blockchain.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/swift.svg",
          },
        ],
      },
      {
        title: "DevOps & Infra",
        description:
          "At ZenQua, we specialize in DevOps & Infra services in popular cloud environments such as AWS, Azure, & Google Cloud. Our experienced professionals use automation tools & best practices to assess, optimize and secure cloud infrastructure for our clients. Empowering DevOps.",
        image: [
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Azure.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Aws.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/google.svg",
          },
        ],
      },
      {
        title: "E-Commerce Development",
        description:
          "At ZenQua, we specialize in providing reliable eCommerce development services. Our experienced team leverages modern tools and open source technologies such as Magento, Shopify, WooCommerce, Nopcommerce and more to deliver top-notch eCommerce solutions",
        image: [
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/magento.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/nopcommerce.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Shopify.svg",
          },
        ],
      },
      {
        title: "Digital Marketing",
        description:
          "At ZenuQa, we provide comprehensive digital marketing services including SEO, SMM, PPC, content creation, and other services to help businesses achieve their goals and gain maximum exposure. Our services are effective for digital marketing",
        image: [
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/ppc-1.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/smm.svg",
          },
          {
            url: "https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/seo-1.svg",
          },
        ],
      },
    ];

    const tech = [
      {
        title: "Big Data",
        description:
          "Your big data through robust solutions that empower data collection, storage, processing and analysis.",
        Services: "Services We Offer : ",
        item1: "Consulting and implementation",
        item2: "Data Governance",
        item3: "Support and evolution",
        item4: " Data Security",
      },

      {
        title: "Artificial Intelligence",
        description:
          "Improve Decision-making, planing and forecasting and revamp business processes with AI and ML Technologies Simulating human intelligance.",
        Services: "Selected AI Technologies We Master :",
        item1: "Machine Learning(including deep learning)",
        item2: "Natural language processing",
        item3: "Robotics",
        item4: "Image Recognition",
      },
      {
        title: "Computer Vision",
        description: "Derive actionable from images and videos.",
        Services: "Selected Solutions :",
        item1: "Detection of visual defects and anomalies",
        item2: "Barcode verification and validation",
        item3: "Recognition of item location and positioning",
        item4: "3D Modelling and mapping",
      },
      {
        title: "Internet of Things",
        description:
          "Collect, Store, Analyze sensor data and build ‘smart’ operations.",
        Services: "Services We Offer : ",
        item1: "IoT Consulting",
        item2: "IoT Analytics",
        item3: "IoT solution Deployment",
      },
      {
        title: "Blockchain",
        description:
          "Get solutions for enhanced traceability, Security and faster processing of data and transactions.",
        Services: "Services We Offer : ",
        item1: "Blockchain-based product development for product companies",
        item2:
          "Blockchain consulting and implementation for non-IT enterprises.",
      },
      {
        title: "Mixed Reality",
        description:
          "Blur the line between the digital and real worlds to make regular tasks and activities easier, safer and more engaging.",
        Services: "Services We Offer : ",
        item1: "Virtual Reality Development",
        item2: "Augmented Reality Development",
      },
    ];

    const outsorce = [
      {
        title: "Cost-Effectiveness",
        description:
          "Building a website or application doesn't have to be expensive. Partnering with a reliable developmentcompany can help you save on costs associated with hiring an in-house development team, such as software licensing, taxes, hardware, salaries and compensation. With their expertise, you can create an attractive and cost-effective solution for your business.",
      },
      {
        title: "Vast Knowledge",
        description:
          "At ZenQua, we have the expertise and experience to create custom websites and apps that are tailored to your specific business needs. Our dedicated team of developers has the technical knowledge and coding. experience to handle any challenges and provide solutions that comply with industry regulations. With a proven track record of delivering successful projects, you can trust us to create the perfect digital solution for you.",
      },
      {
        title: "Time-Saving",
        description:
          "Launch your digital product quickly by outsourcing your development services to a reputable offshore software development agency. ZenQua's experienced developers can create a high-quality solution efficiently, enabling you to validate your business idea and adapt your promotional strategies and sales channels as needed. Don't waste time forming an in-house development team- outsource and get. up and runing in no time!",
      },
      {
        title: "Experienced Partner",
        description:
          "We have a strict quality assurance process in place for all our web development projects. Our dedicated QA team continously checks for bugs and errors, guaranteeing high-quality code. Our custom solutions are reliable, flexible and cost-effective, offering clients more features and functionalities within their budget and timeline. with us, you can trust that the solutions we provide are reliable and flecible.",
      },
      {
        title: "Reduced Costs",
        description:
          "Our team carefully assesses your requirements, understands your goals and applies a standard development process tailored to your project needs to avoid unnecessary costs. To make web application development more accessible for businesses, we offer cost-effective development models. This allows companies with limited budgets to complete their projects without breaking the bank.",
      },
      {
        title: "Custom Solution",
        description:
          "We help you achieve your goals one step at a time by scaling your idea in a budget-focused manner. Our customized web and application development approach, suitable for startups, businesses and enterprises, allows you to make small investments and move forward in a controlled environment with the best java industry expertise. Our standardized process helps you reach your milestones efficiently.",
      },
    ];

    return (
      <>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[95%]">
          <h2 className=" font text-center service-button uppercase text-[#D9E3EA] ">
            ZenQua AT GLANCE
          </h2>
          <h2 className="text-4xl font-extrabold text-center mb-10 text-[#D9E3EA]">
            Over 150+ Completed Projects & Still Counting.
          </h2>
          <div className="max-w[100%] text-[#9BA9B4]">
            <Grid container spacing={2}>
              {Data.project.map((item: any, index: any) => (
                <Grid key={index} item xs={12} md={6} lg={3}>
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-8 max-w[100%] rounded-t-xl"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <Box className="flex justify-center items-center text-[#019dce]">
                      <div className="text-4xl font-bold text-black">
                        <CountUp end={item.number} />
                      </div>
                      <AddIcon style={{ fontSize: "40px" }} />
                    </Box>
                    <div className="text-md text-[#000] font-medium">{item.title} </div>
                  </div>
                  <div className="h-[5px] bg-[#019dce] mt-[15px] w-full text-[#019dce]"></div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>

        {/* ***************  Our Core Services Start ******************* */}
        <div className="m-[50px] box-border">
          <h2 className=" font text-center uppercase service-button text-[#D9E3EA]">
            WHAT WE DO
          </h2>
          <h2 className="text-4xl font-extrabold text-center mb-4 service-button text-[#D9E3EA] ">
            Our Core Services
          </h2>
          <div style={{ display: "flex", justifyContent: "center", boxShadow: "0px 0px 3px white", borderRadius: '20px' }}>
            <div className="hidden sm:flex justify-center">
              <Grid container spacing={0} className="justify-center w-full">
                <Grid item xs={6} sm={3} lg={3} xl={2}>
                  <Paper
                    style={{
                      height: "100%",
                      padding: "2px",
                      boxShadow: 'none',
                      backgroundColor: "transparent",
                    }}
                  >
                    {servicesData.map((service, index) => (
                      <Button
                        className="hover:text-text-[#9BA9B4]  w-full"
                        key={index}
                        onClick={() =>
                          this.handleClick5(service.stateKey, service.label)
                        }
                        disableRipple
                      >
                        <h3
                          className="font-bold flex items-center"
                          style={{
                            width: "100%",
                            height: "40px",
                            borderRight:
                              this.state.clickedButton5 === service.label
                                ? "2px solid #019dce"
                                : "none",
                            paddingLeft: 10,
                            color:
                              this.state.clickedButton5 === service.label
                                ? "#019dce"
                                : "rgba(255,255,255,.75)",
                            fontSize:
                              this.state.clickedButton5 === service.label
                                ? "15px"
                                : "13.50px",
                            backgroundColor:
                              this.state.clickedButton5 === service.label
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
                    {servicesData.map((service) =>
                      this.state.clickedButton5 === service.label ? (
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
              {items.map((item, i) => (
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
                        {item.image.map((data, idx) => (
                          <div key={idx} style={{ marginTop: "4%" }}>
                            <img src={data.url} alt="" />
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

        {/* *************** Our Core Services End ******************************** */}

        {/* *****  Improve and Innovate with the Tech Trends ******* */}

        <div className="box-border w-full">
          <h2 className=" font text-center uppercase text-[#D9E3EA]">
            TRENDING TECHNOLOGIES
          </h2>
          <h2 className="text-4xl font-extrabold text-center mb-10 service-button text-[#D9E3EA] ">

            Improve and Innovate with the Tech Trends
          </h2>

          <Box
            className="text-[#9BA9B4] justify-center flex w-full"
          >
            <div className="hidden sm:block flex-wrap justify-center items-center w-full">
              <Grid
                container
                spacing={0}
                style={{ justifyContent: "center", width: "100%" }}
              >
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Paper
                    style={{
                      height: "100%",
                      padding: "theme.spacing(2)",
                      backgroundColor: "transparent",
                      boxShadow: "0px 0px 5px white",
                      borderRadius: '20px',
                      width: "92%",
                    }}
                  >
                    <Box
                      style={{
                        width: "100% !important",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        onClick={() =>
                          this.handleClick("Big Data", "clickedButton2")
                        }
                        style={{
                          borderBottom:
                            this.state.clickedButton2 === "Big Data"
                              ? "2px solid #019dce"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          padding: "6px 18px",
                          fontSize:
                            this.state.clickedButton2 === "Big Data"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          textTransform: "none",
                          background:
                            this.state.clickedButton2 === "Big Data"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 === "Big Data"
                              ? "#019dce"
                              : "#D9E3EA",
                          backgroundColor:
                            this.state.clickedButton2 === "Big Data"
                              ? "#222224"
                              : "transparent",
                        }}
                        disableRipple
                      >
                        Big Data
                      </Button>

                      <Button
                        className="service-button"
                        id="Artificial Intelligence"
                        onClick={(e: any) => {
                          this.handleClick(
                            "Artificial Intelligence",
                            "clickedButton2"
                          );
                          let id = document.getElementById(
                            "Artificial Intelligence"
                          )?.innerText;
                          console.log("Clikkeddd", id);
                        }}
                        style={{
                          borderBottom:
                            this.state.clickedButton2 ===
                              "Artificial Intelligence"
                              ? "2px solid #019dce"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          textTransform: "none",
                          padding: "6px 18px",
                          fontSize:
                            this.state.clickedButton2 ===
                              "Artificial Intelligence"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          background:
                            this.state.clickedButton2 ===
                              "Artificial Intelligence"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 ===
                              "Artificial Intelligence"
                              ? "#019dce"
                              : "#D9E3EA",
                          backgroundColor:
                            this.state.clickedButton2 ===
                              "Artificial Intelligence"
                              ? "#222224"
                              : "transparent",
                        }}
                        disableRipple
                      >
                        Artificial Intelligence
                      </Button>

                      <Button
                        className="service-button"
                        onClick={() =>
                          this.handleClick("Computer Vision", "clickedButton2")
                        }
                        style={{
                          borderBottom:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "2px solid #019dce"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          padding: "6px 18px",
                          fontSize:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          textTransform: "none",
                          background:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "#019dce"
                              : "#D9E3EA",
                          backgroundColor:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "#222224"
                              : "transparent",
                        }}
                        disableRipple
                      >
                        Computer Vision
                      </Button>

                      <Button
                        className="service-button"
                        onClick={() =>
                          this.handleClick(
                            "Internet of Things",
                            "clickedButton2"
                          )
                        }
                        style={{
                          borderBottom:
                            this.state.clickedButton2 === "Internet of Things"
                              ? "2px solid #019dce"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          padding: "6px 18px",
                          textTransform: "none",
                          fontSize:
                            this.state.clickedButton2 === "Internet of Things"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          background:
                            this.state.clickedButton2 === "Internet of Things"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 === "Internet of Things"
                              ? "#019dce"
                              : "#D9E3EA",
                          backgroundColor:
                            this.state.clickedButton2 === "Internet of Things"
                              ? "#222224"
                              : "transparent",
                        }}
                        disableRipple
                      >
                        Internet of Things
                      </Button>

                      <Button
                        className="service-button"
                        onClick={() =>
                          this.handleClick("Blockchain", "clickedButton2")
                        }
                        style={{
                          borderBottom:
                            this.state.clickedButton2 === "Blockchain"
                              ? "2px solid #019dce"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          textTransform: "none",
                          padding: "6px 18px",
                          fontSize:
                            this.state.clickedButton2 === "Blockchain"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          background:
                            this.state.clickedButton2 === "Blockchain"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 === "Blockchain"
                              ? "#019dce"
                              : "#D9E3EA",
                          backgroundColor:
                            this.state.clickedButton2 === "Blockchain"
                              ? "#222224"
                              : "transparent",
                        }}
                        disableRipple

                      >
                        Blockchain
                      </Button>

                      <Button
                        className="service-button"
                        onClick={() =>
                          this.handleClick("Mixed Reality", "clickedButton2")
                        }
                        style={{
                          borderBottom:
                            this.state.clickedButton2 === "Mixed Reality"
                              ? "2px solid #019dce"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          textTransform: "none",
                          padding: "6px 18px",
                          fontSize:
                            this.state.clickedButton2 === "Mixed Reality"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          background:
                            this.state.clickedButton2 === "Mixed Reality"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 === "Mixed Reality"
                              ? "#019dce"
                              : "#D9E3EA",
                          backgroundColor:
                            this.state.clickedButton2 === "Mixed Reality"
                              ? "#222224"
                              : "transparent",
                        }}
                        disableRipple
                      >
                        Mixed Reality
                      </Button>
                    </Box>

                    <div style={{ width: "100%", padding: '10px' }}>
                      {clickedButton2 === "Big Data" && (
                        <div style={{ margin: "20px" }}>
                          <Typography
                            variant="body1"
                            style={{
                              fontSize: "17px",
                              margin: "10px",
                              color: "#9BA9B4",
                            }}
                          >
                            Your big data through robust solutions that empower
                            data collection, storage, processing and analysis.
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{
                              margin: "10px",
                              fontSize: "25px",
                              fontWeight: '600',
                              color: "#D9E3EA",
                            }}
                          >
                            Services We Offer:
                          </Typography>

                          <Grid
                            container
                            spacing={2}
                            style={{ marginTop: "10px", width: "98%" }}
                          >
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",

                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                    borderRadius: "none",
                                  }}
                                />
                                Consulting and implementation
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",

                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  borderRadius: "none",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Data Governance
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",

                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  borderRadius: "none",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Support and evolution
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",

                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  borderRadius: "none",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Data Security
                              </Paper>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                      {clickedButton2 === "Artificial Intelligence" && (
                        <div style={{ color: "white", padding: '10px' }}>
                          <Typography
                            variant="body1"
                            style={{
                              fontSize: "17px",
                              margin: "10px",
                              color: "rgba(255,255,255,.75)",
                            }}
                          >
                            Improve Decision-making, planing and forecasting and
                            revamp business processes with AI and ML
                            Technologies Simulating human intelligance.
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{ margin: "10px", fontSize: "25px", fontWeight: '600' }}
                          >
                            Selected AI Technologies We Master :
                          </Typography>

                          <Grid
                            container
                            spacing={2}
                            style={{ marginTop: "10px", width: "98%" }}
                          >
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Machine Learning(including deep learning)
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Natural language processing
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Robotics
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Image Recognition
                              </Paper>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                      {clickedButton2 === "Computer Vision" && (
                        <div style={{ padding: "10px", color: "white" }}>
                          <Typography
                            variant="body1"
                            style={{
                              fontSize: "17px",
                              margin: "10px",
                              color: "rgba(255,255,255,.75)",
                            }}
                          >
                            Derive actionable from images and videos.
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{ margin: "10px", fontSize: "25px", fontWeight: '600' }}
                          >
                            Selected Solutions :
                          </Typography>

                          <Grid
                            container
                            spacing={2}
                            style={{ marginTop: "10px", width: "98%" }}
                          >
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Detection of visual defects and anomalies
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Barcode verification and validation
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Recognition of item location and positioning
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                3D Modelling and mapping
                              </Paper>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                      {clickedButton2 === "Internet of Things" && (
                        <div style={{ padding: "10px", color: "white" }}>
                          <Typography
                            variant="body1"
                            style={{
                              fontSize: "17px",
                              margin: "10px",
                              color: "rgba(255,255,255,.75)",
                            }}
                          >
                            Collect, Store, Analyze sensor data and build
                            ‘smart’ operations.
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{ margin: "10px", fontSize: "25px", fontWeight: '600' }}
                          >
                            Services We Offer:
                          </Typography>

                          <Grid
                            container
                            spacing={2}
                            style={{ marginTop: "10px", width: "98%" }}
                          >
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                IoT Consulting
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                IoT Analytics
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                IoT solution Deployment
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Data Security
                              </Paper>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                      {clickedButton2 === "Blockchain" && (
                        <div style={{ padding: "10px", color: "white" }}>
                          <Typography
                            variant="body1"
                            style={{
                              fontSize: "17px",
                              margin: "10px",
                              color: "rgba(255,255,255,.75)",
                            }}
                          >
                            Get solutions for enhanced traceability, Security
                            and faster processing of data and transactions.
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{ margin: "10px", fontSize: "25px", fontWeight: '600' }}
                          >
                            Services We Offer:
                          </Typography>

                          <Grid
                            container
                            spacing={2}
                            style={{ marginTop: "10px", width: "98%" }}
                          >
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Blockchain-based product development for product
                                companies
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Blockchain consulting and implementation for
                                non-IT enterprises.
                              </Paper>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                      {clickedButton2 === "Mixed Reality" && (
                        <div style={{ padding: "10px", color: "white" }}>
                          <Typography
                            variant="body1"
                            style={{
                              fontSize: "17px",
                              margin: "10px",
                              color: "rgba(255,255,255,.75)",
                            }}
                          >
                            Blur the line between the digital and real worlds to
                            make regular tasks and activities easier, safer and
                            more engaging.
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{ margin: "10px", fontSize: "25px", fontWeight: '600' }}

                          >
                            Services We Offer:
                          </Typography>

                          <Grid
                            container
                            spacing={2}
                            style={{ marginTop: "10px", width: "98%" }}
                          >
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Virtual Reality Development
                              </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Paper
                                style={{
                                  fontSize: "17px",
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxShadow: "none"
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{
                                    fontSize: "17px",
                                    marginRight: "7px",
                                  }}
                                />
                                Augmented Reality Development
                              </Paper>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>

            <div className="block sm:hidden flex-wrap justify-center items-center w-[80%]">
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
                {tech.map((item, i) => (
                  <Card
                    key={i}
                    style={{
                      height: "70vh",
                      width: "100%",
                      border: "solid 1px white",
                      borderRadius: "20px",
                      background: "transparent",
                      color: "#D9E3EA",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{ textAlign: "center", marginTop: "8%" }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            color: "#9BA9B4",
                            marginTop: "12%",
                            fontSize: "19px",
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            color: "#D9E3EA",
                            marginTop: "12%",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {item.Services}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            color: "#9BA9B4",
                            marginTop: "12%",
                            fontSize: "19px",
                          }}
                        >
                          <FiberManualRecordIcon
                            style={{
                              fontSize: "19px",
                              marginRight: "7px",
                              color: "#019dce",
                              backgroundColor: "#019dce",
                            }}
                          />
                          {item.item1}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            color: "#9BA9B4",
                            marginTop: "12%",
                            fontSize: "19px",
                            lineHeight: "2rem",
                            marginBottom: "12%",
                          }}
                        >
                          <FiberManualRecordIcon
                            style={{
                              fontSize: "17px",
                              marginRight: "7px",
                              color: "#019dce",
                              backgroundColor: "#019dce",
                            }}
                          />
                          {item.item2}
                        </Typography>
                        {item.item3 && (
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              color: "#9BA9B4",
                              marginTop: "12%",
                              fontSize: "19px",
                              lineHeight: "2rem",
                              marginBottom: "12%",
                            }}
                          >
                            <FiberManualRecordIcon
                              style={{
                                fontSize: "19px",
                                marginRight: "7px",
                                color: "#019dce",
                                backgroundColor: "#019dce",
                              }}
                            />
                            {item.item3}
                          </Typography>
                        )}

                        {item.item4 && (
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              color: "#9BA9B4",
                              marginTop: "12%",
                              fontSize: "19px",
                              lineHeight: "2px",
                              marginBottom: "10%",
                            }}
                          >
                            <FiberManualRecordIcon
                              style={{
                                fontSize: "19px",
                                marginRight: "7px",
                                color: "#019dce",
                                backgroundColor: "#019dce",
                              }}
                            />
                            {item.item4}
                          </Typography>
                        )}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Carousel>
            </div>
          </Box>
        </div>

        {/* ******* Improve and Innovate with the Tech Trends End ***** */}

        {/* ************ZenQua Industry Expertise */}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
  <div style={{ boxSizing: "border-box", width: "98%" }}>
    <Grid container spacing={2} style={{ padding: "20px" }}>
      <Grid item xs={12} className="py-3">
        <h2 className="font text-center uppercase text-[#D9E3EA]">
          INDUSTRIES WE SERVE
        </h2>
        <h2 className="text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA]">
          ZenQua Industry Expertise
        </h2>
      </Grid>

      {[
        "Health & Medicare",
        "Logistics & Distribution",
        "Real Estate",
        "eCommerce & Retail",
        "Finance & Banking",
        "Education & Elearning",
        "Travel & Hospitality",
        "Manufacturing",
        "Oil & Gas",
      ].map((industry, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Paper
            elevation={1}
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              height: "10vh",
              width: "92%",
              flexWrap: "wrap",
              color: "white",
              boxShadow: "0px 0px 8px #fff",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "3%",
              transition: "transform 0.3s ease",
            }}
            className="hover:scale-105"
          >
            <Typography
              variant="subtitle1"
              align="center"
              style={{
                fontSize: "x-large",
                color: "#9BA9B4",
                fontWeight: "bold",
              }}
            >
              {industry}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </div>
</Box>


        {/* ********** Why Outsource Your Project to ZenQua?************** */}

        <div className="m-[50px] box-border">
          <h2 className=" font text-center uppercase text-[#D9E3EA]">WHY US</h2>
          <h2 className="text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA] ">
            Why Outsource Your Project to ZenQua?
          </h2>
          <div>
            <div className="hidden sm:block flex-wrap justify-center items-center w-full">
              <Grid container spacing={0} className="justify-center border rounded-xl w-full p-4">
                <Grid item xs={6} sm={3}>
                  <Paper
                    style={{
                      height: "100%",
                      paddingRight: "4px",
                      boxShadow: 'none',
                      backgroundColor: "transparent",
                    }}
                  >
                    {servicesData2.map((service, index) => (
                      <Button
                        className="hover:text-[#9BA9B4] w-full"
                        key={index}
                        onClick={() =>
                          this.handleClick6(service.stateKey, service.label)
                        }
                        disableRipple
                      >
                        <h3
                          className="font-bold flex items-center w-full h-full"
                          style={{
                            width: "100%",
                            height: "40px",
                            padding: "0px 8px",
                            borderRight:
                              this.state.clickedButton6 === service.label
                                ? "2px solid #019dce"
                                : "none",
                            paddingLeft: 10,
                            color:
                              this.state.clickedButton6 === service.label
                                ? "#019dce"
                                : "#9BA9B4",
                            fontSize: "14px",
                            backgroundColor:
                              this.state.clickedButton6 === service.label
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

                <Grid item xs={6} sm={9}>
                  <Paper
                    style={{
                      height: "100%",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: "12px",
                    }}
                  >
                    {servicesData2.map((service) =>
                      this.state.clickedButton6 === service.label ? (
                        <div key={service.label}>{service.content}</div>
                      ) : null
                    )}
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="block sm:hidden flex-wrap justify-center items-center w-[100%]">
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
              {outsorce.map((item, i) => (
                <Card
                  key={i}
                  style={{
                    height: "55vh",
                    width: "100%",
                    border: "solid 1px white",
                    borderRadius: "20px",
                    background: "transparent",
                    color: "#D9E3EA",
                    boxShadow: 'none'
                    // margin: "25px",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        // gutterBottom
                        variant="h5"
                        component="h2"
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: "21px",
                          marginBottom: "5%",
                          color: "#019dce",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{
                          color: "#9BA9B4",
                          fontSize: "19px",
                          margin: "2%",
                          textAlign: "justify",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>

        {/* ************Our Flexible Engagement Models************ */}

        <div className="w-full flex justify-center">
          <div className="w-[94%] mt-[20px]">
            <h2 className="font text-center uppercase text-[#D9E3EA]">
              ADAPTABLE APPROACH
            </h2>
            <h2 className="text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA] ">
              Our Flexible Engagement Models
            </h2>

            <Grid
              container
              spacing={2}
              justifyContent="center"
              style={{ width: "95%", margin: "0 auto" }}
            >
              <Grid
                item
                sm={12}
                md={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Paper
                  style={{
                    height: "max(70%,100%)",
                    flexWrap: "wrap",
                    backgroundColor: "transparent",
                    boxShadow: "0px 0px 5px white",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "20px",
                    borderRadius: "20px"
                  }}
                >
                  <h2 className="font-bold text-xl text-[#D9E3EA]">
                    Time & Material Basis Model
                  </h2>
                  <Typography
                    style={{
                      textAlign: "justify",
                      color: "#9BA9B4",
                      marginTop: "5%",
                      fontSize: "16px",
                    }}
                  >
                    Time and Material hiring model offers flexibility, cost
                    saving, access to expertise, scalability & time-saving for
                    projects with dynamic requirements. Ideal for businesses
                    with long-term projects needing future modifications.
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "5%",
                      width: "100%",
                    }}
                  >
                    <img
                      style={{
                        height: "0%",
                        width: "70%",
                      }}
                      src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                      alt="Time & Material Model"
                    />
                  </Box>
                  <Paper
                    style={{
                      marginTop: "5px",
                      backgroundColor: "transparent",
                      display: "flex",
                      // borderRadius:'none'
                    }}
                  >
                    <Typography
                      style={{
                        color: "#9BA9B4",
                        width: "50%",
                        padding: "10px",
                        textAlign: "justify",
                        fontSize: "16px",
                      }}
                    >
                      Flexibility to hire resources as needed. cost-effective
                      way to hire expert developers. ability to scale resources
                      up and down as needed.
                    </Typography>
                    <Typography
                      style={{
                        color: "#9BA9B4",
                        width: "50%",
                        padding: "10px",
                        textAlign: "justify",
                        fontSize: "16px",
                      }}
                    >
                      opportunity to work with experienced professionals.
                      Quickly lunch projects with minimal overhead. Access to
                      specialized skills and expertise.
                    </Typography>
                  </Paper>
                </Paper>
              </Grid>

              <Grid
                item
                // xs={12}
                sm={12}
                md={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // padding: "20px",
                }}
              >
                <Paper
                  style={{
                    height: "max(70%,100%)",
                    flexWrap: "wrap",
                    backgroundColor: "transparent",
                    boxShadow: "0px 0px 5px white",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "20px",
                    borderRadius: "20px"
                  }}
                >
                  <h2 className="font-bold text-xl text-[#D9E3EA]">
                    Dedicated Developer Model
                  </h2>

                  <Typography
                    style={{
                      textAlign: "justify",
                      color: "#9BA9B4",
                      marginTop: "5%",
                      fontSize: "16px",
                    }}
                  >
                    Dedicated developer model is a cost-effective way for
                    companies to hire full or part-time IT professionals for
                    websites, mobile app, or software development. ideal for
                    businesses seeking professionals It teams to effectively
                    utilize time.
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "5%",
                      width: "100%",
                    }}
                  >
                    <img
                      style={{
                        height: "90%",
                        width: "70%",
                      }}
                      src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/dedicated-development_team-2.svg"
                      alt="Dedicated Developer Model"
                    />
                  </Box>
                  <Paper
                    style={{
                      marginTop: "5px",
                      backgroundColor: "transparent",
                      display: "flex",
                    }}
                  >
                    <Typography
                      style={{
                        color: "#9BA9B4",
                        width: "50%",
                        padding: "10px",
                        textAlign: "justify",
                        fontSize: "16px",
                      }}
                    >
                      Ability to create a team around your project’s needs.
                      Long-term commitment to your project’s success. Access to
                      wide range of specialized skills.
                    </Typography>
                    <Typography
                      style={{
                        color: "#9BA9B4",
                        width: "50%",
                        padding: "10px",
                        textAlign: "justify",
                        fontSize: "16px",
                      }}
                    >
                      Ability to use existing framework environments. Increased
                      accountability from a dedicated team. Long-term cost
                      savings from dedicated resources.
                    </Typography>
                  </Paper>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>

        {/* ************************ */}
        <center>
          <div
            style={{
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "94%", marginTop: "20px" }}>
              <h2 className="font text-center uppercase  text-[#D9E3EA]">
                HIRE TEAM
              </h2>
              <h2 className="text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA] ">
                Hire The Best Developers
              </h2>
              <h2 className="font text-center text-[#9BA9B4] mb-[80px] text-lg text-justify m-[2%]">
                ZenQua offers expert developers for fixed-time/cost and
                dedicated projects in web design and software development. Our
                web developers specialise in trending technologies like PHP,
                Laravel, Magento, and ReactJS for custom, responsive web
                solutions. Our mobile app developers have advanced skills in the
                latest technologies and tools like Android Studio, Xcode,
                Kotlin, Xamrin, PhoneGap, React Native, etc., delivering
                cutting-edge mobile apps for Android, iOS, and cross-platform.
              </h2>
              <Grid container spacing={5} justifyContent="space-around">
                {people.map((person: any, index: any) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Avatar
                      style={{
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                      }}
                      src={person.avatarSrc}
                    />
                    <Box
                      className="bg-gray-700"
                      sx={{

                        height: { xs: "300px" },
                        width: {
                          xs: "55vw",
                          sm: "34vw",
                          md: "24vw",
                          lg: "19vw",
                        },
                        marginTop: "-50px",
                        borderRadius: '20px'
                      }}
                    >
                      <br />
                      <br />
                      <Typography
                        style={{
                          fontSize: "16px",
                          fontWeight: '600',
                          marginTop: "20px",
                          color: "#D9E3EA",
                        }}
                      >
                        {person.name}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "14px",
                          marginTop: "20px",
                          color: "#9BA9B4",
                        }}
                      >
                        Experience: {person.experience}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "14px",
                          marginTop: "10px",
                          color: "#9BA9B4",
                        }}
                      >
                        Expertise: {person.expertise}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "14px",
                          marginTop: "10px",
                          color: "#9BA9B4",
                        }}
                      >
                        Worked with: {person.workedWith}
                      </Typography>
                      <br />
                      <Link href="/contact-us">
                        <button className="bg-[#019dce] text-white text-md mt-4 px-8 py-2 rounded-md w-34 font-medium text-[#D9E3EA]">
                          Hire Me
                        </button>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </center>
      </>
    );
  }
}
const stats: Statistic[] = [
  { label: "Project Delivered", value: 2500, unit: "+" },
  { label: "Satisfied Clients", value: 800, unit: "+" },
  { label: "Experts on Board", value: 100, unit: "+" },
  { label: "Years of Experience", value: 14, unit: "+" },
];

export default function Testimonials() {
  return (
    <>
      <section className="py-12 md:py-12">
        <StatsCard statistics={stats} />
      </section>
    </>
  );
}
