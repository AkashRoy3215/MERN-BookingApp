const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(FormData),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
};

export const signIn = async (FormData)=>{
  const response = await fetch(`${API_BASE_URL}/api/users/login`,{
    method:"POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });
  const body = await response.json();
  if(!response.ok){
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/users/validate-token`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Token Invalid");
  }
  return response.json();
};
