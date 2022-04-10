<template>
      <q-tabs v-model="tab"
              class="bg-muted"
              active-color="secondary"
              indicator-color="secondary">
        <q-tab name="about"
               class="col-sm-3 col-xs-1 no-padding"
               :label="`${$t('label.projectPanels.about')} ${currentProject.name}`"/>
        <q-separator vertical />
        <q-tab name="goals"
               class="col-sm col-xs-shrink no-padding"
               :label="$t('label.projectPanels.goals')"/>
        <q-separator vertical />
        <q-tab name="business_model"
               class="col-sm col-xs-shrink no-padding"
               :label="$t('label.projectPanels.business_model')"/>
        <q-separator vertical />
        <q-tab name="history"
               class="col-sm col-xs-shrink no-padding"
               :label="$t('label.projectPanels.history')"/>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab"
                    animated
                    class="bg-grey-2">
        <q-tab-panel name="about"
                     class="q-pa-none row no-wrap">

              <q-tabs v-model="innerTab"
                      vertical
                      class="col-sm-3 col-xs-1
                      text-primary q-mt-sm"
                      active-color="secondary">

                <q-tab name="innerAbout"
                       icon="description"
                       :label="$t('label.projectPanels.description')"/>
                <q-tab name="innerTeam"
                       icon="groups"
                       :label="$t('label.projectPanels.team')"/>
                <q-tab name="innerCertifications"
                       icon="fact_check"
                       :label="$t('label.projectPanels.certifications')"/>
              </q-tabs>

          <q-separator vertical/>

              <q-tab-panels v-model="innerTab"
                            class="bg-grey-2 col-sm"
                            animated
                            transition-prev="slide-down"
                            transition-next="slide-up">
                <q-tab-panel name="innerAbout">
                  <div class="text-h5 q-mb-sm">
                    {{$t('label.projectPanels.description')}}
                  </div>
                  <div class="text-body1">
                    <span v-for="(word, index) in description"
                          :key="index">
                      <br v-if="word === '<br>'">
                      <span v-else>
                        {{word}}
                        <span v-if="index < description.length - 1">
                          {{" "}}
                        </span>
                      </span>
                    </span>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="innerTeam">
                  <div class="text-h5 q-mb-sm">
                    {{$t('label.projectPanels.team')}}
                  </div>
                  <div class="text-body1">
                    <span v-for="(word, index) in team"
                          :key="index">
                      <br v-if="word === '<br>'">
                      <span v-else>
                        {{word}}
                        <span v-if="index < team.length - 1">
                          {{" "}}
                        </span>
                      </span>
                    </span>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="innerCertifications">
                  <div class="text-h5 q-mb-sm">
                    {{$t('label.projectPanels.certifications')}}
                  </div>
                  <div class="text-body1">
                    <span v-for="(word, index) in patents"
                          :key="index">
                      <br v-if="word === '<br>'">
                      <span v-else>
                        {{word}}
                        <span v-if="index < patents.length - 1">
                          {{" "}}
                        </span>
                      </span>
                    </span>
                  </div>
                </q-tab-panel>
              </q-tab-panels>

        </q-tab-panel>

        <q-tab-panel name="goals">
          <div class="text-h5 q-mb-sm">
            {{$t('label.projectPanels.goals')}}
          </div>
          <div class="text-body1">
            <span v-for="(word, index) in goals"
                  :key="index">
              <br v-if="word === '<br>'">
              <span v-else>
                {{word}}
                <span v-if="index < goals.length - 1">
                {{" "}}
                </span>
              </span>
            </span>
          </div>
        </q-tab-panel>

        <q-tab-panel name="business_model">
          <div class="text-h5 q-mb-sm">
            {{$t('label.projectPanels.business_model')}}
          </div>
          <div class="text-body1">
            <span v-for="(word, index) in business_model"
                  :key="index">
              <br v-if="word === '<br>'">
              <span v-else>
                {{word}}
                <span v-if="index < business_model.length - 1">
                {{" "}}
                </span>
              </span>
            </span>
          </div>
        </q-tab-panel>

        <q-tab-panel name="history">
          <div class="text-h5 q-mb-sm">
            {{$t('label.projectPanels.history')}}
          </div>
          <div class="text-body1">
            <span v-for="(word, index) in history"
                  :key="index">
              <br v-if="word === '<br>'">
              <span v-else>
                {{word}}
                <span v-if="index < history.length - 1">
                {{" "}}
                </span>
              </span>
            </span>
          </div>
        </q-tab-panel>

      </q-tab-panels>
</template>

<script>
export default {
  name: 'ProjectPanels',
  props: ['currentProject'],
  data () {
    return {
      tab: 'about',
      innerTab: 'innerAbout',
      description: [],
      team: [],
      patents: [],
      goals: [],
      business_model: [],
      history: []
    }
  },
  created () {
    this.$watch(() => this.currentProject,
      () => {
        if (this.currentProject.brief_description_of_project &&
          this.currentProject.brief_description_of_project.length) {
          this.description = [
            ...this.formText(
              this.currentProject.brief_description_of_project
            )
          ]
        }
        if (this.currentProject.team && this.currentProject.team.length) {
          this.team = [
            ...this.formText(
              this.currentProject.team
            )
          ]
        }
        if (this.currentProject.patents && this.currentProject.patents.length) {
          this.patents = [
            ...this.formText(
              this.currentProject.patents
            )
          ]
        }
        if (this.currentProject.goals && this.currentProject.goals.length) {
          this.goals = [
            ...this.formText(
              this.currentProject.goals
            )
          ]
        }
        if (this.currentProject.business_model &&
          this.currentProject.business_model.length) {
          this.business_model = [
            ...this.formText(
              this.currentProject.business_model
            )
          ]
        }
        if (this.currentProject.history &&
          this.currentProject.history.length) {
          this.history = [
            ...this.formText(
              this.currentProject.history
            )
          ]
        }
      })
  },
  methods: {
    formText (text) {
      const regex = /<br>/g

      let word = ''

      const lineBreakIndices = []

      const words = []

      const matches = text.matchAll(regex)

      for (const match of matches) {
        lineBreakIndices.push(
          {
            start: match.index,
            end: match.index + match[0].length
          }
        )
      }

      for (let i = 0; i < text.length; i++) {
        const brIndex = lineBreakIndices
          .findIndex(match => match.start === i)
        if (/\s/.test(text[i])) {
          if (word && word.length) {
            words.push(word)
            word = ''
          }
        } else if (brIndex > -1) {
          if (word && word.length) {
            words.push(word)
            word = ''
          }
          words.push(text.substring(i, lineBreakIndices[brIndex].end))
          i = lineBreakIndices[brIndex].end - 1
        } else {
          word += text[i]
          if (i === text.length - 1) {
            words.push(word)
          }
        }
      }

      return words
    }
  }
}
</script>
