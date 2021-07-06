<template>
  <div class="searchbar">
    <div class="searchbar__item">
      <b-field>
        <b-select v-model="selected.location" placeholder="Lieu">
          <option
              v-for="location in locations"
              :value="location.id"
              :key="location.id">
            {{ location.name }}
          </option>
        </b-select>
      </b-field>
    </div>
    <div class="searchbar__item">
      <b-field>
        <b-select v-model="selected.level" placeholder="Niveau">
          <option
              v-for="level in levels"
              :value="level.id"
              :key="level.id">
            {{ level.name }}
          </option>
        </b-select>
      </b-field>
    </div>
    <div class="searchbar__item">
      <b-field>
        <b-datepicker
            v-model="selected.startDate"
            :locale="locale"
            placeholder="Date de début"
            trap-focus>
        </b-datepicker>
      </b-field>
    </div>
    <div class="searchbar__item">
      <b-field>
        <b-datepicker
            v-model="selected.endDate"
            :locale="locale"
            placeholder="Date de fin"
            trap-focus>
        </b-datepicker>
      </b-field>
    </div>
    <div class="searchbar__item">
      <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.61446" cy="10.1687" r="8.11446" stroke="#555555" stroke-width="3"/>
        <line x1="17.9552" y1="15.9168" x2="25.1938" y2="21.3457" stroke="#555555" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  data() {
    return {
      locale: 'fr-FR',
      selected: {
        location: 0,
        level: 0,
        startDate: new Date(),
        endDate: new Date(),
      },
      locations: {
        0: {
          id: 0,
          name: 'Forêt de Fontainebleau',
        },
        1: {
          id: 1,
          name: 'Forêt de Fanghorn',
        }
      },
      levels: {
        0: {
          id: 0,
          name: 'Novice',
        },
        1: {
          id: 1,
          name: 'Intermédiaire',
        },
        2: {
          id: 2,
          name: 'Avancé',
        },
        3: {
          id: 3,
          name: 'Expert',
        }
      },
      startDate: null,
      endDate: null
    }
  }
}
</script>

<style scoped>

</style>