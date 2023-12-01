export default {
    namespaced: true,
    state: {
        workerList: [
            {
                id: 1,
                name: 'Іванова П.O.',
                position: 'Back-end developer',
            },
            {
                id: 2,
                name: 'Пердук П.П.',
                position: 'Back-end developer',
            },
            {
                id: 3,
                name: 'Канстантін С.С.',
                position: 'QA Manual',
            },
            {
                id: 4,
                name: 'Коваленко К.М.',
                position: 'Front-end developer',
            },
            {
                id: 5,
                name: 'Чорний Г.Г.',
                position: 'QA Manual',
            },
            {
                id: 6,
                name: 'Григоренко Г.Г.',
                position: 'Front-end developer',
            },
        ],
        filterWorkerList: [],
    },
    getters: {
        getWorkerList: (state) => state.workerList,
        getWorkerById: (state) => (workerId) => state.workerList.find((worker) => worker.id == workerId),
        getFilterWorkerList: (state) => state.filterWorkerList,
    },
    mutations: {
        deleteWorker(state, workerId) {
            state.workerList = state.workerList.filter((worker) => worker.id !== workerId)
        },
        addWorker(state, worker) {
            state.workerList.push(worker)
        },
        upDateWorker(state, workerToUpDate) {
            const workerIndex = state.workerList.findIndex((worker) => worker.id === workerToUpDate.id)
            state.workerList[workerIndex] = workerToUpDate
        },
        filterWorkerByPosition(state, position) {
            if (position) {
                state.filterWorkerList = [
                    ...state.workerList.filter((worker) =>
                        worker.position.toLowerCase().includes(position.toLowerCase())
                    ),
                ]
            } else {
                state.filterWorkerList = state.workerList
            }
        },
    },
    actions: {
        deleteWorkerAction({ commit, dispatch }, workerId) {
            commit('deleteWorker', workerId)
            dispatch('interviews/deleteInterviesByWorkerId', workerId, { root: true })
        },
        addWorkerActive({ commit }, workerData) {
            commit('addWorker', {
                id: new Date().getTime(),
                ...workerData,
            })
        },
        upDateWorkerActive({ commit }, worker) {
            commit('upDateWorker', worker)
        },
        filterWorkerByPosition({ commit }, position) {
            commit('filterWorkerByPosition', position)
        },
    },
    modules: {},
}
