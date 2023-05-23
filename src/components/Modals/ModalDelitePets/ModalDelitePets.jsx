import {
    ContainerButton,
    ModalTitle,
    ModalText,
    ColorSpan,
    Container,
    TrashIcon,
  } from '../Modal.styled';
  import Button from 'shared/components/Button/Button';
  // import { ReactComponent as DeleteIcon } from '../../../icons/trash.svg';
  import PropTypes from 'prop-types';

  
  
  const ModalDelitePets = ({ onClick, onClose }) => {
    
    return (
      <Container>
        <ModalTitle>Delete adverstiment?</ModalTitle>
        <ModalText>
          Are you sure you want to delete{' '}
          <ColorSpan>
            “Cute dog looking <br></br>for a home”?
          </ColorSpan>
          <br></br>You can`t undo this action.
        </ModalText>
        <ContainerButton>
          <Button
            className="btn"
            type="button"
            color="white"
            width="256px"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="btn"
            type="button"
            onClick={onClick}
            color="blue"
            width="256px"
          >
            Yes{' '}
<TrashIcon width="24" height="24"/>
          </Button>
        </ContainerButton>
      </Container>
    );
  };
  
  ModalDelitePets.propTypes = {
    onClose: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  export default ModalDelitePets;