import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #f8f2f5;
		--red: #E52e54;
		--blue: #5429CC;
		--green: #33CC95;
		--blue-light: #6933FF;
		--text-title: #363f5f;
		--text-body: #969cb3;
		--shape: #FFFFFF
	}

	* {
		padding:0 ;
		margin:0 ;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		background: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

`
