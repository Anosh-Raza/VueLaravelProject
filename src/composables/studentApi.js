import { ref } from 'vue'
import axios from 'axios'

export default function useStudent(){
    const url = "http://127.0.0.1:8000/api/student"
    const studentData = ref([])
    const error = ref(null)

    const getAllStudent = async () =>{
        studentData.value = []
        error.value = null
        try{
            const red = await axios(url)
            studentData.value = red.data
        }
        catch (err){
            error.value = err
        }
    }
    return {
        studentData,
        error,
        getAllStudent
    }
}