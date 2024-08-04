import { useState } from "react"
import { useNavigate } from "react-router-dom";
import IMAGES from "../../images/Images";
function Form() {
  const navigate=useNavigate()

  const [formData, setFormData]=useState({
    "name":"",
    "username":"",
    "email":"",
    "mobile":"",
    "checkbox":false,
    
  })

  const [errors, setErrors]=useState({
    "name":"",
    "username":"",
    "email":"",
    "mobile":"",
    "checkbox":"",
  })

  /* const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleCheckbox=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.checked})
  } */

    //by using contional chaining
    const handleChange = (e) => {
      const { name, type, value, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };

  const handleSubmit=(e)=>{
    e.preventDefault()
    /* console.log(formData) */
    let newErrors={...errors};
    if(
      formData.name.trim().length===0 ||
      formData.name===undefined ||
      formData.name===null
    ){
      newErrors.name="Name must be at least 1 characters long"
  }
  else{
    newErrors.name=""
  }

  if(formData.username.trim().length===0 ||
    formData.username===undefined ||
    formData.username===null
  ){
    newErrors.username="Username is required"
    }
    else{
      newErrors.username=""
    }
  
  if(formData.email.trim().length===0 ||
    formData.email===undefined ||
    formData.email===null
    ){
      newErrors.email="Email is required"
      }
      else{
        newErrors.email=""
      }

  if(formData.mobile.trim().length===0 ||
    formData.mobile===undefined ||
    formData.mobile===null
    ){
      newErrors.mobile="Mobile Number is required"
      }
      else{
        newErrors.mobile=""
        }

    if(!formData.checkbox){
      newErrors.checkbox="Checkbox needs to be ticked!"
    }
    else{
      newErrors.checkbox=""
      }

  setErrors({...newErrors})

  if(
    newErrors.name==="" &&
    newErrors.username==="" &&
    newErrors.email==="" &&
    newErrors.mobile==="" &&
    newErrors.checkbox===""
  ){
    localStorage.setItem("userData",JSON.stringify(formData)) //cannot store object in the local storage.[object -> string]
    navigate("/genre")
    alert("Form Submitted Successfully")
  }
  /* else{
    alert("Please fill the form correctly")
  } */
}

  return (
    <>
    <main className="flex flex-row bg-black">

    <div className="basis-1/2">
      <img className="h-screen w-screen" src={IMAGES.image1} alt='first image'/>
    </div>

    <div className="basis-1/2 p-12 flex flex-col gap-y-1">

      <div className="flex flex-col">
        <h1 className="font-single-day text-green-500 flex justify-center content-center font-black text-3xl">Super App</h1>
        <p className="text-white flex justify-center content-center">Create your new account</p>
      </div>
      
      
      <form onSubmit={handleSubmit} className="flex flex-col">

        <div className="my-2">
          <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} className="bg-zinc-700 text-white p-2 w-full"/>
          <p style={{color:"red"}}>{errors.name}</p>
        </div>

        <div className="my-2">
          <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} className="bg-zinc-700 text-white p-2 w-full"/>
          <p style={{color:"red"}}>{errors.username}</p>
        </div>

        <div className="my-2">
          <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} className="bg-zinc-700 text-white p-2 w-full"/>
          <p style={{color:"red"}}>{errors.email}</p>
        </div>

        <div className="my-2">
          <input type="number" name="mobile" id="mobile" placeholder="Mobile" onChange={handleChange} className="bg-zinc-700 text-white p-2 w-full"/>
          <p style={{color:"red"}}>{errors.mobile}</p>
        </div>
      
        <div className="my-2">
          <input type="checkbox" name="checkbox" id="checkbox" onChange={handleChange}/>
          <label htmlFor="checkbox" className="text-white">&nbsp; Share my registration data with superapp</label>
          <p style={{color:"red"}}>{errors.checkbox}</p>
        </div>
        

        <button type="submit" className="text-white py-2 px-4 bg-green-500 rounded-3xl text-2xl font-bold">Sign-Up</button>
      </form>

      <p className="text-white">By clicking on Sign up. you agree to Superapp <span className="text-green-500">Terms and Conditions of Use</span> </p>
      <p className="text-white">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="text-green-500">Privacy Policy</span></p>
    </div>

  </main>
    </>
  )
}

export default Form
