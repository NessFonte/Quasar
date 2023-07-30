import { useStore } from "vuex"
import { computed } from 'vue'

const useUI = () => {
    const store = useStore()

    return {
        // Side menu options
        sideMenuOpen: computed(() => store.getters['ui/getSideMenuOpen']),
        
        toggleSideMenu() {
            store.commit('ui/toggleSideMenu')
          },
    }
}

export default useUI