const sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Please fill in all fields' })
        }
        res.status(200).json({ message: 'Message sent successfully!' })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: 'Message could not be sent.' })
    }
}

export { sendMessage }