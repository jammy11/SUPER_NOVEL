import React from 'react';

import { ICoinCardPack } from '../../interface/transaction_interface/ICoinCardPack';

const CoinCard: React.FC<ICoinCardPack> = ({ key,amount, price, imgSrc, showButton = true, sendData }) => (
  <div className="cardCoinp">
    <div className="box11p">
    <img id='iconp' src='./src/assets/coin-50.png' alt="Gold Coin" />
      <span><b>{amount.toFixed(2)}</b></span>
    </div>
    <div className="box22p">
      <img id='imgCp' src={imgSrc} alt={`coin-${amount}`} />
    </div>
    <div className="box33p">
      {showButton ? (
        <button className='thbp' onClick={() => sendData(amount, price ,key)}>
          <b>{price.toFixed(2)}</b>
        </button>
      ) : (
        <button className='thbp'><b>{price.toFixed(2)}</b></button>
      )}
    </div>
  </div>
);

export default CoinCard;
