import { pool } from "../db/database.js";

export const getProduct = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM product");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
export const getNameProduct = async (req, res) => {
  try{
    const [rows] = await pool.query(
        "SELECT * FROM product WHERE name LIKE '%' ? '%'",
        [req.params.name.toLowerCase()]
      );
      if (rows == null || rows == "") {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      res.json(rows);
  }catch (error) {
    return res.status(500).json({
        message: "Something goes wrong"
    })
  }
};
export const getCatProduct = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM product WHERE category = ?",
      [req.params.id]
    );
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Category not found",
      });
        res.json(rows);
  } catch (error) {
    return res.status(500).json({
        message: "Something goes wrong"
    })
  }
};
