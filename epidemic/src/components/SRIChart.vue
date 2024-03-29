<script>
  var rk4 = require('ode-rk4')
  import { Line } from 'vue-chartjs'

  var renderChart = (context) => {
    var fit = (beta, gamma) => {
      var SIR_model = (dydt, y, t) => {
        let S = y[0];
        let I = y[1];
        let R = y[2];
        let n = Number(context.population);

        let dS_dt = -beta*S*I;
        let dI_dt = (beta*S*I) - gamma*I;
        let dR_dt = gamma*I;

        dydt[0] = dS_dt;
        dydt[1] = dI_dt;
        dydt[2] = dR_dt;
      }

      let SIR0 = [
        (context.population - (context.currentInfected + context.currentDeaths + context.currentRecovered)) / context.population,
        context.currentInfected / context.population,
        (context.currentDeaths + context.currentRecovered) / context.population
      ];

      let n = Number(context.population);
      let t0 = 0;
      let dt = 1;

      let solution = rk4(SIR0, SIR_model, t0, dt);

      let t = [], S = [], I = [], R = [], C = [];

      for (var i = 0; i <= Number(context.days); i += 1) {
        solution.step();
        t.push(solution.t);
        S.push(solution.y[0]);
        I.push(solution.y[1]);
        R.push(solution.y[2]);
        C.push(context.capacity * (context.population / 1000));
      }

      return {
        days: t,
        susceptibles: S.map(function(x) { return (x * context.population).toFixed(0); }),
        infectious: I.map(function(x) { return (x * context.population).toFixed(0); }),
        recovered: R.map(function(x) { return (x * context.population).toFixed(0); }),
        capacity: C
      }
    }

    let average = fit(Number(context.r0) , 1. - (context.deathRate / 100));
    let worst = fit(Number(context.r0_worst) , 1. - (context.deathRate / 100));
    let best = fit(Number(context.r0_best) , 1. - (context.deathRate / 100));

    context.recoveredGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.recoveredGradient.addColorStop(0, "#56C1FF");
    context.recoveredGradient.addColorStop(1, "#6047B5");

    context.recoveredCIGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.recoveredCIGradient.addColorStop(0, "#56C1FF11");
    context.recoveredCIGradient.addColorStop(1, "#6047B511");

    context.infectiousGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.infectiousGradient.addColorStop(0, "#FAE232");
    context.infectiousGradient.addColorStop(1, "#FF644E");

    context.infectiousCIGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.infectiousCIGradient.addColorStop(0, "#FAE23211");
    context.infectiousCIGradient.addColorStop(1, "#FF644E11");

    context.susceptibleGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.susceptibleGradient.addColorStop(0, "#88FA4E");
    context.susceptibleGradient.addColorStop(1, "#00A89D");

    context.susceptibleCIGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.susceptibleCIGradient.addColorStop(0, "#88FA4E11");
    context.susceptibleCIGradient.addColorStop(1, "#00A89D11");
    //renderChart function renders the chart with the datacollection and options object.
    context.renderChart({
      labels: average.days,
      datasets: [{
          //...context.chartconfig,
          label: 'Capacity',
          fill: false,
          pointBackgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [10, 10],
          data: worst.capacity,
          backgroundColor: '#ffffffff',
          borderColor: '#ffffffff'
        }, {
          //...context.chartconfig,
          label: 'IC',
          fill: '+1',
          pointBackgroundColor: 'transparent',
          borderWidth: 2,
          data: best.susceptibles,
          backgroundColor: context.susceptibleCIGradient,
          borderColor: context.susceptibleCIGradient
        }, {
          //...context.chartconfig,
          label: 'Susceptible',
          fill: false,
          pointBackgroundColor: context.susceptibleGradient,
          pointHitRadius: 8,
          borderWidth: 3,
          data: average.susceptibles,
          backgroundColor: context.susceptibleGradient,
          borderColor: context.susceptibleGradient
        }, {
          //...context.chartconfig,
          label: 'IC',
          fill: '-1',
          pointBackgroundColor: 'transparent',
          borderWidth: 2,
          data: worst.susceptibles,
          backgroundColor: context.susceptibleCIGradient,
          borderColor: context.susceptibleCIGradient
        }, {
          //...context.chartconfig,
          label: 'IC',
          fill: true,
          pointBackgroundColor: 'transparent',
          borderWidth: 2,
          data: best.infectious,
          backgroundColor: context.infectiousCIGradient,
          borderColor: context.infectiousCIGradient
        }, {
          //...context.chartconfig,
          label: 'Infectious',
          fill: false,
          pointBackgroundColor: context.infectiousGradient,
          pointHitRadius: 8,
          borderWidth: 3,
          data: average.infectious,
          backgroundColor: context.infectiousGradient,
          borderColor: context.infectiousGradient
        }, {
          //...context.chartconfig,
          label: 'IC',
          fill: true,
          pointBackgroundColor: 'transparent',
          borderWidth: 2,
          data: worst.infectious,
          backgroundColor: context.infectiousCIGradient,
          borderColor: context.infectiousCIGradient
        }, {
          //...context.chartconfig,
          label: 'IC',
          fill: '+1',
          pointBackgroundColor: 'transparent',
          borderWidth: 2,
          data: best.recovered,
          backgroundColor: context.recoveredCIGradient,
          borderColor: context.recoveredCIGradient
        }, {
          //...context.chartconfig,
          label: 'Recovered',
          fill: false,
          pointBackgroundColor: context.recoveredGradient,
          pointHitRadius: 8,
          borderWidth: 3,
          data: average.recovered,
          backgroundColor: context.recoveredGradient,
          borderColor: context.recoveredGradient
        }, {
          //...context.chartconfig,
          label: 'IC',
          fill: '-1',
          pointBackgroundColor: 'transparent',
          borderWidth: 2,
          data: worst.recovered,
          backgroundColor: context.recoveredCIGradient,
          borderColor: context.recoveredCIGradient
        }]
      },
      context.options
    )
  }
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
      },
      r0: {
        type: String,
        default: () => "2.2"
      },
      r0_best: {
        type: String,
        default: () => "1.4"
      },
      r0_worst: {
        type: String,
        default: () => "3.9"
      },
      population: {
        type: String,
        default: () => "129200000"
      },
      days: {
        type: String,
        default: () => "100"
      },
      currentInfected: {
        type: String,
        default: () => "16"
      },
      currentDeaths: {
        type: String,
        default: () => "0"
      },
      currentRecovered: {
        type: String,
        default: () => "1"
      },
      deathRate: {
        type: String,
        default: () => "3.4"
      },
      capacity: {
        type: String,
        default: () => "1"
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
              },
              scaleLabel: {
                display: true,
                labelString: 'Population %',
                fontFamily: 'Avenir, Helvetica, Arial, sans-serif'
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Days transcurred since outbreak',
                fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
                padding: 10
              }
            }]
          },
          legend: {
            display: false,
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
        gradient: null,
      }
    },
    watch: {
      r0 () {
        renderChart(this);
      },
      r0_best () {
        renderChart(this);
      },
      r0_worst () {
        renderChart(this);
      },
      population () {
        renderChart(this);
      },
      days () {
        renderChart(this);
      },
      currentDeaths () {
        renderChart(this);
      },
      currentInfected () {
        renderChart(this);
      },
      currentRecovered () {
        renderChart(this);
      },
      deathRate () {
        renderChart(this);
      },
      capacity () {
        renderChart(this);
      }
    },
    mounted () {
      renderChart(this);
    }
  }
</script>
