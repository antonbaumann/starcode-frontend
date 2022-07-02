import './ContactInfoSection.scss'

const ContactInfoSection = () => {
  return (
    <section className="contact-info-section">
      <p>So kannst Du uns auch kontaktieren</p>
      <br />
      <p>
        email{' '}
        <a href="mailto:friedrich.wicke@protonmail.com">
          friedrich.wicke@protonmail.com
        </a>
      </p>
      <p>telefon +49 156 494848484</p>
    </section>
  )
}

export default ContactInfoSection
