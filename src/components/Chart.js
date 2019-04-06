import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

function Chart(props) {
  const newData = [props.positive.length, props.negative.length]
  console.log(newData)

  const [chartData, setchartData] = useState({
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
      }
    ]
  })

  useEffect(() => {
    setchartData({
      labels: ['Positive', 'Negative'],
      datasets: [
        {
          label: '# of Votes',
          data: newData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ]
        }
      ]
    })
  }, [props.positive])

  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  )
}

export default Chart
