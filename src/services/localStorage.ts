export const LocalStorage = {
    setItem: function (key: string, value: string) {
        return localStorage.setItem(key, JSON.stringify(value));
    },

    setObject: function (key: string, value: any) {
        return localStorage.setItem(key, JSON.stringify(value));
    },

    getItem: function (key: string) {
        return JSON.parse(`${localStorage.getItem(key)}`);
    },

    removeItem: function (key: string) {
        return localStorage.removeItem(key);
    }

}