import Modal from "@/components/utility/modal";
import NewsletterContent from "./newsletterContent";

interface NewsletterModalProps {
    isModalVisible?: boolean;
    handleCloseModal?: () => void;
    showSuccessMsg?: boolean;
    email?: string;
    setEmail?: any;
    inputRef?: any;
    isInputFocused?: boolean;
    handleInputFocus: () => void;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick?: () => void;
    emailError?: any;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ 
    isModalVisible,
    handleCloseModal,
    showSuccessMsg,
    email,
    setEmail,
    inputRef,
    isInputFocused,
    handleInputFocus,
    handleChange,
    handleClick,
    emailError,
}) => {
    return (
        <Modal>
            <NewsletterContent 
                isModalVisible={isModalVisible}
                handleCloseModal={handleCloseModal}
                showSuccessMsg={showSuccessMsg}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                handleInputFocus={handleInputFocus}
                handleChange={handleChange}
                handleClick={handleClick}
                inputRef={inputRef}
                isInputFocused={isInputFocused}
            />
        </Modal>
    );
};

export default NewsletterModal;
