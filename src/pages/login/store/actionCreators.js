import * as constants from './constants'

export const switchType = (actived) =>({
    type:constants.SWITCH_TYPE,
    actived
})

export const ifRemenberMe = (remenber) =>({
    type:constants.IF_REMENBER_ME,
    remenber
})





