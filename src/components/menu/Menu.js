import React from "react";
import "./menu.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export default function Menu(){
    return(
        <div className="menu">
            <div className="menuWrapper">
            <div className="top">
                    <span className="logo">BacklogSys</span>    {/* Logotipo BacklogSys na parte superior esquerda */}
                </div>
                <div className="menuContent">
                    <h3 className="menuTitle"> Opções </h3>
                    <ul className="menuList">
                        <li className="menuListItem active">
                            <FontAwesomeIcon icon={["fas","house"]} className="iconMenu"/>   {/*  Inicio */}
                            Inicio
                        </li>
                        <li className="menuListItem">
                                <FontAwesomeIcon icon={["fas","list-check"]} className="iconMenu"/>   {/* Tarefas (Ver as tarefas todas) */}
                                Tarefas
                        </li>
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","users"]} className="iconMenu" />   {/* Equipa (A ideia é mostrar o que está a fazer a equipa pertencente) */}
                            Equipa
                        </li>
                    </ul>
                    <h3 className="menuTitle"> Área Pessoal </h3>
                    <ul className="menuList">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","user"]} className="iconMenu"/>   {/*  Utilizador (Mostra o perfil do utilizador) */}
                            Utilizador
                        </li>
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","list"]} className="iconMenu"/>   {/* Tarefas (Ver as tarefas todas) */}
                            As minhas tarefas
                        </li>
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","chart-pie"]} className="iconMenu"/>   {/* Desempenho pessoal (A ideia é mostrar um grafico do desempenho pessoal) */}
                            Desemp. pessoal
                        </li>
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","chart-line"]} className="iconMenu"/>   {/* Equipa (A ideia é mostrar o que está a fazer a equipa pertencente) */}
                            Desemp. equipa
                        </li>
                    </ul>
                    <h3 className="menuTitle"> Administração </h3>
                    <ul className="menuList">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","users-gear"]} className="iconMenu"/>   {/*  Gerir todas as equipas, ou no caso do team leader a sua */}
                            Equipas
                        </li>
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","calendar-check"]} className="iconMenu"/>   {/* Team leader e chefe podem definir prazos e definir tarefas a trabalhadores, o chefe pode ainda definir prioritárias */}
                            Definir prazos
                        </li>
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","chart-simple"]} className="iconMenu"/>   {/* Ver estatisticas de todas as equipas (Chefe apenas) */}
                            Estatitiscas gerais
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}