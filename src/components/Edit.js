import React from 'react'
import Modal from 'react-modal';
import  {useState} from 'react';

const Edit = ({task, newed}) => {
    const [edit, setedit] = useState(task.action)

    let handleSubmit = (e) => {
      e.preventDefault()
      newed(task.id,edit)
      closeModal()
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
    
     
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen} onRequestClose={closeModal}  style={customStyles} contentLabel="Example Modal">
           <form onSubmit={handleSubmit} >
               <input type="text" value={edit} onChange={e=> setedit(e.target.value)}/>
               <button type="submit">Save</button>
               <button onClick={() =>closeModal()}>Cancel</button>
           </form>
      </Modal>
        </div>
    )
}

export default Edit
