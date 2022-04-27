import path from 'path'
import fs from 'fs'
import csv from 'csv-parser'
import results from '../index.js'

export const getDrugs = (req,res)=>{
	res.send(results)
};

export const getDrug = (req,res)=>{
	const {id} = req.params
	const foundDrug = results.find((drug)=>drug.idNum === id)
	res.send(foundDrug)
}


