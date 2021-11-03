import React, { useState } from 'react';
import { Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import '../style/TodoItem.css';
import apis from '../apis/apis';
import { useDispatch } from 'react-redux';

const EditTodo = (todo) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [text, setText] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //   const addTodo = () => {
    //     apis.post('/todos', {text: text, done: false})
    //         .then(response => dispatch({ type: 'addTodo', payload: text }));
    // }
    const updateStatus = () => {
        apis.put(`/todos/${todo.id}`, { text: text })
            .then(reponse => dispatch({ type: 'updateTodo', payload: text }))
        setIsModalVisible(false);
    }

    return (
        <>
            <EditOutlined className='delete' onClick={showModal} />
            <Modal title="Edit Todo" visible={isModalVisible} onOk={updateStatus} onCancel={handleCancel}>
                <input size="61" onChange={event => setText(event.target.value)} defaultValue={text} />
            </Modal>
        </>
    );
};

export default EditTodo;

