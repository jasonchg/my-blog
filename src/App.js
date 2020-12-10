import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Project from './components/Project'
import SinglePost from './components/SinglePost'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/posts/:slug' component={SinglePost} />
        <Route path='/posts' component={Post} />
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App
