class TestActions {
    async MakeTest (req, res) {
        res.status(200).json("TEST4324324");
    }
}

module.exports = new TestActions();