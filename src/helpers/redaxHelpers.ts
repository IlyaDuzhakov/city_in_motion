import { useDispatch } from "react-redux"
import { AppDispatch} from '../store/index'

export const useTypeDispatch = ()=> useDispatch<AppDispatch>()

// типизированный Dispatch это обычный Dispatch для которого мы указали тип
// под типом понимается список тех actions с которыми он может работать
// <AppDispatch> сужение типа

//useDispatch<AppDispatch>() -- позволяет нам использовать только 
// те actions которые мы описали (Add, Edit, Delete)