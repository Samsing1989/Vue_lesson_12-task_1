export default {
    namespaced: true,
    state: {
        candidatesList: [
            {
                id: 1,
                name: 'Бегіна П.O.',
                position: 'Back-end developer',
            },
            {
                id: 2,
                name: 'Первозданий П.П.',
                position: 'Back-end developer',
            },
            {
                id: 3,
                name: 'Конс С.С.',
                position: 'QA Manual',
            },
            {
                id: 4,
                name: 'Коваль К.М.',
                position: 'Front-end developer',
            },
            {
                id: 5,
                name: 'Чорнявий Г.Г.',
                position: 'QA Manual',
            },
            {
                id: 6,
                name: 'Григор Г.Г.',
                position: 'Front-end developer',
            },
        ],
        filterCandidateList: [],
    },
    getters: {
        getCandidateslist: (state) => state.candidatesList,
        getCandidatesById: (state) => (candidateId) =>
            state.candidatesList.find((candidate) => candidate.id == candidateId),
        getFilterCandidateList: (state) => state.filterCandidateList,
    },
    mutations: {
        deleteCandidate(state, candidateId) {
            state.candidatesList = state.candidatesList.filter((candidate) => candidate.id !== candidateId)
        },
        addCandidate(state, candidate) {
            state.candidatesList.push(candidate)
        },
        upDateCandidate(state, candidateToUpDate) {
            const candidateIndex = state.candidatesList.findIndex((candidate) => candidate.id === candidateToUpDate.id)
            state.candidatesList[candidateIndex] = candidateToUpDate
        },
        filterCandidateByPosition(state, position) {
            if (position) {
                state.filterCandidateList = [
                    ...state.candidatesList.filter((candidate) =>
                        candidate.position.toLowerCase().includes(position.toLowerCase())
                    ),
                ]
            } else {
                state.filterCandidateList = state.candidatesList
            }
        },
    },
    actions: {
        deleteCandidateActive({ commit, dispatch }, candidateId) {
            commit('deleteCandidate', candidateId)
            dispatch('interviews/deleteInterviesByCandidateId', candidateId, { root: true })
        },
        addCandidateActive({ commit }, candidateData) {
            commit('addCandidate', {
                id: new Date().getTime(),
                ...candidateData,
            })
        },
        upDateCandidateActive({ commit }, candidate) {
            commit('upDateCandidate', candidate)
        },
        filterCandidateByPosition({ commit }, position) {
            commit('filterCandidateByPosition', position)
        },
    },
    modules: {},
}
