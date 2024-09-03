import * as React from 'react';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';

interface TransitionsModalProps {
  open: boolean;
  handleClose: () => void;
  description: string;
}

export default function TransitionsModal({
  open,
  handleClose,
  description,
}: TransitionsModalProps) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <ModalContent sx={style}>
            <h2 id="transition-modal-title" className="modal-title">
            Synopsis
            </h2>
            <p id="transition-modal-description" className="modal-description">
              {description}
            </p>
            <button className='fav-but'>
                Add to favorites 
            </button>
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
  (props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} />
      </Fade>
    );
  },
);


const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: #141726;
    border-radius: 8px;
    
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
      text-align:center;
      font-size:2rem;
      font-weight:bold;
      color:#B7B8C2;
    }

    & .modal-description {
      margin: 0;
      line-height: 2.5rem;
      font-size:2rem;
      font-weight:normal;
      color: #B7B8C2;
      margin-bottom: 4px;
    }
  `,
);

