import React from 'react'
import TradeCard from './TradeCard'


export default function TradeHistory(props) {

    const latestTrades = props.data[0].trades.slice(-4).map((trade) => (
        <TradeCard
          key={trade.id}
          pair={trade.pair}
          type={trade.type}
          profit={trade.profit}
        />
      ))

    return (
        <div id="tradeHistory">
          <h2 className="pageSectionTitle">Trades History</h2>
          <div className="previousTrades">
            {latestTrades}          
          </div>

          <h4><a className="allTradesLink" href="www.youtube.com">View All Trades</a> {/* this is a placeholder for now, will be updated later*/}</h4>

        </div>
      );
}