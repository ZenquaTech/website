import React, { useState } from 'react'
import "./ui.css"
  const circleData = [
    {
      id: 1,
      title: "Requirement Gathering",
    },
    {
      id: 2,
      title: "Designing",
    },
    {
      id: 3,
      title: "Development",
    },
    {
      id: 4,
      title: "Deployment",
    },
    {
      id: 5,
      title: "Maintenance",
    },
  ];

  const getCircleContent = (index: number): string => {
    switch (index) {
      case 1:
        return "At zenqua, we begin the custom software development process with a discovery phase where our business analyst and project Manager collect, research, and fully undertand the subject idea and specify the main requirements for the product. At this stage, we quickly validate if your business ideas are viable, feasible, and usable. At the end of this stage, we provides accurate time and cost estimates to our customers.";
      case 2:
        return "We are done with the discovery phase, our UX/UI design team begins analyzing project requirements. this helps our design team ensure that the app's information architecture is structured effectively. Next, our team create a wireframe, which are rough sketches that show the layout and position of elements on a web page. These wireframes do not include any logos or colors, and are designed to prioritize usability over visual appeal. Once the wireframes are approved by the customer, our UI/UX design team turns them into clickable prototypes that allow for the first user interaction. The final UI design is based on these prototypes.";
      case 3:
        return "zenqua follows the Agile philosophy in the software development process to reduce the risk of project failure, continuously improve our products, and be responsive to any necessary changes. This approach gives our customers full control over their projects through the inclusion of feedback, transparency, and quality control features. As a result, they receive high-quality digital products. To complete the software development process, we divide it into short sprints. We begin each sprint by prioritizing tasks in the backlog and then have our software developers build the required functionality. After a piece of functionality is completed, our quality assurance engineers test it to ensure it functions properly and is bug-free.";
      case 4:
        return "So, basically, when we launch your software solution, it means we're releasing the final version to your end users. This happens after we've fixed all the bugs and made all the improvements. This is the last step in the development process, and it's when you can see how people are using your product. Along with putting the solution out there for everyone to use, our team will also put together some release notes. These are like technical instructions that have details about the bugs we fixed and the enhancements we made. The release notes are a big deal because they help us connect with users and get the word out about your new product.";
      case 5:
        return "To keep your PHP app relevant and responsive to customer needs, ongoing updates and maintenance are necessary. We provide high-quality post-launch maintenance and support services to ensure that your app is bug-free and available 24/7. We offer two options for maintaining your digital product: a set number of hours for a monthly fee, or a backlog of tasks that takes a minimum of 80 hours to complete.";
      default:
        return "";
    }
  };

  const getCirclePositionClass = (index: number): string => {
    switch (index) {
      case 1:
        return "top";
      case 2:
        return "left";
      case 3:
        return "right";
      case 4:
        return "bottom-left";
      case 5:
        return "bottom-right";
      default:
        return "";
    }
  };
function CircleContent() {
    const [hoveredCircle,setHoveredCircle] = useState(1)
    const handleMouseEnter = (circleIndex: number) => {
        setHoveredCircle(circleIndex);
    };
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[100%] mt-[4%] ">
        <h2 className=" font text-center service-button uppercase">
          OUR PROCESS
        </h2>
        <h2 className="text-3xl font-bold text-center mb-8 hover:text-[#019dce]">
          Software Development Methodology
        </h2>
      </div>
      <div className="App">
        <div>
          <div className="main-circle">
            <div
              className="content-circle"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1
                style={{
                  fontSize: "15px",
                  marginBottom: "2%",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {hoveredCircle && circleData[hoveredCircle - 1]?.title}
              </h1>
              <p>{getCircleContent(hoveredCircle!)}</p>
            </div>
            {circleData?.map((data) => (
              <div
                key={data.id}
                className={`small-circle ${
                  data.id === hoveredCircle ? "hovered" : ""
                } ${getCirclePositionClass(data.id)}`}
                onMouseEnter={() => handleMouseEnter(data.id)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div>
                  {data.id} . {data.title}
                </div>
              </div>
            ))}
          </div>
          {/* <img src={image} alt="C++ logo" className="responsive-image" /> */}
        </div>
      </div>
    </>
  );
}

export default CircleContent
