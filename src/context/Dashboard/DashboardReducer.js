import { types } from '../../types/TypesDashboard'

export const DashboardReducer = (state, action) => {

    switch (action.type) {

        case types.logout: 
            return {
                dashboards: {},
                active: null,
                loading: true,
                dashboard: null
            }

        case types.getDashboards: 

        let active = action.payload.filter(
            (dashboard) => dashboard.lastVisited === true
            )
            
            active = active.length > 0 ? active[0] : null
            localStorage.setItem('dashboardKey', active.key)
            return {
                ...state,
                dashboards: [...action.payload],
                active,
                loading: false
            }

        case types.setActiveDashbord: 
            return {
                ...state,
                dashboard: action.payload
            }

        case types.createWidget:
            return {
                ...state,
                dashboard: action.payload
            }
        default: 
            return {
                ...state
            }
    }



}