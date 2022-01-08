<template>
  <q-page padding>
    <div class="q-pa-md q-my-lg" style="max-width: 90vw; background-color:#F0ECE8; margin:auto; text-align:center">
      <div>
        <div>
          <span class="text-h3 text-weight-bold q-mb-md">{{currentProject.name}}</span>
          <span class="q-ml-lg">
          <q-icon name="info">
            <q-tooltip>
              <b>TAGS:</b> {{stringifyArray(currentProject.tags)}}
            </q-tooltip>
          </q-icon>
        </span>
        </div>

        <q-separator color="orange" inset spaced="xl" />
        <h2 class="text-weight-bold q-my-md" style="color:#ee7600">"{{currentProject.motto}}"</h2>
        <q-separator color="orange" inset spaced="xl" />
        <div class="row justify-around">
          <div>
            <h1>Something here</h1>
          </div>
          <div style="min-width:30vw">
            <div>
              <span class="q-mb-xs text-h4">{{Number(currentProject.raisedMoney.amount).toLocaleString('en')}} {{currentProject.raisedMoney.currency}}</span>
              <span class="q-ml-lg">
              <q-icon name="info">
                <q-tooltip>
                  <p>Pre-committed amount: {{Number(currentProject.preCommittedMoney.amount).toLocaleString('en')}} {{currentProject.preCommittedMoney.currency}}</p>
                  Raised amount:{{Number(currentProject.raisedMoney.amount-currentProject.preCommittedMoney.amount).toLocaleString('en')}} {{currentProject.preCommittedMoney.currency}}.
                </q-tooltip>
              </q-icon>
            </span>
            </div>
            <p class="">Raised amount of money</p>
            <div>
              <span class="q-mb-xs text-h4">{{Number(currentProject.valuation.amount).toLocaleString('en')}} {{currentProject.valuation.currency}}</span>
              <span class="q-ml-lg">
              <q-icon name="info">
                <q-tooltip>
                  Pre-valuation of the project before it gathers any additional resources from other places.
                </q-tooltip>
              </q-icon>
            </span>
            </div>
            <p>Market Valuation</p>
            <div>
              <span class="q-mb-xs text-h4">{{Number(currentProject.sharePrice.amount).toLocaleString('en')}} {{currentProject.valuation.currency}}</span>
              <span class="q-ml-lg">
              <q-icon name="info">
                <q-tooltip>
                  The price of a single share of a number of sellable equity of the project.
                </q-tooltip>
              </q-icon>
            </span>
            </div>
            <p>Price per share</p>
          </div>
        </div>
      </div>
      <div>
        <q-card>
          <q-tabs
            style="background-color: #F0ECE8; color:black"
            v-model="tab"
            dense
            class="text-grey q-mt-lg"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="details" label="Details" />
            <q-tab name="description" label="Description" />
            <q-tab name="contact" label="Contact" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated style="background-color: #F0ECE8">
            <q-tab-panel name="details">
              <div class="text-h5 q-mb-md">Details</div>
              <p><b>Interest Rate</b>: {{currentProject.interestRate}}</p>
              <p><b>Term</b>: {{currentProject.term}}</p>
              <p><b>Type</b>: {{currentProject.type}}</p>
            </q-tab-panel>

            <q-tab-panel name="description">
              <div class="text-h5 q-mb-md">Description</div>
              {{currentProject.description}}
            </q-tab-panel>

            <q-tab-panel name="contact">
              <div class="text-h5 q-mb-md">Description</div>
              <p><b>Contact Person</b>: {{currentProject.contactPerson}}</p>
              <p><b>Email</b>: {{currentProject.email}}</p>
              <p><b>Address</b>: {{currentProject.location.city}}, {{currentProject.location.country}}, {{currentProject.location.address}}</p>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Project',
  data () {
    return {
      tab: 'mails'
    }
  },
  methods: {
    stringifyArray (arr) {
      let strArray = ''
      for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
          strArray = strArray + arr[i].toUpperCase() + ', '
        } else {
          strArray = strArray + arr[i].toUpperCase()
        }
      }
      return strArray
    }
  }
}
</script>
