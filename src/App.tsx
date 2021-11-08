import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
	const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);

	function handleOpenNewTranslationModal () {
		setIsNewTranslationModalOpen(true);

	}

	function handleCloseNewTranslationModal () {
		setIsNewTranslationModalOpen(false);
	}

	return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTranslationModal} />
			<Dashboard />
			<Modal
				isOpen={isNewTranslationModalOpen}
				onRequestClose={handleCloseNewTranslationModal}
			>
				<h2>Cadastrar transação</h2>
			</Modal>
			<GlobalStyle/>
		</>
	)
}

