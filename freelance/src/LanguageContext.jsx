// src/LanguageContext.js
import React, {  useState, useContext } from 'react';
import PropTypes from 'prop-types'; 

// Create the context
const LanguageContext = React.createContext();

// Provider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language

    const translations = {
        en: {
          about: "About us",
          Privacy:"Privacy Policy",
          contact: "Contact us",
          service: "Our services",
          aboutus:"Discover behind the scenes of our kitchen, where each dish is designed to delight your four-legged companions! Complete home-cooked meals prepared with love and only the finest, pet-safe ingredients. At Hugging Tails, we believe that health and happiness start with the right nutrition. But we don't stop there! Our mission extends beyond the kitchen, as we offer personalized care for your pets, ensuring they receive the exercise and attention they need. Whether it's a healty meal or an energetic walk, we treat your pets as part of our family.",
          contactUS:'Contact us on WhatsApp',
          galerie:'Gallary',
          hero:'From healty meals to happy walks we will help you get the best treatment for you furry ',
          delivery:"Fast Delivery (30min-1h)",
          costumer:"24/7 dedicated costumer support",
          Trusted:"100% Premium Trusted Quality",
          why:"Why US?",
          Pawsome:'TREAT YOUR FURRY FRIEND to our PAWSOME plate ! A healthy and gourmet meal!',
          Walking:"Let us handle your pet’s daily exercise with our expert dog walking and education services.",
          Order:"Order Now",
          GetStarted:"Get Started",
          LearnMore:"Learn More",
          Phone:"Phone Number",
          Yourmessage:'Your message',
          Sendmessage:'Send message'
          // Add more keys as needed
        },
        fr: {
          about: "À propos de nous",
          Privacy:"Politique de Confidentialité.",
          contact: "Contactez-nous",
          aboutus:"Découvrez les coulisses de notre cuisine, où chaque plat est conçu pour ravir vos compagnons à quatre pattes ! Des repas faits maison préparés avec amour et uniquement avec les meilleurs ingrédients sûrs pour les animaux. Chez Hugging Tails, nous croyons que la santé et le bonheur commencent par la bonne nutrition. Mais nous ne nous arrêtons pas là ! Notre mission va au-delà de la cuisine, car nous offrons des soins personnalisés pour vos animaux, en veillant à ce qu'ils reçoivent l'exercice et l'attention dont ils ont besoin. Que ce soit un repas sain ou une promenade énergique, nous considérons vos animaux comme faisant partie de notre famille.",
          service: "Nos services",
          contactUS:'Contacter nous sur WhatsApp',
          galerie:'Galerie',
          hero:'Des repas sains aux promenades joyeuses, nous vous aiderons à obtenir le meilleur traitement pour votre ami à fourrure.',
          delivery:"Livraison rapide (30min-1h).",
          costumer:"Support client dédié 24/7.",
          Trusted:"100 % Qualité Premium de Confiance.",
          why:"POURQUOI NOUS?",
          Pawsome:"OFFREZ À VOTRE AMI À FOURRURE notre assiette GÉNIALE ! Un repas sain et gourmet !",
          Walking:"Laissez-nous nous occuper de l'exercice quotidien de votre animal avec nos services d'éducation et de promenade de chiens experts.",
          Order:"Commandez maintenant.",
          GetStarted:"Commencer",
          LearnMore:"Savoir Plus",
          Phone:"Numero de Telephone",
          Yourmessage:"Votre message",
          Sendmessage:"envoyez votre message"
        },
      };
    const translate = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
          {children}
        </LanguageContext.Provider>
      );
    };
LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children are a valid React node
  };
  
// Custom hook to use the LanguageContext
export const useLanguage = () => {
    return useContext(LanguageContext);
};
