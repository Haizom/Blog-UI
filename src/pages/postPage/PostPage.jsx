import './postPage.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Article from '../../components/article/Article'

export default function PostPage() {
  return (
    <div className="postPage">
        <Article />
        <Sidebar />
    </div>
  )
}
