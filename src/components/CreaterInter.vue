<template>
    <div class="container-select">
        <div>
            <label class="lable">
                Працівник:
                <select v-model="interviesData.workerId" class="select">
                    <option v-for="worker in workersListSelected" :key="worker.id" :value="worker.id">
                        {{ worker.name }} - {{ worker.position }}
                    </option>
                </select>
            </label>
        </div>
        <div>
            <label class="lable">
                Кандидат:
                <select v-model="interviesData.candidateId" class="select">
                    <option v-for="candidate in candidatesListSelected" :key="candidate.id" :value="candidate.id">
                        {{ candidate.name }} - {{ candidate.position }}
                    </option>
                </select>
            </label>
        </div>
        <div>
            <label class="lable"
                >День:
                <select v-model="interviesData.day" class="select">
                    <option v-for="(day, index) in days" :key="index" :value="day">
                        {{ day }}
                    </option>
                </select>
            </label>
        </div>
    </div>
    <div>
        <button class="button" @click="onAdd(interviesData)">Добавити</button>
    </div>
    <div v-if="messages">{{ messages }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { days } from '../store/modules/days.js'
export default {
    name: 'CreaterInter',

    data() {
        return {
            days: days,
            interviesData: {},
            candidatesListSelected: [],
            workersListSelected: [],
            messages: '',
        }
    },

    computed: {
        ...mapGetters('workers', ['getWorkerList', 'getWorkerById', 'getFilterWorkerList']),
        ...mapGetters('candidates', ['getCandidateslist', 'getCandidatesById', 'getFilterCandidateList']),
    },

    watch: {
        'interviesData.workerId'(newValue) {
            if (!this.interviesData.candidateId && newValue) {
                let selectPosition = this.getWorkerById(newValue).position
                this.filterCandidateByPosition(selectPosition)
                this.candidatesListSelected = this.getFilterCandidateList
            }
        },
        'interviesData.candidateId'(newValue) {
            if (!this.interviesData.workerId && newValue) {
                let selectPosition = this.getCandidatesById(newValue).position
                this.filterWorkerByPosition(selectPosition)
                this.workersListSelected = this.getFilterWorkerList
            }
        },
    },
    created() {
        this.candidatesListSelected = this.getCandidateslist
        this.workersListSelected = this.getWorkerList
    },
    methods: {
        ...mapActions('workers', ['filterWorkerByPosition']),
        ...mapActions('candidates', ['filterCandidateByPosition']),
        ...mapActions('interviews', ['addInterviesActive']),

        onAdd(interviesData) {
            if (this.interviesData.workerId && this.interviesData.candidateId && this.interviesData.day) {
                this.addInterviesActive(interviesData)
                this.interviesData = {}
                this.candidatesListSelected = this.getCandidateslist
                this.workersListSelected = this.getWorkerList
                this.messages = ''
            } else {
                this.messages = 'Заповніть всі поля'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.container-select {
    display: flex;
    gap: 60px;
}
.lable {
    font-size: 20px;
}
</style>
