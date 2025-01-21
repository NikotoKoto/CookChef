import {data} from './data'

export default  async function SeedRecipes() {
    await fetch("https://restapi.fr/api/recipes",
        {
            method: "POST",
            headers: {
            'Cotent-Type': 'application/json'
        },
        body : JSON.stringify(data)
    }

    )
}
