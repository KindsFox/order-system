import React from "react";

const FormCreateOrder = () => {
    return (
        <div>
            <textarea placeholder="Описание" />
            <textarea placeholder="Причина поломки" />
            <textarea placeholder="Комментарий" />
            <button type="button">Добавить</button>
        </div>
    )
}

export default FormCreateOrder;