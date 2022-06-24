import { useEffect, useState } from 'react'
import CoinStack from '../CoinStack'
import GradientCircle from '../GradientCircle'
import './WageComparisonSection.scss'

type NrCoins = {
  law: number
  medicine: number
  economics: number
  it: number
}

const WageComparisonSection = () => {
  const maxCoins: NrCoins = {
    law: 13,
    medicine: 18,
    economics: 15,
    it: 25,
  }

  const [coinAnimationStarted, setCoinAnimationStarted] = useState(false)
  const [law, setLaw] = useState(0)
  const [medicine, setMedicine] = useState(0)
  const [economics, setEconomics] = useState(0)
  const [it, setIt] = useState(0)

  useEffect(() => {
    if (!coinAnimationStarted) return

    const timer = setInterval(() => {
      if (it < maxCoins.it) setIt((it) => it + 1)
      if (medicine < maxCoins.medicine) setMedicine((medicine) => medicine + 1)
      if (economics < maxCoins.economics)
        setEconomics((economics) => economics + 1)
      if (law < maxCoins.law) setLaw((law) => law + 1)
    }, 15)

    return () => clearTimeout(timer)
  }, [
    coinAnimationStarted,
    economics,
    it,
    law,
    medicine,
    maxCoins.economics,
    maxCoins.it,
    maxCoins.law,
    maxCoins.medicine,
  ])

  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          setCoinAnimationStarted(true)
        }
      },
      { threshold: [1] },
    )

    observer.observe(document.getElementById('coin-stack-row-id')!)
  }, [coinAnimationStarted])

  return (
    <div className="wage-comparison-section">
      <div className="content">
        <div className="text">
          Die IT-Branche bietet überdurchschnittliche Bezahlung
        </div>
        <div className="coins-on-circle">
          <GradientCircle className="circle" />
          <div className="coin-stack-row" id="coin-stack-row-id">
            <div className="coins-text">
              <CoinStack nrCoins={law} />
              <span>Jura</span>
            </div>
            <div className="coins-text">
              <CoinStack nrCoins={medicine} />
              <span>Medizin</span>
            </div>
            <div className="coins-text">
              <CoinStack nrCoins={economics} />
              <span>BWL</span>
            </div>
            <div className="coins-text highlight">
              <CoinStack nrCoins={it} />
              <span>IT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WageComparisonSection
