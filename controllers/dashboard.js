const db = require('../util/database')


exports.getData = (req, res, next) => {
    db.execute("SELECT * FROM registration")
        .then(result => {
            res.status(200).json(result[0])

        })
        .catch(err => {
            console.log(err);
        })

}

exports.addCustomer = (req, res) => {
    const form = req.body.form
    console.log(form.student_name);

    db.execute('INSERT INTO registration(student_name, parent_name, gender, date_of_birth, age_group, school, email, phone, instagram, interest, shoe_size, additional_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [form.student_name, form.parent_name, form.gender, form.dob, form.age_group, form.school, form.email, form.phone, form.instagram, JSON.stringify(form.interest), form.shoe, form.add_info])
    res.status(201).json({
        message: 'user created'
    })
}