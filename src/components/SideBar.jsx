import { PencilLine } from 'phosphor-react'

import styles from './SideBar.module.css'

export function SideBar() {
    return (
        <aside className={styles.SideBar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlrYWNodXxlbnwwfHwwfHx8MA%3D%3D"
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/82688776?v=4"
                />

                <strong>Renato Rei Delas</strong>
                <span>Programador</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}