import ImgDoctor from '../../assets/img_doctor.png';
import './sass/styles.scss';

export const MainMenu = () => {
	return (
		<div className='container'>
			<p className='text'>DoseCerta, cuidando sempre de você!</p>
			<img className="img" src={ImgDoctor} alt='Imagem de um doutor'></img >
		</div>
	);
};