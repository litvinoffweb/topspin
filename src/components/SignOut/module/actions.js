export const actionTypes = {
    SIGN_OUT: 'LOGOUT',
    SIGN_OUT_ERROR: 'SIGN_OUT_ERROR'
}

export const signOut = () => ({
    type: actionTypes.SIGN_OUT
})
        
 
export const signOutError = (error) => ({
    type: actionTypes.SIGN_OUT_ERROR,
    error
})
   
        
