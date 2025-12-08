import { Router } from "express"
import { getAllArticles, getArticleById, deleteArticleById } from "../controllers/c_articles"

const router = Router()

router.get("/", getAllArticles)
router.get("/:id", getArticleById)
router.delete("/:id", deleteArticleById)

export default router
