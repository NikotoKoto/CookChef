const RECIPE_API = "https://restapi.fr/api/recipes";
export async function getRecipe(queryParam) {
  const response = await fetch(
    `${RECIPE_API}${queryParam ? `?${queryParam}` : ""}`
  );
  if (response.ok) {
    const body = await response.json();

    return Array.isArray(body) ? body : [body];
  } else {
    throw new Error("Error fetch recipes");
  }
}
export async function getRecipes(_id) {
  const response = await fetch(`${RECIPE_API}/${_id}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error fetch one recipe");
  }
}
export async function deleteRecipe(_id) {
  const response = await fetch(`${RECIPE_API}/${_id}`, {
    method: "DELETE",
  });
  console.log("ici: ",response)
  if (response.ok) {
    return _id;
  } else {
    throw new Error("Error delete recipe");
  }
}

export async function updateRecipe(updatedRecipe) {
  const { _id, ...restRecipe } = updatedRecipe;
  const response = await fetch(`${RECIPE_API}/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restRecipe),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error update recipe");
  }
}
export async function createRecipe(newRecipe) {
  const response = await fetch(`${RECIPE_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error create recipe");
  }
}
