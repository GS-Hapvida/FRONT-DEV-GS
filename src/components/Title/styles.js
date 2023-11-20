import styled from "styled-components";
import { COLORS } from '../../styles/theme';

export const Title = styled.h2`
	display: flex;
	font-size: 2em;
	text-align: center;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	color: ${(props) => props.color ||COLORS.blueSecundary };
	margin: ${(props) => props.margin || '10px'};
`;