<template>
    <div class="container-worker">
        <div>
            <label class="lable">
                ПІБ робітника
                <input v-model="workerData.name" type="text" class="input" />
            </label>
        </div>
        <div>
            <label class="lable">
                Позиція
                <input v-model="workerData.position" type="text" class="input" />
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
    name: 'WorkersEdit',

    data() {
        return {
            workerData: {},
        }
    },

    computed: {
        ...mapGetters('workers', ['getWorkerById']),
        receivedWorkerId() {
            return this.$route.params.id
        },
        activeButtonTitle() {
            return this.receivedWorkerId ? 'Зберегти' : 'Створити'
        },
    },
    created() {
        this.workerData = { ...this.getWorkerById(this.receivedWorkerId) }
    },
    methods: {
        ...mapActions('workers', ['addWorkerActive', 'upDateWorkerActive']),
        onAction() {
            if (!this.receivedWorkerId) this.addWorkerActive(this.workerData)
            else this.upDateWorkerActive(this.workerData)

            this.$router.push({ name: 'worker' })
        },
        onCancel() {
            this.$router.push({ name: 'worker' })
        },
    },
}
</script>

<style lang="scss" scoped></style>
