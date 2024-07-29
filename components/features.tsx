"use client";
import {
  Box,
  Button,
  ButtonBase,
  Hidden,
  ImageList,
  Typography,
} from "@material-ui/core";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
} from "@material-ui/core";
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Carousel from "react-material-ui-carousel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { SiNestjs } from "react-icons/si";
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
    name: "Mehul P",
    experience: "10+ Years",
    expertise: "AWS | Azure | Linux",
    workedWith: "CICD | Terraform",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Umesh G",
    experience: "5+ Years",
    expertise: "Core | MVC | PowerBI",
    workedWith: " SQL | APIs",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Ram N",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
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
  animatedStatistics: Statistic[];
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
      <div className="col-span-2 sm:col-span-3 text-xl text-[#9BA9B4] text-justify">
        <p>
          We understand the necessity of reliable, secure, and efficient
          back-end solutions for any business. Our team of experts is well
          versed in backend development services involving a wide range of
          programming languages, such as PHP, ASP.NET, Java, NodeJS, NestJS,
          Python, Blockchain, and SharePoint.
        </p>
        <br />
        <p>
          We recognize the potential of open source technologies and cloud
          platforms, and combine these with our creative and analytical
          abilities to develop ideal solutions for any business. At ZenQua, we
          prioritize agility, user-friendliness, and flexibility when it comes
          to developing the perfect system. Our team stays updated with the
          latest technologies, making sure your business remains competitive
          amidst ever-evolving requirements.
        </p>
        <br />
        <p>
          Our mission is to help you step closer to your success. With our
          comprehensive back-end system development services, you won’t have to
          worry about spending too much money on getting the results you need.
          Contact us today to see how we can help your business reach its full
          potential.
        </p>

        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/python-1.svg"
            alt="Backend Development"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/nodejs-1.svg"
            alt="Backend Development"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/blockchain.svg"
            alt="Backend Development"
            className="mt-4"
          />

          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/java-1.svg"
            alt="Backend Development"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "Frontend Development",
    stateKey: "frontend",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg text-xl text-[#9BA9B4] text-justify">
        <p>
          We provide comprehensive frontend development services, using
          AngularJS, VueJS, KnockutJS, ReactJS and NextJS. Our team of
          highly-skilled developers works closely with our clients to understand
          their requirements and create seamless user experiences. We are
          committed to helping you reach your business objectives using the best
          of the available technologies and creating web solutions that are
          secure and aligned with up-to-date industry standards.
        </p>
        <br />
        <p>
          By partnering with us, our clients get access to the newest IT
          Solutions combined with well-defined processes that allows for quick
          execution of projects, and faster development cycles. We make sure to
          provide our clients with maximum value for money by crafting solutions
          that are on-time, within budget and of the highest quality. Our
          developers have extensive experience in developing frontend user
          interfaces – from single page websites to complex interactive web
          applications, as well as progressive web apps (PWAs).
        </p>
        <br />
        <p>
          At ZenQua, we understand the need for giving your users the best
          possible experience, which is why we focus on enhancing page load
          times, UX/UI design and customer satisfaction. Let us help you create
          the perfect digital experience for your customers and take your
          business to the next level.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/vuejs.svg"
            alt="Backend Development"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/reactjs.svg"
            alt="Backend Development"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/angular-1.svg"
            alt="Backend Development"
            className="mt-4"
          />

          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/nextjs.svg"
            alt="Backend Development"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "Mobile App Development",
    stateKey: "mobile",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg text-xl text-[#9BA9B4] text-justify">
        <p>
          We focus on providing our customers with custom mobile app development
          services in a variety of platforms and languages including IOS,
          Android, ReactNative, Swift, Ionic, Flutter, Xamarin, and Kotlin among
          many others. Our talented team of mobile app developers is equipped
          with the knowledge and tools to design, develop, and deploy your
          mobile app withas much ease and effeciency as possible.
        </p>
        <br />
        <p>
          We offer complete end-to-end mobile app development services that
          enhance the user engagement and experience by creating an amazing UI
          and UX. We bring everything together – from our custom back-end
          programming to intuitive user interface design – to build reliable,
          secure, and feature-rich for Android, Apple, and Tablet. Our mobile
          app developers ensure that app design, UX/UI are given their due
          importance before getting into development and deployment.
        </p>
        <br />
        <p>
          We make sure that the code used to develop your mobile app is robust
          and can handle any loads and spikes so that your application is
          future-ready. With our comprehensive mobile app development services,
          you can launch or deploy your application quickly, meet your business
          goals and improve customer engagement.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/reactjs.svg"
            alt="reactnative"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/apple.svg"
            alt="apple"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/flutter.svg"
            alt="flutter"
            className="mt-4"
          />

          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/swift.svg"
            alt="swift"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "Framework Development",
    stateKey: "framework",
    content: (
      <div className="col-span-2 sm:col-span-3 text-xl text-[#9BA9B4] text-justify">
        <p>
          We provide custom backend framework development services tailored to
          your exact needs. Our experienced framework developers specialize in
          many different welknown frameworks, such as Laravel, Codeigniter,
          Django, Cakephp, MEAN Stack, Ruby on Rails and more. We have extensive
          expertise in leveraging these powerful open-source frameworks to build
          custom solutions to fit modern business demands.
        </p>
        <br />
        <p>
          At ZenQua, we stay up-to-date with the newest technologies in order to
          keep our clients competitive. Our state-of-the-art approach combines
          creativity with advanced analytics to deliver the best backend
          development solutions for our customers. We strive to develop systems
          that are reliable and agile, helping our clients maintain their
          business operations stress free.
        </p>
        <br />
        <p>
          When you work with ZenQua, you can expect a cost-effective solution
          and expert technical support. We are dedicated to providing our
          clients with backend solutions that will optimize their infrastructure
          and help their business reach new heights. Our team of experienced
          developers bring not just modern technology, but their commitment to
          customer excellence to every project.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/ruby-on-rails.svg"
            alt="ror"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/laravel.svg"
            alt="laravel"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/Codeignitor.svg"
            alt="Codeignitor"
            className="mt-4"
          />

          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151311/django.svg"
            alt="django"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "Ecommerce Development",
    stateKey: "ecommerce",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg text-xl text-[#9BA9B4] text-justify">
        <p>
          We are your go-to experts for comprehensive and reliable eCommerce
          development services. Our development team is experienced in
          delivering extensive and extensible solutions on leading platforms
          including Magento, Shopify, WooCommerce, Nopcommerce and more. We
          understand the importance of an agile, fast and secure solution and
          prioritize quality control and compatibility when wrapping up a
          project. We approach each of our projects with a tailored and creative
          mindset and combine analytics and modern tools to deliver the right
          solution for your business needs.
        </p>
        <br />
        <p>
          Our team towards approach not only focuses on creating a powerful and
          robust frontend, it pays greater attention to building a secure and
          reliable backend. We stay well-versed with the latest technologies to
          ensure that our solutions are up-to-date with modern trends and meet
          the client’s unique requirements. Our services are designed to help
          you get the most out of your eCommerce development, both in terms of
          usability and performance. We make sure that our solutions are
          cost-effective, user-friendly and flexible for continuous improvement
          and growth.
        </p>
        <br />
        <p>
          We are committed to helping our clients succeed and make their
          operations more efficient and cost-effective with our backend
          development services. Our experienced team takes pride in leveraging
          open source technologies and cloud platforms to provide reliable and
          secure solutions. At ZenQua, your success is our priority, and we
          strive relentlessly to bring you the most agile and secure eCommerce
          development solutions.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/magento.svg"
            alt="magento"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/nopcommerce.svg"
            alt="nopcommerce"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Shopify.svg"
            alt="Shopify"
            className="mt-4"
          />

          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/woocommerce.svg"
            alt="woocommerce"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "CMS Development",
    stateKey: "cms",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg text-xl text-[#9BA9B4] text-justify">
        <p>
          At ZenQua, we provide powerful CMS development services in leading
          platforms such as WordPress, Drupal, Kentico, DotnetNuke and more. Our
          experienced development team assists clients in creating solutions
          tailored to their needs, leveraging the latest technologies and cloud
          platforms so that they stay ahead of their competition.
        </p>
        <br />
        <p>
          We understand the importance of having a modern website with backend
          solutions that ensure data integrity and smooth operations. Our expert
          developers take the time to understand the objectives of our clients
          and craft solutions that offer increased scalability, improved
          performance, and bug-free coding. To match the evolving needs of our
          clients, our solutions are designed for maximum security, usability,
          and efficiency. At ZenQua, we take an integrated approach to CMS
          development, ensuring that data is managed securely, networks are safe
          and reliable, and the right tools are in place to help you succeed.
          Our team is well-versed in a variety of languages, including PHP,
          ASP.Net, Java, NodeJS, NestJS, Python, Blockchain, and SharePoint, and
          we place a great emphasis on ensuring our solutions are
          well-integrated, secure and intuitive to use.
        </p>
        <br />
        <p>
          Our primary aim is to provide our clients with advanced solutions that
          meet their business objectives. We offer comprehensive and agile
          services that open up pathways to success, increasing customers’ ROI
          and helping them stay ahead of their competitors. Get in touch with
          our team today to experience our professional CMS development
          services.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/wordpress.svg"
            alt="wordpress"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/dnn.svg"
            alt="dotnet"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/drupal.svg"
            alt="drupal"
            className="mt-4"
          />

          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/kentico.svg"
            alt="kentico"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "Database Development",
    stateKey: "database",
    content: (
      <div className="col-span-2 sm:col-span-3 text-lg text-xl text-[#9BA9B4] text-justify">
        <p>
          Our team of highly experienced professionals specialize in providing
          powerful, reliable and secure database development services in MSSQL,
          MySQL, PostgreSQL, MongoDB, Redis, Oracle, Firebase and more. We
          provide clients with the ability to develop tailored solutions that
          match their precise needs and demands. Our solutions enable them to
          make the best use of available data to increase their competitive
          edge. Our experts employ advanced approaches and make use of latest
          technologies to ensure high efficiency, performance and scalability of
          our services.
        </p>
        <br />
        <p>
          Our flexible solutions cover all aspects of database development,
          including comprehensive data modelling, data normalization and
          indexing, ETL processes, backup and recovery planning, database
          optimization and performance tuning, complex query optimization and
          more. We also provide professional administrative services for the
          upkeep and ongoing maintenance of our clients’ databases. Our
          solutions are designed to guarantee a maximum level of security and
          compliance with industry standards.
        </p>
        <br />
        <p>
          At ZenQua, we are dedicated to delivering top-tier database solutions
          that will help our clients maximize their profits and business
          potential. Our team understands the importance of accurate and
          reliable data-driven decisions and work diligently to ensure our
          solutions are designed to meet the highest of standards. We strive to
          provide our customers with the best possible value for their time and
          investment.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/mysql.svg"
            alt="mysql"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/firebase.svg"
            alt="firebase"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/mongodb.svg"
            alt="mongodb"
            className="mt-4"
          />

          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/oracle.svg"
            alt="oracle"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "Devops Development",
    stateKey: "devops",
    content: (
      <div className="col-span-2 sm:col-span-3 text-xl text-[#9BA9B4] text-justify">
        <p>
          At ZenQua, we take pride in offering comprehensive DevOps & Infra
          services in popular cloud environments such as AWS, Azure, & Google
          Cloud etc. Our experienced DevOps and Infra professionals understand
          customer requirements and develop strategies to optimally utilize
          cloud resources. We take a strategic approach to leveraging the power
          of the cloud and designing reliable environments that can be easily
          managed. Our team sets up applications, databases, and environments
          with ease and is well-versed in the usage of automation tools such as
          Chef, Puppet, Ansible, Docker etc.
        </p>
        <br />
        <p>
          We also specialize in building and managing virtual machines and
          provisioning of solutions on the public clouds. We are also very
          experienced with configuring and managing serverless solutions in
          multiple cloud environments. Our team uses the best practices to
          assess, optimize and secure the cloud infrastructure environment for
          our clients. We understand the challenges associated with different
          cloud platforms and take steps to provide solutions to protect the
          environment and secure critical data.
        </p>
        <br />
        <p>
          With us, clients can rest assured that their platforms are secure,
          well-maintained, and tightly governed. At ZenQua, we strive to empower
          our customers with best-in-class solutions designed to reduce costs,
          improve performance and aid in scaling applications and workloads.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Azure.svg"
            alt="Azure"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/Aws.svg"
            alt="Aws"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151310/google.svg"
            alt="google"
            className="mt-4"
          />
        </div>
      </div>
    ),
  },
  {
    label: "Digital Marketing",
    stateKey: "digital",
    content: (
      <div className="col-span-2 sm:col-span-3 text-xl text-[#9BA9B4] text-justify">
        <p>
          At ZenQua, we offer comprehensive digital marketing services to help
          you reach your business goals and gain maximum exposure across all
          digital channels. Our experienced digital marketing specialists are
          experts in SEO, SMM, PPC, and other services that are proven to help
          small and large businesses maximize their online visibility. Our
          tailored digital marketing strategies help to enhance your brand
          awareness, increase website traffic, and improve conversion rates,
          leading to higher ROI. Dedicated to staying up-to-date with the latest
          marketing trends and technologies, our team specializes in providing
          innovative yet practical solutions to boost your marketing efforts.
        </p>
        <br />
        <p>
          From search engine optimization (SEO) to content creation, we are
          experts in every corner of the digital marketing landscape. Whether
          you are looking to spread brand awareness, improve visibility, drive
          more organic traffic to your website, or convert more customers, our
          team is capable of delivering the results you need.
        </p>
        <br />
        <p>
          We understand that different businesses have different needs, which is
          why we take the time to get to know your business and develop a
          personalized marketing plan that best meets your requirements. At
          ZenQua, you can expect to receive reliable, custom-made digital
          marketing services that will help ensure that you reach your desired
          business objectives.
        </p>
        <div className="flex items-center justify-center flex-wrap mb-10">
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/ppc-1.svg"
            alt="ppc"
            className="flex mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/smm.svg"
            alt="smm"
            className="mt-4"
          />
          <img
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151308/seo-1.svg"
            alt="seo"
            className="mt-4"
          />
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
          <p className="text-2xl font-bold text-[#5D5DFF] mb-[2%]">
            Cost-Effectiveness
          </p>
        </div>
        <p className="text-xl text-[#9BA9B4] text-justify">
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
          <p className="text-2xl font-bold text-[#5D5DFF] mb-[2%]">
            Vast Knowledge
          </p>
        </div>
        <p className="text-xl text-[#9BA9B4] text-justify">
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
          <p className="text-2xl font-bold text-[#5D5DFF] mb-[2%]">
            Time-Saving
          </p>
        </div>
        <p className="text-xl text-[#9BA9B4] text-justify">
          launch your digital product quickly by outsourcing your development
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
          <p className="text-2xl font-bold text-[#5D5DFF] mb-[2%]">
            Experienced Partner
          </p>
        </div>
        <p className="text-xl text-[#9BA9B4] text-justify">
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
          <p className="text-2xl font-bold text-[#5D5DFF] mb-[2%]">
            Reduced Costs
          </p>
        </div>
        <p className="text-xl text-[#9BA9B4] text-justify">
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
          <p className="text-2xl font-bold text-[#5D5DFF] mb-[2%]">
            Custom Solution
          </p>
        </div>
        <p className="text-xl text-[#9BA9B4] text-justify">
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
      animatedStatistics: this.props.statistics.map((stat) => ({
        ...stat,
        value: 0,
      })),
      backend: false,
      frontend: false,
      mobile: false,
      framework: false,
      ecommerce: false,
      cms: false,
      database: false,
      devops: false,
      digital: false,
      clickedButton2: "Big Data",
      clickedButton3: "Cost-Effectiveness",
      selectedService: "Backend Development",
      techTrendsButton: "Big Data",
      State: {
        backend: false,
        frontend: false,
        mobile: false,
        framework: false,
        ecommerce: false,
        cms: false,
        database: false,
        devops: false,
        digital: false,
      },
      clickedButton5: "Backend Development",
      State2: {
        Cost: false,
        Vast: false,
        Time: false,
        Experienced: false,
        Reduced: false,
        Custom: false,
      },
      clickedButton6: "Cost-Effectiveness",
      Cost: false,
      Vast: false,
      Time: false,
      Experienced: false,
      Reduced: false,
      Custom: false,
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

  handleClick2 = (service: ServiceNames) => {
    this.setState({ selectedService: service });
  };

  componentDidMount() {
    this.animateStatistics();
  }

  componentWillUnmount() {
    this.animationIntervals.forEach((interval) => clearInterval(interval));
  }

  animateStatistics() {
    const { statistics } = this.props;

    statistics.forEach((stat, index) => {
      const { value } = stat;
      const animationDuration = 1000;
      const fps = 30;
      const stepSize = value / ((animationDuration / 1000) * fps);

      let animatedValue = 0;
      const intervalId = setInterval(() => {
        animatedValue += stepSize;
        if (animatedValue >= value) {
          animatedValue = value;
          clearInterval(intervalId);
        }

        this.setState((prevState) => ({
          animatedStatistics: prevState.animatedStatistics.map((item, i) =>
            i === index ? { ...item, value: animatedValue } : item
          ),
        }));
      }, 1000 / fps);

      this.animationIntervals.push(intervalId);
    });
  }

  render() {
    const { animatedStatistics } = this.state;
    const { clickedButton2 } = this.state;
    const { clickedButton3 } = this.state;

    const {
      backend,
      frontend,
      mobile,
      ecommerce,
      cms,
      database,
      devops,
      digital,
      clickedButton5,
    } = this.state;

    const { Cost, Vast, Time, Experienced, Reduced, Custom, clickedButton6 } =
      this.state;

    const services: ServiceNames[] = [
      "Backend Development",
      "Frontend Development",
      "Mobile App Development",
      "Framework Development",
      "E-Commerce Development",
      "CMS Development",
      "Database Development",
      "DevOps & Infra",
      "Digital Marketing",
    ];

    const style1 = {
      height: "max(70%,100%)",
      flexWrap: "wrap",
      backgroundColor: "transparent",
      boxShadow: "0px 0px 5px white",
    };
    const mainDiv = {
      width: "94%",
      marginTop: "20px",
    };

    const Boxes = {
      width: "100%",
      height: "5px",
      background: "#5D5DFF",
      marginTop: "10px",
    };

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
          <h2 className="text-3xl font-bold text-center mb-8 text-[#D9E3EA] hover:text-[#5D5DFF]">
            Over 2500+ Completed Projects & Still Counting.
          </h2>
          <div className="max-w[100%] text-[#9BA9B4]">
            <Grid container spacing={2}>
              {Data.project.map((item, index) => (
                <Grid item xs={12} md={6} lg={3}>
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-800 p-6 max-w[100%]"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <Box className="flex justify-center items-center text-[#5D5DFF]">
                      <div className="text-4xl font-bold text-purple-600">
                        <CountUp end={Number(item?.number)} />
                      </div>
                      <AddIcon style={{ fontSize: "40px" }} />
                    </Box>
                    <div className="text-md text-[#9BA9B4]">{item.title} </div>
                  </div>
                  <div className="h-[5px] bg-[rgb(93,93,255)] mt-[15px] w-full text-[#5D5DFF]"></div>
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
          <h2 className="text-3xl font-bold text-center mb-6 service-button text-[#D9E3EA] ">
            Our Core Services
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="hidden sm:flex justify-center">
              <Grid container spacing={0} className="justify-center w-full">
                <Grid item xs={6} sm={3} lg={3} xl={2}>
                  <Paper
                    style={{
                      height: "100%",
                      paddingRight: "4px",
                      backgroundColor: "transparent",
                      boxShadow: "0px 0px 3px white",
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
                            // color: "#9BA9B4",
                            width: "100%",
                            height: "40px",
                            marginTop: "3%",
                            borderLeft:
                              this.state.clickedButton5 === service.label
                                ? "2px solid #5D5DFF"
                                : "none",
                            paddingLeft: 10,
                            color:
                              this.state.clickedButton5 === service.label
                                ? "#5D5DFF"
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
                      boxShadow: "0px 0px 3px white",
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

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Carousel
              autoPlay={true}
              navButtonsAlwaysVisible={false}
              indicators={false}
              animation="slide"
              // direction="left"
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
                    height: "50%",
                    width: "100%",
                    border: "solid 1px white",
                    borderRadius: "20px",
                    background: "transparent",
                    color: "white",
                    // animation: "slide-in 1s forwards"
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
          </Box>
        </div>

        {/* *************** Our Core Services End ******************************** */}

        {/* *****  Improve and Innovate with the Tech Trends ******* */}

        <div className="box-border w-full">
          <h2 className=" font text-center uppercase text-[#D9E3EA]">
            TRENDING TECHNOLOGIES
          </h2>
          <h2 className="text-3xl font-bold text-center mb-6 text-[#D9E3EA]">
            Improve and Innovate with the Tech Trends
          </h2>

          <Box
            //  style={{ display: "flex", justifyContent: "center" }}
            className=" text-[#9BA9B4] justify-center flex"
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  width: "100%",
                },
              }}
              style={{
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
              }}
            >
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
                      width: "92%",
                    }}
                  >
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        // className="service-button"
                        onClick={() =>
                          this.handleClick("Big Data", "clickedButton2")
                        }
                        style={{
                          borderBottom:
                            this.state.clickedButton2 === "Big Data"
                              ? "2px solid #5D5DFF"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          fontSize:
                            this.state.clickedButton2 === "Big Data"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          background:
                            this.state.clickedButton2 === "Big Data"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 === "Big Data"
                              ? "#5D5DFF"
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
                              ? "2px solid #5D5DFF"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
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
                              ? "#5D5DFF"
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
                              ? "2px solid #5D5DFF"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
                          fontSize:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "16px"
                              : "14.50px",
                          fontWeight: "bold",
                          borderRadius: 0,
                          background:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "#171717"
                              : "none",
                          color:
                            this.state.clickedButton2 === "Computer Vision"
                              ? "#5D5DFF"
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
                              ? "2px solid #5D5DFF"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
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
                              ? "#5D5DFF"
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
                              ? "2px solid #5D5DFF"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
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
                              ? "#5D5DFF"
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
                              ? "2px solid #5D5DFF"
                              : "none",
                          width: "-1px",
                          alignItems: "center",
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
                              ? "#5D5DFF"
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

                    <div style={{ width: "100%" }}>
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
                              fontSize: "30px",
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  borderRadius: "none",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  borderRadius: "none",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                  borderRadius: "none",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                        <div style={{ margin: "10px", color: "white" }}>
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
                            style={{ margin: "10px", fontSize: "30px" }}
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                        <div style={{ margin: "10px", color: "white" }}>
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
                            style={{ margin: "10px", fontSize: "30px" }}
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                        <div style={{ margin: "10px", color: "white" }}>
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
                            style={{ margin: "10px", fontSize: "30px" }}
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
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                  padding: "10px",
                                  background: "transparent",
                                  color: "rgba(255,255,255,.75)",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                        <div style={{ margin: "10px", color: "white" }}>
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
                            style={{ margin: "10px", fontSize: "30px" }}
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
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                        <div style={{ margin: "10px", color: "white" }}>
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
                            style={{ margin: "10px", fontSize: "30px" }}
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
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
                                }}
                              >
                                <CheckBoxOutlineBlankIcon
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
            </Box>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Carousel
                autoPlay={true}
                navButtonsAlwaysVisible={false}
                indicators={false}
                animation="slide"
                // direction="left"
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
                      height: "100%",
                      width: "100%",
                      border: "solid 1px white",
                      borderRadius: "20px",
                      background: "transparent",
                      color: "#D9E3EA",
                      fontWeight: "bold",
                      fontSize: "20px",
                      // margin: "25px",
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
                          <CheckBoxOutlineBlankIcon
                            style={{
                              fontSize: "19px",
                              marginRight: "7px",
                              color: "#5D5DFF",
                              backgroundColor: "#5D5DFF",
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
                          <CheckBoxOutlineBlankIcon
                            style={{
                              fontSize: "17px",
                              marginRight: "7px",
                              color: "#5D5DFF",
                              backgroundColor: "#5D5DFF",
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
                            <CheckBoxOutlineBlankIcon
                              style={{
                                fontSize: "19px",
                                marginRight: "7px",
                                color: "#5D5DFF",
                                backgroundColor: "#5D5DFF",
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
                            <CheckBoxOutlineBlankIcon
                              style={{
                                fontSize: "19px",
                                marginRight: "7px",
                                color: "#5D5DFF",
                                backgroundColor: "#5D5DFF",
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
            </Box>
          </Box>
        </div>

        {/* ******* Improve and Innovate with the Tech Trends End ***** */}

        {/* ************ZenQua Industry Expertise */}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div style={{ boxSizing: "border-box", width: "98%" }}>
            <Grid container spacing={2} style={{ padding: "20px" }}>
              <Grid item xs={12}>
                <h2 className=" font text-center uppercase text-[#D9E3EA]">
                  INDUSTRIES WE SERVE
                </h2>
                <h2 className="text-3xl font-bold text-center mb-6 text-[#D9E3EA]">
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
                      boxShadow: "0px 0px 6px white",
                      margin: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "3%",
                    }}
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
          <h2 className="text-3xl font-bold text-center mb-6  text-[#D9E3EA]">
            Why Outsource Your Project to ZenQua?
          </h2>
          <div>
            <div
              className="hidden sm:flex justify-center flex rounded-[20px]"
              style={{ border: "1px solid #D9E3EA !important" }}
            >
              <Grid container spacing={0} className="justify-center w-full p-4">
                <Grid item xs={6} sm={3}>
                  <Paper
                    style={{
                      height: "100%",
                      paddingRight: "4px",
                      backgroundColor: "transparent",
                      // boxShadow: "none",
                    }}
                  >
                    {servicesData2.map((service, index) => (
                      <Button
                        className="hover:text-[#9BA9B4] w-full "
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
                            marginTop: "3%",
                            borderRight:
                              this.state.clickedButton6 === service.label
                                ? "2px solid #5D5DFF"
                                : "none",
                            paddingLeft: 10,
                            color:
                              this.state.clickedButton6 === service.label
                                ? "#5D5DFF"
                                : "#9BA9B4",
                            fontSize:
                              this.state.clickedButton6 === service.label
                                ? "16px"
                                : "14.50px",
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

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Carousel
              autoPlay={true}
              navButtonsAlwaysVisible={false}
              indicators={false}
              animation="slide"
              // direction="left"
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
                    height: "100%",
                    width: "100%",
                    border: "solid 1px white",
                    borderRadius: "20px",
                    background: "transparent",
                    color: "#D9E3EA",
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
                          color: "#5D5DFF",
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
          </Box>
        </div>

        {/* ************Our Flexible Engagement Models************ */}

        <Box className="w-full flex justify-center">
          <div className="w-[94%] mt-[20px]">
            <h2 className="font text-center uppercase text-[#D9E3EA]">
              ADAPTABLE APPROACH
            </h2>
            <h2 className="text-3xl font-bold text-center mb-6 text-[#D9E3EA]">
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
                      fontSize: "19px",
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
                        fontSize: "19px",
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
                        fontSize: "19px",
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
                      fontSize: "19px",
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
                        fontSize: "19px",
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
                        fontSize: "19px",
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
        </Box>

        {/* ************************ */}
        <center>
          <Box
            style={{
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "94%", marginTop: "20px" }}>
              <h2 className="font text-center uppercase  text-[#D9E3EA]">
                HIRE TEAM
              </h2>
              <h2 className="text-3xl font-bold text-center mb-6 text-[#D9E3EA]">
                Hire The Best Developers
              </h2>
              <h2 className="font text-center text-[#9BA9B4] mb-[80px] text-xl text-justify m-[2%]">
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
                {people.map((person, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Avatar
                      style={{
                        borderRadius: "40px",
                        width: "150px",
                        height: "150px",
                      }}
                      src={person.avatarSrc}
                    />
                    <Box
                      className="bg-gray-700"
                      // className="bg-slate-600"
                      sx={{
                        // backgroundColor: "RGB(71, 85, 119)",

                        height: { xs: "346px" },
                        width: {
                          xs: "55vw",
                          sm: "37vw",
                          md: "27vw",
                          lg: "19vw",
                        },
                        marginTop: "-50px",
                      }}
                    >
                      <br />
                      <br />
                      <Typography
                        style={{
                          fontSize: "16px",
                          marginTop: "20px",
                          color: "#D9E3EA",
                        }}
                      >
                        {person.name}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "14px",
                          marginTop: "50px",
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
                      <button className="bg-[#5D5DFF] text-white text-md mt-4 px-6 py-3 rounded-md h-12 w-34 font-medium text-[#D9E3EA]">
                        Hire Me
                      </button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Box>
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
      <section className="py-12 md:py-20 border-t border-gray-800">
        <StatsCard statistics={stats} />
      </section>
    </>
  );
}
