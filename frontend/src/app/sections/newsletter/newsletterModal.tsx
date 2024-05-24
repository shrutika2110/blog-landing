import Modal from "@/components/utility/modal";
import NewsletterContent from "./newsletterContent";

interface NewsletterModalProps {
    isModalVisible: boolean;
    showSuccessMsg: boolean;
    handleCloseModal: () => void;
    handleInputFocus: () => void;
    handleClick: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ 
    isModalVisible, 
    showSuccessMsg, 
    handleCloseModal, 
    handleInputFocus, 
    handleClick 
}) => {
    return (
        <Modal>
            <NewsletterContent 
                isModalVisible={isModalVisible} 
                showSuccessMsg={showSuccessMsg} 
                handleCloseModal={handleCloseModal}
                handleInputFocus={handleInputFocus}
                handleClick={handleClick}
            />
        </Modal>
    );
};

export default NewsletterModal;
