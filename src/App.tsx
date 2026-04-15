import { Link } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <main className="init-page">
      <div className="init-page__content">
        <h1 className="hero-title">
          Profiles
          <span>Just Type It</span>
        </h1>
        <p className="hero-copy">
          This is the place where you can create and manage your secure profile for all your thoughts. 
        </p>
        <div className="hero-actions">
          <Link to="/Login" className="button primary">Get started</Link>
        </div>
        <div className="hero-notes">
          <div>
            <strong>120K TPS</strong>
            <p>Fast ledger performance for modern dApps.</p>
          </div>
          <div>
            <strong>AI Security</strong>
            <p>Built-in intelligence for secure data handling.</p>
          </div>
          <div>
            <strong>Proof of Stake</strong>
            <p>Efficient consensus that scales with the network.</p>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="visual-grid" />
      </div>
    </main>
  )
}

export default App
