import { ChangeEvent, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import Image from "next/image";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  engagementType: string;
  whenToStart: string;
  budget: string;
  projectBrief: string;
};

const fields = [
  {
    label: "First name",
    placeholder: "First name",
    type: "text",
    fullWidth: false,
    field: "firstName",
  },
  {
    label: "Last name",
    placeholder: "Last name",
    type: "text",
    fullWidth: false,
    field: "lastName",
  },
  {
    label: "Email",
    placeholder: "Email",
    type: "email",
    fullWidth: true,
    field: "email",
  },
  {
    label: "Phone",
    placeholder: "Phone number",
    type: "tel",
    fullWidth: true,
    field: "phone",
  },
];

const selectFields = [
  {
    label: "Choose a service",
    options: [
      "Mobile App Development",
      "Web Development",
      "Customized Development",
      "Cloud Computing and DevOps",
      "UI/UX Designing",
      "AI/ML/IOT",
      "Quality Control Service",
      "Others",
    ],
  },
  {
    label: "Engagement type",
    options: [
      "Hire Dedicated developer",
      "New Project",
      "Ongoing Project",
      "Maintenance & Support",
    ],
  },
  {
    label: "When to start?",
    options: ["Immediately", "within Week", "within Month", "Not Sure"],
  },
  {
    label: "Budget (USD)",
    options: ["0-$10k+", "$10k-$25k+", "$25k-$50k+", "$50k-$100k"],
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    engagementType: "",
    whenToStart: "",
    budget: "",
    projectBrief: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  
    const templateParams = {
      from_name: formData.firstName + " " + formData.lastName,
      to_name: "Ayush tule",
      subject: "New Contact Form Submission",
      message: `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      Engagement Type: ${formData.engagementType}
      Phone Number :${formData.phone}
      Service : ${formData?.service}
      Engagement Type : ${formData?.engagementType}
      When to Start: ${formData.whenToStart}
      Budget: ${formData.budget}
      Project Brief: ${formData.projectBrief}
      email : ${formData?.email} 
    `,
    };

    emailjs
      .send(
        "service_14pyn8e",
        "template_zzxciyv",
        templateParams,
        "iV2LpGhkJHKT6wGLR"
      )
      .then((response) => {
        alert("Email sent successfully!");
       
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          engagementType: "",
          whenToStart: "",
          budget: "",
          projectBrief: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <Grid container className="my-24 px-4 sm:px-16">
      <Grid item xs={12} md={6}>
        <Box className="w-full flex flex-col justify-center items-center p-[20px]">
          <Box className="text-5xl font-bold text-center service-button mt-16 mb-12">
            Contact Us
          </Box>
          <Image
            style={{
              height: "100%",
              width: "80%",
              margin: "15px",
            }}
            src="../images/webpFile/Time-Material.webp"
            alt="Time & Material Model"
          />
          <Box>
            <h2 className="text-md text-center mb-10 mt-20 w-[97%] text-[#9BA9B4]">
              Let’s kickstart the journey together with a friendly greeting!
              Whether you have questions to ask or just want to connect, drop us
              a message and let’s build a strong relationship.
            </h2>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="flex justify-center items-center w-[95%]"
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="w-full p-12 border rounded-xl m-8"
          style={{ boxSizing: "border-box", margin: "30px" }}
        >
          <Grid container spacing={3}>
            {fields.map((field, index) => (
              <Grid
                item
                xs={12}
                md={field.fullWidth ? 12 : 6}
                className="m-2 font-bold"
                key={index}
              >
                <Box className="mb-2">{field.label}</Box>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.field}
                  value={
                    formData[
                      field.label
                        .toLowerCase()
                        .replace(" ", "") as keyof FormData
                    ]
                  }
                  onChange={handleChange}
                  className="input input-bordered w-full bg-gray-900 text-[#D9E3EA] focus:bg-gray-800 focus:border-[#019dce] border-gray-500"
                />
              </Grid>
            ))}
            {selectFields.map((field, index) => (
              <Grid item xs={12} md={6} className="m-2 font-bold" key={index}>
                <Box className="mb-2">{field.label}</Box>
                <select
                  aria-label={field.label.toLowerCase().replace(" ", "")}
                  id={field.label.toLowerCase().replace(" ", "")}
                  name={field.label.toLowerCase().replace(" ", "")}
                  value={
                    formData[
                      field.label
                        .toLowerCase()
                        .replace(" ", "") as keyof FormData
                    ]
                  }
                  onChange={handleChange}
                  className="select select-bordered w-full bg-gray-900 text-[#D9E3EA] focus:bg-gray-800 focus:border-[#019dce] border-gray-500"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {field.options.map((option, optIndex) => (
                    <option key={optIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Grid>
            ))}
            <Grid item xs={12} className="m-2 font-bold">
              <Box className="mb-2">Brief about the Project</Box>
              <textarea
                name="projectBrief"
                className="textarea input input-bordered w-full bg-gray-900 text-[#D9E3EA] focus:bg-gray-800 h-36 focus:border-[#019dce] border-gray-500"
                placeholder="About project"
                value={formData.projectBrief}
                onChange={handleChange}
              ></textarea>
            </Grid>
            <Grid item xs={12} className="flex justify-center">
              <Button
                type="submit"
                style={{
                  backgroundColor: "#019dce",
                  color: "#D9E3EA",
                  padding: "10px",
                  textTransform: "none",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                Send Your Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
