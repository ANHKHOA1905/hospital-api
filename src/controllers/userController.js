import {handleUserLogin} from '../services/userService'

export const handleLogin = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "MISSING INPUT PARAMETERS !!"
        })
    }
    const user = await handleUserLogin(email, password)
    delete user.password
    return res.status(200).json({
        ...user
    })
}