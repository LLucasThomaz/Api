import { Request, Response } from "express";
import CarModel from "../database/CarModel";


const CarController = {

async index(req: Request, res:Response): Promise<Response>{

    let cars = await  CarModel.find()
    return res.json(cars)
},

async findById(req: Request, res:Response): Promise<Response>{
    let {id} = req.params 
    let car = await  CarModel.findById(id)
    return res.json(car)
},

async create(req: Request, res:Response): Promise<Response>{
    let {marca,
        modelo,
        versao,
        ano,
        quilometragem,
        tipoCambio,
        precoVenda } = req.body 
    let car = await  CarModel.create(req.body)
    return res.json(car)
},

async update(req: Request, res:Response): Promise<Response>{
    let {id} = req.params 

    let {marca,
        modelo,
        versao,
        ano,
        quilometragem,
        tipoCambio,
        precoVenda } = req.body

    let car = await  CarModel.findByIdAndUpdate(id,{
        marca: marca,
        modelo: modelo,
        versao: versao,
        ano: ano,
        quilometragem: quilometragem,
        tipoCambio: tipoCambio,
        precoVenda: precoVenda})
    return res.json(car)
},

async delete(req: Request, res:Response): Promise<Response>{
    let {id} = req.params 
    let car = await  CarModel.findByIdAndDelete(id)
    return res.json(car)
},

}

export default CarController