<template>
    <h1>Працівники</h1>
    <div class="workers">
        <div v-for="worker in getWorkerList" :key="worker.id" class="worker">
            <div class="work">{{ worker.name }}</div>
            <div class="position">{{ worker.position }}</div>
            <div class="active-btn">
                <button class="button" @click="onEdit(worker.id)">Змінити</button>
                <button class="button" @click="deleteWorkerAction(worker.id)">Видалити</button>
            </div>
        </div>
        <router-link :to="{ name: 'worker-config' }" class="button">Додати робітника</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'WorkersView',

    computed: {
        ...mapGetters('workers', ['getWorkerList']),
    },
    created() {
        this.deleteWorkerAction()
    },
    methods: {
        ...mapActions('workers', ['deleteWorkerAction']),
        onEdit(workerId) {
            this.$router.push({
                name: 'worker-config',
                params: {
                    id: workerId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.workers {
    max-width: 700px;
}
.worker {
    padding: 10px;
    border: 2px solid #000;
    display: flex;
    gap: 50px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
}
.work {
    width: 200px;
}
.position {
    width: 200px;
}
</style>
