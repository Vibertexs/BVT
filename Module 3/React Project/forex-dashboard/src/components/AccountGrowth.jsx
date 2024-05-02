import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components from chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AccountGrowth(props) {
  // trade id will be on x and profit on y
  let equity = props.data[0].initialBalance;
  const trades = props.data[0].trades;

  // generate labels
  const tradeLabels = trades.map((trade) => {
    return trade.id;
  });

  const tradeData = trades.map((trade) => {
    equity = equity + trade.profit;
    return equity;
  });

  const data = {
    labels: tradeLabels,
    datasets: [
      {
        label: "Balance",
        data: tradeData,
        fill: false,
        backgroundColor: "rgba(255, 255, 255,0.2)",
        borderColor: "rgba(255, 255, 255, 0.7)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Account Growth Over Time",
      },
    },
  };

  // calculate the win rate
  let winRate = 0;
  let winCount = 0;
  let lossCount = 0;
  trades.forEach((trade) => {
    if (trade.profit > 0) {
      winCount++;
    } else {
      lossCount++;
    }
  });
  winRate = (winCount / trades.length) * 100;

  // calculate average win and loss
  let totalWin = 0;
  let totalLoss = 0;
  trades.forEach((trade) => {
    if (trade.profit > 0) {
      totalWin += trade.profit;
    } else {
      totalLoss += trade.profit;
    }
  });
  const averageWin = totalWin / winCount;
  const averageLoss = totalLoss / lossCount;

  // Calculate average RRR
  const averageRRR = averageWin / Math.abs(averageLoss);

  return (
    <div>
      <h2 className="pageSectionTitle">Account Growth</h2>
      <div id="accountGrowth">

        <div className="graphDisplay addBorder">
            <div id="graphSpacing" className="">
              <Line data={data} options={options} />
            </div>
        </div>

        <div className="statsDisplay addBorder">
          <div className="statsHeader">
            <h2>Statistics</h2>
          </div>

          <div className="statsTable">
            <div className="statItem">
              <p className="statsLabel">Win Rate:</p>
              <p className="statsValue">{winRate}%</p>
            </div>
            <div className="statItem">
              <p className="statsLabel">Average Win:</p>
              <p className="statsValue">${averageWin.toFixed(2)}</p>
            </div>
            <div className="statItem">
              <p className="statsLabel">Average Loss:</p>
              <p className="statsValue">${averageLoss.toFixed(2)}</p>
            </div>
            <div className="statItem">
              <p className="statsLabel">Trades:</p>
              <p className="statsValue">{trades.length}</p>
            </div>
            <div className="statItem">
              <p className="statsLabel">Average RRR:</p>
              <p className="statsValue">{averageRRR.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
