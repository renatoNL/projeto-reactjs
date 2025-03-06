import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';

import './global.css';
import styles from './App.module.css'

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