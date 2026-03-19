import { PERSONAL_INFO } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle number="08" title="Get In Touch" />
        <div className="contact_content">
          <p className="contact_description">
            I'm currently open to new opportunities and always happy to connect.
            Whether you have a question, a project idea, or just want to say hi —
            my inbox is always open!
          </p>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="btn btn_primary btn_large">
            Say Hello
          </a>
          <div className="contact_socials">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${PERSONAL_INFO.email}`}>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
