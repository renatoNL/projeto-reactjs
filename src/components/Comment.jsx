import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false}
                src="https://avatars.githubusercontent.com/u/82688776?v=4"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>RRD</strong>
                            <time
                                title="3 de setembro às 14:39h"
                                dateTime="2025-09-03">Publicado há 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito legal usuario com icon do sonic</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

                
            </div>

        </div>
    )
}