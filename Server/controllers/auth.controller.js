
import { genToken } from "../configs/token.js"
import User from "../models/user.model.js"


export const login = async (req, res) => {

    try {
        const { name, email } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({
                name, email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({
            message: ` auth error ${error} `
        })
    }

}

export const logOut = async (req, res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({ message: "logout Successfull" })
    } catch (error) {
        return res.status(500).json({ message: `Logout error ${error} ` })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { userId, course, phoneNumber, birthDate } = req.body;
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found " })
        }
        if (course !== undefined) user.course = course;
        if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
        if (birthDate !== undefined) user.birthDate = birthDate;

        await user.save()

        return res.status(200).json({ success: true, message: 'User updated ' })

    } catch (error) {
        return res.status(500).json({ message: ` Update user error ${error} ` })
    }
}
