import useUpdatingClock from 'hooks/useUpdatingClock'
import '/styles/styles.scss';
import Header from "./Header";
import Footer from "./Footer";
import Herosection from "./herosection";


export default function App() {
  const {hour, minutes, seconds, amPm} = useUpdatingClock()

  return (
    <main className="main_wrapper">
      <Header />
      <Herosection />
      <Footer />
      {/* <section className="flex-grow-1 bg-black-80 fw4 white-80 tc pt24">
        <div>
          Your application starts in the{' '}
          <code>
            src/<span className="b white">entry.jsx</span>
          </code>{' '}
          file.
        </div>

        <div>
          The component you're looking here at can be found in{' '}
          <code>
            src/components/<span className="b white">App.jsx</span>
          </code>
        </div>

        <div>
          Now go! Save the world with <span className="gold">JavaScript</span>!
        </div>

        <div className="pa16 f-1-5em">
          {hour}:{minutes}:{seconds}
          <span className="f-initial pl4">{amPm}</span>
        </div>
      </section> */}
    </main>
  )
}
