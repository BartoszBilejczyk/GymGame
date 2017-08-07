import {Line} from 'vue-chartjs'

export default Line.extend({
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 650)

    this.gradient.addColorStop(0, 'rgba(38, 59, 138, 1)')
    this.gradient.addColorStop(0.5, 'rgba(25, 121, 171, 1)');
    this.gradient.addColorStop(1, 'rgba(25, 121, 171, 0.00)');

    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: false,
          backgroundColor: this.gradient,
          data: [10, 40, 32, 20, 30, 12, 53]
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 150
        }
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      },
      tooltips: {
        opacity: 1
      }
    })
  }
})
