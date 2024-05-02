import React from 'react'
import InfoCard from './InfoCard'

export default function AccountInfo(props) {
    const balance = props.balance
    const equity = props.equity
    const margin = props.margin
    const freeMargin = props.freeMargin
    const profit = props.profit

    return(
    <div>
        <h2 className="pageSectionTitle">Account Information</h2>
        <div id="accountInfo">
            <InfoCard title="Balance" value={balance} />
            <InfoCard title="Equity" value={equity} />
            <InfoCard title="Margin" value={margin} />
            <InfoCard title="Free Margin" value={freeMargin} />
            <InfoCard title="Profit" value={profit} />
        </div>
    </div>
    )
}