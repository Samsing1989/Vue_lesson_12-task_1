<template>
    <h1>Кандидати</h1>
    <div class="candidates">
        <div v-for="candidate in getCandidateslist" :key="candidate.id" class="candidate">
            <div class="cand">{{ candidate.name }}</div>
            <div class="position">{{ candidate.position }}</div>
            <div class="active-btn">
                <button class="button" @click="onEdit(candidate.id)">Змінити</button>
                <button class="button" @click="deleteCandidateActive(candidate.id)">Видалити</button>
            </div>
        </div>
        <router-link :to="{ name: 'candidate-config' }" class="button">Додати кандидату</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CandidatesView',
    computed: {
        ...mapGetters('candidates', ['getCandidateslist']),
    },
    created() {
        this.deleteCandidateActive()
    },
    methods: {
        ...mapActions('candidates', ['deleteCandidateActive']),

        onEdit(candidateId) {
            this.$router.push({
                name: 'candidate-config',
                params: {
                    id: candidateId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.candidates {
    max-width: 700px;
}
.candidate {
    padding: 10px;
    border: 2px solid #000;
    display: flex;
    gap: 50px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
}
.cand {
    width: 200px;
}
.position {
    width: 200px;
}
</style>
