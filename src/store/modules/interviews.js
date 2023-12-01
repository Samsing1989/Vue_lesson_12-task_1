export default {
    namespaced: true,
    state: {
        interviesList: [
            {
                id: 1,
                workerId: 2,
                candidateId: 3,
                day: 'Вівторок',
            },
        ],
    },
    getters: {
        getInterviesList: (state) => state.interviesList,
        getFilledInterviesList: (state, getters, rootState, rootGetters) =>
            state.interviesList.map((intervies) => ({
                id: intervies.id,
                worker: rootGetters['workers/getWorkerById'](intervies.workerId),
                candidate: rootGetters['candidates/getCandidatesById'](intervies.candidateId),
                day: intervies.day,
            })),
    },
    mutations: {
        deleteIntervies(state, id) {
            state.interviesList = state.interviesList.filter((intervies) => intervies.id !== id)
        },
        addIntervies(state, interviesData) {
            state.interviesList.push(interviesData)
        },
        deleteInterviesByWorkerId(state, workerId) {
            state.interviesList = state.interviesList.filter((intervies) => intervies.workerId !== workerId)
        },
        deleteInterviesByCandidateId(state, candidateId) {
            state.interviesList = state.interviesList.filter((intervies) => intervies.candidateId !== candidateId)
        },
    },
    actions: {
        deleteInterviesActive({ commit }, id) {
            commit('deleteIntervies', id)
        },
        addInterviesActive({ commit }, interviesData) {
            commit('addIntervies', {
                id: new Date().getTime(),
                ...interviesData,
            })
        },
        deleteInterviesByWorkerId({ commit }, workerId) {
            commit('deleteInterviesByWorkerId', workerId)
        },
        deleteInterviesByCandidateId({ commit }, candidateId) {
            commit('deleteInterviesByCandidateId', candidateId)
        },
    },
    modules: {},
}
