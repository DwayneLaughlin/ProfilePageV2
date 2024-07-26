import React from "react";
import Resume from "./Resume";

function About() {
  return (
    <div>
      <h1>Hello! I'm Dwayne Laughlin</h1>
      <p>
        I am an IT consultant and software developer. I received my BA in Music
        from Loyola University Chicago in 2011. I spent years working as a
        freelance musicician, engineer, and producer before taking on a customer
        service role for a music retailer, zZounds.com, in 2013. I was able to
        work my way up to various positions within the company, eventually
        becoming the leader of a team that managed customer accounts and
        payments. I would go on to spend 5 of my 9 years with the company in
        that leadership role.
      </p>
      <p>
        One of the duties I had as a team lead was that I had to write and
        maintain training documentation for representatives. Our wiki site used
        HTML and that was my first introduction into working with a coding
        language. I became interested and began doing self study in my spare
        time, focusing on fundamentals around HTML, CSS, and JavaScript. I
        eventuall enrolled in a 6 month Full Stack Web Development Coding
        Bootcamp at Northwestern University in 2019 to further my knowledge. The
        class ended in March 2020, just Covid-19 pandemic started spreading. I
        spent the majority of the lockdown working on solo projects to sharpen
        my skills so that I could eventually transition into a tech-based role.
      </p>
      <p>
        In 2022, I began working as a contractor with FDM Group, Inc. In this
        job I work closely with Fortune 500 companies and offer tech-based
        solutions and assistance on projects. My most recent work for a client
        involved migrating their API system from Java to .NET 8.0. I have also
        developed features to aid in the provisioning of virtual machines and
        written unit tests for enterprise-level APIs.
      </p>
      <p>
        Thank you for taking the time to get to know me. <Resume></Resume>
      </p>
    </div>
  );
}

export default About;
