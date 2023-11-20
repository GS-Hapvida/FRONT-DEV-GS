import styled from "styled-components";
import { COLORS } from "../../styles/theme";

export const Container = styled.div`
	padding: 40px;
	background-color: ${ COLORS.blueSecundary };
	height: 90vh;
	width: 100vw;
	display: flex;
	align-items: center;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
`;

export const Text = styled.h1`
	grid: 1;
	font-weight: 400;
	font-size: 3.8rem;
	line-height: 75px;
	text-align: center;
	color: #ffffff;
`;

export const Image = styled.img`
	grid: 2;
	margin: 20px;
	width: 100%;
`;