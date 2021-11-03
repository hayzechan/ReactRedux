import React, { useState } from 'react';
import { Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import '../style/TodoItem.css';
import apis from '../apis/apis';
import { useDispatch } from 'react-redux';

const EditTodo = ({todo}) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [text, setText] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    const updateStatus = () => {
        const updated = {...todo, text: text};

        apis.put(`/todos/${todo.id}`, updated)
            .then(response => dispatch({ type: 'updateTodo', payload: response.data }))
        setIsModalVisible(false);

    }

    return (
        <>
            <EditOutlined className='delete' onClick={showModal} />
            <Modal title="Edit Todo" visible={isModalVisible} onOk={updateStatus} onCancel={handleCancel}>
                <input size="61" onChange={event => setText(event.target.value.toString())} defaultValue={todo.text} />
            </Modal>
        </>
    );
};

export default EditTodo;

