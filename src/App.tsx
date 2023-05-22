import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import MyFunComponent from './components/MyFunComponent/MyFunComponent';
import MyHookComponent from './components/MyHookComponent/MyHookComponent';
import { Counter } from './features/counter/Counter';
import logo from './logo.svg';

export default function App() {
  return (
    <div className='App'>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='hooks' element={<Hooks />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/hooks'>Hooks</NavLink>
          </li>
          <li>
            <NavLink to='/nothing-here'>Nothing Here</NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className='Layout'>
        <Outlet />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <MyFunComponent />
    </div>
  );
}

function Hooks() {
  return (
    <div>
      <h1>Hooks</h1>
      <MyHookComponent />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}
