<template>
  <div class="main-wrapper">
    <section class="section">
      <div class="container">
        <h3 class="is-size-3 has-text-white has-text-weight-bold">Epidemic Transmision Dynamics</h3>
        <div class="columns">
          <div class="column">
            <h5 class="is-size-5 has-text-white has-text-weight-light">Stochastic SIR epidemic model for COVID19</h5>
            <div class="dark-border-wrap">
            <div class="synx-gray-background fig-padding">
              <line-chart id="srichart"
                      v-bind:r0="r0"
                      v-bind:r0_best="r0_best"
                      v-bind:r0_worst="r0_worst"
                      v-bind:population="population"
                      v-bind:days="days"
                      v-bind:currentDeaths="currentDeaths"
                      v-bind:currentInfected="currentInfected"
                      v-bind:currentRecovered="currentRecovered"
                      v-bind:deathRate="deathRate"
                      v-bind:capacity="capacity">
              </line-chart>
              <div class="columns is-vcentered legends">
                <div class="column"></div>
                <div class="column">
                  <div class="legend-s-border-wrap">
                    <div class="legend">Susceptible</div>
                  </div>
                </div>
                <div class="column">
                  <div class="legend-i-border-wrap">
                    <div class="legend">Infectious</div>
                  </div>
                </div>
                <div class="column">
                  <div class="legend-r-border-wrap">
                    <div class="legend">Recovered</div>
                  </div>
                </div>
                <div class="column">
                  <div class="legend-c-border-wrap">
                    <div class="legend">Capacity</div>
                  </div>
                </div>
                <div class="column"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="r0">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>R0 (mean)</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="r0_best">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>R0 (best)</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="r0_worst">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>R0 (worst)</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="population">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Population</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="days" oninput="javascript: if (this.value > 365) this.value = 365; if (this.value < 1) this.value = 1;">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Days (1 - 365)</label>
              </div>
            </form>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="currentInfected">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Current Infected</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="currentDeaths">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Current Deaths</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="currentRecovered">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Current Recovered</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="deathRate">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Death Rate</label>
              </div>
            </form>
          </div>

          <div class="column is-one-fifth">
            <form class="login-form">
              <div class="control-material is-primary">
                <input class="material-input has-text-centered" type="number" required="" v-model="capacity">
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Beds per 1000 habitants</label>
              </div>
            </form>
          </div>

        </div>
        <div class="columns has-text-white">
          <div class="column">
            <h6 class="is-size-6 has-text-white has-text-weight-bold">SRI Model</h6>
            <div class="math-fig">
              <p class="desc">
                <span v-katex="'S(t)'"></span> are those susceptible but not yet infected with the disease.
              </p>
              <p class="desc">
                <span v-katex="'I(t)'"></span> is the number of infectious individuals.
              </p>
              <p class="desc">
                <span v-katex="'R(t)'"></span> are those individuals who have recovered from the disease and now have immunity to it.
              </p>
            </div>

            <p class="">
            Default basic reproduction number taken from <a href="https://www.biorxiv.org/content/10.1101/2020.01.23.916395v1" target="_blank">Preliminary estimation of the basic reproduction number of novel coronavirus (2019-nCoV) in China, from 2019 to 2020: A data-driven analysis in the early phase of the outbreak &rarr;</a>
            </p>

            <div class="math-fig">
              <p class="desc">
                <span v-katex="'R_0 = \\frac{\\beta}{\\gamma} = 2.2'"></span>, <span v-katex="'(95\\% CI:1.4 - 3.9)'"></span>.
              </p>
            </div>

            <h6 class="is-size-6 has-text-white has-text-weight-bold">Derivates</h6>
            <div class="math-fig">
              <p class="desc">
                <span v-katex="'\\frac{dS}{dt} = -\\beta S I'"></span>
              </p>
              <p class="desc">
                <span v-katex="'\\frac{dI}{dt} = +\\beta S I - \\gamma I'"></span>
              </p>
              <p class="desc">
                <span v-katex="'\\frac{dR}{dt} = \\gamma I'"></span>
              </p>
            </div>

            <h6 class="is-size-6 has-text-white has-text-weight-bold">Iterative 4th Order Runge-Kutta fomulas</h6>
            <div class="math-fig">
              <p class="desc">
                <span v-katex="'S_{n + 1} = S_n + \\frac{\\Delta t}{6}(k_1^S + 2k_2^S + 2k_3^S + k_4^S)'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_1^S = f(t_n, S_n, I_n) = -\\frac{\\beta S_nI_n}{N}'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_2^S = f(t_n + \\frac{\\Delta t}{2}, S_n + \\frac{k_1^S\\Delta t}{2}, I_n + \\frac{k_1^I\\Delta t}{2}) = -\\frac{\\beta}{N}(S_n + \\frac{k_1^S\\Delta t}{2})(I_n + \\frac{k_1^I\\Delta t}{2})'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_3^S = f(t_n + \\frac{\\Delta t}{2}, S_n + \\frac{k_2^S\\Delta t}{2}, I_n + \\frac{k_2^I\\Delta t}{2}) = -\\frac{\\beta}{N}(S_n + \\frac{k_2^S\\Delta t}{2})(I_n + \\frac{k_2^I\\Delta t}{2})'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_4^S = f(t_n + \\Delta t, S_n + k_3^S\\Delta t, I_n + k_3^I\\Delta t) = -\\frac{\\beta}{N}(S_n + k_3^S\\Delta t)(I_n + k_3^I\\Delta t)'"></span>
              </p>
            </div>

            <div class="math-fig">
              <p class="desc">
                <span v-katex="'I_{n + 1} = I_n + \\frac{\\Delta t}{6}(k_1^I + 2k_2^I + 2k_3^I + k_4^I)'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_1^I = f(t_n, S_n, I_n) = \\frac{\\beta S_nI_n}{N} - \\gamma I_n'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_2^I = f(t_n + \\frac{\\Delta t}{2}, S_n + \\frac{k_1^S\\Delta t}{2}, I_n + \\frac{k_1^I\\Delta t}{2}) = \\frac{\\beta}{N}(S_n + \\frac{k_1^S\\Delta t}{2})(I_n + \\frac{k_1^I\\Delta t}{2}) - \\gamma (I_n + \\frac{k_1^I\\Delta t}{2})'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_3^I = f(t_n + \\frac{\\Delta t}{2}, S_n + \\frac{k_2^S\\Delta t}{2}, I_n + \\frac{k_2^I\\Delta t}{2}) = \\frac{\\beta}{N}(S_n + \\frac{k_2^S\\Delta t}{2})(I_n + \\frac{k_2^I\\Delta t}{2}) - \\gamma (I_n + \\frac{k_2^I\\Delta t}{2}) '"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_4^I = f(t_n + \\Delta t, S_n + k_3^S\\Delta t, I_n + k_3^I\\Delta t) = \\frac{\\beta}{N}(S_n + k_3^S\\Delta t)(I_n + k_3^I\\Delta t) - \\gamma (I_n + k_3^I\\Delta t)'"></span>
              </p>
            </div>

            <div class="math-fig">
              <p class="desc">
                <span v-katex="'R_{n + 1} = R_n + \\frac{\\Delta t}{6}(k_1^R + 2k_2^R + 2k_3^R + k_4^R)'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_1^R = f(t_n, I_n) = \\gamma I_n'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_2^R = f(t_n + \\frac{\\Delta t}{2}, I_n + \\frac{k_1^I\\Delta t}{2}) = \\gamma (I_n + \\frac{k_1^I\\Delta t}{2})'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_3^R = f(t_n + \\frac{\\Delta t}{2}, I_n + \\frac{k_2^I\\Delta t}{2}) = \\gamma (I_n + \\frac{k_2^I\\Delta t}{2})'"></span>
              </p>
              <p class="desc">
                <span v-katex="'k_4^R = f(t_n + \\Delta t, I_n + k_3^I\\Delta t) = \\gamma (I_n + k_3^I\\Delta t)'"></span>
              </p>
            </div>

            <h6 class="is-size-6 has-text-white has-text-weight-bold">Initial parameters</h6>
            <div class="math-fig">
              <p class="desc">
                <span v-katex="'S(0) = \\frac{N - a}{N} '"></span>
              </p>
              <p class="desc">
                <span v-katex="'I(0) = \\frac{I}{N}'"></span>
              </p>
              <p class="desc">
                <span v-katex="'R(0) = 1-(\\frac{c}{100})'"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-border-wrap">
      <footer class="footer synx-dark-background">
        <div class="content has-text-centered has-text-light">
          <p>
            Made with 🦠 at <a href="https://synx.ai" target="_blank">Synx</a> by <a href="https://github.com/carlosrivera" target="_blank">Carlos Rivera</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY NC SA 4.0</a>.
          </p>
          <img src="static/synx-logo.svg" class="footer-logo">
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import LineChart from '@/components/SRIChart'

  export default {
    name: 'VueChartJS',
    components: {
      LineChart
    },
    data () {
      return {
        //Chart.js options that controls the appearance of the chart
        r0: "2.2",
        r0_best: "1.4",
        r0_worst: "3.9",
        population: "129200000",
        days: "99",
        currentInfected: "16",
        currentDeaths: "0",
        currentRecovered: "1",
        deathRate: "3.4",
        capacity: "1",
      }
    }
  }
</script>
