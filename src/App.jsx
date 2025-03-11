import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';

import './global.css';
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/82688776?v=4',
      name: 'Renato Nascimento',
      role: 'estudante'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 😀' },
      { type: 'paragraph', content: 'Sou um usuario com o icon do sonic falando algo' },
      { type: 'link', content: 'link para algo' },
    ],
    publishedAt: new Date('2025-03-10 20:40:59'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/145073018?v=4',
      name: 'Cleyton Senior',
      role: 'Senior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 😀' },
      { type: 'paragraph', content: 'Sou um usuario com o icon do sonic falando algo' },
      { type: 'link', content: 'link para algo' },
    ],
    publishedAt: new Date('2025-03-11 21:41:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <SideBar />

        <main>

          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}