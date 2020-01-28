<script>
  //Importing Line class from the vue-chartjs wrapper
  var rk4 = require('ode-rk4')
  import { Line } from 'vue-chartjs'


  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    props: {
      labels: {
        type: Array,
        default: () => []
      },
      chartconfig: {
        type: Object,
        default: () => {
          label: 'Undef'
        }
      }
    },
    data () {
      return {
        //Chart.js options that controls the appearance of the chart
        options: {
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true,
                color: '#2d2d2d',
                zeroLineColor: '#2d2d2d'
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: 20,
              fontColor: '#fff',
              filter: (item, chart) => {
                return !item.text.includes('IC');
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false
        },
        gradient: null
      }
    },
    mounted () {

      var fit = (beta, gamma) => {
        var SIR_model = (dydt, y, t) => {
          let S = y[0];
          let I = y[1];
          let R = y[2];
          //let beta = 0.35;
          //let gamma = 0.1;

          let dS_dt = -beta*S*I;
          let dI_dt = beta*S*I - gamma*I;
          let dR_dt = gamma*I;

          dydt[0] = dS_dt;
          dydt[1] = dI_dt;
          dydt[2] = dR_dt;
        }

        let SIR0 = [0.999, 0.001, 0.0];
        let n = 10000;
        let t0 = 0;
        let dt = 1;

        let solution = rk4(SIR0, SIR_model, t0, dt);

        let t = [], S = [], I = [], R = [];

        for (var i = 0; i <= n; i += 100) {
          solution.step();
          t.push(solution.t);
          S.push(solution.y[0]);
          I.push(solution.y[1]);
          R.push(solution.y[2]);
        }

        return {
          days: t,
          susceptibles: S,
          infectious: I,
          recovered: R
        }
      }

      let average = fit(0.33, 0.1);
      let worst = fit(0.547, 0.1);
      let best = fit(0.273, 0.1);

      this.recoveredGradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 20, 500);

      this.recoveredGradient.addColorStop(0, "#56C1FF");
      this.recoveredGradient.addColorStop(1, "#6047B5");

      this.recoveredCIGradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 20, 500);

      this.recoveredCIGradient.addColorStop(0, "#56C1FF11");
      this.recoveredCIGradient.addColorStop(1, "#6047B511");

      this.infectiousGradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 20, 500);

      this.infectiousGradient.addColorStop(0, "#FAE232");
      this.infectiousGradient.addColorStop(1, "#FF644E");

      this.infectiousCIGradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 20, 500);

      this.infectiousCIGradient.addColorStop(0, "#FAE23211");
      this.infectiousCIGradient.addColorStop(1, "#FF644E11");

      this.susceptibleGradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 20, 500);

      this.susceptibleGradient.addColorStop(0, "#88FA4E");
      this.susceptibleGradient.addColorStop(1, "#00A89D");

      this.susceptibleCIGradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 20, 500);

      this.susceptibleCIGradient.addColorStop(0, "#88FA4E11");
      this.susceptibleCIGradient.addColorStop(1, "#00A89D11");
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart({
        labels: average.days,
        datasets: [{
            //...this.chartconfig,
            label: 'IC',
            fill: '+1',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: best.susceptibles,
            backgroundColor: this.susceptibleCIGradient,
            borderColor: this.susceptibleCIGradient
          }, {
            //...this.chartconfig,
            label: 'Susceptible',
            fill: false,
            pointBackgroundColor: 'transparent',
            hoverBorderWidth: 5,
            borderWidth: 3,
            data: average.susceptibles,
            backgroundColor: this.susceptibleGradient,
            borderColor: this.susceptibleGradient
          }, {
            //...this.chartconfig,
            label: 'IC',
            fill: '-1',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: worst.susceptibles,
            backgroundColor: this.susceptibleCIGradient,
            borderColor: this.susceptibleCIGradient
          }, {
            //...this.chartconfig,
            label: 'IC',
            fill: true,
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: best.infectious,
            backgroundColor: this.infectiousCIGradient,
            borderColor: this.infectiousCIGradient
          }, {
            //...this.chartconfig,
            label: 'Infectious',
            fill: false,
            pointBackgroundColor: 'transparent',
            borderWidth: 3,
            data: average.infectious,
            backgroundColor: this.infectiousGradient,
            borderColor: this.infectiousGradient
          }, {
            //...this.chartconfig,
            label: 'IC',
            fill: true,
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: worst.infectious,
            backgroundColor: this.infectiousCIGradient,
            borderColor: this.infectiousCIGradient
          }, {
            //...this.chartconfig,
            label: 'IC',
            fill: '+1',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: best.recovered,
            backgroundColor: this.recoveredCIGradient,
            borderColor: this.recoveredCIGradient
          }, {
            //...this.chartconfig,
            label: 'Recovered',
            fill: false,
            pointBackgroundColor: 'transparent',
            borderWidth: 3,
            data: average.recovered,
            backgroundColor: this.recoveredGradient,
            borderColor: this.recoveredGradient
          }, {
            //...this.chartconfig,
            label: 'IC',
            fill: '-1',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: worst.recovered,
            backgroundColor: this.recoveredCIGradient,
            borderColor: this.recoveredCIGradient
          }]
        },
        this.options
      )
    }
  }
</script>
