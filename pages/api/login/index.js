import dbConnect from "../../../utils/dbConnect";
import UserSch from "../../../models/user";
dbConnect();

export default async function handler(req, res) {
  try {
    const findData = await UserSch.find({ email: req.body.email });
    if (findData.length > 0) {
      res
        .status(200)
        .json({
          name: req.body.name,
          email: req.body.email,
          img: req.body.img,
        });
      return;
    }
    const data = new UserSch(req.body);
    await data.save();
    res
      .status(200)
      .json({ name: req.body.name, email: req.body.email, img: req.body.img });
  } catch (error) {
    console.log(error);
    res.status(400).json({ data: false });
  }
}
