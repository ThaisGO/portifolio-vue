import { ref } from "vue"

export default function getExperience() {
    const listExp = ref([])
    const error = ref(null)

    const getExp = async () => {
        try {
            const response = await fetch('https://json-serve-list.vercel.app/experience')
            .then((response) => response.json())
            .then((data) => {listExp.value = data})
            // .then((data) => {console.log(typeof(data))})
            // if(response.ok) {
            //     console.log('resposta', response)
            //     // listExp = await response.json()
            // } else {
            //     if (response.status === 404) throw new Error('404, Not found');
            //     throw new Error(response.status);
            // }
            console.log('lista', listExp)
        } catch (err) {
            console.error('Fetch', err);
            
        }
    }
    
    return { listExp, error, getExp}
}