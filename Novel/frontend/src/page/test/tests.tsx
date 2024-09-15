import React, { useState } from 'react';
import CreditCardForm from '../../compronents/Test_compnests/credittest';
import Headers from '../../compronents/Pubblic_components/headerselect';
import YourComponent from '../../compronents/Test_compnests/Buytest';
const Test: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleCardClick = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
         <Headers/>
        
        <div className="g2">
          
                <YourComponent/>
                <CreditCardForm/>
                
            </div>
        </>
    );
};

export default Test;