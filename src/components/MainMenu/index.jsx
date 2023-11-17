import * as S from "./styles";
import HealthImage from '../../assets/img_main_menu.jpg';

export const MainMenu = () => {
	return (
		<S.Container>
			<S.Text>CUidando  sempre do seu bem estar</S.Text>
			<S.Image src={HealthImage} alt="Imagem ilustra duas mãos segurando um coração" />
		</S.Container>
	);
}