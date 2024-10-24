/** @format */

import React from "react"
import { Routes, Route } from "react-router-dom"
import Activities from "../../Page/Activities/Activities"
import Contacts from "../../Page/Contacts"
import Home from "../../Page/Home"
import Game from "../../Page/Game"
import OthersFunds from "../../Page/OthersFunds"
import AboutUsAndTeams from "../../Page/AboutUsAndTeams"
import Projects from "../../Page/Projects"
import Reports from "../../Page/Reports"
import Food from "../../Page/Food/Food"
import styles from "./Main.module.scss"
import Souvenir from "../../Page/Souvenir"
import Suspects from "../../Page/Suspects/Suspects";

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/suspects' element={<Suspects />} />
        <Route path='/about' element={<AboutUsAndTeams />} />
        <Route path='/others' element={<OthersFunds />} />
        <Route path='/repoting' element={<Reports />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/food' element={<Food />} />
        <Route path='/souvenir' element={<Souvenir />} />

        <Route path='*' element={<h2> Not found page</h2>} />
      </Routes>
    </main>
  )
}

export default Main
