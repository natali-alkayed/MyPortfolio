// ExperiencePage.js
import React from "react";
import "./ExperiencePage.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";


const experienceData = [
    {
        name : "ASAC Internship",
        date: "[March,2023-Oct,2023]",
        position : "Full stack web developer",
        img_url : "https://media.licdn.com/dms/image/C4D0BAQHBYv0mXR7aqw/company-logo_200_200/0/1585143437811?e=1701302400&v=beta&t=dEAX1VQMgH21T5ztXxw6oUrZlSTSZSKbOuR3f6DZmKU",
        disc : `Upskilling program at Abdul Aziz Al Ghurair School of Advanced Computing (ASAC) Internship `
    },
    {
        name : "YouTube",
        date: "[2020-Now]",
        position : "teacher",
        img_url : "https://media.licdn.com/dms/image/C4D0BAQEfoRsyU4yUzg/company-logo_200_200/0/1631053379295?e=1701302400&v=beta&t=u1RVf7fkfMbI2gubJikC8XmOD8-_NEod4TUZtenZ_m4",
        disc : `Teaching computer engineering courses like digital logic, computer organization, computer architecture and electronics.`
    },
    {
        name : "GCE Internship",
        date: "Jul,2022-Oct,2022",
        position : "Maintenance Engineer",
        img_url : "https://media.licdn.com/dms/image/D560BAQGJFf4QeUudCQ/company-logo_200_200/0/1664361113361?e=1701302400&v=beta&t=ho-zJUaHp1WtIgWvaBXnTSWbIMaYkE0TPCjUqE4dDAo",
        disc : " Training as maintenance engineer in General Computers and Electronics Company"
    },
    {
        name : "ElCoM Committee",
        date: "[2018-2023]",
        position : "Team Leader",
        img_url : "https://media.licdn.com/dms/image/C4E0BAQHE01sz0gcy8w/company-logo_200_200/0/1636568673945?e=1701302400&v=beta&t=4dIIgQ4EQzRxd4TcyUnKLfa5YpacNL3OUYB1JOC7QC8",
        disc : `Academic development content team leader in ElCoM website`
    },
]
const formatDate = (dateStr) => {
    // You should implement date formatting logic here.
    // For simplicity, I'll just remove square brackets.
    return dateStr.replace(/\[|\]/g, "");
  };
const ExperiencePage = () => {
    const location = useLocation();

    // Scroll to the top of the page when the location changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);


    return (
        <main className="portfolio container">

        <PageHeader title="experience" description="View my deployment history"/>

    


      <div className="experience-page">
    
        <div className="timeline">
          {experienceData.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <img src={experience.img_url} alt={experience.name} />
              </div>
              <div className="timeline-content">
                <div className="experience-title">
                  <h2>{experience.name}</h2>
                  <div className="experience-date">
                    <span className="highlight">{formatDate(experience.date)}</span>
                  </div>
                </div>
                <div className="experience-position">
                  <span className="highlight">{experience.position}</span>
                </div>
                <p>{experience.disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
    );
  };

export default ExperiencePage;
