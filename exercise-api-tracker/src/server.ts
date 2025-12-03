import express, { Express, Request, Response } from "express"
import fs from "fs"
import path from "path"
import { randomUUID } from "crypto"

const PORT = 8005

const app = express()
app.use(express.json())
const expensePath = path.join(process.cwd(), '/src/db/expense.json')

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({message:"hello world"})
})

app.get("/api/expense/list", (req: Request, res: Response) => {
    // DB
    const expensesJson = fs.readFileSync(expensePath,'utf-8')
    const expenses = JSON.parse(expensesJson)
    
    // Filter
    const filtered = expenses.map((dt: any) => ({
        title: dt.title,
        nominal: dt.nominal,
        type: dt.type,
        date: dt.date,
    }))
    
    // Sorting
    const sorted = filtered.sort(
        (a: any, b: any) =>
            new Date(b.date.split("-").reverse().join("-")).getTime() - new Date(a.date.split("-").reverse().join("-")).getTime()
    );
    
    // Response
    res.status(200).json({
        message: "Get expenses successful",
        data: sorted,
    });
})

app.get("/api/expense/detail", (req: Request, res: Response) => {
    // DB
    const expensesJson = fs.readFileSync(expensePath,'utf-8')
    const expenses = JSON.parse(expensesJson)
    
    // Sorting
    const sorted = expenses.sort(
        (a: any, b: any) =>
            new Date(b.date.split("-").reverse().join("-")).getTime() - new Date(a.date.split("-").reverse().join("-")).getTime()
    )
    
    // Response
    res.status(200).json({
        message: "Get expenses successful",
        data: sorted,
    })
})

app.post('/api/expense', (req: Request, res: Response) => {
    // Body
    const {title, nominal, type, category} = req.body 

    // DB
    const expensesJson = fs.readFileSync(expensePath,'utf-8')
    const expenses = JSON.parse(expensesJson)

    // UUID
    const id = randomUUID()

    // Format date
    const today = new Date()
    const date = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`

    // Insert
    expenses.push({id, title, nominal, type, category, date})

    // Update DB
    fs.writeFileSync(expensePath, JSON.stringify(expenses))

    // Reponse
    res.status(201).json({
        message:"Create expenses successfull",
        data: {id, title, nominal, type, category, date}
    })
})

app.put("/api/expense/:id", (req: Request, res: Response) => {
    // Body
    const { id } = req.params
    const { title, nominal, type, category } = req.body 
  
    // DB
    const expensesJson = fs.readFileSync(expensePath, "utf-8")
    const expenses = JSON.parse(expensesJson)
  
    // Find expense by id
    const expenseIndex = expenses.findIndex((p: any) => p.id === id)
    if (expenseIndex === -1) {
        return res.status(404).json({ message: "Expense not found" })
    }
  
    // Update Data
    expenses[expenseIndex] = {
        ...expenses[expenseIndex],
        title: title ?? expenses[expenseIndex].title,
        nominal: nominal ?? expenses[expenseIndex].nominal,
        type: type ?? expenses[expenseIndex].type,
        category: category ?? expenses[expenseIndex].category,
    }
  
    // Update DB
    fs.writeFileSync(expensePath, JSON.stringify(expenses, null, 2));
  
    // Response
    res.json({
        message: "Update expense successful",
        data: expenses[expenseIndex],
    });
});

app.delete("/api/expense/:id", (req: Request, res: Response) => {
    // Param
    const { id } = req.params

    // DB
    const expensesJson = fs.readFileSync(expensePath, "utf-8")
    let expenses = JSON.parse(expensesJson)

    // Find By ID
    const expenseIndex = expenses.findIndex((dt: any) => dt.id === id)
    if (expenseIndex === -1) {
        return res.status(404).json({ message: "Expense not found" })
    }

    // Delete
    const deleted = expenses.splice(expenseIndex, 1)

    // Update DB
    fs.writeFileSync(expensePath, JSON.stringify(expenses, null, 2))

    // Response
    res.status(200).json({
        message: "Delete expense successful",
        data: deleted[0],
    })
});

app.get("/api/expense/total/date-range", (req: Request, res: Response) => {
    // Param
    const { start, end } = req.query

    // DB
    const expensesJson = fs.readFileSync(expensePath, "utf-8")
    const expenses = JSON.parse(expensesJson)

    // Filter By Date
    const parseDate = (d: string) => new Date(d.split("-").reverse().join("-"))
    const filtered = expenses.filter((dt: any) => {
        const date = parseDate(dt.date)
        return date >= parseDate(start as string) && date <= parseDate(end as string)
    })

    // Filter By Category
    const total_expense = filtered.filter((dt: any) => dt.type === "expense").reduce((sum: number, dt: any) => sum + dt.nominal, 0)
    const total_income = filtered.filter((dt: any) => dt.type === "income").reduce((sum: number, dt: any) => sum + dt.nominal, 0)

    res.status(200).json({
        message: "Get total expense by date range successful",
        total_expense,
        total_income,
        start,
        end,
    })
});

app.get("/api/expense/total/category/:category", (req: Request, res: Response) => {
    // Param
    const { category } = req.params

    // DB
    const expensesJson = fs.readFileSync(expensePath, "utf-8")
    const expenses = JSON.parse(expensesJson)

    // Filter By Category
    const total_expense = expenses.filter((dt: any) => dt.type === "expense" && dt.category === category).reduce((sum: number, dt: any) => sum + dt.nominal, 0)
    const total_income = expenses.filter((dt: any) => dt.type === "income" && dt.category === category).reduce((sum: number, dt: any) => sum + dt.nominal, 0)

    res.status(200).json({
        message: "Get total expense by category successful",
        category,
        total_expense,
        total_income
    })
});

app.listen(PORT, () => {
    console.log('application run on port ', PORT)
})