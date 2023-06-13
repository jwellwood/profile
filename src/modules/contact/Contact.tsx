import React, { useContext } from 'react';
import SectionContainer from 'components/layout/SectionContainer';
import ContactIcons from 'modules/contact/ContactIcons';
import ContactFooter from 'modules/contact/ContactFooter';
import { LanguageContext } from 'context/LanguageContext';
import Header from 'components/typography/Header';
import { contact } from 'text';

const Contact: React.FC = () => {
  const language = useContext(LanguageContext);
  const { title } = contact;
  const header: string = language.language ? title.en : title.es;
  return (
    <SectionContainer height='25vh' background='blue'>
      <Header>{header}</Header>
      <ContactIcons />
      <ContactFooter />
    </SectionContainer>
  );
};

export default Contact;
