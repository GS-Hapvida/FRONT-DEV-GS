import ImgLogo from '../../assets/dose_certa_branco.png';
import './sass/styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="section">
          <img src={ImgLogo} alt="Logo" className="logo-image" />
        </div>
        <div className="section">
          <h3 className="text">Projeto DoseCerta</h3>
          <p className="paragraph">DoseCerta, cuidando sempre de você!</p>
        </div>
        <div className="section">
          <h3 className="text">Contato</h3>
          <p className="paragraph">Email: exemplo@DoseCerta.com</p>
          <p className="paragraph">Telefone: (99) 9999-9999</p>
        </div>
      </div>
      <div className="copy">
        <p className="paragraph">
          Todos os direitos reservados a DoseCerta &copy; - 2023
        </p>
      </div>
    </div>
  );
}

export {  Footer }