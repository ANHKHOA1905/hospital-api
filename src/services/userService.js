import db from '../models/index'


export const handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = {}
            const isUserExist = await checkEmailExist(email)
            if (isUserExist) {
                // compare password
                const user = await db.Users.findOne({
                    where: {
                        email,
                    },
                    raw: true,
                    attributes: ['email', 'password', 'role_id']
                })
                if (user) {
                    const check = password === user?.password
                    if (check) {
                        userData.errCode = 0
                        userData.message = 'OK'
                        resolve({
                            ...userData,
                            ...user
                        })
                    } else {
                        userData.errCode = 3
                        userData.message = `Wrong password`
                    }
                } else {
                    userData.errCode = 2
                    userData.message = `User is not found`
                }
            } else {
                userData.errCode = 1
                userData.message = `Your's email isn't exist in your SYSTEM. Plz try other email`
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

const checkEmailExist = async (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
