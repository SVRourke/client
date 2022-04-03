const session = {
    get: (key) => window.session.getItem(key),
    set: (key, value) => window.session.getItem(key, value)
}

export default session