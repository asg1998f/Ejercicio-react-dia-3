import { useEffect , useState } from 'react'
import { useNavigate } from "react-router-dom"

export const Reserve = () => {
    const initialValue = {
        firstname : "",
        surname : "",
        email : "",
        diners : "",
        time : "",
        date : "",
    }
    const [data , setData] = useState(initialValue)
    const [btnDisabled , setBtnDisabled] = useState(true)
    const [message , setMessage] = useState("");

    const navigate = useNavigate()

    const validateForm = () => {
        if(!data.firstname) {
            setMessage("");
        } else if (data.firstname.length<3) {
            setMessage("Firstname must be at least 3 characters");
      setBtnDisabled(true);
        } else if (!data.surnamename) {
            setMessage("");
        } else if (data.surname.length<3) {
            setMessage("Surname must be at least 3 characters");
      setBtnDisabled(true);
        } else if (!data.email) {
            setMessage("Email is required")
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
            setMessage("Please enter a valid email")
     setBtnDisabled(true);
        } else if (!data.diners) {
            setMessage("Diners is required")
        } else if (data.diners <= 0) {
            setMessage("Number of diners must be greater than 0")
        } else if (!data.date) {
            setMessage("Data is required")
        } else if (!data.time) {
            setMessage("Time is required")
        }
        else {
            setMessage("");
            setBtnDisabled(false);
          }
    } 

    const handleOnChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setData(initialValue);
        navigate("/")
      };

      useEffect(()=>{
        validateForm()
      },[data])

  return (
    <div>Reserve
        <form>
            <input type="text" name="firstname" value={data.firstname} placeholder="Introduce tu nombre" onChange={handleOnChange}></input>
            <input type="text" name="surname" value={data.surname} placeholder="Introduce tu apellido" onChange={handleOnChange}></input>
            <input type="email" name="email" value={data.email} placeholder="Introduce tu correo electrónico" onChange={handleOnChange}></input>
            <input type="number" name="diners" value={data.diners} onChange={handleOnChange}></input>
            <input type="time" name="time" min="13:00" max="16:00" required />
            <input type="date" name="date" value={data.date} onChange={handleOnChange}/>
            <button onClick={handleSubmit} disabled={btnDisabled}>Enviar</button>
            {message}
        </form>
    </div>
  )
}

