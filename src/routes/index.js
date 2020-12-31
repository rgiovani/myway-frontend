import React from 'react'
import { Switch } from 'react-router-dom'

import AnuncioTradutor from '../pages/anuncioTradutor'
import EditarAnuncioTradutor from '../pages/editarAnuncioTradutor'
import AssistirAula from '../pages/assistirAula'
import CadastroTradutor from '../pages/cadastroTradutor'
import CriarCurso from '../pages/criarCurso'
import EditarCurso from '../pages/editarCurso'
import Curso from '../pages/curso'
import Cursos from '../pages/home'
import Login from '../pages/login'
import MeusCursos from '../pages/meusCursos'
import PainelProfessor from '../pages/perfilProfessor'
import Signup from '../pages/signup'
import TornarProfessor from '../pages/tornarProfessor'
import VisaoCurso from '../pages/visaoCurso'
import VisualizarPerfilProfessor from '../pages/visualizarPerfilProfessor'
import CriarAula from '../pages/criarAula'
import EditarAula from '../pages/editarAula'
import Route from './Route'


export default function Routes() {
  return (
    <Switch>
      {/* Auth */}
      <Route component={Login} exact path="/login" />
      <Route component={Signup} exact path="/cadastro" />

      {/* Cursos */}
      <Route component={VisaoCurso} isPrivate path="/cursos/:id" />
      <Route component={Cursos} isPrivate exact path="/" />
      <Route component={AssistirAula} isPrivate path="/assistir-aula/:id" />

      {/* Aluno */}
      <Route component={MeusCursos} isPrivate path="/meus-cursos" />

      {/* Professor */}
      <Route component={TornarProfessor} isPrivate path="/tornar-professor" />
      <Route component={CriarCurso} isPrivate path="/criar-curso" />
      <Route component={Curso} isPrivate path="/professor/curso/:id" />
      <Route component={VisualizarPerfilProfessor} isPrivate path="/professor/:id" />
      <Route component={PainelProfessor} isPrivate path="/painel-professor" />

      {/* Tradutores */}
      <Route component={AnuncioTradutor} isPrivate exact path="/anuncio-tradutor" />
      <Route component={CadastroTradutor} isPrivate path="/cadastro-tradutor" />
      <Route component={EditarAnuncioTradutor} isPrivate exact path="/editar-anuncio-tradutor" />

      <Route component={CriarAula} isPrivate path="/criar-aula" />
      <Route component={EditarAula} isPrivate path="/editar-aula" />
      <Route component={EditarCurso} isPrivate path="/editar-curso" />
    </Switch >
  )
}
