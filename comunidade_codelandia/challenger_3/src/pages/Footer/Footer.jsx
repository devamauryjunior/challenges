import React from "react";
import Input from "../../components/Input/Input";
import Button from "./../../components/Button";
import "./style.css";

function Footer() {
    const dontSendForm = event => event.preventDefault();
    return (
        <footer className="container-3" onSubmit={dontSendForm}>
            <h1 className="ct3-title">
                Entre em contato
            </h1>
            <form action="" className="form">
                <Input typeName="text" placeholder="Nome:"/>
                <Input typeName="email" placeholder="E-mail:" />
                <Input typeName="tel" placeholder="Telefone:" onChange={e => setTelValue(e.target.value)}/>
                <textarea name="text-area" id="" className="text-area" cols="1" rows="5" placeholder="Mensagem..."></textarea>
                <Button type="submit" width="100%" text="Enviar mensagem" fontWeight="700" className="f-button"/>
            </form>
        </footer>
    )
}

export default Footer;