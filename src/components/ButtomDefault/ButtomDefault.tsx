import React from 'react';
import { Link } from 'react-router-dom';
import { ButtomStyled } from './ButtomStyled';


interface ButtonDefaultProps {
    label: string;
    as?: any;
    href?: string;
    to?: string;
    onClick?: () => void;
}

const ButtomConteudo: React.FC<ButtonDefaultProps> = ({ label, as, href, to, onClick }) => {
    const Componente = to ? Link : as || 'button';
    const propsComponente = to ? { to } : href ? { href } : { onClick };

    return (
        <ButtomStyled as={Componente} {...propsComponente}>
            {label}
        </ButtomStyled>
    );
};

export { ButtomConteudo }; 