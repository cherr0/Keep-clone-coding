import { defineStore } from 'pinia';

// defineStore() 의 첫번째 인자는 스토어의 고유한 ID
export const useRootStore = defineStore('root', {
    // state
    state: () => ({
        count: 0,
    }),

    getters: {
        getCount(state): number {
            return state.count;
        },

        getDoubleCount(): number {
            return this.getCount * 2;
        },
    },

    actions: {
        initCount() {
            this.count = 0;
        },
    },
});
