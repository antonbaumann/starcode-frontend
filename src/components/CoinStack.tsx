import './CoinStack.scss'
import { ReactComponent as CoinBase } from '../assets/svg/coin_element.svg'
import { ReactComponent as CoinTop } from '../assets/svg/coin_top.svg'
import classNames from 'classnames'

type CoinStackProps = {
  className?: string
  nrCoins: number
}

const CoinStack = ({ className, nrCoins }: CoinStackProps) => {
  return (
    <div className={classNames('coin-stack', className)}>
      {nrCoins > 0 && <CoinTop className="coin-top" />}
      {[...Array(Math.max(nrCoins, 0))].map((_, i) => (
        <CoinBase className="coin-base" key={i} />
      ))}
    </div>
  )
}

export default CoinStack
