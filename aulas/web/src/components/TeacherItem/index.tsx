import React from "react";
import whatsappIcon from '../../assests/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/23192463?s=460&u=6b531852015b14f6bb6101f872482ef16ded621d&v=4" alt="Eliabe Leal" />
                <div>
                    <strong>Eliabe Leal</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /><br />
            Itaque quasi, doloremque doloribus a, autem maxime reprehenderit quisquam quae, iste quidem consectetur porro. Distinctio earum architecto, voluptate ex expedita quas sequi?
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;