import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assests/images/logo.svg";
import backIcon from "../../assests/images/icons/back.svg";

import './styles.css'

interface PageHeaderProps {
    title: string
    description?: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {/* && usando quando não temos o else do condicional, pois a segunda parte só será executada se a primeira for */}
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;