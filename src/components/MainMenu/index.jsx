import * as S from "./styles";
import ImgDoctor from '../../assets/img_doctor.png';

export const MainMenu = () => {
	return (
		<S.Container>
			<S.Text>DoseCerta, Cuidando  sempre do seu bem estar</S.Text>
			<S.Image src={ImgDoctor} alt='Imagem de um doutor'></S.Image>
		</S.Container>
	);
}