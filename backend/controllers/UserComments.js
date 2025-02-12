const { v4: uuidv4 } = require("uuid");
const { db, findByEmail, updatePasswordByEmail } = require("../db.js");

//TODO user can  comment insert,delete,edit,getAllCmnt
const userComments = {
  getAllComments: async (_, res) => {
    try {
      const query =
        "SELECT  u.userName, c.comments,c.timestamp FROM userComments c join userDetails u on c.userId = u.userId ";
      const getdata = await db.query(query);

      // If no data is found, send a 404 response
      if (!getdata.rows.length) {
        return res.status(404).json({ message: "No comments found" });
      }

      // Sending the data as a response
      res.json(getdata.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  insertComment: async (req, res) => {
    try {
      let { userId, productId, comment } = req.body;
      comment = comment.trim();
      const query =
        "INSERT INTO userComments (userId, productId, comments, commentsId, timestamp)VALUES($1, $2, $3, $4, NOW());";
      const values = [userId, productId, comment, uuidv4()];

      await db.query(query, values);

      res.status(200).json({
        message: "Successfully Insert",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { commentsId, userId } = req.body;
      const query =
        "DELETE from userComments where commentsId = $1 and userId = $2";

      const values = [commentsId, userId];

      const getdata = await db.query(query, values);

      if (getdata.rowCount === 0) {
        return res.status(404).json({ message: "Comment not found" });
      }

      res.status(200).json({
        message: "Comment deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  updateComment: async (req, res) => {
    let { comment, userId, commentsId } = req.body;
    comment = comment?.trim();

    if (!comment || comment === "") {
      return res.status(400).json({
        message: "Don't leave comment empty",
      });
    }

    const query =
      "update userComments set comments = $1 where commentsId = $2 and userId = $3";
    const values = [comment, commentsId, userId];

    await db.query(query, values);

    res.status(200).json({
      message: "Comment updated successfully",
    });
  },
};

module.exports = userComments;
