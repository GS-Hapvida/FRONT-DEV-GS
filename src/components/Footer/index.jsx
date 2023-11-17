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
          <h3 className="text">Projeto</h3>
        </div>
        <div className="section">
          <h3 className="text">Contato</h3>
          <p className="paragraph">Email: exemplo@inclui+.com</p>
          <p className="paragraph">Telefone: (99) 9999-9999</p>
        </div>
      </div>
      <div className="copy">
        <p className="paragraph">
          Todos os direitos reservados a Inclui+ &copy; - 2023
        </p>
      </div>
    </div>
  );
}

export {  Footer }