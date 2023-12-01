<template>
    <div>
        <h1>Співбесіда</h1>
        <div v-if="!isEmpty">
            <div v-for="intervies in getFilledInterviesList" :key="intervies.id" class="container-int">
                <div>Працівник: {{ intervies.worker.name }} - {{ intervies.worker.position }}</div>
                -
                <div>Кандидат: {{ intervies.candidate.name }} - {{ intervies.candidate.position }}</div>
                -
                <div>День : {{ intervies.day }}</div>
                <button class="button" @click="deleteInterviesActive(intervies.id)">Видалити</button>
            </div>
        </div>
        <div v-else>Немає співбесід</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'InterviewsList',
    computed: {
        ...mapGetters('interviews', ['getFilledInterviesList']),
        isEmpty() {
            return !this.getFilledInterviesList.length
        },
    },

    methods: {
        ...mapActions('interviews', ['deleteInterviesActive']),
    },
}
</script>

<style lang="scss" scoped>
.container-int {
    display: flex;
    gap: 20px;
    font-size: 20px;
}
</style>
