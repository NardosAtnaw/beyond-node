const db = require("../util/database");

exports.getData = (req, res, next) => {
  db.execute("SELECT * FROM registration")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addCustomer = (req, res) => {
  const form = req.body.form;
  console.log(form.student_name);

  db.execute(
    "INSERT INTO registration(student_name, parent_name, gender, date_of_birth, age_group, school, email, phone, instagram, interest, shoe_size, additional_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      form.student_name,
      form.parent_name,
      form.gender,
      form.dob,
      form.age_group,
      form.school,
      form.email,
      form.phone,
      form.instagram,
      JSON.stringify(form.interest),
      form.shoe,
      form.add_info,
    ]
  );
  res.status(201).json({
    message: "user created",
  });
};

exports.addSchedule = (req, res) => {
  const form = req.body.form;

  db.execute(
    "SELECT * FROM schedule WHERE day='" +
      form.dayWeek +
      "' AND studioNum='" +
      form.studioNum +
      "' AND timeStart='" +
      form.sTime +
      "'"
  )
    .then((result) => {
      if (result[0].length === 0) {
        db.execute(
          "INSERT INTO schedule(className, day, timeStart, timeEnd, studioNum, ageGroup, addInformation , startDate, endDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            form.className,
            form.dayWeek,
            form.sTime,
            form.eTime,
            form.studioNum,
            form.ageGroup,
            form.addInfo,
            form.startDate,
            form.endDate,
          ]
        );
        res.status(201).json({
          message: "New schedule added",
        });
      } else {
        res.status(200).json({
          message: "busy Schedule",
        });
      }
    })
    .catch((err) => {
      res.status(503).json({
        message: err,
      });
    });
};

exports.showSchedule = (req, res) => {
  db.execute("SELECT * FROM schedule")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
