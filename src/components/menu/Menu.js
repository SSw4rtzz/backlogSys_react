import React from "react";
import "./menu.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

library.add(fas);


export default function Menu(){
    return(
        <div className="menu">
            <div className="menuWrapper">
            <div className="top">
            <NavLink to="/" style={{textDecoration:"none"}}>
                    <span className="logo">BacklogSys</span>    {/* Logotipo BacklogSys na parte superior esquerda */}
                </NavLink>
                </div>
                <div className="menuContent">
                    <h3 className="menuTitle"> Opções </h3>
                    <ul className="menuList">
                        <NavLink to="/" style={{textDecoration:"none"}} className="menuListItemStyle" activeclassname="active">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","house"]} className="iconMenu"/>   {/*  Inicio */}
                            Inicio
                        </li>
                        </NavLink>
                        <NavLink to="/tarefas" style={{textDecoration:"none"}} className="menuListItemStyle" activeclassname="active">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","list-check"]} className="iconMenu"/>   {/* Tarefas (Ver as tarefas todas) */}
                            Tarefas
                        </li>
                        </NavLink>
                        <NavLink to="/equipa" style={{textDecoration:"none"}} className="menuListItemStyle" activeclassname="active">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","users"]} className="iconMenu" />   {/* Equipa */}
                            Utilizadores
                        </li>
                        </NavLink>
                    </ul>
                    <h3 className="menuTitle"> Área Pessoal </h3>
                    <ul className="menuList">
                        <NavLink to="/user/1" style={{textDecoration:"none"}} className="menuListItemStyle" activeclassname="active">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","user"]} className="iconMenu"/>   {/*  Utilizador (Mostra o perfil do utilizador) */}
                            Perfil
                        </li>
                        </NavLink>
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
                    <NavLink to="/gerirEquipas" style={{textDecoration:"none"}} className="menuListItemStyle" activeclassname="active">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","users-gear"]} className="iconMenu"/>   {/*  Gerir todas as equipas, ou no caso do team leader a sua */}
                            Equipas
                        </li>
                    </NavLink>
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","calendar-check"]} className="iconMenu"/>   {/* Team leader e chefe podem definir prazos e definir tarefas a trabalhadores, o chefe pode ainda definir prioritárias */}
                            Definir prazos
                        </li>
                        <NavLink to="/sobre" style={{textDecoration:"none"}} className="menuListItemStyle" activeclassname="active">
                        <li className="menuListItem">
                            <FontAwesomeIcon icon={["fas","dna"]} className="iconMenu"/>   {/* Creditos */}
                            Sobre a aplicação
                        </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}