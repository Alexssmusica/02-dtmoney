import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
			<NewTransactionModal
				isOpen={isNewTranslationModalOpen}
				onRequestClose={handleCloseNewTranslationModal}
			/>
			<GlobalStyle/>
		</>
	)
}

