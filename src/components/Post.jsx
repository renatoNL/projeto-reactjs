import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4WOVGbHZuy0mm0dH05QhngzjqWNQOm7mmw&s" />
                    <div className={styles.authorInfo}>
                        <strong> Renatinho </strong>
                        <span> Developer </span>
                    </div>
                </div>

                <time 
                    title="3 de setembro às 14:39h" 
                    dateTime="2025-09-03">Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 😀</p>
                <p> Sou um usuario com o icon do sonic falando algo </p>
                <a href="">link para algo</a>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>         
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}