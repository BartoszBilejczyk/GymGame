import {Line} from 'vue-chartjs'

export default Line.extend({
  mounted () {

    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data Two',
          backgroundColor: '#05CBE1',
          data: [10, 40, 32, 20, 30, 12, 53]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
})
