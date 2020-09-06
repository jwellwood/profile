import React, { useContext } from 'react';
// Internal
import SectionContainer from 'layout/SectionContainer';
import ContactIcons from 'components/contact/ContactIcons';
import ContactFooter from 'components/contact/ContactFooter';
import Header from 'components/ui/Header';
import { LanguageContext } from 'context/LanguageContext';
import { titles } from 'database';

const Contact: React.FC = () => {
  const language = useContext(LanguageContext);
  const header: string = language.language
    ? titles.contact.eng
    : titles.contact.esp;
  return (
    <SectionContainer height='25vh' background='blue'>
      <Header>{header}</Header>
      <ContactIcons />
      <ContactFooter />
    </SectionContainer>
  );
};

export default Contact;
