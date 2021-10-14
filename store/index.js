export const state = () => ({
    guestBook: [],
    accessInformation: [],
})

export const mutations = {
    SET_GUEST_BOOK(state, data) {
        console.log(state)
        console.log(data)
    },
    SET_ACCESS_INFORMATION(state, data) {
        console.log(state)
        console.log(data)
    }
}