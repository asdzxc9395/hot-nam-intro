export const state = () => ({
    anyValues: 0,
    guestBook: {
        datas: [],
        expire: 1
    },
    accessInformation: {
        datas: [],
        expire: 1
    },
})

export const mutations = {
    SET_GUEST_BOOK(state, data) {
        state.guestBook.datas.push(data)
    },
    SET_ACCESS_INFORMATION(state, data) {
        state.accessInformation.datas.push(data)
    }
}

export const actions = {
    GUESTBOOK({commit}, parameter) {
        return new Promise((resolve, reject) => {
          commit('SET_GUEST_BOOK', parameter)
          resolve()
        })
    },
    ACCESSINFORMATION({commit}, parameter) {
        return new Promise((resolve, reject) => {
          commit('SET_ACCESS_INFORMATION', parameter)
          resolve()
        })
    }
}