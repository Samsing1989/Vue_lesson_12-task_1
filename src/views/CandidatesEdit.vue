<template>
    <div class="container-candidate">
        <div>
            <label class="lable">
                ПІБ робітника
                <input v-model="candidateData.name" type="text" class="input" />
            </label>
        </div>
        <div>
            <label class="lable">
                Позиція
                <input v-model="candidateData.position" type="text" class="input" />
            </label>
        </div>
        <div class="active-btn">
            <button class="button" @click="onAction">{{ activeButtonTitle }}</button>
            <button class="button" @click="onCancel">Відмінити</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CandidatesEdit',
    data() {
        return {
            candidateData: {},
        }
    },

    computed: {
        ...mapGetters('candidates', ['getCandidatesById']),
        receivedCandidateId() {
            return this.$route.params.id
        },
        activeButtonTitle() {
            return this.receivedCandidateId ? 'Зберегти' : 'Створити'
        },
    },
    created() {
        this.candidateData = { ...this.getCandidatesById(this.receivedCandidateId) }
    },
    methods: {
        ...mapActions('candidates', ['addCandidateActive', 'upDateCandidateActive']),
        onAction() {
            if (!this.receivedCandidateId) this.addCandidateActive(this.candidateData)
            else this.upDateCandidateActive(this.candidateData)

            this.$router.push({ name: 'candidate' })
        },
        onCancel() {
            this.$router.push({ name: 'candidate' })
        },
    },
}
</script>

<style lang="scss" scoped></style>
