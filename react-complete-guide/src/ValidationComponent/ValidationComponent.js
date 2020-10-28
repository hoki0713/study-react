import React from 'react'

const validationComponent = ({ txtLength }) => {
    return txtLength >= 5 ? "Text long enough" : "Text too short";
}

export default validationComponent;