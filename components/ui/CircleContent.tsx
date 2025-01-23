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
      return "At Zenqua, we begin with a discovery phase where our business analyst and project manager thoroughly research and define the idea, ensuring it is viable, feasible, and valuable. This phase includes gathering requirements, validating the concept, and providing accurate time and cost estimates to the customer.";
    case 2:
      return "After discovery, our UX/UI design team analyzes requirements to create effective information architecture. We produce wireframes that focus on usability over aesthetics, followed by interactive prototypes for user feedback. Once approved, the final UI design is crafted based on these prototypes.";
    case 3:
      return "Zenqua follows Agile practices to ensure flexibility, quality, and customer feedback integration. The project is divided into sprints, where tasks are prioritized, features are developed, and QA engineers rigorously test them to ensure functionality and reliability.";
    case 4:
      return "Launching your solution involves releasing the final product to users after thorough testing and bug fixes. We also provide detailed release notes that highlight key updates and improvements, ensuring users are informed and engaged with your product.";
    case 5:
      return "Post-launch, we offer ongoing maintenance to keep your product updated and reliable. Choose between a monthly maintenance plan or a task backlog approach, ensuring your app remains bug-free and operational 24/7.";
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
    <div className='mb-12'>
      <div 
      className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[95%] mt-[4%] "
      >
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
        </div>
      </div>
    </div>
  );
}

export default CircleContent
