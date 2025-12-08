import { Request, Response } from "express"
import { readJsonFile, writeJsonFile } from "../helpers/database"

const FILE_NAME = "articles.json"

export const getAllArticles = (req: Request, res: Response) => {
    // Database
    const articles = readJsonFile(FILE_NAME)

    // Filtering Column
    const filtered = articles.map((dt: any) => ({
        id: dt.id,
        title: dt.title,
        category: dt.category,
        createdAt: dt.createdAt,
    }))

    // Sorting
    const sorted = filtered.sort(
        (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    // Response
    res.status(200).json({
        message: "Get articles successful",
        data: sorted,
    })
}

export const getArticleById = (req: Request, res: Response) => {
    // Param
    const { id } = req.params

    // Database
    const articles = readJsonFile(FILE_NAME)

    // Filtering
    const article = articles.find((p: any) => p.id === id)
    if (!article) {
        return res.status(404).json({ 
            message: "article not found",
            data: null
        })
    }

    // Response
    res.status(200).json({
        message: "Get article successful",
        data: article,
    })
}

export const deleteArticleById = (req: Request, res: Response) => {
    // Param
    const { id } = req.params

    // Database
    const articles = readJsonFile(FILE_NAME)

    // Filtering
    const articleIndex = articles.findIndex((dt: any) => dt.id === id)
    if (articleIndex === -1) {
        // Response
        return res.status(404).json({ 
            message: "article not found",
            data: null
        })
    }

    const deleted = articles.splice(articleIndex, 1)

    // Database
    writeJsonFile(FILE_NAME, articles)

    // Response
    res.status(200).json({
        message: "Delete article successful",
        data: deleted[0],
    })
}
