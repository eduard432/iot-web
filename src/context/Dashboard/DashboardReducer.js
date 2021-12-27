import { types } from '../../types/TypesDashboard'

export const DashboardReducer = (state, action) => {

    switch (action.type) {

        case types.logout: 
            return {
                dashboards: {},
                active: null,
                loading: true,
                msg: undefined
            }

        case types.getDashboards: 

        let active = action.payload.filter(
            (dashboard) => dashboard.lastVisited === true
            )
                        
            if(active.length > 0){
                active = active[0]
                localStorage.setItem('dashboardKey', active.key)
            } else {
                active = null
            }

            
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

        case types.setMsg: {

            const msg = action.payload.map(({data}) => ({...data}))

            return {
                ...state,
                msg: msg.reverse()
            }
        }

        case types.addMsg: {

            const msg = state.msg

            if(state.msg.length > 9) {
                
                msg.unshift(action.payload)
                msg.pop()

            } else {
                msg.unshift(action.payload)
            }
            
            return {
                ...state,
                msg
            }
        }

        default: 
            return {
                ...state
            }
    }



}