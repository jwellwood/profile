import React, { useContext } from 'react';
// Internal
import SectionContainer from 'layout/containers/SectionContainer.jsx';
import ContactIcons from 'components/contact/ContactIcons.jsx';
import ContactFooter from 'components/contact/ContactFooter.jsx';
import Header from 'components/ui/Header.jsx';
import { LanguageContext } from 'context/LanguageContext.js';
import { titles } from 'database';

const Contact = () => {
  const language = useContext(LanguageContext);
  const header = language.language ? titles.contact.eng : titles.contact.esp;
  return (
    <SectionContainer height='25vh' background='blue'>
      <Header>{header}</Header>
      <ContactIcons />
      <ContactFooter />
    </SectionContainer>
  );
};

export default Contact;
