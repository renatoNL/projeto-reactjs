import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';
import styles from './App.module.css'

import { SideBar } from './components/SideBar';

export function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>

          <SideBar />
        
        <main>

          <Post
            author="RRD"
            content="ABC"

          />

          <Post
            author="RRenato"
            content="Renegado"

          />

        </main>
      </div>
    </div>
  )
}