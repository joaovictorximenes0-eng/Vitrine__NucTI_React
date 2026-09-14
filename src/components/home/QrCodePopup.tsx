import { useState } from 'react';
import qrCode from '../../imgs/nucti-lab-qrcode.jpeg';
import styles from './QrCodePopup.module.css';

export default function QrCodePopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setVisible(false)}
          aria-label="Fechar"
        >
          ×
        </button>
        <p className={styles.title}>NucTI Lab</p>
        <img src={qrCode} alt="QR Code NucTI Lab" className={styles.qrImage} />
      </div>
    </div>
  );
}