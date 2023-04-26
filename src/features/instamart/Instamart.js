import React, { useState } from "react";
import styles from "./Instamart.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const teamData = [
  {
    id: "1",
    name: "Rohit Kapoor",
    pic: "https://media.licdn.com/dms/image/C4D03AQHNVueTJ22HFg/profile-displayphoto-shrink_800_800/0/1601991289344?e=1687392000&v=beta&t=K1IvBsWN8NeUeS23gVUWefvzwmEDJP0Mxb9cyM4OkxQ",
    about:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.",
    role: "CEO | Food Market Place",
    linkedinUrl: "https://www.linkedin.com/in/rohit-kapoor-99a30436/",
  },
  {
    id: "2",
    name: "Sriharsha M",
    pic: "https://media.licdn.com/dms/image/C4D03AQFZsa4cXDZ9wA/profile-displayphoto-shrink_800_800/0/1516770850383?e=1687392000&v=beta&t=xWymm1t_cIgQMxZrhBH3CgS0-ABE3YGZR_-6hzTrQW0",
    about:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.",
    role: "CEO | Co-Founder",
    linkedinUrl: "https://www.linkedin.com/in/sriharsha-m-563aa217/",
  },
  {
    id: "3",
    name: "Venkat Iyer",
    pic: "https://media.licdn.com/dms/image/C5603AQGG9w9mVh9QrA/profile-displayphoto-shrink_800_800/0/1611219642454?e=1687392000&v=beta&t=DqNcIvoEYdZ4nPmtnn_6WsP4PprShzAwQTPWbYJd-QA",
    about:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.",
    role: "Advisor to the Food CEO",
    linkedinUrl: "https://www.linkedin.com/in/venkatr16/",
  },
];

const careersData = [
  {
    role: 'SDET1',
    location: 'Chennai'
  },
  {
    role: 'Sales Executive',
    location: 'Mumbai'
  },
  {
    role: 'Food Inspector',
    location: 'Hyderabad'
  },
  {
    role: 'Account Manager',
    location: 'Kerala'
  },
  {
    role: 'Associate Sales Manager',
    location: 'Pondicherry'
  },
  {
    role: 'Sales Manager',
    location: 'Chennai'
  },
  {
    role: 'Assistant Manager',
    location: 'Delhi'
  },
  {
    role: 'Brand Partership Manager',
    location: 'Bangalore'
  },
  {
    role: 'SDET2',
    location: 'Bangalore'
  },
  {
    role: 'Project Manager',
    location: 'Chennai'
  },
  {
    role: 'Technical Lead',
    location: 'Chennai'
  }
]
export default function Instamart() {
  const [expanded, setExpanded] = useState("");
  return (
    <div className={styles.instamart}>
      <div className={styles.header}>
        <Typography variant="h3">Instamart</Typography>
      </div>
      <div className={styles.main}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={() => setExpanded("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>About Instamart</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg"
              aria-label="About instamart image"
              className={styles.aboutInstaImg}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={() => setExpanded("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Team Instamart</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              {teamData.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card key={item.id}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={item.pic}
                      name={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className={styles.memberName}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className={styles.role}>
                        {item.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className={styles.about}>
                        {item.about.substring(0, 150)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={item.linkedinUrl} underline="none" className={styles.linkedInUrl} >Linkedin</Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={() => setExpanded("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Careers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container className={styles.careerGridContainer} >
              {careersData.map(job => <Grid item xs={12} sm={6} md={4} lg={3} className={styles.careerGridItem}>
                <div className={styles.careerContent}>
                  <Typography variant="h4">{job.role}</Typography>
                  <Typography variant="h5">{job.location}</Typography>
                </div>
              </Grid>)}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
