import { Grid, Box, Button } from '@mui/material';

const fields = [
  {
    label: 'First name',
    placeholder: 'First name',
    type: 'text',
    fullWidth: false,
  },
  {
    label: 'Last name',
    placeholder: 'Last name',
    type: 'text',
    fullWidth: false,
  },
  {
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
    fullWidth: true,
  },
  {
    label: 'Phone',
    placeholder: 'Phone number',
    type: 'tel',
    fullWidth: true,
  },
];

const selectFields = [
  {
    label: 'Choose a service',
    options: ['Mobile App Development', 'Web Development', 'Customized Development','Cloud Computing and DevOps','UI/UX Designing','AI/ML/IOT','Quality Control Service','Others'],
  },
  {
    label: 'Engagement type',
    options: ['Hire Dedicated developer', 'New Project', 'Ongoing Project','Maintenance & Support'],
  },
  {
    label: 'When to start?',
    options: ['Immediately', 'with in Week', 'with in Month','Not Sure'],
  },
  {
    label: 'Budget (USD)',
    options: ['0-$10k+', '$10k-$25k+', '$25k-$50k+','$50k-$100k']
  },
];

const ContactUs = () => {
  return (
    <Grid container className="my-24 px-4 sm:px-16">
      <Grid item xs={12} md={6}>
        <Box className="w-full flex flex-col justify-center items-center p-[20px]">
          <Box className="text-5xl font-bold text-center service-button mt-16 mb-12">
            Contact Us
          </Box>
          <img
            style={{
              height: "100%",
              width: "80%",
              margin: "15px",
            }}
            src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
            alt="Time & Material Model"
          />
          <Box>
            <h2 className="text-md text-center mb-10 mt-20 w-[97%] text-[#9BA9B4]">
              Let’s kickstart the journey together with a friendly greeting! Whether you have questions to ask or just want to connect, drop us a message and let’s build a strong relationship.
            </h2>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className="flex justify-center items-center w-[95%]">
        <Box className="w-full p-12 border rounded-xl m-8" style={{ boxSizing: "border-box", margin: "30px" }}>
          <Grid container spacing={3}>
            {fields.map((field, index) => (
              <Grid item xs={12} md={field.fullWidth ? 12 : 6} className="m-2 font-bold" key={index}>
                <Box className="mb-2">{field.label}</Box>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="input input-bordered w-full bg-gray-900 text-[#D9E3EA] focus:bg-gray-800 focus:border-[#2090a4] border-gray-500"
                />
              </Grid>
            ))}
            {selectFields.map((field, index) => (
              <Grid item xs={12} md={6} className="m-2 font-bold" key={index}>
                <Box className="mb-2">{field.label}</Box>
                <select className="select select-bordered w-full bg-gray-900 text-[#D9E3EA] focus:bg-gray-800 focus:border-[#2090a4] border-gray-500">
                  <option disabled selected>Select</option>
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
                className="textarea input input-bordered w-full bg-gray-900 text-[#D9E3EA] focus:bg-gray-800 h-36 focus:border-[#2090a4] border-gray-500"
                placeholder="About project"
              ></textarea>
            </Grid>
            <Grid item xs={12} className="flex justify-center">
              <Button
                style={{
                  backgroundColor: "#2090a4",
                  color: "#D9E3EA",
                  padding: "10px",
                  textTransform: 'none',
                  width: "100%",
                  borderRadius:'10px'
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
