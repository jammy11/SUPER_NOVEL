import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Alert } from 'antd';
import './pop_WL1.css';
import './pop.css';
import './pop_WL1.css';
import CountdownButton from './GETOTP';

interface CoinCardProps {
  amount: number;
  price: number;
  imgSrc: string;
  onClick: () => void;
}

const CoinCard: React.FC<CoinCardProps> = ({ amount, price, imgSrc, onClick }) => (
  <div className="cardCoinp" onClick={onClick}>
    <div className="box11p">
      <img id='iconp' src='./src/assets/coin-refill-50.svg' alt="Gold Coin" />
      <span><b>{amount.toFixed(2)}</b></span>
    </div>
    <div className="box22p">
      <img id='imgCp' src={imgSrc} alt={`coin-refill-${amount}`} />
    </div>
    <div className="box33p">
      <button className='thbp'><b>{price.toFixed(2)}</b></button>
    </div>
  </div>
);

const Popup2: React.FC = () => {
  const [showPopup2_2, setShowPopup2_2] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showVerifyPopup, setShowVerifyPopup] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleShowPopup2_2 = () => setShowPopup2_2(true);
  const handleClosePopup2_2 = () => setShowPopup2_2(false);

  const handleCoinCardClick = (amount: number, price: number) => {
    setSelectedAmount(amount);
    setSelectedPrice(price);
    setShowPopup2_2(false);
    setTimeout(() => setShow(true), 300); // Show Popup 1 (True Wallet) after selecting package
  };

  const handleClose = () => setShow(false);

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    setIsFormValid(form.checkValidity());
  };

  const handleConfirm = () => {
    setShow(false);
    setTimeout(() => setShowVerifyPopup(true), 300); // Show Popup Verify after confirming True Wallet
  };

  const handleVerifyConfirm = () => {
    setShowVerifyPopup(false);
    setTimeout(() => setShowAlert(true), 300); // Show Alert after verifying
  };

  const handleVerifyCancel = () => setShowVerifyPopup(false);
  const handleCloseAlert = () => setShowAlert(false);

  return (
    <>
      <div className="cardPayment" onClick={handleShowPopup2_2}>
        <div className="box2">
          <div className="box1"></div>
          <img id="imgC" src="./src/assets/true-wallet.png" alt="truemoney-wallet" />
          <div className="box1">
            <span><b>ทรูวอเล็ต</b></span>
          </div>
        </div>
      </div>

      {/* Popup 2 */}
      <Modal show={showPopup2_2} onHide={handleClosePopup2_2}>
        <div className='aap'>
          <div className='prop'>คุ้มสุด!</div>
          <div className="g2p">
            <div className="g2_1p">
              <h3>แพ็กเกจ</h3>
              <div className="cancelIconp" onClick={handleClosePopup2_2}>
                <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
              </div>
            </div>
            <div className="g2_2p">
              <CoinCard amount={70} price={50} imgSrc="./src/assets/coin-refill-50.svg" onClick={() => handleCoinCardClick(70, 50)} />
              <CoinCard amount={120} price={100} imgSrc="./src/assets/coin-refill-100.svg" onClick={() => handleCoinCardClick(120, 100)} />
              <CoinCard amount={240} price={200} imgSrc="./src/assets/coin-refill-200.svg" onClick={() => handleCoinCardClick(240, 200)} />
              <CoinCard amount={360} price={300} imgSrc="./src/assets/coin-refill-300.svg" onClick={() => handleCoinCardClick(360, 300)} />
              <CoinCard amount={699} price={500} imgSrc="./src/assets/coin-refill-500.svg" onClick={() => handleCoinCardClick(699, 500)} />
              <CoinCard amount={1200} price={1000} imgSrc="./src/assets/coin-refill-1000.svg" onClick={() => handleCoinCardClick(1200, 1000)} />
            </div>
          </div>
        </div>
      </Modal>

      {/* Popup 1 */}
      <Modal show={show} onHide={handleClose}>
        <div className="g2t">
          <div className="g2_1w">
            <h3>ดำเนินการชำระเงิน</h3>
            <div className="cancelIcon" onClick={handleClose}>
              <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
            </div>
          </div>
          <div className="g23">
            <div className="CardTureWL">
              <CountdownButton />
              <form className='fromWL' action="/" method="POST" onChange={handleFormChange}>
                <div className="cre1">
                  <label htmlFor="tel">หมายเลขโทรศัพท์</label><br/>
                  <input type="text" id="tel" name="tel" pattern="\d{10}" placeholder="" maxLength={10} required /><br /><br />
                </div>
                <img id='imgWL' src="./src/assets/truemoney-wallet.avif" alt="truemoney-wallet" />
                <div className="cre2">
                  <label htmlFor="OTP">OTP</label><br/>
                  <input type="text" id="OTP" name="OTP" placeholder="______" maxLength={6} required /><br /><br />
                </div>
                <br/>
                <div className="cre5">
                  <div className="cre5_2">
                    <img id='imgSecureP' src="./src/assets/SecurePayment.png" alt="SecurePayment" /> &nbsp;SECURE PAYMENT
                  </div>
                </div>
              </form>
              <div className="cre5_3">
                <button 
                  className='submitbWL2' 
                  onClick={handleConfirm} 
                  style={isFormValid ? {} : { cursor: 'not-allowed' }} 
                  disabled={!isFormValid}
                >
                  <b>ยืนยัน</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Popup Verify */}
      <Modal show={showVerifyPopup} onHide={handleVerifyCancel}>
        <div className='aap'>
          
          <div className="g2q">
            <div className="g2_1p">
                <h3>ยืนยันการชำระเงิน</h3>
              <div className="cancelIconpForVerify" onClick={handleVerifyCancel}>
              <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
              </div>
            </div>
            <div className="g2_2p">
              <div className='basePp'>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;คุณกำลังซื้อ {selectedAmount} คอยน์ ในราคา {selectedPrice} บาท ยอดเงินจะถูกชำระผ่านช่องทาง &nbsp;&nbsp;&nbsp;&nbsp;ทรูวอเล็ต กรุณากดปุ่ม "ยืนยัน" เพื่อดำเนินการ  </p>
            </div>  
            <div className='bottonBox'>
              <button className='no' onClick={handleVerifyCancel}>ยกเลิก</button>
              <button className='yes' onClick={handleVerifyConfirm}>ยืนยัน</button>
            </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Alert */}
      {showAlert && (
        <Alert
          message={`เสร็จสิ้น , คุณได้รับเหรียญ ${selectedAmount} คอยน์`}
          type="success"
          showIcon
          closable
          onClose={handleCloseAlert}
          className="custom-alert" // Apply the custom class
        />
      )}
    </>
  );
};

export default Popup2;